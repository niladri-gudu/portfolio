import { prisma } from "@/lib/prisma";
import GuestbookClient from "@/components/guestbook/GuestbookClient";
import Reveal from "@/components/motion/Reveal";

export const revalidate = 0;

export default async function GuestbookPage() {
  const [entries, total] = await Promise.all([
    prisma.guestbookEntry.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    }),
    prisma.guestbookEntry.count(),
  ]);

  const d = (i: number) => (i + 1) * 0.03;

  return (
    <>
      <section className="flex flex-col my-8 gap-6 pt-4">
        <Reveal>
          <h1 className="flex items-center justify-center gap-6 text-6xl xl:text-7xl font-ds font-extrabold">
            <span>Guestbook</span>
          </h1>
        </Reveal>
        <Reveal delay={d(0)}>
          <p className="text-center text-lg text-muted-foreground mx-auto w-5/6">
            You visited, You saw, now leave your mark.
          </p>
        </Reveal>
      </section>
      <Reveal delay={d(1)}>
        <hr className="mx-3 rounded-xl" />
      </Reveal>
      <section className="flex flex-col gap-5 pb-8">
        <Reveal delay={d(2)}>
          <h2 className="px-6 pt-5 pb-2">
            All Entries{" "}
            <span className="text-muted-foreground">({total})</span>
          </h2>
        </Reveal>
        <Reveal delay={d(3)}>
          <div className="px-4">
            <GuestbookClient initialEntries={entries} total={total} />
          </div>
        </Reveal>
      </section>
    </>
  );
}