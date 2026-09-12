import type { Metadata } from "next";

const siteUrl = (
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://niladri.dev"
).replace(/\/+$/, "");

export const siteConfig = {
  name: "Niladri",
  fullName: "Niladribihari Mohanta",
  title: "Niladri - Backend & AI Engineer",
  description:
    "Portfolio of Niladribihari Mohanta (Niladri), a Backend and AI Engineer focused on building scalable distributed systems, high-performance APIs, and robust cloud infrastructure.",
  url: siteUrl,
  ogImage: "/opengraph-image.jpg",
  keywords: [
    "Niladribihari Mohanta",
    "Niladri",
    "Niladri Mohanta",
    "Backend Engineer",
    "AI Engineer",
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
    resume:
      "https://docs.google.com/document/d/1CHszP2WuvJBuTvP0JJbUsPZqkQne2fi8ecANTHqZW8Y/edit?usp=sharing",
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
  const ogTitle = `${title} - ${siteConfig.name}`;
  const ogImageUrl = absoluteUrl(imageUrl ?? siteConfig.ogImage);

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
      images: [{ url: ogImageUrl, width: 1200, height: 630 }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImageUrl],
    },
  };
}
