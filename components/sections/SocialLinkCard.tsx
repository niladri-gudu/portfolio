"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Link as LinkIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const MotionArrow = motion(ArrowUpRight);

const ICONS = {
  mail: Mail,
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
} as const;

type IconKey = keyof typeof ICONS;

type Props = {
  name: string;
  username: string;
  href: string;
  iconKey: string;
};

export default function SocialLinkCard({ name, username, href, iconKey }: Props) {
  const [hovered, setHovered] = useState(false);

  const Icon = ICONS[iconKey as IconKey] ?? LinkIcon;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "group flex items-center gap-3 px-4 py-3 rounded-xl border bg-card",
        "hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
      )}
    >
      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
        <Icon size={18} />
      </div>

      <div className="flex-1 flex flex-col gap-0.5">
        <div className="text-sm font-bold text-foreground tracking-tight">
          {name}
        </div>
        <div className="text-[10px] font-mono text-muted-foreground">
          {username}
        </div>
      </div>

      <MotionArrow
        size={16}
        animate={
          hovered
            ? { x: 2, y: -2, opacity: 1 }
            : { x: 0, y: 0, opacity: 0.3 }
        }
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="text-muted-foreground"
      />
    </a>
  );
}
