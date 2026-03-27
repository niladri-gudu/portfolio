/* eslint-disable react-hooks/error-boundaries */
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import BlogContent from "@/components/blog/BlogContent";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const post = getPostBySlug(slug);
    return <BlogContent post={post} />;
  } catch {
    return notFound();
  }
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}