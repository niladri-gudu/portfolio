/** Canonical Spotify render object. Network only updates this object. */
export type CachedTrack = {
  isPlaying: boolean;
  title: string;
  artists: string;
  albumArt: string;
  url: string;
  progressMs?: number;
  durationMs?: number;
  /** ISO timestamp of when the track was (last) played. */
  playedAt?: string;
  /** ISO timestamp of when this object was last fetched. */
  fetchedAt: string;
  /** True when served from cache because a live refresh failed. */
  stale?: boolean;
};
