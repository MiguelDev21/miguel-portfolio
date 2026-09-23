"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Always "dark" on the very first render, on both server and client —
  // matches the SSR default exactly, so hydration never mismatches.
  // The real theme (if the visitor had chosen "light") is already applied
  // to the DOM by the inline flash-prevention script in layout.js before
  // React even loads; we only sync this piece of *state* to match right
  // after mount, via the effect below — never during the render React
  // uses to hydrate. See components/ui/ThemeToggle.js for how the icon
  // itself avoids depending on this state at all, to dodge the same
  // mismatch for the icon's SVG markup.
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const applied = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      setTheme((prev) => (prev === applied ? prev : applied));
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const setThemeAndPersist = (next) => {
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage unavailable (private mode, blocked) — theme just won't persist
    }
  };

  const toggleTheme = () => setThemeAndPersist(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
