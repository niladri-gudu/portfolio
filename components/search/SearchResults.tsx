"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Fuse from "fuse.js";
import { buildSearchIndex, hydrateApiResult, type SearchResult, type ApiSearchResult } from "@/lib/search";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SearchResults({
  query,
  onNavigate,
  inputRef,
}: {
  query: string;
  onNavigate: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const router = useRouter();
  const [blogResults, setBlogResults] = useState<SearchResult[]>([]);

  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/search/blog")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load blog index");
        return res.json();
      })
      .then((data: ApiSearchResult[]) => {
        setBlogResults(data.map(hydrateApiResult));
      })
      .catch(() => {
        setBlogResults([]);
      });
  }, []);

  const fuse = useMemo(() => {
    const index = [...buildSearchIndex(), ...blogResults];
    return new Fuse(index, {
      keys: ["title", "description", "category"],
      threshold: 0.3,
      includeScore: true,
      minMatchCharLength: 1,
      shouldSort: true,
      location: 0,
      distance: 100,
    });
  }, [blogResults]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).map((item) => item.item);
  }, [query, fuse]);

  // Group results by category, preserving flat index for highlight
  const grouped = useMemo(() => {
    return results.reduce<
      { category: string; items: { item: SearchResult; idx: number }[] }[]
    >((acc, item, idx) => {
      const last = acc[acc.length - 1];
      if (last && last.category === item.category) {
        last.items.push({ item, idx });
      } else {
        acc.push({ category: item.category, items: [{ item, idx }] });
      }
      return acc;
    }, []);
  }, [results]);

  const clampedIndex = Math.min(highlightedIndex, Math.max(0, results.length - 1));

  const [prevResults, setPrevResults] = useState(results);
  if (prevResults !== results) {
    setPrevResults(results);
    setHighlightedIndex(0);
  }

  useEffect(() => {
    if (results.length > 0) {
      const id = results[clampedIndex]?.id;
      if (id) {
        itemRefs.current[id]?.scrollIntoView({ block: "nearest" });
      }
    }
  }, [highlightedIndex, results, clampedIndex]);

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (results.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlightedIndex((h) => Math.min(h + 1, results.length - 1));
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlightedIndex((h) => Math.max(h - 1, 0));
      }

      if (results.length > 0 && e.key === "Enter") {
        e.preventDefault();
        const target = results[clampedIndex];
        if (target) {
          onNavigate();
          if (target.href.startsWith("/")) {
            router.push(target.href);
          } else {
            window.location.href = target.href;
          }
        }
      }
    };

    input.addEventListener("keydown", handleKeyDown);
    return () => input.removeEventListener("keydown", handleKeyDown);
  }, [inputRef, results, highlightedIndex, clampedIndex, onNavigate, router]);

  // Empty query guard (after all hooks)
  if (!query.trim()) {
    return (
      <div className="px-4 py-10 text-center text-muted-foreground">
        <Search size={28} className="mx-auto mb-4 text-neutral-300 dark:text-neutral-700" />
        <p className="text-sm font-medium text-foreground">
          Search projects, pages, work, blog posts, and socials
        </p>
        <kbd className="mt-4 inline-block px-2 py-1 text-[10px] font-mono bg-neutral-100 dark:bg-neutral-900 rounded border border-neutral-200 dark:border-neutral-800">
          Type to search
        </kbd>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        <p className="text-sm">No results found for &quot;{query}&quot;</p>
      </div>
    );
  }

  return (
    <div ref={listRef} className="overflow-y-auto max-h-80 scrollbar-hide px-2 py-2">
      {grouped.map(({ category, items }, groupIdx) => (
        <div key={groupIdx}>
          <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60">
            {category}
          </div>
          <div className="space-y-0.5">
            {items.map(({ item, idx }) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  ref={(node) => {
                    itemRefs.current[item.id] = node;
                  }}
                  tabIndex={-1}
                  href={item.href}
                  onClick={onNavigate}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors group cursor-pointer outline-none",
                    clampedIndex === idx
                      ? "bg-neutral-100 dark:bg-neutral-800/60"
                      : "hover:bg-neutral-50 dark:hover:bg-neutral-900",
                  )}
                >
                <div
                  className={cn(
                    "transition-colors",
                    clampedIndex === idx
                      ? "text-accent-brand"
                      : "text-neutral-400 group-hover:text-accent-brand",
                  )}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      "text-sm font-medium truncate transition-colors",
                      clampedIndex === idx
                        ? "text-accent-brand"
                        : "text-foreground group-hover:text-accent-brand",
                    )}
                  >
                    {item.title}
                  </p>
                  {item.description && (
                    <p className="text-xs text-muted-foreground truncate">
                      {item.description}
                    </p>
                  )}
                  <p className="text-[10px] text-muted-foreground/40 mt-0.5">
                    {item.href.replace(/^\//, "") || "home"}
                  </p>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
