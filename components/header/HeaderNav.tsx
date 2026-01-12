"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
  const pathname = usePathname();

  const links = [
    { href: "/work", label: "Work" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="flex items-center gap-4 sm:gap-6 text-sm">
      {links.map((link) => {
        const isActive =
          pathname === link.href || pathname.startsWith(link.href + "/");

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`transition ${
              isActive
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
