"use client";

import { useEffect } from "react";

/**
 * One delegated pointer listener that feeds --x / --y to the hovered `.card`,
 * powering the CSS spotlight glow without per-card client components.
 */
const Spotlight = () => {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    const handleMove = (event: PointerEvent) => {
      const card = (event.target as Element | null)?.closest<HTMLElement>(".card");
      if (!card) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--y", `${event.clientY - rect.top}px`);
      });
    };

    document.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return null;
};

export default Spotlight;
