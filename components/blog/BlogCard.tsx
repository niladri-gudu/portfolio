import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-6 transition-all border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
    >
      <time className="shrink-0 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/40 sm:w-28">
        {new Date(post.date).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })}
      </time>

      <div className="flex-1 space-y-1.5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold tracking-tight text-foreground dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.2)] transition-all duration-300 dark:group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            {post.title}
          </h3>

          <div className="flex items-center gap-1.5 mt-1 shrink-0 text-foreground/80">
            <span className="text-[11px] font-medium sm:opacity-0 sm:-translate-x-2 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 transition-all duration-300">
              Read post
            </span>
            <ArrowRight
              size={14}
              className="sm:group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
        </div>

        <p className="text-sm text-muted-foreground/90 line-clamp-2 leading-relaxed max-w-[95%]">
          {post.description}
        </p>

        <div className="flex items-center gap-3 pt-1">
          {post.tags.map((tag) => (
            <div key={tag} className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-muted-foreground/30 group-hover:text-emerald-500/50 transition-colors">
                #
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/50 group-hover:text-foreground/80 transition-colors">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}