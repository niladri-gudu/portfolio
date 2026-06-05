"use client";

import { motion, animate } from "motion/react";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { pressableSnappy } from "@/lib/motion";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  if (!mounted) return null;

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  const toggleTheme = () => {
    if (!document.startViewTransition) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    const transition = document.startViewTransition(() => {
      setTheme(isDark ? "light" : "dark");
    });

    transition.ready.then(() => {
      animate(
        document.documentElement,
        { opacity: [0, 1] },
        { duration: 0.4, ease: "easeInOut" }
      );
    });
  };

  return (
    <motion.button
      {...pressableSnappy}
      onClick={toggleTheme}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md cursor-pointer",
        "border bg-background hover:bg-muted"
      )}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </motion.button>
  );
}
