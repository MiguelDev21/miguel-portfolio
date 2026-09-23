"use client";

import { useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import Icon from "./Icon";

// "Circle + blur" reveal (https://theme-toggle.rdsx.dev/ — circle-blur variant)
// via the native View Transitions API: the new theme expands from the button
// in a growing circle with a soft blur, over the static old theme. Falls back
// to an instant swap wherever the API (or reduced-motion) isn't available.
export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLanguage();
  const btnRef = useRef(null);

  const handleClick = () => {
    const el = btnRef.current;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!el || typeof document.startViewTransition !== "function" || prefersReduced) {
      toggleTheme();
      return;
    }

    const rect = el.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      toggleTheme();
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
          filter: ["blur(16px)", "blur(0px)"],
        },
        {
          duration: 600,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className={`w-9 h-9 flex items-center justify-center rounded-full border border-(--hairline) text-(--ink-muted) hover:text-(--ink) hover:border-(--hairline-strong) transition-colors cursor-pointer ${className}`}
      aria-label={
        lang === "es"
          ? theme === "dark"
            ? "Cambiar a modo claro"
            : "Cambiar a modo oscuro"
          : theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      {/* Both icons always render (identical on server and client — no
          hydration mismatch); which one is visible is decided purely by
          CSS off the `data-theme` attribute the flash-prevention script
          sets before React ever loads, so the correct icon shows on the
          very first paint instead of only after the effect above runs. */}
      <span className="relative w-4 h-4 block">
        <Icon name="sun" className="theme-icon-sun absolute inset-0 w-4 h-4" />
        <Icon name="moon" className="theme-icon-moon absolute inset-0 w-4 h-4" />
      </span>
    </button>
  );
}
