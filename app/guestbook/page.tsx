import type { Metadata } from "next";
import GuestbookClient from "@/features/guestbook/components/GuestbookClient";
import { listGuestbookEntries } from "@/features/guestbook/lib/server";
import type { GuestbookEntry } from "@/features/guestbook/types";
import Reveal from "@/shared/motion/Reveal";
import PageHero from "@/shared/components/PageHero";
import { buildMetadata } from "@/lib/site";

export const revalidate = 0;

export const metadata: Metadata = buildMetadata({
  title: "Guestbook",
  description:
    "Leave your mark on Niladri's guestbook - a simple sign-and-see wall for visitors.",
  path: "/guestbook",
});

export default async function GuestbookPage() {
  const { entries: rawEntries, total } = await listGuestbookEntries(1);

  const entries: GuestbookEntry[] = rawEntries.map((e) => ({
    id: e.id,
    name: e.name,
    message: e.message,
    reply: e.reply,
    createdAt: e.createdAt,
  }));

  return (
    <>
      <PageHero
        title="Guestbook"
        description="You visited, You saw, now leave your mark."
      />
      <section className="flex flex-col gap-5 pb-8">
        <Reveal delay={0.09}>
          <h2 className="px-6 pt-5 pb-2">
            All Entries{" "}
            <span className="text-muted-foreground">({total})</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="px-4">
            <GuestbookClient
              initialEntries={entries}
              total={total}
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}