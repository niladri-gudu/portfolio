import type { ComponentType, SVGProps } from "react";

export type ProjectLinks = {
  website?: string;
  github?: string;
};

export type ProjectTechnology = {
  name: string;
  // Icon component from shared tech logos (SVG). `any` preserved from legacy
  // data to avoid breaking existing project entries; narrow gradually.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
};

export type ProjectStatus = "Building" | "Completed" | "Shipped";

export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  image: string;

  links?: ProjectLinks;
  status?: ProjectStatus;

  technologies: ProjectTechnology[];

  timeline?: string;
  role?: string;
  team?: string;

  overview?: string;

  whatUsersCanDo?: string[];
  whyIBuiltThis?: string[];
  afterLaunchImpact?: string[];
  futurePlans?: string[];
};

export type { ComponentType, SVGProps };
