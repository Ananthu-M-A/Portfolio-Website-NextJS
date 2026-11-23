"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/config/constants";
import { GENERAL_EMAIL_HREF } from "@/lib/mailto";

const NAV_ITEMS = [
  { label: "Work", id: "proof" },
  { label: "Approach", id: "systems" },
  { label: "Teaching", id: "teaching" },
  { label: "Stack", id: "stack" },
  { label: "Contact", id: "contact" },
] as const;

const useActiveSection = () => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(
      (section): section is HTMLElement => section !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMobileMenuOpen]);

  const linkClass = (id: string, base: string) =>
    `${base} ${
      activeSection === id ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border pl-2 pr-2 transition-all duration-300 sm:pl-3 ${
          isScrolled || isMobileMenuOpen
            ? "border-white/10 bg-ink-950/75 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-white/[0.06] bg-ink-950/40 backdrop-blur-md"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5 rounded-full pr-2" aria-label={`${SITE.name} - home`}>
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 font-mono text-sm font-bold text-ink-950"
          >
            AM
          </span>
          <span className="hidden whitespace-nowrap text-sm font-semibold tracking-tight text-white sm:inline">
            {SITE.name}
          </span>
        </a>

        <div className="hidden items-center gap-0.5 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={activeSection === item.id ? "location" : undefined}
              className={linkClass(item.id, "rounded-full px-3.5 py-1.5 text-sm transition")}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href={SITE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-3 py-1.5 text-sm text-neutral-400 transition hover:text-white lg:inline-flex"
          >
            Resume
          </a>
          <a
            href={GENERAL_EMAIL_HREF}
            className="hidden whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-cyan-100 sm:inline-flex"
          >
            Let&apos;s talk
          </a>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-200 md:hidden"
          >
            {isMobileMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-5xl rounded-3xl border border-white/10 bg-ink-950/90 p-3 backdrop-blur-xl md:hidden"
        >
          <div className="grid gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "location" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className={linkClass(item.id, "rounded-2xl px-4 py-3 text-base transition")}
              >
                {item.label}
              </a>
            ))}
            <a
              href={SITE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl px-4 py-3 text-base text-cyan-200 transition hover:bg-white/5"
            >
              Resume
            </a>
            <a href={GENERAL_EMAIL_HREF} className="btn-primary mt-2">
              Let&apos;s talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
