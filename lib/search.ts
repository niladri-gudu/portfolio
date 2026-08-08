import { projectItems } from "@/components/data/projects";
import { workItems } from "@/components/data/work";
import { socials } from "@/components/data/socials";

import {
  Code,
  Briefcase,
  User,
  FileText,
  Compass,
  Search,
} from "lucide-react";

import type { ComponentType, SVGProps } from "react";

export type SearchResult = {
  id: string;
  title: string;
  description?: string;
  href: string;
  category: "Pages" | "Projects" | "Work" | "Blog" | "Socials";
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const iconNameMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Code,
  Briefcase,
  User,
  FileText,
  Compass,
  Search,
};

export type ApiSearchResult = Omit<SearchResult, "icon"> & {
  icon: string;
};

export function hydrateApiResult(item: ApiSearchResult): SearchResult {
  return {
    ...item,
    icon: iconNameMap[item.icon] ?? Search,
  };
}

export function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  results.push(
    {
      id: "page-home",
      title: "Home",
      description: "Niladri - Backend & Systems Engineer",
      href: "/",
      category: "Pages",
      icon: Compass,
    },
    {
      id: "page-work",
      title: "Work",
      description: "Professional experience",
      href: "/work",
      category: "Pages",
      icon: Briefcase,
    },
    {
      id: "page-projects",
      title: "Projects",
      description: "Engineering projects and products",
      href: "/projects",
      category: "Pages",
      icon: Code,
    },
    {
      id: "page-blog",
      title: "Blog",
      description: "Engineering notes and articles",
      href: "/blog",
      category: "Pages",
      icon: FileText,
    },
    );

  results.push(
    ...projectItems.map((p) => ({
      id: `project-${p.slug}`,
      title: p.title,
      description: p.description,
      href: `/projects/${p.slug}`,
      category: "Projects" as const,
      icon: Code,
    }))
  );

  results.push(
    ...workItems.map((w, idx) => ({
      id: `work-${idx}`,
      title: w.company,
      description: w.role,
      href: "/work",
      category: "Work" as const,
      icon: Briefcase,
    }))
  );

  results.push(
    ...socials.map((s) => ({
      id: `social-${s.name}`,
      title: s.name,
      description: s.username,
      href: s.href,
      category: "Socials" as const,
      icon: User,
    }))
  );

  return results;
}
