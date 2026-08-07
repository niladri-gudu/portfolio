"use client";

import { useContext } from "react";
import { createContext } from "react";

export type SearchContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const SearchContext = createContext<SearchContextValue | undefined>(
  undefined,
);

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error("useSearch must be used within SearchProvider");
  }
  return ctx;
}
