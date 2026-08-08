import type { ComponentType, SVGProps } from "react";
import { Baatasari, Accenture } from "@/components/icons/companyLogos";

export type CompanyLogoComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const companyLogoMap = {
  baatasari: Baatasari,
  accenture: Accenture
} satisfies Record<string, CompanyLogoComponent>;

export type CompanyLogoKey = keyof typeof companyLogoMap;
