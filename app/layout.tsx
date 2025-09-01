import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ananthu M A | Fullstack Developer",
  description:
    "Portfolio of Ananthu M A, a MERN Stack Developer passionate about building scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <title>Ananthu M A | Fullstack Developer</title>
        <meta
          name="description"
          content="Portfolio of Ananthu M A, a MERN Stack Developer passionate about building scalable web applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/icon.jpg" />
        <meta property="og:title" content="Ananthu M A | Fullstack Developer" />
        <meta
          property="og:description"
          content="Portfolio of Ananthu M A, a MERN Stack Developer passionate about building scalable web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/profile.jpg" />
        <meta property="og:url" content="https://ananthuma.com" />
      </head>
      <body className={`${inter.className} bg-black text-neutral-300`}>
        {children}
      </body>
    </html>
  );
}
