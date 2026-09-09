import { NextResponse } from "next/server";
import {
  SPOTIFY_PROFILE_URL,
  getCachedTrack,
  refreshSpotifyCache,
} from "@/features/spotify/server";

export const dynamic = "force-dynamic";

const CACHE_HEADERS = {
  // Background polls are cheap: 45s edge cache, serve stale for 5 min.
  "Cache-Control": "s-maxage=45, stale-while-revalidate=300",
};

/**
 * Always 200 with the render object. Live refresh is time-boxed (1.5s);
 * on any Spotify failure the last cached track is served instead.
 */
export async function GET() {
  const track = await refreshSpotifyCache();

  if (track) {
    return NextResponse.json(track, { headers: CACHE_HEADERS });
  }

  const cached = await getCachedTrack();
  if (cached) {
    return NextResponse.json(
      { ...cached, stale: true },
      { headers: CACHE_HEADERS },
    );
  }

  // Spotify never connected / empty cache: designed empty state, not a loader.
  return NextResponse.json(
    {
      isPlaying: false,
      title: "",
      artists: "",
      albumArt: "",
      url: SPOTIFY_PROFILE_URL,
      fetchedAt: new Date(0).toISOString(),
      stale: true,
    },
    { headers: CACHE_HEADERS },
  );
}
