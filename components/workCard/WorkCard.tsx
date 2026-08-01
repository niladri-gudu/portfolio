/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";

import { AlignLeft, ChevronDown, Wrench } from "lucide-react";

import WorldIcon from "../ui/world-icon";
import TwitterXIcon from "../ui/twitter-x-icon";
import LinkedinIcon from "../ui/linkedin-icon";
import GithubIcon from "../ui/github-icon";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

import type { WorkItem } from "@/components/data/work";
import { techIconMap } from "@/components/icons/techIconMap";
import { companyLogoMap } from "../icons/companyLogoMap";
import { AnimatePresence, motion } from "motion/react";

type WorkCardProps = {
  item: WorkItem;
  showToggle?: boolean;
};

const SubHeading = ({ icon: Icon, title }: { icon: any; title: string }) => {
  return (
    <div className="flex items-center gap-2 pb-3">
      <Icon className="w-4 h-4 text-accent-brand" />
      <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        {title}
      </h3>
    </div>
  );
};

export default function WorkCard({ item, showToggle = true }: WorkCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isExpanded = showToggle ? expanded : true;

  const iconKey = item.companyLogo;
  const CompanyIcon = companyLogoMap[iconKey];

  return (
    <section className="group/card flex flex-col h-full pb-6">
      <main className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between pl-2">
          <div className="flex items-center gap-4">
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 w-14 h-14 shrink-0 shadow-sm transition-all duration-300 group-hover/card:border-accent-brand/40 group-hover/card:shadow-accent-brand/10">
              <CompanyIcon
                className="w-8 h-8 object-contain transition-transform duration-300 group-hover/card:scale-110 text-neutral-900 dark:text-neutral-100"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex gap-3">
                <h2 className="text-lg font-semibold">{item.company}</h2>

                {!!item.links && (
                  <div className="flex items-center gap-1">
                    {item.links.website && (
                      <Link href={item.links.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Tooltip>
                          <TooltipTrigger className="inline-flex items-center justify-center w-7 h-7 rounded-md text-muted-foreground hover:text-foreground transition-colors">
                            <WorldIcon size={18} className="block" />
                          </TooltipTrigger>
                          <TooltipContent><p>View Website</p></TooltipContent>
                        </Tooltip>
                      </Link>
                    )}

                    {item.links.twitter && (
                      <Link href={item.links.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Tooltip>
                          <TooltipTrigger className="inline-flex items-center justify-center w-7 h-7 rounded-md text-muted-foreground hover:text-foreground transition-colors">
                            <TwitterXIcon size={18} className="block" />
                          </TooltipTrigger>
                          <TooltipContent><p>Follow on X</p></TooltipContent>
                        </Tooltip>
                      </Link>
                    )}

                    {item.links.linkedin && (
                      <Link href={item.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Tooltip>
                          <TooltipTrigger className="inline-flex items-center justify-center w-7 h-7 rounded-md text-muted-foreground hover:text-foreground transition-colors">
                            <LinkedinIcon size={18} className="block" />
                          </TooltipTrigger>
                          <TooltipContent><p>Connect on LinkedIn</p></TooltipContent>
                        </Tooltip>
                      </Link>
                    )}

                    {item.links.github && (
                      <Link href={item.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <Tooltip>
                          <TooltipTrigger className="inline-flex items-center justify-center w-7 h-7 rounded-md text-muted-foreground hover:text-foreground transition-colors">
                            <GithubIcon size={18} className="block" />
                          </TooltipTrigger>
                          <TooltipContent><p>View Github</p></TooltipContent>
                        </Tooltip>
                      </Link>
                    )}
                  </div>
                )}
              </div>

              <h3 className="text-muted-foreground text-sm">{item.role}</h3>
            </div>
          </div>

          <div className="flex flex-col md:items-end border-neutral-100 pt-3 md:border-none md:pt-0 dark:border-neutral-800">
            <h3 className="text-sm">{item.duration}</h3>
            <h3 className="text-sm text-muted-foreground">{item.location}</h3>

            {showToggle && (
              <button
                onClick={() => setExpanded((v) => !v)}
                className="mt-2 flex items-center gap-1 text-xs text-muted-foreground hover:text-accent-brand transition-colors cursor-pointer select-none"
              >
                {expanded ? "Hide details" : "View details"}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                />
              </button>
            )}
          </div>
        </main>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 flex flex-col pl-2">
              <div>
                <SubHeading icon={AlignLeft} title="Summary" />
                <ul className="list-disc list-outside ml-4 space-y-2 mb-5 text-sm text-neutral-600 dark:text-neutral-400">
                  {item.summary.map((point, i) => (
                    <li key={`${point}-${i}`}>{point}</li>
                  ))}
                </ul>
              </div>

              <div>
                <SubHeading icon={Wrench} title="Tools & Technologies" />
                <div className="flex flex-wrap gap-2 pl-1 mb-2">
                  {item.technologies.map((tech) => {
                    const Icon = techIconMap[tech.icon];
                    return (
                      <Link
                        key={tech.name}
                        href={tech.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tracking-tight px-2 py-1.5 rounded-md text-xs font-bold border border-neutral-200 bg-neutral-50 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 hover:border-accent-brand/40 hover:text-accent-brand dark:hover:text-accent-brand cursor-pointer flex items-center gap-1.5 transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                        {tech.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}