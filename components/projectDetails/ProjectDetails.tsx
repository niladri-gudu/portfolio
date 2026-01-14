import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/components/ui/github-icon";
import WorldIcon from "@/components/ui/world-icon";
import BackButton from "../backButton/BackButton";
import type { ProjectItem } from "@/components/data/projects";

import { ArrowUpRight } from "lucide-react";

const SectionBlock = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mt-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-6 w-0.75 rounded-full bg-neutral-200 dark:bg-neutral-800" />
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>

      <div className="pl-4">{children}</div>
    </div>
  );
};

const InfoList = ({ items }: { items?: string[] }) => {
  if (!items || items.length === 0) return null;

  return (
    <ul className="space-y-1.5 text-muted-foreground leading-relaxed list-disc pl-5">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

const linkCardClass =
  "group flex items-center gap-3 px-4 py-3 rounded-xl border " +
  "border-neutral-200 dark:border-neutral-800 bg-background " +
  "transition-all duration-300 ease-out " +
  "hover:border-neutral-300 dark:hover:border-neutral-700 " +
  "hover:-translate-y-[1px] hover:shadow-sm dark:hover:shadow-neutral-950/40";

const linkIconWrapClass =
  "flex items-center justify-center w-9 h-9 rounded-lg " +
  "bg-muted text-muted-foreground " +
  "transition-all duration-300 ease-out " +
  "group-hover:bg-accent group-hover:text-accent-foreground " +
  "group-hover:scale-[1.06] group-hover:-rotate-3";

const linkArrowClass =
  "shrink-0 text-muted-foreground/40 opacity-50 " +
  "transition-all duration-300 ease-out " +
  "group-hover:text-primary group-hover:opacity-100 " +
  "group-hover:translate-x-1 group-hover:-translate-y-1";

const ProjectDetails = ({ project }: { project: ProjectItem }) => {
  return (
    <section className="px-4 py-10 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <BackButton />

        {project.status && (
          <div
            className={`flex items-center gap-2 rounded-md px-2 py-1 text-xs font-medium tracking-tight border
              ${
                project.status === "Building"
                  ? "border-amber-500/20 bg-amber-500/10 text-amber-500"
                  : "border-green-500/20 bg-green-500/10 text-green-500"
              }`}
          >
            <svg height="6" width="6" className="animate-pulse">
              <circle cx="3" cy="3" r="3" fill="currentColor" />
            </svg>
            {project.status}
          </div>
        )}
      </div>

      <div className="relative mx-2 aspect-3/2 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 mb-8">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mb-8 pl-2 mx-1">
        <h1 className="text-4xl font-bold mb-3">{project.title}</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {project.description}
        </p>
      </div>

      {(project.links?.website || project.links?.github) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-1 mx-1">
          {project.links?.website && (
            <Link
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className={linkCardClass}
            >
              <div className={linkIconWrapClass}>
                <WorldIcon />
              </div>

              <div className="flex-1 flex flex-col gap-0.5 min-w-0">
                <div className="text-sm font-bold text-foreground tracking-tight">
                  Live Demo
                </div>
                <div className="text-[10px] font-mono text-muted-foreground truncate">
                  {project.links.website
                    .replace("https://", "")
                    .replace("http://", "")}
                </div>
              </div>

              <ArrowUpRight size={16} className={linkArrowClass} />
            </Link>
          )}

          {project.links?.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={linkCardClass}
            >
              <div className={linkIconWrapClass}>
                <GithubIcon />
              </div>

              <div className="flex-1 flex flex-col gap-0.5 min-w-0">
                <div className="text-sm font-bold text-foreground tracking-tight">
                  Source Code
                </div>
                <div className="text-[10px] font-mono text-muted-foreground truncate">
                  {project.links.github
                    .replace("https://", "")
                    .replace("http://", "")}
                </div>
              </div>

              <ArrowUpRight size={16} className={linkArrowClass} />
            </Link>
          )}
        </div>
      )}

      {project.overview && (
        <SectionBlock title="Overview">
          <p className="text-muted-foreground leading-relaxed">
            {project.overview}
          </p>
        </SectionBlock>
      )}

      <SectionBlock title="What Users Can Do">
        <InfoList items={project.whatUsersCanDo} />
      </SectionBlock>

      <SectionBlock title="Why I built this">
        <InfoList items={project.whyIBuiltThis} />
      </SectionBlock>

      <SectionBlock title="Tech Stack">
        <div className="flex gap-3 flex-wrap">
          {project.technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 text-sm bg-white dark:bg-neutral-900"
              >
                {Icon ? <Icon className="w-5 h-5" /> : null}
                <span>{tech.name}</span>
              </div>
            );
          })}
        </div>
      </SectionBlock>

      <SectionBlock title="After launch & Impact">
        <InfoList items={project.afterLaunchImpact} />
      </SectionBlock>

      <SectionBlock title="Future Plans">
        <InfoList items={project.futurePlans} />
      </SectionBlock>
    </section>
  );
};

export default ProjectDetails;
