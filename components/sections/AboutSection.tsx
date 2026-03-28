import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { personalData } from "@/components/data/personal";

export default function AboutSection() {
  return (
    <section className="space-y-6 mb-12">
      <Reveal delay={0.03}>
        <h2 className="text-md font-mono uppercase tracking-widest text-muted-foreground border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
          About
        </h2>
      </Reveal>

      <div className="flex flex-col md:flex-row gap-8 px-2">
        <Reveal delay={0.06}>
          <div className="relative w-full md:w-64 shrink-0 aspect-square rounded-4xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <Image
              src={personalData.about.image.src}
              alt={personalData.about.image.alt}
              fill
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <div className="flex flex-col justify-center gap-4">
          {personalData.about.paragraphs.map((p, idx) => (
            <Reveal key={idx} delay={0.06 + idx * 0.03}>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}