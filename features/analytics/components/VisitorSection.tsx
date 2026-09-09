"use client";

import { useEffect, useState, useCallback } from "react";

export default function VisitorSection() {
  const [count, setCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCount = useCallback(async () => {
    try {
      const response = await fetch("/api/visit/count");
      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      setCount(data.count);
    } catch (error) {
      console.error("Visitor count error:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCount();
  }, [fetchCount]);

  // Helper to turn 452 into 452nd
  const getOrdinal = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    const suffix = s[(v - 20) % 10] || s[v] || s[0];

    return (
      <>
        {n.toLocaleString()}
        <sup>{suffix}</sup>
      </>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-1 py-4 text-center">
      <div className="text-sm font-medium text-foreground min-h-5 flex items-center">
        {isLoading ? (
          <span className="inline-block w-32 h-4 animate-pulse bg-muted rounded" />
        ) : count !== null ? (
          <p>
            You are the <span className="font-bold">{getOrdinal(count)}</span>{" "}
            visitor
          </p>
        ) : null}
      </div>

      {!isLoading && (
        <p className="text-xs text-muted-foreground animate-in fade-in duration-700">
          Thanks for stopping by 🫶
        </p>
      )}
    </div>
  );
}
