import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Served at /sitemap.xml — the list of pages search engines should index.
// Add new pages here when they're created.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/services`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.7 },
  ];
}
