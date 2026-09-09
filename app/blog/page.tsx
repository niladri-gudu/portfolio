import type { Metadata } from "next";
import Reveal from "@/shared/motion/Reveal";
import Stagger from "@/shared/motion/Stagger";
import StaggerItem from "@/shared/motion/StaggerItem";
import BlogCard from "@/features/blog/components/BlogCard";
import PageHero from "@/shared/components/PageHero";
import { getAllPosts } from "@/features/blog/lib";
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
      <PageHero
        title="Blog"
        description="Building processes and small wins found along the way."
      />

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