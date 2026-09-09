import type { Metadata } from "next";
import WorkCard from "@/features/work/components/WorkCard";
import { workItems } from "@/features/work/data";
import Reveal from "@/shared/motion/Reveal";
import Stagger from "@/shared/motion/Stagger";
import StaggerItem from "@/shared/motion/StaggerItem";
import PageHero from "@/shared/components/PageHero";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Professional roles and teams joined by Niladri, a Backend and AI Engineer.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        title="Work"
        description="Professional roles and teams joined along the way."
      />

      <section className="flex flex-col gap-5 pb-8">
        <Reveal delay={0.09}>
          <h2 className="px-6 pt-5 pb-2">
            All Experiences{" "}
            <span className="text-muted-foreground">({workItems.length})</span>
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-5 px-4 divide-y divide-neutral-200 dark:divide-neutral-800">
          {workItems.map((item, idx) => (
            <StaggerItem key={`${item.company}-${idx}`}>
              <WorkCard item={item} showToggle={false} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
