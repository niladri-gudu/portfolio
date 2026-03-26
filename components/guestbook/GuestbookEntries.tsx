"use client";
import { useState } from "react";
type Entry = { id: string; name: string; message: string; createdAt: Date };
export default function GuestbookEntries({
  entries,
  onDelete,
}: {
  entries: Entry[];
  onDelete: (id: string) => void;
}) {
  const [adminKey, setAdminKey] = useState("");
  const [showAdminInput, setShowAdminInput] = useState(false);
  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/guestbook/${id}`, {
      method: "DELETE",
      headers: { "x-admin-key": adminKey },
    });
    if (res.ok) onDelete(id);
  };
  if (entries.length === 0) {
    return (
      <p className="text-sm text-muted-foreground px-4">
        No entries yet. Be the first to sign! 😁
      </p>
    );
  }
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-end gap-2 px-6">
        <button
          onClick={() => setShowAdminInput((p) => !p)}
          className="text-xs text-muted-foreground hover:text-foreground transition"
        >
          {showAdminInput ? "hide" : "admin"}
        </button>
        {showAdminInput && (
          <input
            type="password"
            placeholder="Admin key"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent px-4 py-2 text-sm outline-none w-48 placeholder:text-muted-foreground"
          />
        )}
      </div>
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800 px-6">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className="flex items-start justify-between gap-4 group py-4 first:pt-0"
          >
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{entry.name}</span>
                <span className="text-xs text-muted-foreground">
                  {new Date(entry.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{entry.message}</p>
            </div>
            {showAdminInput && adminKey && (
              <button
                onClick={() => handleDelete(entry.id)}
                className="text-xs text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition shrink-0 mt-1"
              >
                delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}