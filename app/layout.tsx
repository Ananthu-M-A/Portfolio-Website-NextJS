import type { Metadata } from "next";
import "./globals.css";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ananthu M A",
  url: "https://www.ananthuma.com",
  jobTitle: "Full-Stack Engineer and Technical Trainer",
  description:
    "Production-grade full-stack engineer and technical trainer helping teams build scalable systems and understand modern software architecture.",
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
  title: "Ananthu M A | Production-Grade Engineer and Technical Educator",
  description:
    "Production-grade full-stack engineer and technical trainer helping teams build scalable systems and understand modern software architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Ananthu M A | Production-Grade Engineer and Technical Educator</title>
        <meta
          name="description"
          content="Production-grade full-stack engineer and technical trainer helping teams build scalable systems and understand modern software architecture."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#05070d" />
        <link rel="icon" href="/icon.jpg" />
        <meta
          property="og:title"
          content="Ananthu M A | Production-Grade Engineer and Technical Educator"
        />
        <meta
          property="og:description"
          content="Production-grade full-stack engineer and technical trainer helping teams build scalable systems and understand modern software architecture."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:url" content="https://ananthuma.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-black text-neutral-300">
        {children}
      </body>
    </html>
  );
}
