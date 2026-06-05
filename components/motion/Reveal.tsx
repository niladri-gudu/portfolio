"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Reveal({
  children,
  delay = 0,
  baseDelay = 0,
  y = 20,
}: {
  children: React.ReactNode;
  delay?: number;
  baseDelay?: number;
  y?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.35,
        delay: shouldReduceMotion ? 0 : baseDelay + delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: true,
        amount: "some",
      }}
    >
      {children}
    </motion.div>
  );
}
