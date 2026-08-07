"use client";

import { Search } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";
import { cn } from "@/lib/utils";

export default function SearchButton() {
  const { open } = useSearch();

  return (
    <button
      onClick={open}
      className={cn(
        "group flex items-center gap-1.5",
        "text-muted-foreground hover:text-foreground",
        "transition-colors cursor-pointer",
      )}
      aria-label="Search"
    >
      <Search size={16} />
      <kbd
        className={cn(
          "hidden text-[10px] font-mono",
          "bg-neutral-100 dark:bg-neutral-900",
          "px-1.5 py-0.5 rounded border",
          "border-neutral-200 dark:border-neutral-800",
          "group-hover:border-accent-brand/40",
          "sm:inline-block",
        )}
      >
        Ctrl K
      </kbd>
    </button>
  );
}
