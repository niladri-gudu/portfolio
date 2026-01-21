import ProjectCard from "@/components/projectCard/ProjectCard";
import { projectItems } from "@/components/data/projects";
import Reveal from "@/components/motion/Reveal";

export default function ProjectsPage() {
  return (
    <>
      <section className="flex flex-col my-8 gap-6 pt-4">
        <Reveal>
          <h1 className="flex items-center justify-center gap-4 text-6xl xl:text-7xl font-ds font-extrabold">
            <span>Projects</span>
          </h1>
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

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-4 divide-y divide-neutral-200 dark:divide-neutral-800 md:divide-y-0">
          {projectItems.map((item, idx) => (
            <Reveal key={item.slug} delay={(idx + 1) * 0.03}>
              <ProjectCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
