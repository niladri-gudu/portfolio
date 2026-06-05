import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { ArrowRight } from "lucide-react";

export default async function GuestbookSection() {
  const entries = await prisma.guestbookEntry.findMany({
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  return (
    <section className="space-y-3">
      <Reveal delay={0.03}>
        <div className="flex items-center justify-between pr-2">
          <h2 className="text-base font-mono uppercase tracking-widest text-muted-foreground border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
            Guestbook
          </h2>
          <Link
            href="/guestbook"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition group"
          >
            <span>Sign / View all</span>
            <span className="group-hover:translate-x-0.5 transition">
              <ArrowRight size={12} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </Reveal>

      {entries.length === 0 ? (
        <Reveal delay={0.06}>
          <p className="text-sm text-muted-foreground px-2">
            No entries yet —{" "}
            <Link href="/guestbook" className="underline underline-offset-4">
              be the first!
            </Link>
          </p>
        </Reveal>
      ) : (
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800 px-2">
          {entries.map((entry, idx) => (
            <Reveal key={entry.id} delay={(idx + 1) * 0.03}>
              <div className="flex flex-col gap-0.5 py-3 px-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold tracking-tight">
                    {entry.name}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {new Date(entry.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {entry.message}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
