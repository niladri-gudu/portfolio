import { cn } from "@/lib/utils";

export default function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "group relative flex items-center gap-3 pl-3 text-base font-mono uppercase tracking-widest text-muted-foreground",
        className
      )}
    >
      <span
        aria-hidden
        className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-linear-to-b from-accent-brand to-accent-brand/30"
      />
      {children}
    </h2>
  );
}
