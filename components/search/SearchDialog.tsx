"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, X } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";
import SearchResults from "@/components/search/SearchResults";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25, ease: easeOut },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: easeOut },
  },
};

const dialogVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.96,
    transition: { duration: 0.2, ease: easeOut },
  },
};

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex min-w-[1.4rem] items-center justify-center px-1.5 py-0.5 font-mono text-[10px] bg-neutral-100 dark:bg-neutral-900 rounded border border-neutral-200 dark:border-neutral-800">
      {children}
    </kbd>
  );
}

export default function SearchDialog() {
  const { isOpen, close } = useSearch();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleNavigate = () => {
    setQuery("");
    close();
  };

  const handleClose = useCallback(() => {
    setQuery("");
    close();
  }, [close]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") handleClose();
      };
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, handleClose]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(e.target as Node)
      ) {
        handleClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
      return () => document.removeEventListener("mousedown", handleClick);
    }
  }, [isOpen, handleClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-start justify-center pt-[8vh] px-4">
          {/* Backdrop element animating opacity with static blur class */}
          <motion.div
            key="backdrop"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
            className="absolute inset-0 bg-background/30 backdrop-blur-md pointer-events-auto"
          />

          {/* Dialog element animating scale/opacity on the exact same timeline */}
          <motion.div
            key="dialog"
            ref={dialogRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dialogVariants}
            className={cn(
              "relative w-full max-w-lg rounded-xl will-change-transform",
              "border border-neutral-200 dark:border-neutral-800",
              "bg-background shadow-2xl shadow-neutral-950/20",
              "flex flex-col z-10"
            )}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-200 dark:border-neutral-800">
              <Search
                size={18}
                className="text-neutral-400 dark:text-neutral-500 shrink-0"
              />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search projects, pages, work, socials..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 outline-none text-sm bg-transparent placeholder:text-neutral-400 dark:text-neutral-300"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                onClick={handleClose}
                className="p-1 rounded-md text-neutral-400 hover:text-foreground hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            <SearchResults
              key={query === "" ? "empty" : query}
              query={query}
              onNavigate={handleNavigate}
              inputRef={inputRef}
            />

            <div className="flex items-center gap-4 px-4 py-2 border-t border-neutral-200 dark:border-neutral-800 text-[10px] text-muted-foreground/70">
              <span className="flex items-center gap-1">
                <Kbd>&#8593;&#8595;</Kbd> navigate
              </span>
              <span className="flex items-center gap-1">
                <Kbd>enter</Kbd> select
              </span>
              <span className="flex items-center gap-1 ml-auto">
                <Kbd>esc</Kbd> close
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}