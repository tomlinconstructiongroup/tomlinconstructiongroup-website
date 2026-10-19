"use client";

import { useState, type FormEvent, type ReactNode } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const INPUT_CLASS =
  "mt-1 w-full rounded-md border border-maroon/20 bg-cream px-4 py-2 outline-none focus:border-maroon";

function Field({
  id,
  label,
  required = false,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground/80">
        {label}
        {required ? (
          <span aria-hidden className="text-maroon"> *</span>
        ) : (
          <span className="font-normal text-foreground/50"> (optional)</span>
        )}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    // Grab the form now: React clears event.currentTarget once we await.
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New quote request");
    // Web3Forms shows `name` as the sender in the notification email.
    formData.append("name", `${formData.get("first_name")} ${formData.get("last_name")}`.trim());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
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
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="first_name" label="First name" required>
          <input
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
            className={INPUT_CLASS}
          />
        </Field>
        <Field id="last_name" label="Last name" required>
          <input
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
            className={INPUT_CLASS}
          />
        </Field>
      </div>
      <Field id="email" label="Email" required>
        <input id="email" name="email" type="email" autoComplete="email" required className={INPUT_CLASS} />
      </Field>
      <Field id="phone" label="Phone">
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={INPUT_CLASS} />
      </Field>
      <Field id="message" label="Message" required>
        <textarea id="message" name="message" rows={5} required className={INPUT_CLASS} />
      </Field>

      <p className="text-xs text-foreground/50">
        <span className="text-maroon">*</span> Required
      </p>

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
        className="font-heading mt-2 border border-maroon px-10 py-3 text-xs font-medium uppercase tracking-[0.2em] text-maroon transition hover:bg-maroon hover:text-cream disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
