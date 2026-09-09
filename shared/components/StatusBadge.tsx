import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/features/projects/types";

const statusConfig: Record<ProjectStatus, { classes: string; label: string }> = {
  Building: {
    classes: "border-amber-400/20 bg-amber-400/10 text-amber-400",
    label: "Building",
  },
  Completed: {
    classes: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
    label: "Completed",
  },
  Shipped: {
    classes: "border-sky-400/20 bg-sky-400/10 text-sky-400",
    label: "Shipped",
  },
};

export default function StatusBadge({
  status,
  className,
}: {
  status?: ProjectStatus;
  className?: string;
}) {
  const current = statusConfig[status ?? "Building"] ?? statusConfig.Building;

  return (
    <div
      className={cn(
        "flex items-center gap-2 border rounded-md px-2 py-1 text-xs font-medium tracking-tight",
        current.classes,
        className
      )}
    >
      <svg height="6" width="6" className="animate-pulse">
        <circle cx="3" cy="3" r="3" fill="currentColor" />
      </svg>
      {current.label}
    </div>
  );
}
