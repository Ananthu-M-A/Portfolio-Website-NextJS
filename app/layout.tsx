import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Spotlight from "@/components/Spotlight";
import { CONTACT, SITE } from "@/config/constants";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], display: "swap", variable: "--font-geist-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], display: "swap", variable: "--font-geist-mono" });

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/profile.jpg`,
  jobTitle: "Full-Stack Engineer and Technical Trainer",
  description: SITE.description,
  sameAs: [CONTACT.linkedin, CONTACT.github, CONTACT.medium, CONTACT.leetcode].filter(Boolean),
  address: { "@type": "PostalAddress", addressRegion: "Kerala", addressCountry: "IN" },
  knowsAbout: [
    "Next.js",
    "Nest.js",
    "TypeScript",
    "Software Architecture",
    "Technical Instruction",
    "Backend Systems",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  authors: [{ name: SITE.name, url: SITE.url }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-ink-950 font-sans text-neutral-300 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cyan-950"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
        <Spotlight />
        <Analytics />
      </body>
    </html>
  );
}
