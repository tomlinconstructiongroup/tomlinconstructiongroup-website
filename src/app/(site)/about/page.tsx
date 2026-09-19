import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tomlin Construction Group",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="font-heading text-sm font-medium uppercase tracking-[0.3em] text-foreground/50">
        About Us
      </h1>
      <p className="mt-4 font-serif text-3xl text-maroon">Our Story</p>
      <p className="mt-6 text-lg leading-relaxed text-foreground/80">
        Tomlin Construction Group is committed to delivering quality
        craftsmanship and dependable service on every project we take on.
        [Add your company story here — how you started, your experience, and
        what sets you apart.]
      </p>
      <p className="mt-4 text-lg leading-relaxed text-foreground/80">
        [Add details about your team, values, and the areas you serve.]
      </p>
    </section>
  );
}
