/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import GuestbookForm from "./GuestbookForm";
import GuestbookEntries from "./GuestbookEntries";
import { GuestbookEntry } from "./types";

export default function GuestbookClient({
  initialEntries,
  total,
}: {
  initialEntries: GuestbookEntry[];
  total: number;
}) {
  const [entries, setEntries] = useState<GuestbookEntry[]>(initialEntries);
  const [totalCount, setTotalCount] = useState(total);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialEntries.length < total);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const handleNew = useCallback((entry: GuestbookEntry) => {
    setEntries((prev) => [entry, ...prev]);
    setTotalCount((c) => c + 1);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const handleReply = useCallback((id: string, reply: string | null) => {
    setEntries((prev) => prev.map((e) => (e.id === id ? { ...e, reply } : e)));
  }, []);

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
      <GuestbookForm onNew={handleNew} />
      <GuestbookEntries
        entries={entries}
        onDelete={handleDelete}
        onReply={handleReply}
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
      {!hasMore && entries.length > 0 && (
        <p className="text-center text-xs font-mono text-muted-foreground pb-2">
          you've reached the end 😉
        </p>
      )}
    </div>
  );
}