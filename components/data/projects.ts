/* eslint-disable @typescript-eslint/no-explicit-any */
import { Shadcn, Tailwind, Typescript, Vercel, Next } from "@/components/icons";

export type ProjectLinks = {
  website?: string;
  github?: string;
};

export type ProjectTechnology = {
  name: string;
  icon: any;
};

export type ProjectItem = {
  title: string;
  description: string;
  image: string;

  links?: ProjectLinks;

  status?: "Building" | "Shipped";

  technologies: ProjectTechnology[];
};

export const projectItems: ProjectItem[] = [
  {
    title: "Foldr",
    description:
      "A cloud storage platform like Google Drive with file sharing, trash, favorites and S3 uploads.",
    image: "/nature.jpg",
    status: "Building",

    links: {
      website: "https://foldr-flax.vercel.app",
      github: "https://github.com/niladri-gudu",
    },

    technologies: [
      { name: "Next.js", icon: Next },
      { name: "TypeScript", icon: Typescript },
      { name: "Vercel", icon: Vercel },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "Shadcn UI", icon: Shadcn },
    ],
  },
  {
  title: "Folder",
  description:
  "A cloud storage platform like Google Drive with file sharing, trash, favorites and S3 uploads.",
  image: "/nature.jpg",
    status: "Building",

    links: {
      website: "https://foldr-flax.vercel.app",
      github: "https://github.com/niladri-gudu",
    },

    technologies: [
      { name: "Next.js", icon: Next },
      { name: "TypeScript", icon: Typescript },
      { name: "Vercel", icon: Vercel },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "Shadcn UI", icon: Shadcn },
    ],
  },
  {
  title: "Foldar",
  description:
  "A cloud storage platform like Google Drive with file sharing, trash, favorites and S3 uploads.",
  image: "/nature.jpg",
    status: "Building",

    links: {
      website: "https://foldr-flax.vercel.app",
      github: "https://github.com/niladri-gudu",
    },

    technologies: [
      { name: "Next.js", icon: Next },
      { name: "TypeScript", icon: Typescript },
      { name: "Vercel", icon: Vercel },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "Shadcn UI", icon: Shadcn },
    ],
  },
];
