import HeaderNav from "./HeaderNav";
import ThemeToggle from "../theme/ThemeToggle";
import LogoLink from "./LogoLink";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-border bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <LogoLink />

        <div className="flex items-center gap-4 sm:gap-6 text-sm">
          <HeaderNav />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
