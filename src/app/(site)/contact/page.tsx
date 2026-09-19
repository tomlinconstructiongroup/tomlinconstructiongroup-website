import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Tomlin Construction Group",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24">
      <h1 className="font-heading text-sm font-medium uppercase tracking-[0.3em] text-foreground/50">
        Contact
      </h1>
      <p className="mt-4 font-serif text-3xl text-maroon">Get a Quote</p>
      <p className="mt-4 text-foreground/70">
        Tell us about your project and we&apos;ll get back to you.
      </p>
      <div className="mt-10">
        <ContactForm />
      </div>
      <div className="mt-10 border-t border-maroon/15 pt-6 text-sm text-foreground/70">
        <p>Phone: (000) 000-0000</p>
        <p>Email: info@tomlinconstructiongroup.com</p>
        <p>Service Area: [Add your service area here]</p>
      </div>
    </section>
  );
}
