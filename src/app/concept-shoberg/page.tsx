import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concept B (Shoberg-Inspired Layout) | Tomlin Construction Group",
  robots: { index: false, follow: false },
};

const NAV_LINKS = ["Projects", "Press", "Resources", "About", "Service", "Contact"];

const NEW_CONSTRUCTION = ["Project One", "Project Two", "Project Three", "Project Four", "Project Five"];
const REMODELS = ["Kitchen Remodel", "Primary Suite", "Full Home Reno", "Outdoor Living", "Basement Finish"];

function PlaceholderBlock({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-[#141414] text-center text-xs uppercase tracking-[0.2em] text-white/40 ${className}`}
    >
      [{label}]
    </div>
  );
}

export default function ConceptShobergPage() {
  return (
    <div className="font-luxury bg-[#141414] text-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-8 py-6 text-white">
        <Link href="/" className="rounded bg-cream px-3 py-1.5">
          <span className="font-serif text-sm tracking-wide text-maroon">
            Tomlin Construction Group
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-light tracking-wide md:flex">
          {NAV_LINKS.map((link) => (
            <span key={link} className="cursor-default text-white/80 transition hover:text-white">
              {link}
            </span>
          ))}
        </nav>
        <div className="flex items-center gap-6 text-sm font-light">
          <span className="hidden sm:inline">(000) 000-0000</span>
          <div className="flex flex-col gap-1.5">
            <span className="block h-px w-6 bg-white" />
            <span className="block h-px w-6 bg-white" />
            <span className="block h-px w-6 bg-white" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <PlaceholderBlock label="Hero Photo — Rotating Gallery" className="absolute inset-0" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <p className="font-luxury text-6xl italic font-light tracking-wide sm:text-8xl">
            Dream Big
          </p>
          <p className="mt-6 text-sm font-light uppercase tracking-[0.3em] text-white/70">
            Custom Homes &amp; Remodels
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-white" : "bg-white/30"}`}
            />
          ))}
        </div>
      </section>

      {/* A Home Without Compromise */}
      <section className="mx-auto max-w-6xl px-8 py-28 text-center">
        <p className="font-luxury text-3xl italic font-light sm:text-4xl">
          A Home Without Compromise
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <PlaceholderBlock label="Photo" className="aspect-[4/5]" />
          <PlaceholderBlock label="Photo" className="aspect-[4/5]" />
          <PlaceholderBlock label="Photo" className="aspect-[4/5]" />
        </div>
        <Link
          href="/about"
          className="mt-10 inline-block text-sm font-light tracking-wide text-white/80 underline underline-offset-4 transition hover:text-white"
        >
          How Tomlin Brings Its Clients&rsquo; Visions to Life →
        </Link>
      </section>

      {/* New Construction */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-8">
          <p className="font-luxury text-3xl italic font-light sm:text-4xl">New Construction</p>
        </div>
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-8 pb-4">
          {NEW_CONSTRUCTION.map((project) => (
            <PlaceholderBlock
              key={project}
              label={project}
              className="aspect-[4/3] w-80 shrink-0 snap-start"
            />
          ))}
        </div>
      </section>

      {/* Comprehensive Remodels */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-6xl px-8">
          <p className="font-luxury text-3xl italic font-light sm:text-4xl">
            Comprehensive Remodels
          </p>
        </div>
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-8 pb-4">
          {REMODELS.map((project) => (
            <PlaceholderBlock
              key={project}
              label={project}
              className="aspect-[4/3] w-80 shrink-0 snap-start"
            />
          ))}
        </div>
      </section>

      {/* Unmatched Attention to Detail */}
      <section className="relative flex h-[70vh] items-center justify-center border-t border-white/10">
        <PlaceholderBlock label="Full-Width Detail Photo" className="absolute inset-0" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center">
          <p className="font-luxury text-3xl italic font-light sm:text-4xl">
            Unmatched Attention to Detail
          </p>
          <Link
            href="/services"
            className="mt-6 inline-block text-sm font-light tracking-wide text-white/80 underline underline-offset-4 transition hover:text-white"
          >
            See the Craftsmanship →
          </Link>
        </div>
      </section>

      {/* Lifetime Home Support */}
      <section className="border-t border-white/10 py-28 text-center">
        <div className="mx-auto max-w-2xl px-8">
          <p className="font-luxury text-3xl italic font-light sm:text-4xl">
            Lifetime Home Support Service
          </p>
          <p className="mt-6 text-sm font-light leading-relaxed text-white/60">
            [Placeholder — describe your post-project maintenance or warranty
            support offering here.]
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-8 text-center">
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-light tracking-wide text-white/70">
            {NAV_LINKS.map((link) => (
              <span key={link}>{link}</span>
            ))}
          </nav>
          <Link
            href="/contact"
            className="border border-white/40 px-8 py-3 text-xs font-light uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-[#141414]"
          >
            Let&rsquo;s Talk
          </Link>
          <p className="text-xs font-light text-white/30">
            &copy; {new Date().getFullYear()} Tomlin Construction Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
