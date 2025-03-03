"use client";

import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed inset-0 -z-10 h-full w-full before:absolute before:inset-0 before:h-full before:w-full before:bg-[radial-gradient(125%_125%_at_50%_10%,#000_80%,#63e_100%)]" />
      <div className="container mx-auto px-6 lg:px-16">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experiences />
        <Projects />
        <Contacts />
      </div>
    </main>
  );
}
