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
  slug: string;
  title: string;
  description: string;
  image: string;

  links?: ProjectLinks;
  status?: "Building" | "Completed" | "Shipped";

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

export const projectItems: ProjectItem[] = [
  {
    slug: "foldr",
    title: "Foldr",
    description:
      "A cloud storage platform like Google Drive with file sharing, trash, favorites and S3 uploads.",
    image: "/nature.jpg",

    status: "Building",

    links: {
      website: "https://foldr-flax.vercel.app",
      github: "https://github.com/niladri-gudu",
    },

    timeline: "2 months",
    role: "Full Stack Developer",
    team: "Solo",

    overview:
      "Foldr is a cloud storage platform inspired by Google Drive that allows users to upload files to AWS S3, manage them with folders, mark favorites, share files securely, and restore/delete from trash. The goal was to build a scalable storage product with clean UX and production-level backend patterns.",

    whatUsersCanDo: [
      "Upload files & manage them with a clean file manager UI.",
      "Create folders and organize content like Google Drive.",
      "Mark important files as favorites.",
      "Move files to trash and restore/delete permanently.",
      "Share files with other users using secure sharing links.",
      "Preview files in a dedicated viewer page.",
      "Quickly search and filter files.",
    ],

    whyIBuiltThis: [
      "To learn how real-world storage products work end-to-end.",
      "To build production-level file upload pipelines using AWS S3.",
      "To understand how to store metadata in MongoDB and sync with S3.",
      "To practice authentication, authorization and secure access patterns.",
      "To build a portfolio-worthy project that feels like a real product.",
    ],

    afterLaunchImpact: [
      "Built a scalable upload pipeline using AWS S3 + metadata tracking in MongoDB.",
      "Learned a lot about secure file access, signed URLs, and permissions.",
      "Implemented file preview navigation similar to Google Drive.",
      "Improved performance by optimizing server components + caching strategy.",
      "Learned deployment constraints on Vercel (cookies, CORS, etc.).",
    ],

    futurePlans: [
      "Add folder sharing & role-based access (viewer/editor).",
      "Add realtime collaboration on shared folders.",
      "Improve file search with tags and full-text indexing.",
      "Add file versioning (upload history).",
      "Add activity logs for every file action.",
    ],

    technologies: [
      { name: "Next.js", icon: Next },
      { name: "TypeScript", icon: Typescript },
      { name: "Vercel", icon: Vercel },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "Shadcn UI", icon: Shadcn },
    ],
  },
  {
    slug: "folder",
    title: "Folder",
    description:
      "A cloud storage platform like Google Drive with file sharing, trash, favorites and S3 uploads.",
    image: "/nature.jpg",

    status: "Building",

    links: {
      website: "https://foldr-flax.vercel.app",
      github: "https://github.com/niladri-gudu",
    },

    timeline: "2 months",
    role: "Full Stack Developer",
    team: "Solo",

    overview:
      "Foldr is a cloud storage platform inspired by Google Drive that allows users to upload files to AWS S3, manage them with folders, mark favorites, share files securely, and restore/delete from trash. The goal was to build a scalable storage product with clean UX and production-level backend patterns.",

    whatUsersCanDo: [
      "Upload files & manage them with a clean file manager UI.",
      "Create folders and organize content like Google Drive.",
      "Mark important files as favorites.",
      "Move files to trash and restore/delete permanently.",
      "Share files with other users using secure sharing links.",
      "Preview files in a dedicated viewer page.",
      "Quickly search and filter files.",
    ],

    whyIBuiltThis: [
      "To learn how real-world storage products work end-to-end.",
      "To build production-level file upload pipelines using AWS S3.",
      "To understand how to store metadata in MongoDB and sync with S3.",
      "To practice authentication, authorization and secure access patterns.",
      "To build a portfolio-worthy project that feels like a real product.",
    ],

    afterLaunchImpact: [
      "Built a scalable upload pipeline using AWS S3 + metadata tracking in MongoDB.",
      "Learned a lot about secure file access, signed URLs, and permissions.",
      "Implemented file preview navigation similar to Google Drive.",
      "Improved performance by optimizing server components + caching strategy.",
      "Learned deployment constraints on Vercel (cookies, CORS, etc.).",
    ],

    futurePlans: [
      "Add folder sharing & role-based access (viewer/editor).",
      "Add realtime collaboration on shared folders.",
      "Improve file search with tags and full-text indexing.",
      "Add file versioning (upload history).",
      "Add activity logs for every file action.",
    ],

    technologies: [
      { name: "Next.js", icon: Next },
      { name: "TypeScript", icon: Typescript },
      { name: "Vercel", icon: Vercel },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "Shadcn UI", icon: Shadcn },
    ],
  },
  {
    slug: "foldar",
    title: "Foldar",
    description:
      "A cloud storage platform like Google Drive with file sharing, trash, favorites and S3 uploads.",
    image: "/nature.jpg",

    status: "Building",

    links: {
      website: "https://foldr-flax.vercel.app",
      github: "https://github.com/niladri-gudu",
    },

    timeline: "2 months",
    role: "Full Stack Developer",
    team: "Solo",

    overview:
      "Foldr is a cloud storage platform inspired by Google Drive that allows users to upload files to AWS S3, manage them with folders, mark favorites, share files securely, and restore/delete from trash. The goal was to build a scalable storage product with clean UX and production-level backend patterns.",

    whatUsersCanDo: [
      "Upload files & manage them with a clean file manager UI.",
      "Create folders and organize content like Google Drive.",
      "Mark important files as favorites.",
      "Move files to trash and restore/delete permanently.",
      "Share files with other users using secure sharing links.",
      "Preview files in a dedicated viewer page.",
      "Quickly search and filter files.",
    ],

    whyIBuiltThis: [
      "To learn how real-world storage products work end-to-end.",
      "To build production-level file upload pipelines using AWS S3.",
      "To understand how to store metadata in MongoDB and sync with S3.",
      "To practice authentication, authorization and secure access patterns.",
      "To build a portfolio-worthy project that feels like a real product.",
    ],

    afterLaunchImpact: [
      "Built a scalable upload pipeline using AWS S3 + metadata tracking in MongoDB.",
      "Learned a lot about secure file access, signed URLs, and permissions.",
      "Implemented file preview navigation similar to Google Drive.",
      "Improved performance by optimizing server components + caching strategy.",
      "Learned deployment constraints on Vercel (cookies, CORS, etc.).",
    ],

    futurePlans: [
      "Add folder sharing & role-based access (viewer/editor).",
      "Add realtime collaboration on shared folders.",
      "Improve file search with tags and full-text indexing.",
      "Add file versioning (upload history).",
      "Add activity logs for every file action.",
    ],

    technologies: [
      { name: "Next.js", icon: Next },
      { name: "TypeScript", icon: Typescript },
      { name: "Vercel", icon: Vercel },
      { name: "Tailwind CSS", icon: Tailwind },
      { name: "Shadcn UI", icon: Shadcn },
    ],
  },
];
