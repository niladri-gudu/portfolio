import { NextResponse } from "next/server";
import { getAllPosts } from "@/features/blog/lib";
import type { ApiSearchResult } from "@/features/search/lib";

export const revalidate = 3600;

export async function GET() {
  try {
    const posts = getAllPosts();

    const blogResults: ApiSearchResult[] = posts.map((post) => ({
      id: `blog-${post.slug}`,
      title: post.title,
      description: post.description,
      href: `/blog/${post.slug}`,
      category: "Blog",
      icon: "FileText",
    }));

    return NextResponse.json(blogResults);
  } catch (err) {
    console.error("Search index error:", err);
    return NextResponse.json([], { status: 500 });
  }
}
