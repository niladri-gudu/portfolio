import type { Metadata } from "next";
import { projectItems } from "@/components/data/projects";
import ProjectDetails from "@/components/projectDetails/ProjectDetails";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectItems.find((item) => item.slug === slug);

  if (!project) return {};

  return buildMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
    imageUrl: project.image,
    type: "article",
  });
}

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
