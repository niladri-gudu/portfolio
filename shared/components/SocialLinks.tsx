import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  className?: string;
  iconSize?: number;
};

/** Single source of truth for social links. Replaces Footer + SocialsSection duplication. */
export default function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {socials.map((s) => {
        const Icon = s.icon;
        return (
          <Tooltip key={s.name}>
            <TooltipTrigger asChild>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-muted-foreground hover:text-accent-brand hover:-translate-y-0.5 transition-all duration-300"
              >
                <Icon size={iconSize} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{s.name}</p>
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
}
