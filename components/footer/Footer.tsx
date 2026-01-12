import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function Footer() {
  const socials = [
    { href: "mailto:niladrigudu@gmail.com", label: "Email", icon: Mail },
    { href: "https://github.com/niladri-gudu", label: "GitHub", icon: Github },
    { href: "https://x.com/dev_niladri", label: "X (Twitter)", icon: Twitter },
    {
      href: "https://www.linkedin.com/in/niladribihari-mohanta",
      label: "LinkedIn",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="mt-12 bg-background">
      <hr className="mx-4 h-px border-0 rounded-full bg-linear-to-r from-neutral-200 dark:from-neutral-800 to-transparent" />


      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between md:block">
            <Link
              href="/"
              className="text-3xl md:text-4xl font-bold font-telma"
            >
              n.
            </Link>

            <div className="flex items-center gap-4 md:hidden">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <Tooltip key={s.label}>
                    <TooltipTrigger asChild>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="text-muted-foreground hover:text-foreground transition"
                      >
                        <Icon size={20} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{s.label}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <Tooltip key={s.label}>
                  <TooltipTrigger asChild>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="text-muted-foreground hover:text-foreground transition"
                    >
                      <Icon size={22} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{s.label}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Niladri
          </p>

          <p className="text-xs text-muted-foreground">
            Interested in working together? Reach out.
          </p>
        </div>
      </div>
    </footer>
  );
}
