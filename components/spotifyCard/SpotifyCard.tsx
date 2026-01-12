import Image from "next/image";
import { Music } from "lucide-react";

export default function SpotifyCard() {
  const isPlaying = true;
  const songName = "Midnight City";
  const artistName = "M83";
  const albumCover = "/nature.jpg";

  return (
    <div className="w-full p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 flex items-center justify-between group hover:bg-neutral-100 dark:hover:bg-neutral-900/50">
      <div className="flex items-center gap-4">
        <div className="relative flex items-center justify-center w-14 h-14 bg-neutral-200 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md">
          {albumCover ? (
            <Image
              src={albumCover}
              alt={`${songName} album cover`}
              fill
              className="object-cover group-hover:scale-110"
            />
          ) : (
            <Music size={20} className="text-neutral-400" />
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-500">
              {isPlaying ? "Currently Listening" : "Recently Played"}
            </span>
            {isPlaying && (
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
            )}
          </div>
          <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate max-w-[180px] sm:max-w-xs">
            {songName}
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
            by {artistName}
          </p>
        </div>
      </div>

      <div className="pr-2 sm:block">
        <svg 
          viewBox="0 0 24 24" 
          className="w-5 h-5 fill-neutral-300 dark:fill-neutral-700 group-hover:fill-[#1DB954]"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.306c-.215.353-.675.464-1.023.25-2.856-1.745-6.452-2.14-10.686-1.17a.75.75 0 1 1-.336-1.462c4.636-1.06 8.604-.6 11.796 1.359.348.215.46.674.25 1.023zm1.465-3.264c-.269.438-.843.578-1.282.31-3.27-2.01-8.254-2.593-12.12-1.42a.937.937 0 1 1-.543-1.793c4.425-1.343 9.932-.686 13.635 1.59.438.27.578.843.31 1.282zm.126-3.41c-3.92-2.327-10.378-2.541-14.132-1.4c-.6.182-1.23-.165-1.41-.764-.183-.6.164-1.23.764-1.41 4.316-1.31 11.438-1.06 15.908 1.594a1.125 1.125 0 0 1-1.13 1.98z"/>
        </svg>
      </div>
    </div>
  );
}