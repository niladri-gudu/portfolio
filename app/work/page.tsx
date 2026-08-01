import type { Metadata } from "next";
import WorkCard from "@/components/workCard/WorkCard";
import { workItems } from "@/components/data/work";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Work",
  description:
    "Professional roles and teams joined by Niladri, a Backend and Systems Engineer.",
  path: "/work",
});

export default function WorkPage() {
  const d = (i: number) => (i + 1) * 0.03;

  return (
    <>
      <section className="flex flex-col my-8 gap-6 pt-4">
        <Reveal>
          <div className="flex flex-col items-center gap-5">
            <h1 className="flex items-center justify-center gap-6 text-6xl xl:text-7xl font-ds font-extrabold">
              <span>Work</span>
            </h1>
            <span
              aria-hidden
              className="h-1 w-20 rounded-full bg-linear-to-r from-accent-brand/60 to-accent-brand"
            />
          </div>
        </Reveal>

        <Reveal delay={d(0)}>
          <p className="text-center text-lg text-muted-foreground mx-auto w-5/6">
            Professional roles and teams joined along the way.
          </p>
        </Reveal>
      </section>

      <Reveal delay={d(1)}>
        <hr className="mx-3 rounded-xl" />
      </Reveal>

      <section className="flex flex-col gap-5 pb-8">
        <Reveal delay={d(2)}>
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
