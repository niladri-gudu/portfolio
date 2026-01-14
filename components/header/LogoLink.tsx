"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { pressableSoft } from "@/lib/motion";

export default function LogoLink() {
  return (
    <motion.div {...pressableSoft}>
      <Link
        href="/"
        aria-label="Home"
        className="font-telma text-4xl leading-none font-bold select-none"
      >
        n.
      </Link>
    </motion.div>
  );
}
