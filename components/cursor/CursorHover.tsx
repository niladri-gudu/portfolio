"use client";

import { useCursor } from "./CursorContext";

export default function CursorHover({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setActive } = useCursor();

  return (
    <span
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {children}
    </span>
  );
}
