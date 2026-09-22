"use client";

import { useEffect, useRef } from "react";

// Animates "4+", "15+", "20+", "100%" etc. counting up from 0 when scrolled
// into view. Parses the leading number, animates it, keeps the suffix.
// Falls back to rendering the plain string immediately — never blocks content.
export default function Counter({ value, duration = 1200, className = "" }) {
  const ref = useRef(null);

  const match = typeof value === "string" ? value.match(/^(\d+(?:\.\d+)?)(.*)$/) : null;
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el || target === null) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf;
    const start = () => {
      const startTime = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
        const current = (target * eased).toFixed(decimals);
        el.textContent = `${current}${suffix}`;
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start();
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, suffix, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
