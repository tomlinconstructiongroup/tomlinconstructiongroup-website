import Image from "next/image";
import Link from "next/link";

const SERVICE_HIGHLIGHTS = [
  {
    name: "Residential Construction",
    description: "[Placeholder — replace with real service copy.]",
  },
  {
    name: "Remodeling & Renovations",
    description: "[Placeholder — replace with real service copy.]",
  },
  {
    name: "Project Management",
    description: "[Placeholder — replace with real service copy.]",
  },
];

export default function Home() {
  return (
    <>
      <section className="flex min-h-[80vh] flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <Image src="/logo-icon.svg" alt="" width={64} height={80} priority />
        <div>
          <h1 className="font-serif text-5xl text-maroon sm:text-6xl">Tomlin</h1>
          <p className="mt-1 font-heading text-sm font-medium uppercase tracking-[0.35em] text-maroon/80">
            Construction Group
          </p>
        </div>
        <p className="font-heading max-w-xl text-xl uppercase tracking-wide text-foreground/70">
          Quality craftsmanship. Delivered.
        </p>
        <Link
          href="/contact"
          className="font-heading mt-4 rounded-none border border-maroon px-10 py-3 text-xs font-medium uppercase tracking-[0.2em] text-maroon transition hover:bg-maroon hover:text-cream"
        >
          Get Started
        </Link>
      </section>

      <section className="border-t border-maroon/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-heading text-center text-sm font-medium uppercase tracking-[0.3em] text-foreground/50">
            What We Do
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-maroon/10 bg-maroon/10 sm:grid-cols-3">
            {SERVICE_HIGHLIGHTS.map((service) => (
              <div key={service.name} className="bg-cream px-8 py-12 text-center">
                <p className="font-heading text-base uppercase tracking-wide text-maroon">
                  {service.name}
                </p>
                <p className="mt-3 text-sm text-foreground/60">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="font-heading text-xs font-medium uppercase tracking-[0.2em] text-maroon underline underline-offset-4"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
