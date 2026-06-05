import WorkCard from "@/components/workCard/WorkCard";
import { workItems } from "@/components/data/work";
import Reveal from "@/components/motion/Reveal";

export default function WorkSection() {
  return (
    <section className="space-y-6">
      <Reveal delay={0.03}>
        <h2 className="text-base font-mono uppercase tracking-widest text-muted-foreground border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
          Work
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 divide-y divide-neutral-200 dark:divide-neutral-800">
        {workItems.map((item, idx) => (
          <Reveal key={item.company + idx} delay={(idx + 1) * 0.03}>
            <WorkCard item={item} showToggle={idx !== 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
