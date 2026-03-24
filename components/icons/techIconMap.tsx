import type { ComponentType, SVGProps } from "react";
import {
  Shadcn,
  Tailwind,
  Typescript,
  Vercel,
  Next,
  Supabase,
  Hetzner,
  Coolify,
  GCP,
} from "@/components/icons/techLogos";

export type TechIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const techIconMap = {
  next: Next,
  shadcn: Shadcn,
  tailwind: Tailwind,
  ts: Typescript,
  vercel: Vercel,
  supabase: Supabase,
  hetzner: Hetzner,
  coolify: Coolify,
  gcp: GCP,
} satisfies Record<string, TechIconComponent>;

export type TechIconKey = keyof typeof techIconMap;
