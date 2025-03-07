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
      <body className={`${inter.className} bg-black text-neutral-300`}>
        {children}
      </body>
    </html>
  );
}
