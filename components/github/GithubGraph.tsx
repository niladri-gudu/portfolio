"use client";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import Reveal from "@/components/motion/Reveal";

export default function GithubGraph() {
  const { resolvedTheme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <section className="space-y-6 mb-10">
      <Reveal delay={0.03}>
        <h2 className="text-md font-mono uppercase tracking-widest text-muted-foreground border-l-2 border-neutral-200 dark:border-neutral-700 pl-3">
          GitHub Activity ({currentYear})
        </h2>
      </Reveal>
      <Reveal delay={0.06}>
        <div className="overflow-x-auto overflow-y-hidden px-2">
          <GitHubCalendar
            username="niladri-gudu"
            year={currentYear}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
            blockSize={12}
            blockRadius={2}
            blockMargin={4}
            fontSize={12}
            // theme={{
            //   light: ["#f0f0f0", "#d4d4d4", "#a3a3a3", "#737373", "#171717"],
            //   dark: ["#171717", "#262626", "#404040", "#737373", "#f5f5f5"],
            // }}
            labels={{
              totalCount: "{{count}} contributions so far",
            }}
            showColorLegend={false}
            tooltips={{
              activity: {
                withArrow: true,
                text: (activity) =>
                  `${activity.count} contribution${activity.count !== 1 ? "s" : ""} on ${activity.date}`,
              },
            }}
          />
        </div>
      </Reveal>
    </section>
  );
}
