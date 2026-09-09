import { siteConfig, absoluteUrl } from "@/lib/site";

export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Niladri",
    url: siteConfig.url,
    image: `${siteConfig.url}/new_profile_updated_2.0.jpeg`,
    jobTitle: "Backend & AI Engineer",
    description:
      "Backend and AI Engineer building scalable distributed systems, high-performance APIs, and robust cloud infrastructure.",
    email: "niladrigudu@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressCountry: "India",
    },
    sameAs: [siteConfig.links.github, siteConfig.links.twitter, siteConfig.links.linkedin],
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteConfig.url,
  };
}

export function buildBlogPostingJsonLd(post: {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags?: string[];
}) {
  return {
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
}
