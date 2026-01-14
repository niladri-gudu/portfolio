"use client";

import React from "react";
import { motion, type Variants } from "motion/react";

type RevealMode = "scroll" | "mount";

type RevealGroupProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  mode?: RevealMode;
  once?: boolean;
  amount?: number;
  margin?: string;
};

const containerVariants = (delay = 0, stagger = 0.045): Variants => ({
  hidden: {},
  show: {
    transition: {
      delayChildren: delay,
      staggerChildren: stagger,
    },
  },
});

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.985,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function RevealGroup({
  children,
  className,
  delay = 0,
  stagger = 0.045,
  mode = "scroll",
  once = true,
  amount = 0.35,
  margin = "0px 0px -25% 0px",
}: RevealGroupProps) {
  if (mode === "mount") {
    return (
      <motion.div
        className={className}
        variants={containerVariants(delay, stagger)}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={containerVariants(delay, stagger)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin }}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function RevealItem({ children, className }: RevealItemProps) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
