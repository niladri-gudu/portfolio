import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  const d = (i: number) => i * 0.04;

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-4 py-24 text-center">
      <Reveal>
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.3em] text-accent-brand">
          404
        </p>
      </Reveal>

      <Reveal delay={d(1)}>
        <h1 className="text-6xl xl:text-7xl font-ds font-extrabold leading-none">
          Page not found
        </h1>
      </Reveal>

      <Reveal delay={d(2)}>
        <p className="max-w-md text-muted-foreground">
          Looks like this page wandered off. Let&apos;s get you back home.
        </p>
      </Reveal>

      <Reveal delay={d(3)}>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent-brand/40 hover:shadow-md hover:shadow-accent-brand/5 dark:hover:shadow-neutral-950/40"
        >
          Back to home
          <ArrowRight
            size={16}
            className="transition-transform duration-300 ease-out group-hover:translate-x-1"
          />
        </Link>
      </Reveal>
    </section>
  );
}
