"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function HeaderNav() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  const links = [
    { href: "/work", label: "Work" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="flex items-center gap-5 sm:gap-7 text-sm">
      {links.map((link) => {
        const isActive =
          pathname === link.href || pathname.startsWith(link.href + "/");

        return (
          <Link
            key={link.href}
            href={link.href}
            onMouseEnter={() => setHovered(link.href)}
            onMouseLeave={() => setHovered(null)}
            className={`relative py-1 font-semibold transition-colors ${
              isActive
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.label}

            {/* hover underline (non-active links) */}
            <span
              aria-hidden
              className={`absolute -bottom-0.5 left-0 h-px w-full origin-left rounded-full bg-accent-brand transition-transform duration-300 ease-out ${
                hovered === link.href && !isActive
                  ? "scale-x-100"
                  : "scale-x-0"
              }`}
            />

            {/* active underline (slides between routes) */}
            {isActive && (
              <motion.span
                aria-hidden
                layoutId="nav-underline"
                className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-accent-brand"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
