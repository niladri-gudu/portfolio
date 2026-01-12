export type WorkTechnology = {
  name: string;
  icon: "next" | "ts" | "tailwind" | "shadcn" | "vercel";
  link: string;
};

export type WorkItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  logo: string;

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
    company: "Company Name",
    role: "Frontend Developer",
    duration: "July 2025 - December 2025",
    location: "Bangalore, India (On-Site)",
    logo: "/vercel.svg",

    links: {
      website: "https://vercel.com",
      twitter: "https://x.com/vercel",
      linkedin: "https://www.linkedin.com/company/vercel",
      github: "https://github.com/vercel",
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
