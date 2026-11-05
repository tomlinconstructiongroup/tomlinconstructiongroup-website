import type { Metadata } from "next";
import { Playfair_Display, Inter, Oswald, Cinzel } from "next/font/google";
import { connection } from "next/server";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

// Brand typeface for the company name, matching the TCG logo.
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomlin Construction Group",
  description:
    "Tomlin Construction Group — quality craftsmanship and reliable construction services.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // Render every page per request: the CSP nonce in src/proxy.ts changes each time.
  await connection();

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${oswald.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        {children}
      </body>
    </html>
  );
}
