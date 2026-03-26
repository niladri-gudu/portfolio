"use client";

import { useState } from "react";

type Entry = { id: string; name: string; message: string; createdAt: Date };

export default function GuestbookForm({ onNew }: { onNew: (e: Entry) => void }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) return;
    setLoading(true);
    setError(null);

    const res = await fetch("/api/guestbook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      return;
    }

    onNew(data);
    setName("");
    setMessage("");
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row gap-3 px-2">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={50}
          className="w-full sm:w-48 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent px-4 py-2 text-sm outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition placeholder:text-muted-foreground"
        />
        <input
          type="text"
          placeholder="Leave a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={280}
          className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent px-4 py-2 text-sm outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition placeholder:text-muted-foreground"
        />
        <button
          onClick={handleSubmit}
          disabled={loading || !name.trim() || !message.trim()}
          className="shrink-0 rounded-lg border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition disabled:opacity-40"
        >
          {loading ? "Signing..." : "Sign"}
        </button>
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}