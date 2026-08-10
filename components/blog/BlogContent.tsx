import Reveal from "@/components/motion/Reveal";
import BackButton from "@/components/backButton/BackButton";
import dynamic from "next/dynamic";

const MDXContent = dynamic(() => import("@/components/blog/MDXContent"), {
  ssr: true,
  loading: () => (
    <div className="text-sm text-muted-foreground/60 py-8 text-center">
      Loading…
    </div>
  ),
});

type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
};

const SectionBlock = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="mt-10">
    <div className="pl-4">{children}</div>
  </div>
);

export default function BlogContent({ post }: { post: Post }) {
  return (
    <section className="px-4 py-10 max-w-5xl mx-auto">
      <Reveal>
        <div className="flex items-center justify-between mb-6 mx-2">
          <BackButton />
          <span className="text-[10px] font-mono text-muted-foreground">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </Reveal>

      <Reveal>
        <div className="mb-8 pl-2 mx-1 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <span
            aria-hidden
            className="block h-0.5 w-16 rounded-full bg-linear-to-r from-accent-brand/60 to-accent-brand"
          />
          <p className="text-muted-foreground text-lg leading-relaxed">
            {post.description}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <hr className="mx-2 mb-10 border-neutral-200 dark:border-neutral-800" />
      </Reveal>

      <Reveal delay={0.09}>
        <SectionBlock>
          <MDXContent source={post.content} />
        </SectionBlock>
      </Reveal>
    </section>
  );
}