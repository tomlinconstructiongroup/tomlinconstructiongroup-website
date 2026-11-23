import type { Metadata } from "next";

// The live web address (www is the main address; Vercel redirects the bare domain to it).
export const SITE_URL = "https://www.tomlinconstructiongroup.com";
export const SITE_NAME = "Tomlin Construction Group";

// Picture shown when the site's link is texted or shared (1200x630: hero photo with the logo and name).
export const PREVIEW_IMAGE = {
  url: "/images/link-preview.jpg",
  width: 1200,
  height: 630,
  alt: "Tomlin Construction Group logo over a Central Texas stone home",
};

// Builds a page's metadata so search results and link previews always carry the
// site name and the right address. (Next.js replaces, not merges, a parent's
// openGraph object, so every page needs the full set, image included.)
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [PREVIEW_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [PREVIEW_IMAGE] },
  };
}
