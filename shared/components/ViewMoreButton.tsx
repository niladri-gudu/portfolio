"use client";

import { ChevronDown } from "lucide-react";

type ViewMoreButtonProps = {
  showAll: boolean;
  onToggle: () => void;
};

export default function ViewMoreButton({ showAll, onToggle }: ViewMoreButtonProps) {
  return (
    <div className="flex justify-center pb-4">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:border-accent-brand/40 hover:text-accent-brand transition-colors cursor-pointer"
      >
        {showAll ? "View less" : "View more"}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
}
