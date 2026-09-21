import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "Concept: Reclaimed-Style Layout | Tomlin Construction Group",
  robots: { index: false, follow: false },
};

const NAV_LINKS = ["Home", "Portfolio", "How We Build", "About", "Contact"];

const PORTFOLIO = [
  "The Hartwell Residence",
  "Maple Ridge Remodel",
  "Cedar Creek Addition",
  "The Alder House",
  "Birchwood Renovation",
  "The Sawmill Project",
];

const PROCESS_STEPS = [
  { step: "01", title: "Consultation", copy: "[Placeholder — describe your initial client consultation.]" },
  { step: "02", title: "Design", copy: "[Placeholder — describe your design/planning phase.]" },
  { step: "03", title: "Construction", copy: "[Placeholder — describe your build process.]" },
  { step: "04", title: "Walkthrough", copy: "[Placeholder — describe your final walkthrough/handoff.]" },
];

const FIELD_NOTES = ["Choosing the Right Foundation", "What to Expect During a Remodel", "Our Favorite 2026 Finishes"];

export default function ConceptReclaimedPage() {
  return (
    <div className="bg-cream text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-maroon/10 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-icon.svg" alt="Tomlin Construction Group" width={28} height={35} />
            <span className="font-serif text-base tracking-wide text-maroon">
              Tomlin Construction Group
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <span
                key={link}
                className="text-xs font-medium uppercase tracking-[0.15em] text-foreground/70 transition hover:text-maroon"
              >
                {link}
              </span>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-32 text-center">
        <p className="font-serif text-5xl text-maroon sm:text-6xl">Built To Last</p>
        <p className="max-w-xl text-base text-foreground/70">
          Quality craftsmanship and reliable construction services, delivered
          with the same care whether it&rsquo;s a new build or a full renovation.
        </p>
        <Link
          href="/contact"
          className="mt-2 border border-maroon px-10 py-3 text-xs font-medium uppercase tracking-[0.2em] text-maroon transition hover:bg-maroon hover:text-cream"
        >
          Get Started
        </Link>
      </section>

      {/* Company intro */}
      <section className="border-t border-maroon/10">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <p className="text-lg leading-relaxed text-foreground/70">
            [Placeholder — a short, one-paragraph introduction to Tomlin
            Construction Group: your experience, your approach, what makes
            clients choose you.]
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block text-xs font-medium uppercase tracking-[0.2em] text-maroon underline underline-offset-4"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Portfolio */}
      <section className="border-t border-maroon/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-xs font-medium uppercase tracking-[0.3em] text-foreground/50">
            Portfolio
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO.map((project) => (
              <div key={project}>
                <PhotoPlaceholder label="Project Photo" className="aspect-[4/3]" />
                <p className="mt-3 text-sm font-medium text-foreground/80">{project}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build */}
      <section className="border-t border-maroon/10 bg-cream-dark/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-center text-xs font-medium uppercase tracking-[0.3em] text-foreground/50">
            How We Build
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step}>
                <p className="font-serif text-3xl text-maroon/40">{item.step}</p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-foreground/80">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-foreground/60">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field notes */}
      <section className="border-t border-maroon/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-xs font-medium uppercase tracking-[0.3em] text-foreground/50">
            From the Field
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {FIELD_NOTES.map((title) => (
              <div key={title}>
                <PhotoPlaceholder label="Photo" className="aspect-[3/2]" />
                <p className="mt-3 text-sm font-medium text-foreground/80">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-maroon/10">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-foreground/50">About</h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            [Placeholder — a short teaser paragraph about your company story,
            with a link through to the full About page.]
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-maroon underline underline-offset-4"
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-maroon/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-14 text-center">
          <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium uppercase tracking-[0.15em] text-foreground/60">
            {NAV_LINKS.map((link) => (
              <span key={link}>{link}</span>
            ))}
          </nav>
          <div className="flex gap-4 text-xs uppercase tracking-[0.15em] text-foreground/40">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Houzz</span>
          </div>
          <p className="text-xs text-foreground/40">
            &copy; {new Date().getFullYear()} Tomlin Construction Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
