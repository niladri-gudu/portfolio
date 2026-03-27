import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export default function MDXContent({ source }: { source: string }) {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </article>
  );
}