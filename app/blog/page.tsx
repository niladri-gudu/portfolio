import Reveal from "@/components/motion/Reveal";

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <section className="flex flex-col my-12 gap-6 pt-4">
        <Reveal>
          <h1 className="flex items-center justify-center gap-6 text-6xl xl:text-7xl font-ds font-extrabold tracking-tighter">
            <span>Blog</span>
          </h1>
        </Reveal>
        
        <Reveal delay={0.03}>
          <p className="text-center text-lg text-muted-foreground mx-auto max-w-md">
            Building processes and small wins found along the way.
          </p>
        </Reveal>
      </section>

      <Reveal delay={0.06}>
        <hr className="border-neutral-200 dark:border-neutral-800" />
      </Reveal>

      {/* Empty State Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-32 text-center">
        <Reveal delay={0.09}>
          <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-900 rounded-2xl flex items-center justify-center text-3xl mb-2">
            ✍️
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <h2 className="text-xl font-semibold tracking-tight">
            Nothing here yet
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-sm text-muted-foreground max-w-[280px] leading-relaxed">
            I&apos;m cooking up some posts. Check back soon — or{" "}
            <a
              href="https://x.com/dev_niladri"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-foreground transition-all"
            >
              follow me on X
            </a>{" "}
            to know when they drop.
          </p>
        </Reveal>
      </section>
    </div>
  );
}