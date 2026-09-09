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
    "Distributed backends by Niladribihari Mohanta: live diary withink.me, agentic RAG, HLS media pipelines, realtime social infra - plus onchain infra appendix.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Projects"
        description="Distributed backends first - live products, queues, realtime, media pipelines. Onchain infra at the end."
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
