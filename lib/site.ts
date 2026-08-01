import type { Metadata } from "next";

const siteUrl = (
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://niladri.dev"
).replace(/\/+$/, "");

export const siteConfig = {
  name: "Niladri",
  title: "Niladri — Backend & Systems Engineer",
  description:
    "Portfolio of Niladri, a Backend and Systems Engineer focused on building scalable distributed systems, high-performance APIs, and robust cloud infrastructure.",
  url: siteUrl,
  ogImage: "/opengraph-image.jpg",
  keywords: [
    "Niladri",
    "Backend Engineer",
    "Systems Engineer",
    "Distributed Systems",
    "API Development",
    "Scalable Architecture",
    "Cloud Infrastructure",
    "DevOps",
  ],
  links: {
    email: "mailto:niladrigudu@gmail.com",
    github: "https://github.com/niladri-gudu",
    twitter: "https://x.com/dev_niladri",
    linkedin: "https://www.linkedin.com/in/niladribihari-mohanta",
  },
} as const;

export function absoluteUrl(path = ""): string {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  imageUrl,
  type = "website",
  publishedTime,
}: {
  title: string;
  description: string;
  path?: string;
  imageUrl?: string;
  type?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = `${title} — ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url,
      siteName: siteConfig.name,
      title: ogTitle,
      description,
      ...(imageUrl ? { images: [{ url: absoluteUrl(imageUrl) }] } : {}),
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      ...(imageUrl ? { images: [absoluteUrl(imageUrl)] } : {}),
    },
  };
}
