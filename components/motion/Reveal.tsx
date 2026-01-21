"use client";

import { motion } from "motion/react";

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
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: baseDelay + delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: true,
        amount: 0.16,
      }}
    >
      {children}
    </motion.div>
  );
}
