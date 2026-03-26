"use client";

import { useState } from "react";
import GuestbookForm from "./GuestbookForm";
import GuestbookEntries from "./GuestbookEntries";

type Entry = {
  id: string;
  name: string;
  message: string;
  createdAt: Date;
};

export default function GuestbookClient({
  initialEntries,
}: {
  initialEntries: Entry[];
}) {
  const [entries, setEntries] = useState<Entry[]>(initialEntries);

  return (
    <div className="space-y-8">
      <GuestbookForm
        onNew={(entry) => setEntries((prev) => [entry, ...prev])}
      />
      <GuestbookEntries
        entries={entries}
        onDelete={(id) => setEntries((prev) => prev.filter((e) => e.id !== id))}
      />
    </div>
  );
}