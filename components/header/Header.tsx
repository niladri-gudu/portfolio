import Link from "next/link";
import ThemeToggle from "../theme/ThemeToggle";
import CursorHover from "../cursor/CursorHover";

export default function Header() {
  const links = [
    { href: "/work", label: "Work" },
    { href: "/projects", label: "Projects" },
    // { href: "/blogs", label: "Blogs" },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center px-6 py-4 justify-between bg-background">
        {/* <CursorHover> */}
            <Link href="/" className="text-4xl font-bold font-telma">
                n.
            </Link>
        {/* </CursorHover> */}

      <nav className="flex items-center gap-4">
        {links.map((link) => (
          // <span key={link.href}>
            <Link href={link.href} key={link.href}>{link.label}</Link>
          // </span>
        ))}

        {/* <CursorHover> */}
          <ThemeToggle />
        {/* </CursorHover> */}
      </nav>
    </header>
  );
}
