/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import GuestbookForm from "./GuestbookForm";
import GuestbookEntries from "./GuestbookEntries";

type Entry = { id: string; name: string; message: string; createdAt: Date };

export default function GuestbookClient({
  initialEntries,
  total,
}: {
  initialEntries: Entry[];
  total: number;
}) {
  const [entries, setEntries] = useState<Entry[]>(initialEntries);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialEntries.length < total);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    try {
      setLoading(true);
      const nextPage = page + 1;
      const res = await fetch(`/api/guestbook?page=${nextPage}`);

      if (!res.ok) return;

      const data = await res.json();
      setEntries((prev) => [...prev, ...data.entries]);
      setPage(nextPage);
      setHasMore(data.hasMore);
    } finally {
      setLoading(false);
    }
  }, [hasMore, loading, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { threshold: 0.1 }
    );

    if (bottomRef.current) observer.observe(bottomRef.current);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <div className="space-y-8">
      <GuestbookForm
        onNew={(entry) => setEntries((prev) => [entry, ...prev])}
      />
      <GuestbookEntries
        entries={entries}
        onDelete={(id) => setEntries((prev) => prev.filter((e) => e.id !== id))}
      />
      {hasMore && (
        <div ref={bottomRef} className="flex justify-center py-4">
          {loading && (
            <p className="text-xs font-mono text-muted-foreground">
              Loading...
            </p>
          )}
        </div>
      )}
      {!hasMore && entries.length > 10 && (
        <p className="text-center text-xs font-mono text-muted-foreground pb-4">
          you've reached the end 😉
        </p>
      )}
    </div>
  );
}
