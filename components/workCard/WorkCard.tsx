import Link from "next/link";
import WorldIcon from "../ui/world-icon";
import TwitterXIcon from "../ui/twitter-x-icon";
import LinkedinIcon from "../ui/linkedin-icon";
import GithubIcon from "../ui/github-icon";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Shadcn, Tailwind, Typescript, Vercel, Next } from "../icons";

const WorkCard = () => {
  const technologies = [
    { name: "Next.js", icon: Next, link: "https://nextjs.org" },
    {
      name: "TypeScript",
      icon: Typescript,
      link: "https://www.typescriptlang.org",
    },
    { name: "Tailwind CSS", icon: Tailwind, link: "https://tailwindcss.com" },
    { name: "Shadcn UI", icon: Shadcn, link: "https://ui.shadcn.com" },
    { name: "Vercel", icon: Vercel, link: "https://vercel.com" },
  ];

  return (
    <section className="card flex flex-col h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-900 hover:shadow-lg">
      <main className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 w-14 h-14 shrink-0 shadow-sm">
            <Image
              src="./vercel.svg"
              alt="Company Logo"
              width={30}
              height={30}
              className="object-contain hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-3">
              <h2 className="text-lg font-semibold">Company Name</h2>
              <div className="flex items-center gap-1.5">
                <Link href={"#"} className="flex items-center">
                  <Tooltip>
                    <TooltipTrigger className="cursor-pointer text-muted-foreground">
                      <WorldIcon size={18} className="text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Website</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
                <Link href={"#"} className="flex items-center">
                  <Tooltip>
                    <TooltipTrigger className="cursor-pointer text-muted-foreground">
                      <TwitterXIcon
                        size={18}
                        className="text-muted-foreground"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow on X</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
                <Link href={"#"} className="flex items-center">
                  <Tooltip>
                    <TooltipTrigger className="cursor-pointer text-muted-foreground">
                      <LinkedinIcon
                        size={18}
                        className="text-muted-foreground"
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Connect on LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
                <Link href={"#"} className="flex items-center">
                  <Tooltip>
                    <TooltipTrigger className="cursor-pointer text-muted-foreground">
                      <GithubIcon size={18} className="text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Github</p>
                    </TooltipContent>
                  </Tooltip>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-muted-foreground text-sm">
                Frontend Developer
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:items-end border-t border-neutral-100 pt-3 md:border-none md:pt-0 dark:border-neutral-800">
          <h3 className="text-sm">July 2025 - December 2025</h3>
          <h3 className="text-sm text-muted-foreground">
            Bangalore, India (On-Site)
          </h3>
        </div>
      </main>

      <div className="mt-6 flex flex-col gap-4">
        <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
          Summary
        </h3>
        <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            veritatis id magni quod aliquam, vero maiores dolore rem ipsa totam
            eius?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            quidem autem fugit, odit illo et necessitatibus similique, minus
            officia expedita animi?
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            nihil illum aspernatur similique voluptate, minima vitae minus
            corrupti, itaque debitis modi!
          </li>
        </ul>

        <div className="gap-2 mt-2">
          <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100 border-l-2 border-neutral-200 dark:border-neutral-700 pl-3 mb-4">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-2 pl-3 mb-2">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <Link
                  key={tech.name}
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tracking-tight px-2 py-1.5 rounded-md text-xs font-bold border border-neutral-200 bg-neutral-50 text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Icon className="w-4 h-4" />
                  {tech.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkCard;
