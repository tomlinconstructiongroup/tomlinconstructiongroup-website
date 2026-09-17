"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        event.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="rounded-lg border border-maroon/20 bg-cream-dark/40 px-6 py-8 text-center text-maroon">
        Thanks for reaching out — we&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-foreground/80">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-maroon/20 bg-cream px-4 py-2 outline-none focus:border-maroon"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium text-foreground/80">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-maroon/20 bg-cream px-4 py-2 outline-none focus:border-maroon"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-foreground/80">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-1 w-full rounded-md border border-maroon/20 bg-cream px-4 py-2 outline-none focus:border-maroon"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground/80">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-maroon/20 bg-cream px-4 py-2 outline-none focus:border-maroon"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700">
          {WEB3FORMS_ACCESS_KEY
            ? "Something went wrong sending your message. Please try again."
            : "Contact form isn't fully set up yet — add a Web3Forms access key to NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY."}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 rounded-full bg-maroon px-8 py-3 text-sm font-semibold text-cream transition hover:bg-maroon-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
