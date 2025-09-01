"use client";

import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Blog from "@/components/Blog";
import Certifications from "@/components/Certifications";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const href = target.getAttribute("href");
        const targetElement = document.querySelector(href!);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900"
    >
      <div className="fixed inset-0 -z-10 h-full w-full before:absolute before:inset-0 before:h-full before:w-full before:bg-[radial-gradient(125%_125%_at_50%_10%,#000_80%,#63e_100%)]" />
      <Navbar containerRef={containerRef} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <Hero />
        <About />
        <Technologies />
        <Blog />
        <Certifications />
        <Experiences />
        <Projects />
        <Contacts />
      </div>
    </main>
  );
}
