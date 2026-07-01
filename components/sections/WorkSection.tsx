import WorkCard from "@/components/workCard/WorkCard";
import { workItems } from "@/components/data/work";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import SectionHeading from "@/components/sections/SectionHeading";

export default function WorkSection() {
  return (
    <section className="space-y-6">
      <Reveal>
        <SectionHeading>Work</SectionHeading>
      </Reveal>

      <Stagger className="grid grid-cols-1 gap-5 divide-y divide-neutral-200 dark:divide-neutral-800">
        {workItems.map((item, idx) => (
          <StaggerItem key={item.company + idx}>
            <WorkCard item={item} showToggle={idx !== 0} />
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
