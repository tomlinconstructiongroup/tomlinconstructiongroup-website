import Image from "next/image";
import Link from "next/link";

const SERVICE_HIGHLIGHTS = [
  "Residential Construction",
  "Remodeling & Renovations",
  "Project Management",
];

export default function Home() {
  return (
    <>
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-24 text-center">
        <Image src="/logo.png" alt="Tomlin Construction Group" width={120} height={120} priority />
        <h1 className="font-serif text-4xl text-maroon sm:text-5xl">
          Tomlin Construction Group
        </h1>
        <p className="max-w-xl text-lg text-foreground/80">
          Quality craftsmanship and reliable construction services, built on
          trust from the ground up.
        </p>
        <Link
          href="/contact"
          className="mt-2 rounded-full bg-maroon px-8 py-3 text-sm font-semibold text-cream transition hover:bg-maroon-dark"
        >
          Get a Quote
        </Link>
      </section>

      <section className="border-t border-maroon/15 bg-cream-dark/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center font-serif text-2xl text-maroon">
            What We Do
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {SERVICE_HIGHLIGHTS.map((service) => (
              <div
                key={service}
                className="rounded-lg border border-maroon/15 bg-cream px-6 py-8 text-center"
              >
                <p className="font-medium text-foreground/90">{service}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-maroon underline underline-offset-4"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
