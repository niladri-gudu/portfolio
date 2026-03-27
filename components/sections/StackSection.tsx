import Reveal from "@/components/motion/Reveal";
import {
  Tailwind, Next, Typescript, Vercel, Shadcn, Supabase,
  Hetzner, Coolify, GCP, Turborepo, Wagmi, Viem,
  Rainbowkit, Solidity, Nest, Redis, Prisma, Postgres
} from "@/components/icons";

const stack = [
  { name: "Next.js", icon: Next },
  { name: "TypeScript", icon: Typescript },
  { name: "Tailwind", icon: Tailwind },
  { name: "Solidity", icon: Solidity },
  { name: "Wagmi", icon: Wagmi },
  { name: "Viem", icon: Viem },
  { name: "Rainbowkit", icon: Rainbowkit },
  { name: "NestJS", icon: Nest },
  { name: "Prisma", icon: Prisma },
  { name: "Postgres", icon: Postgres },
  { name: "Redis", icon: Redis },
  { name: "Supabase", icon: Supabase },
  { name: "Vercel", icon: Vercel },
  { name: "Turborepo", icon: Turborepo },
  { name: "Hetzner", icon: Hetzner },
  { name: "Coolify", icon: Coolify },
  { name: "GCP", icon: GCP },
  { name: "Shadcn", icon: Shadcn },
];

export default function StackSection() {
  return (
    <section className="space-y-6">
      <Reveal delay={0.03}>
        <h2 className="text-md font-mono uppercase tracking-widest text-muted-foreground border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
          Stack
        </h2>
      </Reveal>
      <Reveal delay={0.06}>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 px-2">
          {stack.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="group flex flex-col items-center gap-2 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:-translate-y-px transition-all duration-300"
              >
                <Icon className="w-7 h-7 text-foreground" />
                <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}