"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ChevronDown } from "lucide-react";

import WorldIcon from "../ui/world-icon";
import TwitterXIcon from "../ui/twitter-x-icon";
import LinkedinIcon from "../ui/linkedin-icon";
import GithubIcon from "../ui/github-icon";

import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

import type { WorkItem } from "@/components/data/work";
import { techIconMap } from "@/components/icons/techIconMap";

type WorkCardProps = {
  item: WorkItem;
  showToggle?: boolean;
};

export default function WorkCard({ item, showToggle = true }: WorkCardProps) {
  const [expanded, setExpanded] = useState(false);

  const isExpanded = showToggle ? expanded : true;

  return (
    <section className="flex flex-col h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900 hover:shadow-lg transition-shadow">
      <main className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 w-14 h-14 shrink-0 shadow-sm">
            <Image
              src={item.logo}
              alt={`${item.company} Logo`}
              width={30}
              height={30}
              className="object-contain hover:scale-110 transition"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex gap-3">
              <h2 className="text-lg font-semibold">{item.company}</h2>

              {!!item.links && (
                <div className="flex items-center gap-1.5">
                  {item.links.website && (
                    <Link
                      href={item.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Tooltip>
                        <TooltipTrigger className="cursor-pointer text-muted-foreground">
                          <WorldIcon
                            size={18}
                            className="text-muted-foreground"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View Website</p>
                        </TooltipContent>
                      </Tooltip>
                    </Link>
                  )}

                  {item.links.twitter && (
                    <Link
                      href={item.links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Tooltip>
                        <TooltipTrigger className="cursor-pointer text-muted-foreground">
                          <TwitterXIcon
                            size={18}
                            className="text-muted-foreground"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Follow on X</p>
                        </TooltipContent>
                      </Tooltip>
                    </Link>
                  )}

                  {item.links.linkedin && (
                    <Link
                      href={item.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Tooltip>
                        <TooltipTrigger className="cursor-pointer text-muted-foreground">
                          <LinkedinIcon
                            size={18}
                            className="text-muted-foreground"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Connect on LinkedIn</p>
                        </TooltipContent>
                      </Tooltip>
                    </Link>
                  )}

                  {item.links.github && (
                    <Link
                      href={item.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Tooltip>
                        <TooltipTrigger className="cursor-pointer text-muted-foreground">
                          <GithubIcon
                            size={18}
                            className="text-muted-foreground"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </Link>
                  )}
                </div>
              )}
            </div>

            <h3 className="text-muted-foreground text-sm">{item.role}</h3>
          </div>
        </div>

        <div className="flex flex-col md:items-end border-t border-neutral-100 pt-3 md:border-none md:pt-0 dark:border-neutral-800">
          <h3 className="text-sm">{item.duration}</h3>
          <h3 className="text-sm text-muted-foreground">{item.location}</h3>

          {showToggle && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-2 flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground cursor-pointer select-none"
            >
              {expanded ? "Hide details" : "View details"}
              <ChevronDown
                size={14}
                className={`transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>
      </main>

      {isExpanded && (
        <div className="mt-6 flex flex-col gap-4">
          <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
            Summary
          </h3>

          <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
            {item.summary.map((point, i) => (
              <li key={`${point}-${i}`}>{point}</li>
            ))}
          </ul>

          <div className="gap-2 mt-2">
            <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 border-l-2 border-neutral-200 dark:border-neutral-700 pl-3 mb-4">
              Tools & Technologies
            </h3>

            <div className="flex flex-wrap gap-2 pl-3 mb-2">
              {item.technologies.map((tech) => {
                const Icon = techIconMap[tech.icon];

                return (
                  <Link
                    key={tech.name}
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tracking-tight px-2 py-1.5 rounded-md text-xs font-bold border border-neutral-200 bg-neutral-50 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer flex items-center gap-1.5 transition"
                  >
                    <Icon className="w-4 h-4" />
                    {tech.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
