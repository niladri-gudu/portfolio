"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const itemVariants: Variants = {
  hidden: { y: 14 },
  show: {
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.15 }}
      variants={itemVariants}
    >
      {children}
    </motion.div>
  );
}
