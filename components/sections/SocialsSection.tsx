import { ArrowUpRight } from "lucide-react";
import { socials } from "@/components/data/socials";
import Reveal from "@/components/motion/Reveal";
import Stagger from "@/components/motion/Stagger";
import StaggerItem from "@/components/motion/StaggerItem";
import SectionHeading from "@/components/sections/SectionHeading";

const socialCardClass =
  "group flex items-center gap-3 px-4 py-3 rounded-xl border " +
  "border-neutral-200 dark:border-neutral-800 bg-background " +
  "transition-all duration-300 ease-out " +
  "hover:border-accent-brand/40 " +
  "hover:-translate-y-[2px] hover:shadow-md hover:shadow-accent-brand/5 dark:hover:shadow-neutral-950/40";

const socialIconWrapClass =
  "flex items-center justify-center w-9 h-9 rounded-lg " +
  "bg-muted text-muted-foreground " +
  "transition-all duration-300 ease-out " +
  "group-hover:bg-accent-brand/10 group-hover:text-accent-brand " +
  "group-hover:scale-[1.06] group-hover:-rotate-3";

const socialArrowClass =
  "shrink-0 text-muted-foreground/40 opacity-50 " +
  "transition-all duration-300 ease-out " +
  "group-hover:text-accent-brand group-hover:opacity-100 " +
  "group-hover:translate-x-1 group-hover:-translate-y-1";

export default function SocialsSection() {
  return (
    <div className="space-y-6 pb-8">
      <Reveal>
        <SectionHeading>Connect with me</SectionHeading>
      </Reveal>

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-2">
        {socials.map((link) => {
          const Icon = link.icon;

          return (
            <StaggerItem key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={socialCardClass}
              >
                <div className={socialIconWrapClass}>
                  <Icon size={18} />
                </div>

                <div className="flex-1 flex flex-col gap-0.5 min-w-0">
                  <div className="text-sm font-bold text-foreground tracking-tight">
                    {link.name}
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground truncate">
                    {link.username}
                  </div>
                </div>

                <ArrowUpRight size={16} className={socialArrowClass} />
              </a>
            </StaggerItem>
          );
        })}
      </Stagger>
    </div>
  );
}
