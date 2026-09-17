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
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-serif text-4xl text-maroon">Our Services</h1>
      <p className="mt-4 text-foreground/70">
        [Replace this list with your actual services and service area.]
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <div
            key={service.name}
            className="rounded-lg border border-maroon/15 bg-cream-dark/30 px-6 py-6"
          >
            <h2 className="font-serif text-xl text-maroon">{service.name}</h2>
            <p className="mt-2 text-sm text-foreground/70">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
