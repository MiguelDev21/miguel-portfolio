"use client";

import { useEffect, useRef } from "react";

// Thin fixed progress bar tied to page scroll — direct DOM writes via ref,
// no React state, so it costs nothing per scroll frame.
export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = null;
    const update = () => {
      raf = null;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
    };
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-0.5 z-[60] bg-transparent pointer-events-none">
      <div
        ref={barRef}
        className="h-full bg-(--accent)"
        style={{ width: 0, transition: "width 80ms linear" }}
      />
    </div>
  );
}
