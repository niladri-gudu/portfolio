import Image from "next/image";
import GithubIcon from "../ui/github-icon";
import WorldIcon from "../ui/world-icon";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Shadcn, Tailwind, Typescript, Vercel, Next } from "../icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProjectCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="card flex flex-col h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900 hover:shadow-lg">
      <div className="relative w-full aspect-3/2 rounded-xl overflow-hidden mb-4">
        <Image
          src="/nature.jpg"
          alt="Niladri"
          fill
          className="object-cover"
          priority
        />
      </div>

      <main className="flex flex-col grow p-2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex gap-3">
            <Tooltip>
              <TooltipTrigger className="cursor-pointer text-muted-foreground">
                <WorldIcon />
              </TooltipTrigger>
              <TooltipContent>
                <p>View Website</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger className="cursor-pointer text-muted-foreground">
                <GithubIcon />
              </TooltipTrigger>
              <TooltipContent>
                <p>View Source</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <p className="text-sm font-semibold text-muted-foreground mb-4 grow">
          {description}
        </p>

        <div className="mb-6">
          <h3 className="mb-2 text-muted-foreground font-semibold">
            Technologies
          </h3>
          <div>
            <div className="flex cursor-pointer gap-2">
              <Tooltip>
                <TooltipTrigger className="cursor-pointer">
                  <Next className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Next.js</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger className="cursor-pointer">
                  <Typescript className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>TypeScript</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger className="cursor-pointer">
                  <Vercel className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Vercel</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger className="cursor-pointer">
                  <Tailwind className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tailwind CSS</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger className="cursor-pointer">
                  <Shadcn className="w-6 h-6 transition-transform duration-300 hover:scale-125" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Shadcn/ui</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 border border-amber-500/20 rounded-md px-2 py-1 text-xs bg-amber-500/10 text-amber-500 font-medium tracking-tight">
            <svg height="6" width="6" className="animate-pulse">
              <circle cx="3" cy="3" r="3" fill="currentColor" />
            </svg>
            Building
          </div>
          <Link
            href="#"
            className="group inline-flex items-center gap-2 border border-slate-200 rounded-md px-3 py-1.5 text-xs bg-slate-50/50 text-slate-600 font-medium tracking-tight hover:bg-white hover:text-slate-900 dark:bg-neutral-900/50 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-200"
          >
            <span>View Details</span>
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight size={12} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </main>
    </section>
  );
};
export default ProjectCard;