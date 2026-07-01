"use client";

import ThemeProvider from "./ThemeProvider";
import Enhancements from "./Enhancements";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Enhancements>{children}</Enhancements>
    </ThemeProvider>
  );
}
