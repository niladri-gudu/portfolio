import type { Metadata } from "next";
import ProjectCard from "@/components/projectCard/ProjectCard";
import { projectItems } from "@/components/data/projects";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
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
      <section className="flex flex-col my-8 gap-6 pt-4">
        <Reveal>
          <div className="flex flex-col items-center gap-5">
            <h1 className="flex items-center justify-center gap-4 text-6xl xl:text-7xl font-ds font-extrabold">
              <span>Projects</span>
            </h1>
            <span
              aria-hidden
              className="h-1 w-20 rounded-full bg-linear-to-r from-accent-brand/60 to-accent-brand"
            />
          </div>
        </Reveal>

        <Reveal delay={0.03}>
          <p className="text-center text-lg text-muted-foreground mx-auto w-5/6">
            Things built and products shipped to the world.
          </p>
        </Reveal>
      </section>

      <Reveal delay={0.06}>
        <hr className="mx-3 rounded-xl" />
      </Reveal>

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
