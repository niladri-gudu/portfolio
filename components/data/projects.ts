/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Shadcn,
  Tailwind,
  Typescript,
  Vercel,
  Next,
  Turborepo,
  Wagmi,
  Viem,
  Rainbowkit,
  Solidity,
  Nest,
  Prisma,
  Postgres,
} from "@/components/icons/techLogos";

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
    slug: "questfi",
    title: "QuestFi",
    description:
      "A Web3 questing platform that simplifies onchain interactions through XP, leaderboards, and NFT badge rewards.",
    image: "/nature.jpg",

    status: "Completed",

    links: {
      website: "https://questfi.niladri.app",
      github: "https://github.com/niladri-gudu/questfi",
    },

    timeline: "10 days",
    role: "Full Stack Developer",
    team: "Solo",

    overview:
      "QuestFi is a decentralized application designed to make Web3 onboarding intuitive. It bridges the gap between blockchain trust and Web2 usability by using a robust NestJS backend to track off-chain logic like XP and leaderboards, while utilizing smart contracts for verifiable achievements and badge minting.",

    whatUsersCanDo: [
      "Connect wallets seamlessly via RainbowKit.",
      "Browse and complete various onchain quests.",
      "Earn XP and level up their profile through an automated tracking system.",
      "Compete with other users on a real-time global leaderboard.",
      "Mint NFT or Soulbound Token (SBT) badges as proof of quest completion.",
      "View progress and rewards through a clean, native-feeling dashboard.",
    ],

    whyIBuiltThis: [
      "To prove that production-grade Web3 apps require sophisticated backends for logic and UX.",
      "To master event-driven architecture using BullMQ and Redis for blockchain syncing.",
      "To practice deploying full-stack monorepos using Turborepo.",
      "To gain hands-on experience managing infrastructure on AWS EC2 (Nginx, PM2).",
      "To kick off the '6 Projects in 60 Days' challenge with a high-utility dApp.",
    ],

    afterLaunchImpact: [
      "Successfully implemented an event-driven sync between smart contracts and MongoDB/PostgreSQL.",
      "Optimized backend performance using Redis for queueing and caching.",
      "Automated the minting pipeline so users receive badges immediately upon quest validation.",
      "Gained deep expertise in SSH, environment management, and reverse proxies on EC2.",
      "Established a reusable Turborepo boilerplate for future full-stack Web3 projects.",
    ],

    futurePlans: [
      "Implement multi-chain support to track quests across different networks.",
      "Develop a 'Quest Builder' UI for protocols to permissionlessly list their own quests.",
      "Add guild and team-based questing for community collaboration.",
      "Introduce file versioning for quest assets and detailed activity logs.",
    ],

    technologies: [
      { name: "Solidity", icon: Solidity },
      { name: "Wagmi", icon: Wagmi },
      { name: "Viem", icon: Viem },
      { name: "Rainbowkit", icon: Rainbowkit },
      { name: "Next.js", icon: Next },
      { name: "Nest.js", icon: Nest },
      { name: "Prisma", icon: Prisma },
      { name: "PostgreSQL", icon: Postgres },
      { name: "Turborepo", icon: Turborepo },
      { name: "Vercel", icon: Vercel },
    ],
  },
  {
    slug: "lendx",
    title: "LendX",
    description:
      "A cloud storage platform like Google Drive with file sharing, trash, favorites and S3 uploads.",
    image: "/nature.jpg",

    status: "Completed",

    links: {
      website: "https://lendx-flax.niladri.app",
      github: "https://github.com/niladri-gudu/lendx",
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
    slug: "zkpass",
    title: "ZKPass",
    description:
      "A cloud storage platform like Google Drive with file sharing, trash, favorites and S3 uploads.",
    image: "/nature.jpg",

    status: "Completed",

    links: {
      website: "https://zkpass.niladri.app",
      github: "https://github.com/niladri-gudu/zkpass",
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
