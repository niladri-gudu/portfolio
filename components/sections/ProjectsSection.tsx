"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProjectCard from "@/components/projectCard/ProjectCard";
import { projectItems } from "@/components/data/projects";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import SectionHeading from "@/components/sections/SectionHeading";

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
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:border-accent-brand/40 hover:text-accent-brand transition-colors cursor-pointer"
          >
            {showAll ? "View less" : "View more"}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </section>
  );
}