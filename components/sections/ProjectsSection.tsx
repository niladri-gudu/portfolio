import ProjectCard from "@/components/projectCard/ProjectCard";
import { projectItems } from "@/components/data/projects";

export default function ProjectsSection() {
  return (
    <section className="space-y-6 mt-12">
      <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projectItems.map((item) => (
          <ProjectCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
