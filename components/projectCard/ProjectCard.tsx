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
import Reveal from "../motion/Reveal";

const ProjectCard = ({ item }: { item: ProjectItem }) => {
  const d = (i: number) => (i + 1) * 0.03;

  const statusConfig = {
    Building: {
      classes: "border-amber-400/20 bg-amber-400/10 text-amber-400",
      label: "Building",
    },
    Completed: {
      classes: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
      label: "Completed",
    },
    Shipped: {
      classes: "border-sky-400/20 bg-sky-400/10 text-sky-400",
      label: "Shipped",
    },
  };

  const currentStatus =
    statusConfig[item.status as keyof typeof statusConfig] ||
    statusConfig.Building;

  return (
    <section className="flex flex-col h-full pb-6 px-2">
      <Reveal delay={d(0)}>
        <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-4">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </Reveal>

      <main className="flex flex-col grow p-2">
        <Reveal delay={d(1)}>
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
        </Reveal>

        <Reveal delay={d(2)}>
          <p className="text-sm font-semibold text-muted-foreground mb-4 grow">
            {item.description}
          </p>
        </Reveal>

        <Reveal delay={d(3)}>
          <div className="mb-6">
            <h3 className="mb-2 font-semibold">Technologies</h3>

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
        </Reveal>

        <Reveal delay={d(4)}>
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center gap-2 border rounded-md px-2 py-1 text-xs font-medium tracking-tight ${currentStatus.classes}`}
            >
              <svg height="6" width="6" className="animate-pulse">
                <circle cx="3" cy="3" r="3" fill="currentColor" />
              </svg>
              {currentStatus.label}
            </div>

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
        </Reveal>
      </main>
    </section>
  );
};

export default ProjectCard;
