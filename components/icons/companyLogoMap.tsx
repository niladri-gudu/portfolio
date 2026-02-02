import type { ComponentType, SVGProps } from "react";
import { Baatasari } from "@/components/icons/companyLogos";

export type CompanyLogoComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const companyLogoMap = {
  baatasari: Baatasari
} satisfies Record<string, CompanyLogoComponent>;

export type CompanyLogoKey = keyof typeof companyLogoMap;
