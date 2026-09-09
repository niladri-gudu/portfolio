-- CreateTable
CREATE TABLE "SpotifyCache" (
    "id" TEXT NOT NULL,
    "isPlaying" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL DEFAULT '',
    "artists" TEXT NOT NULL DEFAULT '',
    "albumArt" TEXT NOT NULL DEFAULT '',
    "url" TEXT NOT NULL DEFAULT 'https://open.spotify.com/',
    "progressMs" INTEGER,
    "durationMs" INTEGER,
    "playedAt" TIMESTAMP(3),
    "stale" BOOLEAN NOT NULL DEFAULT false,
    "fetchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SpotifyCache_pkey" PRIMARY KEY ("id")
);
