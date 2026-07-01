"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Reveal({
  children,
  delay = 0,
  baseDelay = 0,
  y = 16,
}: {
  children: React.ReactNode;
  delay?: number;
  baseDelay?: number;
  y?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: baseDelay + delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
    >
      {children}
    </motion.div>
  );
}
