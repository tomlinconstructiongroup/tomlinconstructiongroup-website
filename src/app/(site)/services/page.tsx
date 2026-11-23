import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = pageMetadata({
  title: "Services | Tomlin Construction Group",
  description:
    "Custom homes, renovations and additions, estate and outdoor living, and commercial construction in Liberty Hill, Georgetown, and the surrounding areas.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-14 sm:py-24">
      <h1 className="font-brand pl-[0.2em] text-center text-3xl font-medium uppercase tracking-[0.2em] text-maroon sm:text-4xl">
        What We Offer
      </h1>
      <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-maroon/10 bg-maroon/10 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <div key={service.name} className="bg-cream px-8 py-10 text-center">
            <h2 className="font-brand text-lg font-medium uppercase tracking-[0.12em] text-maroon">
              {service.name}
            </h2>
            <p className="mx-auto mt-3 max-w-sm leading-relaxed text-foreground/70">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
