"use client";
import { useMemo, useState } from "react";
import { GuestbookEntry } from "./types";

const GRADIENTS = [
  "from-[#4f6af5] to-[#0891b2]",
  "from-purple-500 to-pink-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-600",
  "from-sky-500 to-indigo-500",
  "from-rose-500 to-red-500",
];

function hashString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function Avatar({ name }: { name: string }) {
  const gradient = useMemo(() => {
    const idx = hashString(name.toLowerCase()) % GRADIENTS.length;
    return GRADIENTS[idx];
  }, [name]);

  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br ${gradient} font-mono text-xs font-bold text-white`}
    >
      {initials(name) || "•"}
    </div>
  );
}

export default function GuestbookEntries({
  entries,
  onDelete,
  onReply,
}: {
  entries: GuestbookEntry[];
  onDelete: (id: string) => void;
  onReply: (id: string, reply: string | null) => void;
}) {
  const [adminKey, setAdminKey] = useState("");
  const [showAdminInput, setShowAdminInput] = useState(false);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyDraft, setReplyDraft] = useState("");

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/guestbook/${id}`, {
      method: "DELETE",
      headers: { "x-admin-key": adminKey },
    });
    if (res.ok) onDelete(id);
  };

  const submitReply = async (id: string) => {
    const res = await fetch(`/api/guestbook/${id}/reply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-admin-key": adminKey,
      },
      body: JSON.stringify({ reply: replyDraft }),
    });

    if (res.ok) {
      const data = await res.json();
      onReply(id, data.reply);
      setReplyingTo(null);
      setReplyDraft("");
    }
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
      <div className="px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="group flex flex-col gap-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 p-4 transition-colors hover:border-accent-brand/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar name={entry.name} />
                  <div className="space-y-0.5">
                    <p className="text-sm font-semibold">{entry.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(entry.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                {showAdminInput && adminKey && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setReplyingTo(
                          replyingTo === entry.id ? null : entry.id,
                        );
                        setReplyDraft(entry.reply ?? "");
                      }}
                      className="text-xs text-muted-foreground hover:text-accent-brand transition shrink-0"
                    >
                      reply
                    </button>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="text-xs text-red-400 hover:text-red-600 transition shrink-0"
                    >
                      delete
                    </button>
                  </div>
                )}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {entry.message}
              </p>

              {replyingTo === entry.id && showAdminInput && adminKey && (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={replyDraft}
                    onChange={(e) => setReplyDraft(e.target.value)}
                    placeholder="Write a reply..."
                    maxLength={280}
                    className="flex-1 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-transparent px-3 py-1.5 text-sm outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition placeholder:text-muted-foreground"
                  />
                  <button
                    onClick={() => submitReply(entry.id)}
                    className="shrink-0 rounded-lg border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-xs font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
                  >
                    Post
                  </button>
                </div>
              )}

              {entry.reply && (
                <div className="rounded-lg bg-accent-brand/5 border border-accent-brand/20 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-widest text-accent-brand mb-1">
                    Niladri ↳
                  </p>
                  <p className="text-sm">{entry.reply}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}