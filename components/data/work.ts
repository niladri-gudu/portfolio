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
    company: "Baatasari",
    role: "Backend Developer",
    duration: "December 2024 - Present",
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
