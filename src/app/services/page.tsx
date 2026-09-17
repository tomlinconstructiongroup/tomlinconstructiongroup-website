import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Tomlin Construction Group",
};

const SERVICES = [
  {
    name: "Residential Construction",
    description: "[Placeholder description — replace with your real service details.]",
  },
  {
    name: "Remodeling & Renovations",
    description: "[Placeholder description — replace with your real service details.]",
  },
  {
    name: "Project Management",
    description: "[Placeholder description — replace with your real service details.]",
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <h1 className="font-heading text-sm font-medium uppercase tracking-[0.3em] text-foreground/50">
        Services
      </h1>
      <p className="mt-4 font-serif text-3xl text-maroon">What We Offer</p>
      <p className="mt-4 text-foreground/70">
        [Replace this list with your actual services and service area.]
      </p>
      <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-maroon/10 bg-maroon/10 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <div key={service.name} className="bg-cream px-8 py-10">
            <h2 className="font-heading text-base uppercase tracking-wide text-maroon">
              {service.name}
            </h2>
            <p className="mt-3 text-sm text-foreground/70">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
