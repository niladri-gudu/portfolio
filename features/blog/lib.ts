import { cache } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, BlogPostWithContent } from "./types";

export type { BlogPost, BlogPostWithContent } from "./types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export const getAllPosts = cache((): BlogPost[] => {
  if (!fs.existsSync(BLOG_DIR)) {
    console.warn(
      `Directory ${BLOG_DIR} not found. Returning empty posts array.`,
    );
    return [];
  }

  try {
    const files = fs.readdirSync(BLOG_DIR);

    return files
      .filter((f) => f.endsWith(".mdx"))
      .map((file) => {
        const slug = file.replace(".mdx", "");
        const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
        const { data } = matter(raw);

        return {
          slug,
          title: data.title,
          date: data.date,
          description: data.description,
          tags: data.tags ?? [],
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error reading blog posts:", error);
    return [];
  }
});

export const getPostBySlug = cache((slug: string): BlogPostWithContent => {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    tags: data.tags ?? [],
    content,
  };
});
