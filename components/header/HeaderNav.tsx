"use client";

import { pressableSoft } from "@/lib/motion";
import { motion } from "motion/react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
  const pathname = usePathname();

  const links = [
    { href: "/work", label: "Work" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="flex items-center gap-4 sm:gap-6 text-sm">
      {links.map((link) => {
        const isActive =
          pathname === link.href || pathname.startsWith(link.href + "/");

        return (
          <motion.div
            {...pressableSoft}
            key={link.href}
          >
            <Link
              href={link.href}
              className={`transition font-semibold hover:underline hover:decoration-1 underline-offset-2 ${
                isActive
                  ? "text-foreground font-medium underline decoration-1"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
}
