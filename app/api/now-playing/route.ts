import { NextResponse } from "next/server";
import { getNowPlaying, getRecentlyPlayed } from "@/lib/spotify";
import { redis } from "@/lib/redis";

export const dynamic = "force-dynamic";

const CACHE_KEY = "spotify:last-played";

export async function GET() {
  try {
    const response = await getNowPlaying();
    if (response.status === 200) {
      const song = await response.json();
      if (song.item) {
        const data = {
          isPlaying: song.is_playing,
          title: song.item.name,
          artist: song.item.artists.map((a: any) => a.name).join(", "),
          albumImageUrl: song.item.album.images[0].url,
          songUrl: song.item.external_urls.spotify,
          progressMs: song.progress_ms,
          durationMs: song.item.duration_ms,
        };
        await redis.set(CACHE_KEY, JSON.stringify(data));
        return NextResponse.json(data);
      }
    }

    const recentResponse = await getRecentlyPlayed();
    if (recentResponse.status === 200) {
      const recentData = await recentResponse.json();
      const lastSong = recentData.items[0].track;
      const data = {
        isPlaying: false,
        title: lastSong.name,
        artist: lastSong.artists.map((a: any) => a.name).join(", "),
        albumImageUrl: lastSong.album.images[0].url,
        songUrl: lastSong.external_urls.spotify,
        progressMs: 0,
        durationMs: lastSong.duration_ms,
      };
      await redis.set(CACHE_KEY, JSON.stringify(data));
      return NextResponse.json(data);
    }

    const cached = await redis.get(CACHE_KEY);
    if (cached) {
      const parsed = typeof cached === "string" ? JSON.parse(cached) : cached;
      return NextResponse.json({ ...parsed, isPlaying: false, progressMs: 0 });
    }

    return NextResponse.json({ isPlaying: false });
  } catch (error) {
    console.error("Spotify API Route Error:", error);
    const cached = await redis.get(CACHE_KEY);
    if (cached) {
      const parsed = typeof cached === "string" ? JSON.parse(cached) : cached;
      return NextResponse.json({ ...parsed, isPlaying: false, progressMs: 0 });
    }
    return NextResponse.json({ isPlaying: false }, { status: 500 });
  }
}