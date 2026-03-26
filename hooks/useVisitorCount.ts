"use client";

import { useEffect, useState } from "react";

export function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visit/count")
      .then((r) => r.json())
      .then((d) => setCount(d.count));
  }, []);

  return count;
}