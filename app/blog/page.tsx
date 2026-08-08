import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Building processes and small wins found along the way - engineering notes from Niladri.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const d = (i: number) => (i + 1) * 0.03;

  return (
    <>
      <section className="flex flex-col my-8 gap-6 pt-4">
        <Reveal>
          <div className="flex flex-col items-center gap-5">
            <h1 className="flex items-center justify-center gap-6 text-6xl xl:text-7xl font-ds font-extrabold">
              <span>Blog</span>
            </h1>
            <span
              aria-hidden
              className="h-1 w-20 rounded-full bg-linear-to-r from-accent-brand/60 to-accent-brand"
            />
          </div>
        </Reveal>

        <Reveal delay={d(0)}>
          <p className="text-center text-lg text-muted-foreground mx-auto w-5/6">
            Building processes and small wins found along the way.
          </p>
        </Reveal>
      </section>

      <Reveal delay={d(1)}>
        <hr className="mx-3 rounded-xl" />
      </Reveal>

      {posts.length === 0 ? (
        <section className="flex flex-col items-center justify-center gap-4 py-24 text-center">
          <Reveal delay={d(2)}>
            <p className="text-4xl">✍️</p>
          </Reveal>
          <Reveal delay={d(3)}>
            <h2 className="text-xl font-semibold tracking-tight">
              Nothing here yet
            </h2>
          </Reveal>
          <Reveal delay={d(4)}>
            <p className="text-sm text-muted-foreground max-w-sm">
              I&apos;m cooking up some posts. Check back soon - or{" "}
              <a
                href="https://x.com/dev_niladri"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-foreground transition"
              >
                follow me on X
              </a>{" "}
              to know when they drop.
            </p>
          </Reveal>
        </section>
      ) : (
        <section className="flex flex-col gap-5 pb-8">
          <Reveal delay={d(2)}>
            <h2 className="px-6 pt-5 pb-2">
              All Posts{" "}
              <span className="text-muted-foreground">({posts.length})</span>
            </h2>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-5 px-6 divide-y divide-neutral-200 dark:divide-neutral-800">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <BlogCard post={post} />
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      )}
    </>
  );
}