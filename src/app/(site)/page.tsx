import Image from "next/image";
import Link from "next/link";
import { EMAIL, PHONE_HREF } from "@/lib/contact";
import { SERVICES } from "@/lib/services";
import { PREVIEW_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

// Stand-in imagery, not completed Tomlin projects — swap in real project photography once it exists.
// Value photos are cropped from Ben's AI-generated mockup; Ben generated the hero with ChatGPT.
const VALUES = [
  {
    name: "Quality",
    image: "/images/value-quality.jpg",
    alt: "Stone exterior wall with a lantern sconce",
    copy: "We use quality materials, partner with skilled craftsmen, and build with a level of precision that ensures your vision comes to life.",
  },
  {
    name: "Integrity",
    image: "/images/value-integrity.jpg",
    alt: "Construction plans on a table beside a window",
    copy: "We hold ourselves accountable, communicate openly and honestly, and work to earn your trust at every stage of the project.",
  },
  {
    name: "Dedication",
    image: "/images/value-craftsmanship.jpg",
    alt: "Vaulted ceiling with exposed timber beams and a stone wall",
    copy: "We stay personally involved from start to finish, giving every project the time, focus, and care it deserves.",
  },
];

const TAGLINES = ["Made To Last", "Grounded In Trust", "Built With Care"];

// Tells Google the site's name, so results show "Tomlin Construction Group" rather than the bare domain.
const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
};

// Business details for search engines (not shown on the page). No street address on purpose:
// it's listed as a service-area business until there's a business office.
const BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: SITE_NAME,
  url: SITE_URL,
  // Square PNG: Google shows this logo next to the business in search results.
  logo: `${SITE_URL}/images/logo-512.png`,
  image: `${SITE_URL}${PREVIEW_IMAGE.url}`,
  telephone: PHONE_HREF.replace("tel:", ""),
  email: EMAIL,
  description:
    "Custom homes, renovations and additions, estate and outdoor living, and commercial construction in Liberty Hill, Georgetown, and the surrounding areas north of Austin.",
  founder: { "@type": "Person", name: "Ben Tomlin" },
  // Towns within about 45 minutes of Liberty Hill and Georgetown (Austin itself left out on purpose).
  areaServed: [
    "Liberty Hill",
    "Georgetown",
    "Leander",
    "Cedar Park",
    "Round Rock",
    "Hutto",
    "Pflugerville",
    "Taylor",
    "Jarrell",
    "Florence",
    "Salado",
    "Belton",
    "Temple",
    "Bertram",
    "Burnet",
    "Marble Falls",
    "Lago Vista",
    "Jonestown",
  ].map((town) => ({ "@type": "City", name: `${town}, TX` })),
  knowsAbout: SERVICES.map((service) => service.name),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Data, not code; escaping "<" keeps it from ever closing the script tag early.
        dangerouslySetInnerHTML={{ __html: JSON.stringify([WEBSITE_JSON_LD, BUSINESS_JSON_LD]).replace(/</g, "\\u003c") }}
      />
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
            <p className="mt-3 -mr-[0.22em] text-sm font-medium uppercase tracking-[0.22em] text-white/90 min-[360px]:-mr-[0.3em] min-[360px]:text-base min-[360px]:tracking-[0.3em] sm:text-xl">
              Construction Group
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-4 inline-flex min-h-11 items-center border border-white/70 px-10 py-3 text-xs uppercase tracking-[0.25em] transition hover:bg-white hover:text-maroon"
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
            <h2 className="font-brand mt-7 text-xl font-medium uppercase tracking-[0.18em] text-maroon min-[400px]:text-2xl min-[400px]:tracking-[0.3em] md:text-lg md:tracking-[0.15em] lg:text-2xl lg:tracking-[0.3em]">
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
