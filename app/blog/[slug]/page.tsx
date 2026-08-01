import type { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import BlogContent from "@/components/blog/BlogContent";
import JsonLd from "@/components/seo/JsonLd";
import { notFound } from "next/navigation";
import { buildMetadata, siteConfig, absoluteUrl } from "@/lib/site";

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

  try {
    const post = getPostBySlug(slug);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: new Date(post.date).toISOString(),
      dateModified: new Date(post.date).toISOString(),
      url: absoluteUrl(`/blog/${post.slug}`),
      author: {
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      publisher: {
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      keywords: post.tags?.join(", "),
    };

    return (
      <>
        <JsonLd data={jsonLd} />
        <BlogContent post={post} />
      </>
    );
  } catch {
    return notFound();
  }
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}
