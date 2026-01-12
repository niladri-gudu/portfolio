import { ArrowUpRight } from "lucide-react";
import { socials } from "@/components/data/socials";

export default function SocialsSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
        Connect with me
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {socials.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 rounded-xl border hover:border-neutral-300 dark:hover:border-neutral-700"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon size={18} />
              </div>

              <div className="flex-1 flex flex-col gap-0.5">
                <div className="text-sm font-bold text-foreground tracking-tight">
                  {link.name}
                </div>
                <div className="text-[10px] font-mono text-muted-foreground">
                  {link.username}
                </div>
              </div>

              <ArrowUpRight
                size={16}
                className="text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
