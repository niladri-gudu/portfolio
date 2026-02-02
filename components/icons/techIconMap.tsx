import type { ComponentType, SVGProps } from "react";
import { Shadcn, Tailwind, Typescript, Vercel, Next } from "@/components/icons/techLogos";

export type TechIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const techIconMap = {
  next: Next,
  shadcn: Shadcn,
  tailwind: Tailwind,
  ts: Typescript,
  vercel: Vercel,
} satisfies Record<string, TechIconComponent>;

export type TechIconKey = keyof typeof techIconMap;
