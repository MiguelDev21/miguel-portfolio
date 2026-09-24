"use client";

import { useCallback, useEffect, useRef } from "react";

// Infinite horizontal "picker wheel" carousel: items drift left, the one
// crossing dead-center is full color, everything else fades to gray. Pure
// rAF + direct DOM writes (ref.style.x), no React state per frame — same
// pattern as Parallax.js / ScrollProgress.js.
const ITEM_WIDTH = 56;
const MIN_REPEATS = 3;
const SPEED = 0.028; // px/ms

export default function TechCarousel({ items }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const offsetRef = useRef(0);
  const containerWidthRef = useRef(0);
  const visibleRef = useRef(true);
  const rafRef = useRef(null);
  const lastTsRef = useRef(null);

  const repeats = Math.max(MIN_REPEATS, Math.ceil(16 / Math.max(items.length, 1)));
  const loopItems = Array.from({ length: repeats }, () => items).flat();
  const oneSetWidth = items.length * ITEM_WIDTH;

  const paintFrame = useCallback(() => {
    const offset = offsetRef.current;
    const centerX = containerWidthRef.current / 2;
    for (let i = 0; i < itemRefs.current.length; i++) {
      const el = itemRefs.current[i];
      if (!el) continue;
      const itemCenter = i * ITEM_WIDTH + ITEM_WIDTH / 2 - offset;
      const dist = Math.abs(itemCenter - centerX);
      const norm = Math.min(dist / (ITEM_WIDTH * 1.5), 1);
      el.style.opacity = (1 - norm * 0.72).toFixed(3);
      el.style.transform = `scale(${(1 - norm * 0.3).toFixed(3)})`;
      el.style.filter = `grayscale(${norm.toFixed(3)})`;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track || items.length === 0) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateWidth = () => {
      containerWidthRef.current = container.getBoundingClientRect().width;
    };
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(container);

    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(container);

    if (reducedMotion) {
      paintFrame();
      return () => {
        ro.disconnect();
        io.disconnect();
      };
    }

    const tick = (ts) => {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = Math.min(ts - lastTsRef.current, 100);
      lastTsRef.current = ts;

      if (visibleRef.current) {
        offsetRef.current += SPEED * dt;
        if (offsetRef.current >= oneSetWidth) offsetRef.current -= oneSetWidth;
        track.style.transform = `translate3d(${(-offsetRef.current).toFixed(2)}px, 0, 0)`;
        paintFrame();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      io.disconnect();
    };
  }, [oneSetWidth, items.length, paintFrame]);

  if (items.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="relative mt-4 h-10 w-full min-w-0 overflow-hidden"
      style={{
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 16%, black 84%, transparent)",
        maskImage: "linear-gradient(90deg, transparent, black 16%, black 84%, transparent)",
      }}
      aria-hidden="true"
    >
      <div ref={trackRef} className="flex will-change-transform" style={{ width: "max-content" }}>
        {loopItems.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="flex-shrink-0 flex items-center justify-center"
            style={{ width: ITEM_WIDTH, height: 40 }}
          >
            <item.Icon className="w-6 h-6" style={{ color: item.color }} />
          </div>
        ))}
      </div>
    </div>
  );
}
