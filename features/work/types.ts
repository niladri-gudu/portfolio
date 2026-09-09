import type { CompanyLogoKey } from "@/components/icons/companyLogoMap";
import type { TechIconKey } from "@/components/icons/techIconMap";

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
