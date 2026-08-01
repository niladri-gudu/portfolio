"use client";

import { ReactNode, useEffect } from "react";

export default function SmoothScroll({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    // Respect users who prefer reduced motion — skip momentum scrolling.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let rafId = 0;

    import("lenis").then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
