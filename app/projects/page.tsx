import type { Metadata } from "next";
import ProjectCard from "@/features/projects/components/ProjectCard";
import { projectItems } from "@/features/projects/data";
import Reveal from "@/shared/motion/Reveal";
import Stagger from "@/shared/motion/Stagger";
import StaggerItem from "@/shared/motion/StaggerItem";
import PageHero from "@/shared/components/PageHero";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description:
    "A collection of engineering projects built and shipped by Niladri - distributed systems, media pipelines, and Web3 products.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects"
        description="Things built and products shipped to the world."
      />

      <section className="flex flex-col gap-5 pb-8">
        <Reveal delay={0.09}>
          <h2 className="px-6 pt-5 pb-2">
            All Projects{" "}
            <span className="text-muted-foreground">
              ({projectItems.length})
            </span>
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 px-4 divide-y divide-neutral-200 dark:divide-neutral-800 md:divide-y-0">
          {projectItems.map((item) => (
            <StaggerItem key={item.slug}>
              <ProjectCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
