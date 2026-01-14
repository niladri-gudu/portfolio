"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

type Props = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  y?: number;
};

export default function StaggerReveal({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  y = 18,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const items = React.Children.toArray(children);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {items.map((child, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
