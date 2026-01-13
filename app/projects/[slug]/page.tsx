import { projectItems } from "@/components/data/projects";
import ProjectDetails from "@/components/projectDetails/ProjectDetails";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projectItems.find((item) => item.slug === slug);

  if (!project) return notFound();

  return <ProjectDetails project={project} />;
}

export function generateStaticParams() {
  return projectItems.map((p) => ({ slug: p.slug }));
}
