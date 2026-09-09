import HeaderNav from "./HeaderNav";
import ThemeToggle from "./ThemeToggle";
import SearchButton from "@/features/search/components/SearchButton";
import LogoLink from "./LogoLink";
import ScrollProgress from "./ScrollProgress";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-border bg-background/80 backdrop-blur-md">
      <ScrollProgress />
      <div className="mx-auto w-full px-4 sm:px-6 h-16 flex items-center justify-between">
        <LogoLink />

        <div className="flex items-center gap-4 sm:gap-6 text-sm">
          <HeaderNav />
          <SearchButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
