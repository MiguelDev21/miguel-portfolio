"use client";

import { useEffect, useRef } from "react";

// Ties an element's translateY to scroll position at `speed` (0 = fixed,
// 1 = normal scroll). Direct DOM write via ref — no re-renders per frame.
export default function Parallax({ children, className = "", speed = 0.15 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = null;
    const update = () => {
      raf = null;
      const rect = el.parentElement.getBoundingClientRect();
      const offset = rect.top * speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {children}
    </div>
  );
}
