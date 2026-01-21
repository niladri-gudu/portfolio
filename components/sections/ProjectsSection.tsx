import ProjectCard from "@/components/projectCard/ProjectCard";
import { projectItems } from "@/components/data/projects";
import Reveal from "@/components/motion/Reveal";

export default function ProjectsSection() {
  return (
    <section className="space-y-6 mt-12">
      <Reveal delay={0.03}>
        <h2 className="text-md font-mono uppercase tracking-widest text-muted-foreground border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
          Projects
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 divide-y divide-neutral-200 dark:divide-neutral-800 md:divide-y-0">
        {projectItems.map((item, idx) => (
          <Reveal key={item.title} delay={(idx + 1) * 0.03}>
            <ProjectCard item={item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
