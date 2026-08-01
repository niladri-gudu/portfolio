import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { getSeason } from "@/lib/season";

export default function NotFound() {
  const season = getSeason();

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-8 pt-16">
      <Reveal>
        <div className="flex flex-col items-center gap-3 font-mono text-sm">
          <span className="text-accent-brand">$ cat missing.txt</span>
          <pre className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-4 dark:border-neutral-800 dark:bg-neutral-950">
            <code>
              <span className="text-muted-foreground">exit code:</span> 404
              {"\n"}
              <span className="text-muted-foreground">error:</span> File not
              found
            </code>
          </pre>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <h1 className="font-ds text-7xl font-extrabold tracking-tight">
          4<span className="text-accent-brand">0</span>4
        </h1>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="max-w-md text-center text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist — or it wandered
          off somewhere it wasn&apos;t supposed to go.
        </p>
      </Reveal>

      <Reveal delay={0.24}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent-brand/40 hover:text-accent-brand dark:border-neutral-800"
        >
          cd ~
          <span className="font-mono text-xs text-muted-foreground">
            back to home
          </span>
        </Link>
      </Reveal>

      {season && (
        <Reveal delay={0.32}>
          <p className="text-xs text-muted-foreground">
            psst… happy {season.name} {season.emoji}
          </p>
        </Reveal>
      )}
    </section>
  );
}
