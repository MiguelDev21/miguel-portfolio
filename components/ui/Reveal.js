"use client";

import { useEffect, useRef } from "react";

// Scroll-reveal as pure progressive enhancement: content is visible by
// default (no React state, no SSR/hydration risk). JS only *adds* a
// hidden-until-intersect treatment for sections that start off-screen,
// via direct classList mutation — never through render state, so there's
// no window where real content (recruiter-facing) can get stuck invisible.
export default function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const ref = useRef(null);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight + 150;

    if (alreadyInView || typeof IntersectionObserver === "undefined") {
      return; // stays fully visible — safe default, nothing to animate
    }

    el.classList.add("reveal-hidden");
    if (delay) el.style.transitionDelay = `${delay}ms`;

    const reveal = () => el.classList.remove("reveal-hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);

    // Safety net: never let content stay invisible for good, even if the
    // observer never fires for some edge case.
    const fallback = setTimeout(reveal, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
