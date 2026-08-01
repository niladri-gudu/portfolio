import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { projectItems } from "@/components/data/projects";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/work", priority: 0.8, changeFrequency: "yearly" },
    { path: "/projects", priority: 0.9, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/guestbook", priority: 0.5, changeFrequency: "weekly" },
  ];

  const projectRoutes = projectItems.map((project) => ({
    url: absoluteUrl(`/projects/${project.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...projectRoutes,
    ...blogRoutes,
  ];
}
