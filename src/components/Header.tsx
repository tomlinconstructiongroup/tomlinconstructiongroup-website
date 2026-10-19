"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  // The home page hero carries the full logo, so the header there is just
  // white navigation floating over the photo.
  if (pathname === "/") {
    return (
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-5 px-4 py-6 sm:justify-end sm:gap-10 sm:px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.href === pathname ? "page" : undefined}
              className="border-b border-transparent pb-1 text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-white/85 transition hover:text-white aria-[current=page]:border-white/70 aria-[current=page]:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-maroon/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          {/* Small-size monogram: bolder strokes so it stays crisp at header size. */}
          <Image src="/logo-icon-small.svg" alt="" width={44} height={50} preload />
          {/* Same proportions as the contact-page lockup, scaled down. */}
          <span className="font-brand flex flex-col items-center leading-none text-maroon">
            <span className="-mr-[0.12em] text-2xl font-semibold uppercase tracking-[0.12em]">Tomlin</span>
            <span className="mt-1.5 -mr-[0.24em] text-[0.7rem] font-semibold uppercase tracking-[0.24em]">
              Construction Group
            </span>
          </span>
        </Link>
        <nav className="flex items-center gap-6 sm:gap-8">
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
