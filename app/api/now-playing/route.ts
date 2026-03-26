/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { getNowPlaying, getRecentlyPlayed } from "@/lib/spotify";

export const dynamic = "force-dynamic";

let cachedSong: any = null;

export async function GET() {
  try {
    const response = await getNowPlaying();

    if (response.status === 200) {
      const song = await response.json();
      if (song.item) {
        const data = {
          isPlaying: song.is_playing,
          title: song.item.name,
          artist: song.item.artists.map((_a: any) => _a.name).join(", "),
          albumImageUrl: song.item.album.images[0].url,
          songUrl: song.item.external_urls.spotify,
          progressMs: song.progress_ms,
          durationMs: song.item.duration_ms,
        };
        cachedSong = data;
        return NextResponse.json(data);
      }
    }

    const recentResponse = await getRecentlyPlayed();
    if (recentResponse.status === 200) {
      const recentData = await recentResponse.json();
      const lastSong = recentData.items[0].track;

      if (lastSong) {
        const data = {
          isPlaying: false,
          title: lastSong.name,
          artist: lastSong.artists.map((_a: any) => _a.name).join(", "),
          albumImageUrl: lastSong.album.images[0].url,
          songUrl: lastSong.external_urls.spotify,
          progressMs: 0,
          durationMs: lastSong.duration_ms,
        };
        cachedSong = data;
        return NextResponse.json(data);
      }
    }

    if (cachedSong) {
      return NextResponse.json({ ...cachedSong, isPlaying: false });
    }

    return NextResponse.json({ isPlaying: false });
  } catch (error) {
    console.error("Spotify API Route Error:", error);
    if (cachedSong)
      return NextResponse.json({ ...cachedSong, isPlaying: false });
    return NextResponse.json({ isPlaying: false }, { status: 500 });
  }
}
