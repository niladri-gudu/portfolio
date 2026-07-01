import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { personalData } from "@/components/data/personal";
import Link from "next/link";
import SectionHeading from "@/components/sections/SectionHeading";

export default function AboutSection() {
  return (
    <section className="space-y-6 mb-12">
      <Reveal>
        <SectionHeading>About</SectionHeading>
      </Reveal>

      <div className="flex flex-col md:flex-row gap-8 px-2">
        <Reveal delay={0.06}>
          <Link href="/guestbook" prefetch className="group block">
            <div className="relative w-full md:w-64 shrink-0 aspect-square rounded-4xl overflow-hidden border border-neutral-200 dark:border-neutral-800 transition-all duration-300 group-hover:border-accent-brand/40 group-hover:shadow-lg group-hover:shadow-accent-brand/10">
              <Image
                src={personalData.about.image.src}
                alt={personalData.about.image.alt}
                fill
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </Link>
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
