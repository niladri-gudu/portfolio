import Link from "next/link";
import SocialLinks from "@/shared/components/SocialLinks";
import { getSeason } from "@/lib/season";

export default function Footer() {
  const season = getSeason();

  return (
    <footer className="mt-12 bg-background">
      <hr className="mx-4 sm:mx-6 h-px border-0 rounded-full bg-linear-to-r from-neutral-200 dark:from-neutral-800 to-transparent" />


      <div className="mx-auto w-full px-4 sm:px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between md:block">
            <Link
              href="/"
              className="text-3xl md:text-4xl font-bold font-telma"
            >
              n.
            </Link>

            <div className="md:hidden">
              <SocialLinks iconSize={20} />
            </div>
          </div>

          <div className="hidden md:block">
            <SocialLinks iconSize={22} className="gap-10" />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Niladri.
            {season && (
              <span className="ml-1.5" title={season.name} aria-label={season.name}>
                {season.emoji}
              </span>
            )}
          </p>

          <p className="text-xs text-muted-foreground">
            Interested in working together? Reach out.
          </p>
        </div>
      </div>
    </footer>
  );
}
