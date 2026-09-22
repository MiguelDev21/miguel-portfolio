"use client";

import { useRef } from "react";

// Subtle 3D hover tilt (mouse-follow), pure CSS transform, no dependency.
// No-ops entirely on touch devices and prefers-reduced-motion.
export default function Tilt({ children, className = "", max = 6 }) {
  const ref = useRef(null);
  const frame = useRef(null);

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(700px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateZ(0)`;
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
      style={{ transition: "transform 200ms ease-out" }}
    >
      {children}
    </div>
  );
}
