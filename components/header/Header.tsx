import Link from "next/link"
import ThemeToggle from "../theme/ThemeToggle"

export default function Header() {
    const links = [
        { href: "/works", label: "Works" },
        { href: "/projects", label: "Projects" },
        { href: "/blogs", label: "Blogs" },
    ]

    return (
        <header className="sticky top-0 z-50 flex items-center px-6 py-4 justify-between bg-background">
            <Link href="/" className="text-4xl font-bold flex items-center font-telma">n.</Link>
            <nav className="flex items-center gap-4">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                ))}
                <ThemeToggle />
            </nav>
        </header>
    )
}