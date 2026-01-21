"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import Reveal from "@/components/motion/Reveal";

export default function GithubGraph() {
  const { resolvedTheme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <div className="space-y-6">
      <Reveal delay={0.03}>
        <h2 className="text-sm font-mono uppercase tracking-widest text-muted-foreground border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
          GitHub Activity ({currentYear})
        </h2>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 overflow-x-auto overflow-y-hidden mx-2">
          <GitHubCalendar
            username="niladri-gudu"
            year={currentYear}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
            blockSize={12}
            blockRadius={1.5}
            blockMargin={3}
            fontSize={12}
            theme={{
              light: ["#ebebeb", "#d6d6d6", "#bdbdbd", "#a0a0a0", "#808080"],
              dark: ["#0a0a0a", "#1f1f1f", "#3a3a3a", "#5a5a5a", "#ffffff"],
            }}
            labels={{
              totalCount: "{{count}} contributions so far",
            }}
          />
        </div>
      </Reveal>
    </div>
  );
}
