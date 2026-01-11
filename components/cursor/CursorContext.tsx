"use client";

import { createContext, useContext, useState } from "react";

type CursorState = {
  isActive: boolean;
  setActive: (value: boolean) => void;
};

const CursorContext = createContext<CursorState | null>(null);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <CursorContext.Provider
      value={{
        isActive,
        setActive: setIsActive,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) {
    throw new Error("useCursor must be used inside CursorProvider");
  }
  return ctx;
}
