import Image from "next/image";
import GithubIcon from "@/components/ui/github-icon";
import WorldIcon from "@/components/ui/world-icon";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import StatusBadge from "@/shared/components/StatusBadge";

import type { ProjectItem } from "@/features/projects/types";

const ProjectCard = ({ item }: { item: ProjectItem }) => {
  return (
    <section className="group/card flex flex-col h-full pb-6 px-2">
      <div className="relative w-full aspect-3/2 rounded-xl overflow-hidden mb-4 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 group-hover/card:border-accent-brand/40 group-hover/card:shadow-lg group-hover/card:shadow-accent-brand/10">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
      </div>

      <main className="flex flex-col grow p-2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold transition-colors duration-300 group-hover/card:text-accent-brand">
            {item.title}
          </h3>

          <div className="flex gap-3">
            {item.links?.website && (
              <Link href={item.links.website} target="_blank">
                <Tooltip>
                  <TooltipTrigger className="cursor-pointer text-muted-foreground hover:text-accent-brand transition-colors">
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
                  <TooltipTrigger className="cursor-pointer text-muted-foreground hover:text-accent-brand transition-colors">
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
          <h3 className="mb-2 font-semibold">Technologies</h3>

          <div className="flex flex-wrap gap-1.5">
            {item.technologies.slice(0, 6).map((t) => {
              const Icon = t.icon;
              return (
                <span
                  key={t.name}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 text-xs font-medium text-neutral-600 dark:text-neutral-300"
                >
                  {Icon ? <Icon className="w-3.5 h-3.5" /> : null}
                  {t.name}
                </span>
              );
            })}
            {item.technologies.length > 6 && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md border border-dashed border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-400 dark:text-neutral-500">
                +{item.technologies.length - 6} more
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <StatusBadge status={item.status} />

          <Link
            href={`/projects/${item.slug}`}
            className="group inline-flex items-center gap-2 border border-slate-200 rounded-md px-3 py-1.5 text-xs bg-slate-50/50 text-slate-600 font-medium tracking-tight hover:border-accent-brand/40 hover:text-accent-brand dark:bg-neutral-900/50 dark:border-neutral-800 dark:text-neutral-400 dark:hover:text-accent-brand transition-colors"
          >
            <span>View Details</span>
            <span className="group-hover:translate-x-0.5 transition-transform">
              <ArrowRight size={12} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default ProjectCard;
