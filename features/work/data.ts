import type { WorkItem } from "./types";

export type { WorkItem, WorkTechnology } from "./types";

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
      "Completed intensive 8-week full-stack engineering training on the MEAN stack, selected for the backend track focused on API design and data modeling.",
      "Shipped 12+ REST APIs with Node.js and Express covering JWT auth, role checks, input validation, and a shared error-handling middleware that cut duplicated error code from 12 route files to 1.",
      "Built 8 Angular screens with TypeScript reactive forms and RxJS state, consolidating 20+ fields into reusable validators and cutting form-submission errors in QA passes.",
      "Designed 6 Mongoose schemas with indexes for auth and CRUD paths, handling pagination and reference integrity for 10k+ seeded test documents.",
      "Owned API verification with a 40+ request Postman collection covering auth, happy paths, and edge cases, plus Git-based review workflow across 30+ PRs.",
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
      "Backend developer across the full product loop: API design, Postgres schema work, and production deploys serving daily active users.",
      "Led the React (Vite) to Next.js migration across ~15 routes, cutting initial page load from ~2.1s to ~900ms via server components and route-level code splitting.",
      "Migrated backend services from Firebase to self-hosted Supabase (Auth + Postgres + Storage), fixing RLS policies and storage triggers that broke ~30% of writes during cutover.",
      "Provisioned production on Hetzner with Coolify (Docker, preview + zero-downtime deploys), cutting deploy time from ~14min to ~3min and holding 99.5% uptime over 4 months while cutting backend spend from ~$85/mo to ~$12/mo.",
      "Hardened auth and core endpoints with validation and rate limits, dropping 5xx rate on auth paths from ~2.1% to ~0.3%, and documented the GCP migration path (Cloud Run + Cloud SQL) with cost and latency estimates.",
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