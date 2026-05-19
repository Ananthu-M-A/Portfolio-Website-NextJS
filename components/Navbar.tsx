"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT } from "@/config/constants";

interface NavbarProps {
  containerRef?: React.RefObject<HTMLDivElement>;
}

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Systems", href: "#systems" },
  { label: "Teaching", href: "#teaching" },
  { label: "Proof", href: "#proof" },
  { label: "Stack", href: "#stack" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = (_props: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-white/10 bg-[#05070d]/90 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl"
          : "border-white/5 bg-[#05070d]/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-cyan-400/30 bg-cyan-400/10 font-semibold text-cyan-200">
            A
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:inline">
            Ananthu M A
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-neutral-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${CONTACT.email}`}
          className="hidden rounded-md border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/20 md:inline-flex"
        >
          Start a Conversation
        </a>

        <button
          aria-label="Toggle navigation"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-neutral-200 lg:hidden"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#05070d]/95 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-neutral-200 transition hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
