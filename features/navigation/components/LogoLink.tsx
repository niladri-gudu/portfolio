import Link from "next/link";

export default function LogoLink() {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="font-telma text-4xl leading-none font-bold select-none transition-opacity duration-300 hover:opacity-70"
    >
      n.
    </Link>
  );
}
