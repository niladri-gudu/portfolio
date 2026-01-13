import WorkCard from "@/components/workCard/WorkCard";
import { workItems } from "@/components/data/work";

export default function WorkSection() {
  return (
    <section className="space-y-6 mt-12">
      <h2 className="text-md font-mono uppercase tracking-widest text-muted-foreground border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
        Work
      </h2>

      <div className="grid grid-cols-1 gap-5 divide-y divide-neutral-200 dark:divide-neutral-800">
        {workItems.map((item, idx) => (
          <WorkCard key={item.company + idx} item={item} showToggle={idx !== 0} />
        ))}
      </div>
    </section>
  );
}
