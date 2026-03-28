/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Music } from "lucide-react";
import useSWR from "swr";
import Reveal from "../motion/Reveal";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SpotifyCard() {
  const [progress, setProgress] = useState(0);

  const { data, error } = useSWR("/api/now-playing", fetcher, {
    refreshInterval: 10000,
  });

  useEffect(() => {
    if (data?.isPlaying && data?.durationMs) {
      setProgress((data.progressMs / data.durationMs) * 100);
    }
  }, [data]);

  useEffect(() => {
    if (data?.isPlaying) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          const next = prev + (1000 / data.durationMs) * 100;
          return next >= 100 ? 100 : next;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [data?.isPlaying, data?.durationMs]);

  const isPlaying = data?.isPlaying || false;
  const songName = data?.title || (error ? "Error Loading" : "Not Playing");
  const artistName = data?.artist || "Spotify";
  const albumCover = data?.albumImageUrl || null;

  return (
    <Reveal delay={0.03}>
      <Link
        href={data?.songUrl || "https://spotify.com"}
        target="_blank"
        rel="noopener noreferrer"
        className="group mb-10 relative p-4 mx-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/30 flex flex-col gap-3 transition-all duration-300 ease-out hover:bg-neutral-100 dark:hover:bg-neutral-900/50 hover:-translate-y-px hover:shadow-sm dark:hover:shadow-neutral-950/40 hover:border-neutral-300 dark:hover:border-neutral-700"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-4 min-w-0">
            {/* Album Cover Transition */}
            <div className="relative shrink-0 flex items-center justify-center w-14 h-14 bg-neutral-200 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md transition-transform duration-500 ease-out group-hover:-rotate-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={albumCover}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  {albumCover ? (
                    <Image
                      src={albumCover}
                      alt={`${songName} album cover`}
                      fill
                      className="object-cover scale-100 transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <Music size={20} className="text-neutral-400" />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-500 transition-colors duration-300 group-hover:text-neutral-600 dark:group-hover:text-neutral-400">
                  {isPlaying ? "Now Listening" : "Last Played"}
                </span>
                {isPlaying && (
                  <div className="flex items-end gap-0.5 h-3 w-4">
                    <span className="w-0.75 bg-green-500 rounded-t-full rounded-b-full animate-[music-bar_0.8s_ease-in-out_infinite]" />
                    <span className="w-0.75 bg-green-500 rounded-t-full rounded-b-full animate-[music-bar_1.2s_ease-in-out_infinite_0.2s]" />
                    <span className="w-0.75 bg-green-500 rounded-t-full rounded-b-full animate-[music-bar_1s_ease-in-out_infinite_0.4s]" />
                  </div>
                )}
              </div>

              {/* Text Info Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={songName}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate transition-colors duration-300 group-hover:text-neutral-950 dark:group-hover:white">
                    {songName}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium truncate transition-opacity duration-300 group-hover:opacity-95">
                    by {artistName}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="shrink-0 pr-2">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-neutral-300 dark:fill-neutral-700 transition-all duration-300 ease-out group-hover:fill-[#1DB954] group-hover:scale-110"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.306c-.215.353-.675.464-1.023.25-2.856-1.745-6.452-2.14-10.686-1.17a.75.75 0 1 1-.336-1.462c4.636-1.06 8.604-.6 11.796 1.359.348.215.46.674.25 1.023zm1.465-3.264c-.269.438-.843.578-1.282.31-3.27-2.01-8.254-2.593-12.12-1.42a.937.937 0 1 1-.543-1.793c4.425-1.343 9.932-.686 13.635 1.59.438.27.578.843.31 1.282zm.126-3.41c-3.92-2.327-10.378-2.541-14.132-1.4c-.6.182-1.23-.165-1.41-.764-.183-.6.164-1.23.764-1.41 4.316-1.31 11.438-1.06 15.908 1.594a1.125 1.125 0 0 1-1.13 1.98z" />
            </svg>
          </div>
        </div>

        {/* Progress Bar with Motion for smoother linear growth */}
        {isPlaying && (
          <div className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "linear" }}
              className="h-full bg-green-500 rounded-full"
            />
          </div>
        )}
      </Link>

      <style jsx>{`
        @keyframes music-bar {
          0%,
          100% {
            height: 4px;
          }
          50% {
            height: 12px;
          }
        }
      `}</style>
    </Reveal>
  );
}