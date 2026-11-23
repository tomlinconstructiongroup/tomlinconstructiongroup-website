import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found | Tomlin Construction Group",
};

// Shown for any address that doesn't exist. It sits outside the (site) group,
// so it adds the header and footer itself.
export default function NotFound() {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="font-brand pl-[0.2em] text-3xl font-medium uppercase tracking-[0.2em] text-maroon sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/80">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center border border-maroon px-10 py-3 text-xs uppercase tracking-[0.25em] text-maroon transition hover:bg-maroon hover:text-cream"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center border border-maroon px-10 py-3 text-xs uppercase tracking-[0.25em] text-maroon transition hover:bg-maroon hover:text-cream"
          >
            Contact
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
