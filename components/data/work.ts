import { CompanyLogoKey } from "@/components/icons/companyLogoMap";
import { TechIconKey } from "../icons/techIconMap";

export type WorkTechnology = {
  name: string;
  icon: TechIconKey
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
    company: "Baatasari",
    role: "Backend Developer",
    duration: "December 2024 - Present",
    location: "Visakhapatnam, India (On-Site)",
    companyLogo: 'baatasari',

    links: {
      website: "https://baatasari.com",
      // twitter: "https://x.com/vercel",
      linkedin: "https://www.linkedin.com/company/baatasari",
      // github: "https://github.com/vercel",
    },

    summary: [
      "Built scalable and reusable UI components using Next.js + Tailwind.",
      "Improved performance and UI consistency across pages.",
      "Worked closely with designers to deliver high-fidelity interfaces.",
    ],

    technologies: [
      { name: "Next.js", icon: "next", link: "https://nextjs.org" },
      { name: "TypeScript", icon: "ts", link: "https://www.typescriptlang.org" },
      { name: "Tailwind CSS", icon: "tailwind", link: "https://tailwindcss.com" },
      { name: "Shadcn UI", icon: "shadcn", link: "https://ui.shadcn.com" },
      { name: "Vercel", icon: "vercel", link: "https://vercel.com" },
    ],
  },
  {
    company: "Baatasari",
    role: "Backend Developer",
    duration: "December 2024 - Present",
    location: "Visakhapatnam, India (On-Site)",
    companyLogo: 'baatasari',

    links: {
      website: "https://baatasari.com",
      // twitter: "https://x.com/vercel",
      linkedin: "https://www.linkedin.com/company/baatasari",
      // github: "https://github.com/vercel",
    },

    summary: [
      "Built scalable and reusable UI components using Next.js + Tailwind.",
      "Improved performance and UI consistency across pages.",
      "Worked closely with designers to deliver high-fidelity interfaces.",
    ],

    technologies: [
      { name: "Next.js", icon: "next", link: "https://nextjs.org" },
      { name: "TypeScript", icon: "ts", link: "https://www.typescriptlang.org" },
      { name: "Tailwind CSS", icon: "tailwind", link: "https://tailwindcss.com" },
      { name: "Shadcn UI", icon: "shadcn", link: "https://ui.shadcn.com" },
      { name: "Vercel", icon: "vercel", link: "https://vercel.com" },
    ],
  },
];
