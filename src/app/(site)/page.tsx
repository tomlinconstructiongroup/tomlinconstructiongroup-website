import Image from "next/image";
import Link from "next/link";

// Photos are placeholders — swap in real project photography. The value photos are cropped from
// the design mockup; the hero photo was supplied by the owner.
const VALUES = [
  {
    name: "Quality",
    image: "/images/value-quality.jpg",
    alt: "Stone exterior wall with a lantern sconce",
    copy: "We use superior materials, partner with skilled craftsmen, and build with a level of precision that ensures your home stands the test of time.",
  },
  {
    name: "Integrity",
    image: "/images/value-integrity.jpg",
    alt: "Construction plans on a table beside a window",
    copy: "We always do what’s right. Our word matters, and we believe in honest communication, accountability and building trust at every step.",
  },
  {
    name: "Craftsmanship",
    image: "/images/value-craftsmanship.jpg",
    alt: "Vaulted ceiling with exposed timber beams and a stone wall",
    copy: "It’s in the details. From the foundation to the final finish, we take pride in thoughtful execution and a level of care that’s seen and felt in every space.",
  },
];

const TAGLINES = ["Built With Purpose", "Grounded In Trust", "Made To Last"];

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[88vh] flex-col items-center overflow-hidden px-6 text-center text-white">
        <Image
          src="/images/hero-austin-stone.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/30 to-black/20" />

        <div className="flex flex-col items-center gap-6 pt-28 sm:pt-[16vh]">
          <Image src="/logo-icon-light.svg" alt="" width={105} height={120} preload />
          <div className="font-brand [text-shadow:0_1px_14px_rgb(0_0_0/0.5)]">
            <h1 className="-mr-[0.14em] text-5xl font-medium uppercase tracking-[0.14em] sm:text-7xl">Tomlin</h1>
            <p className="mt-3 -mr-[0.3em] text-base font-medium uppercase tracking-[0.3em] text-white/90 sm:text-xl">
              Construction Group
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-4 border border-white/70 px-10 py-3 text-xs uppercase tracking-[0.25em] transition hover:bg-white hover:text-maroon"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-3 md:gap-10">
        {VALUES.map((value) => (
          <article key={value.name} className="text-center">
            <div className="relative aspect-[15/8] overflow-hidden">
              <Image
                src={value.image}
                alt={value.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mx-auto mt-7 h-px w-16 bg-maroon/30" />
            <h2 className="font-brand mt-7 text-2xl font-medium uppercase tracking-[0.3em] text-maroon md:text-xl md:tracking-[0.2em] lg:text-2xl lg:tracking-[0.3em]">
              {value.name}
            </h2>
            <p className="mx-auto mt-4 max-w-xs leading-relaxed text-foreground/70">
              {value.copy}
            </p>
          </article>
        ))}
      </section>

      <section className="mx-auto flex max-w-5xl items-center gap-6 px-6 pb-20">
        <div className="hidden h-px flex-1 bg-maroon/20 sm:block" />
        <p className="flex flex-1 flex-col items-center gap-3 text-center text-xs uppercase tracking-[0.3em] text-maroon/80 sm:flex-none sm:flex-row sm:gap-6">
          {TAGLINES.map((tagline, i) => (
            <span key={tagline} className="flex items-center gap-6">
              {i > 0 && <span aria-hidden className="hidden sm:inline">/</span>}
              {tagline}
            </span>
          ))}
        </p>
        <div className="hidden h-px flex-1 bg-maroon/20 sm:block" />
      </section>
    </>
  );
}
