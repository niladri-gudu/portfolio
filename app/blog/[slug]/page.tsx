import type { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/features/blog/lib";
import BlogContent from "@/features/blog/components/BlogContent";
import JsonLd from "@/shared/seo/JsonLd";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/site";
import { buildBlogPostingJsonLd } from "@/shared/seo/builders";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);

    return buildMetadata({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
    });
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    return notFound();
  }

  const jsonLd = buildBlogPostingJsonLd(post);

  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogContent post={post} />
    </>
  );
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}
