import { CompanyLogoKey } from "@/components/icons/companyLogoMap";
import { TechIconKey } from "../icons/techIconMap";

export type WorkTechnology = {
  name: string;
  icon: TechIconKey;
  link: string;
};

export type WorkItem = {
  company: string;
  companyLogo: CompanyLogoKey;
  role: string;
  duration: string;
  location: string;

  links?: {
    website?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };

  summary: string[];

  technologies: WorkTechnology[];
};

export const workItems: WorkItem[] = [
  {
    company: "Accenture",
    role: "Associate Software Engineer",
    duration: "July 2026 - Present",
    location: "Ahmedabad, India (On-Site)",
    companyLogo: "accenture",

    links: {
      website: "https://www.accenture.com",
      twitter: "https://x.com/Accenture",
      linkedin: "https://www.linkedin.com/company/accenture",
    },

    summary: [
      "Completed intensive full-stack engineering training focused on the MEAN stack and modern web architecture.",
      "Built end-to-end web applications and RESTful APIs with Node.js and Express.js, implementing JWT authentication, input validation, and structured error handling.",
      "Developed responsive single-page interfaces in Angular using TypeScript, reactive forms, and RxJS state management.",
      "Designed database schemas and handled data persistence in MongoDB using Mongoose ODM for CRUD operations.",
      "Performed API testing and workflow validation using Postman and Git version control."
    ],

    technologies: [
      { name: "Angular", icon: "angular", link: "https://angular.dev" },
      { name: "Node.js", icon: "node", link: "https://nodejs.org" },
      { name: "TypeScript", icon: "ts", link: "https://www.typescriptlang.org" },
      { name: "MongoDB", icon: "mongodb", link: "https://www.mongodb.com" },
      { name: "Express.js", icon: "express", link: "https://expressjs.com" },
    ],
  },
  {
    company: "Baatasari",
    role: "Backend Developer",
    duration: "December 2024 - June 2026",
    location: "Visakhapatnam, India (On-Site)",
    companyLogo: "baatasari",

    links: {
      website: "https://baatasari.com",
      // twitter: "https://x.com/vercel",
      linkedin: "https://www.linkedin.com/company/baatasari",
      // github: "https://github.com/vercel",
    },

    summary: [
      "Worked as a Backend Developer, contributing across multiple stages of product development and system improvements.",
      "Supported the transition of the frontend architecture from React (Vite) to Next.js for better scalability and performance.",
      "Assisted in migrating backend services from Firebase to a self-hosted Supabase setup.",
      "Played a key role in infrastructure setup, including deployment on a Hetzner server using Coolify.",
      "Contributed to ongoing backend enhancements and system optimization aligned with future cloud migration plans (GCP)."
    ],

    technologies: [
      { name: "Next.js", icon: "next", link: "https://nextjs.org" },
      {
        name: "Supabase",
        icon: "supabase",
        link: "https://supabase.com",
      },
      {
        name: "Hetzner",
        icon: "hetzner",
        link: "https://www.hetzner.com",
      },
      { name: "Coolify", icon: "coolify", link: "https://www.coolify.com" },
      { name: "GCP", icon: "gcp", link: "https://cloud.google.com" },
    ],
  },
];