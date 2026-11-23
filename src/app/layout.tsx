import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import { connection } from "next/server";
import { pageMetadata, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Brand typeface for the company name, matching the TCG logo.
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

// Home page metadata; the other pages set their own via pageMetadata().
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    title: SITE_NAME,
    description:
      "Tomlin Construction Group builds custom homes, renovations, additions, outdoor living spaces, and commercial projects in Liberty Hill, Georgetown, and the surrounding areas.",
    path: "/",
  }),
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // Render every page per request: the CSP nonce in src/proxy.ts changes each time.
  await connection();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        {children}
      </body>
    </html>
  );
}
