import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About | Tomlin Construction Group",
  description:
    "Tomlin Construction Group is a Central Texas builder offering a personal, hands-on approach. Meet owner Ben, a Texas A&M graduate with more than a decade of construction experience.",
  path: "/about",
});

const COMPANY_PARAGRAPHS = [
  "Tomlin Construction Group was founded to offer a more personal approach to building. We believe the best projects come from close collaboration, where every decision is made with our clients, not for them.",
  "Rather than building on volume, we take on a select number of projects so each one receives the time and attention it deserves. Clients work directly with Ben from the first site visit through the final walkthrough, with clear communication and honest guidance at every step.",
  "Rooted in Central Texas, we understand the land, the climate, and the character that make this region unique, and we build with the care it takes to honor them.",
];

const BEN_PARAGRAPHS = [
  "Ben has built his career on a commitment to doing things the right way. He believes a successful project is measured not only by the finished product, but by the experience along the way, and that earning a client’s trust is at the heart of it.",
  "A Texas A&M University graduate with more than a decade in the construction industry, Ben has worked on custom homes, estates, renovations, and commercial projects throughout Georgetown, Liberty Hill, and the greater Austin area. He takes the time to understand each client’s vision and keeps them informed at every step.",
  "Outside of work, Ben enjoys time with his wife and their two sons, coaching their sports teams and reading their favorite books at bedtime. Whether at home, on the sidelines, or on the job, he values the relationships he builds with the people around him.",
];

const HEADING_CLASS =
  "font-brand pl-[0.2em] text-center text-3xl font-medium uppercase tracking-[0.2em] text-maroon sm:text-4xl";

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="mt-10 flex flex-col gap-6">
      {items.map((paragraph) => (
        <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-foreground/80">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 sm:py-24">
      <section>
        <h1 className={HEADING_CLASS}>About Us</h1>
        <Paragraphs items={COMPANY_PARAGRAPHS} />
      </section>

      <section className="mt-16 border-t border-maroon/15 pt-16 sm:mt-20 sm:pt-20">
        <h2 className={HEADING_CLASS}>About Ben Tomlin</h2>
        <Paragraphs items={BEN_PARAGRAPHS} />
      </section>
    </div>
  );
}
