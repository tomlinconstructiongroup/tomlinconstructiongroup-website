import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact | Tomlin Construction Group",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24">
      <div className="flex flex-col items-center text-center">
        <Image src="/logo-icon.svg" alt="" width={84} height={96} />
        <div className="font-brand mt-5 text-maroon">
          {/* Negative right margins cancel the trailing letter-spacing so both lines centre truly. */}
          <p className="-mr-[0.14em] text-3xl font-medium uppercase tracking-[0.14em] sm:text-4xl">Tomlin</p>
          <p className="mt-2 -mr-[0.3em] text-sm font-medium uppercase tracking-[0.3em] sm:text-base">
            Construction Group
          </p>
        </div>
        <div className="mt-5 flex flex-col gap-1 text-foreground/70">
          <a href={PHONE_HREF} className="transition hover:text-maroon">
            {PHONE}
          </a>
          <a href={EMAIL_HREF} className="break-all transition hover:text-maroon">
            {EMAIL}
          </a>
        </div>
      </div>

      <h1 className="font-brand mt-16 border-t border-maroon/15 pt-12 text-3xl font-medium uppercase tracking-[0.2em] text-maroon sm:text-4xl">
        Contact Form
      </h1>
      <div className="mt-10">
        <ContactForm />
      </div>
    </section>
  );
}
