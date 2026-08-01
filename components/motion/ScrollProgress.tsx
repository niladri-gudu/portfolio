"use client";

import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "motion/react";

const SHOW_ON_PATHS = ["/", "/work", "/projects", "/blog"];

export default function ScrollProgress() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (shouldReduceMotion || !SHOW_ON_PATHS.includes(pathname)) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-linear-to-r from-accent-brand/60 to-accent-brand"
    />
  );
}
