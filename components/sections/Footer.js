"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { siteConfig, navigation, socialLinks } from "../../data/siteConfig";
import Icon from "../ui/Icon";

export default function Footer() {
  const { lang } = useLanguage();
  const navItems = navigation[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-(--hairline) glass bg-(--surface-1)">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/apple-touch-icon.png"
                alt=""
                width={28}
                height={28}
                className="w-7 h-7 rounded-lg"
              />
              <h3 className="font-mono font-medium text-sm text-(--ink)">{siteConfig.shortName}</h3>
            </div>
            <p className="text-sm text-(--ink-subtle) leading-relaxed max-w-md">
              {siteConfig.description[lang]}
            </p>
            <div className="mt-6 flex gap-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center w-9 h-9 rounded-lg border border-(--hairline) text-(--ink-muted) hover:text-(--ink) hover:border-(--hairline-strong) transition-colors"
                  aria-label={typeof link.name === "object" ? link.name[lang] : link.name}
                >
                  <Icon name={link.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-(--ink) mb-4">
              {lang === "es" ? "Navegación" : "Navigation"}
            </h4>
            <ul className="space-y-2">
              {navItems.slice(0, 7).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-(--ink-subtle) hover:text-(--ink) transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-(--ink) mb-4">
              {lang === "es" ? "Enlaces Rápidos" : "Quick Links"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.cv[lang]}
                  download
                  className="text-sm text-(--ink-subtle) hover:text-(--ink) transition-colors"
                >
                  {lang === "es" ? "Descargar CV" : "Download CV"}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-(--ink-subtle) hover:text-(--ink) transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-(--ink-subtle) hover:text-(--ink) transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.email}
                  className="text-sm text-(--ink-subtle) hover:text-(--ink) transition-colors"
                >
                  {lang === "es" ? "Contacto" : "Contact"}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-(--hairline)">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-(--ink-tertiary)">
            <p>
              © {currentYear} {siteConfig.author.name}.{" "}
              {lang === "es" ? "Todos los derechos reservados" : "All rights reserved"}.
            </p>
            <p className="font-mono text-xs">
              {lang === "es" ? "Hecho con" : "Built with"} Next.js · Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      <a
        href="#hero"
        className="fixed bottom-6 right-6 flex items-center justify-center w-11 h-11 rounded-full bg-white text-black hover:scale-105 transition-transform z-40"
        aria-label={lang === "es" ? "Volver arriba" : "Back to top"}
      >
        <Icon name="arrowUp" className="w-4.5 h-4.5" />
      </a>
    </footer>
  );
}
