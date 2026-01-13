import Image from "next/image";
import GithubIcon from "../ui/github-icon";
import WorldIcon from "../ui/world-icon";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import type { ProjectItem } from "@/components/data/projects";

const ProjectCard = ({ item }: { item: ProjectItem }) => {
  return (
    <section className="flex flex-col h-full pb-8">
      <div className="relative w-full aspect-3/2 rounded-xl overflow-hidden mb-4">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <main className="flex flex-col grow p-2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{item.title}</h3>

          <div className="flex gap-3">
            {item.links?.website && (
              <Link href={item.links.website} target="_blank">
                <Tooltip>
                  <TooltipTrigger className="cursor-pointer text-muted-foreground">
                    <WorldIcon />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Website</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
            )}

            {item.links?.github && (
              <Link href={item.links.github} target="_blank">
                <Tooltip>
                  <TooltipTrigger className="cursor-pointer text-muted-foreground">
                    <GithubIcon />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Source</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
            )}
          </div>
        </div>

        <p className="text-sm font-semibold text-muted-foreground mb-4 grow">
          {item.description}
        </p>

        <div className="mb-6">
          <h3 className="mb-2 text-muted-foreground font-semibold">
            Technologies
          </h3>

          <div className="flex cursor-pointer gap-2">
            {item.technologies.map((t) => {
              const Icon = t.icon;
              return (
                <Tooltip key={t.name}>
                  <TooltipTrigger className="cursor-pointer">
                    <Icon className="w-6 h-6 hover:scale-125 transition" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between">
          {item.status === "Building" ? (
            <div className="flex items-center gap-2 border border-amber-500/20 rounded-md px-2 py-1 text-xs bg-amber-500/10 text-amber-500 font-medium tracking-tight">
              <svg height="6" width="6" className="animate-pulse">
                <circle cx="3" cy="3" r="3" fill="currentColor" />
              </svg>
              Building
            </div>
          ) : (
            <div className="flex items-center gap-2 border border-green-500/20 rounded-md px-2 py-1 text-xs bg-green-500/10 text-green-500 font-medium tracking-tight">
              <svg height="6" width="6" className="animate-pulse">
                <circle cx="3" cy="3" r="3" fill="currentColor" />
              </svg>
              Shipped
            </div>
          )}

          <Link
            href={`/projects/${item.slug}`}
            className="group inline-flex items-center gap-2 border border-slate-200 rounded-md px-3 py-1.5 text-xs bg-slate-50/50 text-slate-600 font-medium tracking-tight hover:bg-white hover:text-slate-900 dark:bg-neutral-900/50 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
          >
            <span>View Details</span>
            <span className="group-hover:translate-x-0.5 transition">
              <ArrowRight size={12} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default ProjectCard;
