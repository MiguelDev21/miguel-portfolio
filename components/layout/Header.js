"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { navigation, siteConfig } from "../../data/siteConfig";
import Icon from "../ui/Icon";
import ThemeToggle from "../ui/ThemeToggle";

export default function Header() {
  const { lang, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = navigation[lang];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-(--canvas) border-b border-(--hairline)" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <Image
            src="/apple-touch-icon.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg transition-transform group-hover:scale-105"
            priority
          />
          <span className="font-mono font-medium text-sm tracking-tight text-(--ink)">
            {siteConfig.shortName}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.slice(0, 7).map((item) => {
            const id = item.href.replace("#", "");
            const active = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm rounded-md transition-colors ${
                  active
                    ? "text-(--ink)"
                    : "text-(--ink-muted) hover:text-(--ink) hover:bg-(--surface-1)"
                }`}
              >
                {item.name}
                {active && (
                  <span className="absolute left-3 right-3 -bottom-px h-0.5 rounded-full bg-(--accent)" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={siteConfig.cv[lang]}
            download
            className="btn-primary hidden sm:inline-flex py-2! px-4!"
          >
            <Icon name="download" className="w-4 h-4" />
            <span>CV</span>
          </a>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-medium rounded-full border border-(--hairline) text-(--ink-muted) hover:text-(--ink) hover:border-(--hairline-strong) transition-colors cursor-pointer"
            aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            <span aria-hidden="true">{lang === "es" ? "🇺🇸" : "🇪🇸"}</span>
            {lang === "es" ? "EN" : "ES"}
          </button>

          <ThemeToggle />

          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full border border-(--hairline) text-(--ink-muted) hover:text-(--ink) transition-colors"
            aria-label={lang === "es" ? "Abrir menú" : "Toggle menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <Icon name={isMobileMenuOpen ? "close" : "menu"} className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu — floating glass panel, not edge-to-edge, fades/slides in */}
      <div
        className={`lg:hidden absolute top-full left-3 right-3 mt-2 origin-top transition-all duration-250 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="bg-(--canvas) border border-(--hairline-strong) rounded-2xl p-2 flex flex-col gap-1 shadow-2xl shadow-black/40">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const active = activeSection === id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm rounded-xl transition-colors flex items-center gap-2 ${
                  active ? "text-(--ink) bg-(--surface-1)" : "text-(--ink-muted) hover:text-(--ink) hover:bg-(--surface-1)"
                }`}
              >
                {active && <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />}
                {item.name}
              </a>
            );
          })}
          <a
            href={siteConfig.cv[lang]}
            download
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary mt-1 w-full"
          >
            <Icon name="download" className="w-4 h-4" />
            {lang === "es" ? "Descargar CV" : "Download CV"}
          </a>
        </nav>
      </div>
    </header>
  );
}
