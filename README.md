# Tomlin Construction Group — Website

Marketing site for tomlinconstructiongroup.com. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content still needed

- Real copy for the Services page (`src/app/services/page.tsx`) and the service highlights on the homepage (`src/app/page.tsx`)
- Real copy for the About page (`src/app/about/page.tsx`)
- Real phone number, email, and service area (currently placeholders in `src/app/contact/page.tsx` and `src/components/Footer.tsx`)

## Contact form

The contact form (`src/components/ContactForm.tsx`) submits to [Web3Forms](https://web3forms.com), a free form backend that emails you submissions with no server code required.

1. Get a free access key at https://web3forms.com (just enter an email, no account needed)
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
3. Add the same env var in the Vercel project settings when deploying

## Brand

- Cream background: `#F5EBDD`
- Maroon accent: `#6B2737`
- Headings: Playfair Display (serif) · Body: Inter (sans)

Colors were sampled from the logo and can be adjusted in `src/app/globals.css`.

## Deploy

Connected to Vercel for auto-deploy on push to `main`.
