/**
 * Server-only Spotify cache orchestration.
 * Single token refresh per cycle, 1.5s time-box, fail-silent with stale cache.
 */
import { prisma } from "@/lib/prisma";
import {
  fetchNowPlaying,
  fetchRecentlyPlayed,
  getAccessToken,
} from "./lib";
import type { CachedTrack } from "./types";

export const SPOTIFY_PROFILE_URL =
  process.env.SPOTIFY_PROFILE_URL ?? "https://open.spotify.com/";

/** Client time-box budget: never block the hero on Spotify. */
export const SPOTIFY_REFRESH_TIMEOUT_MS = 1500;

const CACHE_ID = "current";

type SpotifyRow = {
  isPlaying: boolean;
  title: string;
  artists: string;
  albumArt: string;
  url: string;
  progressMs: number | null;
  durationMs: number | null;
  playedAt: Date | null;
  stale: boolean;
  fetchedAt: Date;
};

function toTrack(row: SpotifyRow | null, stale = false): CachedTrack | null {
  if (!row || !row.title) return null;

  return {
    isPlaying: row.isPlaying,
    title: row.title,
    artists: row.artists,
    albumArt: row.albumArt,
    url: row.url,
    ...(row.progressMs != null ? { progressMs: row.progressMs } : {}),
    ...(row.durationMs != null ? { durationMs: row.durationMs } : {}),
    ...(row.playedAt ? { playedAt: row.playedAt.toISOString() } : {}),
    fetchedAt: row.fetchedAt.toISOString(),
    ...(stale || row.stale ? { stale: true } : {}),
  };
}

/** Instant read: last known track, null when never cached. */
export async function getCachedTrack(): Promise<CachedTrack | null> {
  try {
    const row = await prisma.spotifyCache.findUnique({
      where: { id: CACHE_ID },
    });
    return toTrack(row);
  } catch {
    return null;
  }
}

async function persist(track: Omit<CachedTrack, "fetchedAt" | "stale"> & {
  playedAt?: string;
}) {
  try {
    await prisma.spotifyCache.upsert({
      where: { id: CACHE_ID },
      create: {
        id: CACHE_ID,
        isPlaying: track.isPlaying,
        title: track.title,
        artists: track.artists,
        albumArt: track.albumArt,
        url: track.url,
        progressMs: track.progressMs ?? null,
        durationMs: track.durationMs ?? null,
        playedAt: track.playedAt ? new Date(track.playedAt) : null,
        stale: false,
      },
      update: {
        isPlaying: track.isPlaying,
        title: track.title,
        artists: track.artists,
        albumArt: track.albumArt,
        url: track.url,
        progressMs: track.progressMs ?? null,
        durationMs: track.durationMs ?? null,
        playedAt: track.playedAt ? new Date(track.playedAt) : null,
        stale: false,
      },
    });
  } catch {
    // Cache write is best-effort; live data still returned.
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function artistsOf(item: any): string {
  return Array.isArray(item?.artists)
    ? item.artists.map((a: any) => a?.name).filter(Boolean).join(", ")
    : "";
}

function artOf(item: any): string {
  return item?.album?.images?.[0]?.url ?? "";
}

function urlOf(item: any): string {
  return item?.external_urls?.spotify ?? SPOTIFY_PROFILE_URL;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/**
 * Refresh the cache from Spotify. Time-boxed; on any failure returns the
 * last cached track marked stale (never throws for Spotify/DB issues).
 */
export async function refreshSpotifyCache(
  timeoutMs = SPOTIFY_REFRESH_TIMEOUT_MS,
): Promise<CachedTrack | null> {
  const signal = AbortSignal.timeout(timeoutMs);

  try {
    const accessToken = await getAccessToken(signal);

    const nowRes = await fetchNowPlaying(accessToken, signal).catch(
      () => null,
    );
    if (nowRes?.ok) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const song: any = await nowRes.json().catch(() => null);
      if (song?.item) {
        const now = new Date().toISOString();
        const track = {
          isPlaying: Boolean(song.is_playing),
          title: String(song.item.name ?? ""),
          artists: artistsOf(song.item),
          albumArt: artOf(song.item),
          url: urlOf(song.item),
          progressMs:
            typeof song.progress_ms === "number" ? song.progress_ms : 0,
          durationMs:
            typeof song.item.duration_ms === "number"
              ? song.item.duration_ms
              : undefined,
          playedAt: now,
        };
        if (track.title) {
          await persist(track);
          return { ...track, fetchedAt: now };
        }
      }
    }

    const recentRes = await fetchRecentlyPlayed(accessToken, signal).catch(
      () => null,
    );
    if (recentRes?.ok) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const recent: any = await recentRes.json().catch(() => null);
      const lastSong = recent?.items?.[0]?.track;
      if (lastSong) {
        const playedAt =
          typeof recent.items[0]?.played_at === "string"
            ? recent.items[0].played_at
            : new Date().toISOString();
        const track = {
          isPlaying: false,
          title: String(lastSong.name ?? ""),
          artists: artistsOf(lastSong),
          albumArt: artOf(lastSong),
          url: urlOf(lastSong),
          durationMs:
            typeof lastSong.duration_ms === "number"
              ? lastSong.duration_ms
              : undefined,
          playedAt,
        };
        if (track.title) {
          await persist(track);
          return { ...track, fetchedAt: new Date().toISOString() };
        }
      }
    }
  } catch {
    // Fail silent: fall through to stale cache below.
  }

  const cached = await getCachedTrack();
  if (!cached) return null;
  return { ...cached, stale: true };
}
