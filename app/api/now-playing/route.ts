/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { getNowPlaying, getRecentlyPlayed } from "@/lib/spotify";

export const dynamic = "force-dynamic";

export async function GET() {
  const response = await getNowPlaying();

  // If playing, return current data
  if (response.status === 200) {
    const song = await response.json();
    if (song.item) {
      return NextResponse.json({
        isPlaying: song.is_playing,
        title: song.item.name,
        artist: song.item.artists.map((_a: any) => _a.name).join(", "),
        albumImageUrl: song.item.album.images[0].url,
        songUrl: song.item.external_urls.spotify,
        progressMs: song.progress_ms,
        durationMs: song.item.duration_ms,
      });
    }
  }

  // FALLBACK: If nothing is playing, get the last played song
  const recentResponse = await getRecentlyPlayed();
  const recentData = await recentResponse.json();
  const lastSong = recentData.items[0].track;

  return NextResponse.json({
    isPlaying: false,
    title: lastSong.name,
    artist: lastSong.artists.map((_a: any) => _a.name).join(", "),
    albumImageUrl: lastSong.album.images[0].url,
    songUrl: lastSong.external_urls.spotify,
    // We don't send progress for recently played
    durationMs: lastSong.duration_ms,
  });
}
