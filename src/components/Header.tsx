import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-maroon/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-icon.svg" alt="Tomlin Construction Group" width={32} height={40} priority />
          <span className="font-serif text-base tracking-wide text-maroon">
            Tomlin Construction Group
          </span>
        </Link>
        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-xs font-medium uppercase tracking-[0.15em] text-foreground/70 transition hover:text-maroon"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
