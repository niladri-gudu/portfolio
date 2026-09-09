"use client";

import { useState } from "react";
import WorkCard from "@/features/work/components/WorkCard";
import { workItems } from "@/features/work/data";
import Reveal from "@/shared/motion/Reveal";
import Stagger from "@/shared/motion/Stagger";
import StaggerItem from "@/shared/motion/StaggerItem";
import SectionHeading from "@/shared/components/SectionHeading";
import ViewMoreButton from "@/shared/components/ViewMoreButton";

const ITEMS_PER_PAGE = 2;

export default function WorkSection() {
  const [showAll, setShowAll] = useState(false);
  const displayItems = showAll ? workItems : workItems.slice(0, ITEMS_PER_PAGE);
  const hasMore = workItems.length > ITEMS_PER_PAGE;

  return (
    <section className="space-y-6">
      <Reveal>
        <SectionHeading>Work</SectionHeading>
      </Reveal>

      <Stagger className="grid grid-cols-1 gap-5 divide-y divide-neutral-200 dark:divide-neutral-800">
        {displayItems.map((item, idx) => (
          <StaggerItem key={item.company + idx}>
            <WorkCard item={item} showToggle={idx !== 0} />
          </StaggerItem>
        ))}
      </Stagger>

      {hasMore && (
        <ViewMoreButton showAll={showAll} onToggle={() => setShowAll((v) => !v)} />
      )}
    </section>
  );
}