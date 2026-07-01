import ProjectCard from "@/components/projectCard/ProjectCard";
import { projectItems } from "@/components/data/projects";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import SectionHeading from "@/components/sections/SectionHeading";

export default function ProjectsSection() {
  return (
    <section className="space-y-6">
      <Reveal>
        <SectionHeading>Projects</SectionHeading>
      </Reveal>

      <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 divide-y divide-neutral-200 dark:divide-neutral-800 md:divide-y-0">
        {projectItems.map((item) => (
          <StaggerItem key={item.title}>
            <ProjectCard item={item} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
