import ProjectCard from "@/components/projectCard/ProjectCard";
import { projectItems } from "@/components/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <section className="flex flex-col my-8 gap-6 pt-4">
        <h1 className="flex items-center justify-center gap-4 text-6xl xl:text-7xl font-ds font-extrabold">
          <span>Projects</span>
        </h1>

        <p className="text-center text-lg text-muted-foreground mx-auto w-5/6">
          Things built and products shipped to the world.
        </p>
      </section>

      <hr className="border mx-3 rounded-xl" />

      <section className="flex flex-col gap-5 pb-8">
        <h2 className="px-6 pt-5">
          All Projects <span className="text-muted-foreground">({projectItems.length})</span>
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-4">
          {projectItems.map((item) => (
            <ProjectCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
