"use client";

import { useState } from "react";
import ProjectCard from "@/features/projects/components/ProjectCard";
import { projectItems } from "@/features/projects/data";
import Reveal from "@/shared/motion/Reveal";
import Stagger from "@/shared/motion/Stagger";
import StaggerItem from "@/shared/motion/StaggerItem";
import SectionHeading from "@/shared/components/SectionHeading";
import ViewMoreButton from "@/shared/components/ViewMoreButton";

const ITEMS_PER_PAGE = 2;

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayItems = showAll ? projectItems : projectItems.slice(0, ITEMS_PER_PAGE);
  const hasMore = projectItems.length > ITEMS_PER_PAGE;

  return (
    <section className="space-y-6">
      <Reveal>
        <SectionHeading>Projects</SectionHeading>
      </Reveal>

      <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2 divide-y divide-neutral-200 dark:divide-neutral-800 md:divide-y-0">
        {displayItems.map((item) => (
          <StaggerItem key={item.title}>
            <ProjectCard item={item} />
          </StaggerItem>
        ))}
      </Stagger>

      {hasMore && (
        <ViewMoreButton showAll={showAll} onToggle={() => setShowAll((v) => !v)} />
      )}
    </section>
  );
}