"use client";

import { useLanguage } from "../../context/LanguageContext";
import { contactContent, siteConfig, socialLinks } from "../../data/siteConfig";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";

export default function Contact() {
  const { lang } = useLanguage();
  const content = contactContent[lang];

  return (
    <section id="contact" className="relative max-w-7xl mx-auto px-4 py-20 md:py-24">
      <Reveal className="rounded-[20px] border border-(--hairline) glass bg-(--surface-1) p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Info */}
          <div>
            <p className="text-eyebrow text-(--accent) mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
              {lang === "es" ? "Contacto" : "Contact"}
            </p>
            <h2 className="text-display-lg text-(--ink)">{content.title}</h2>
            <p className="mt-5 text-sm md:text-base text-(--ink-subtle) leading-relaxed">
              {content.subtitle}
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={siteConfig.social.email}
                className="flex items-center gap-4 p-4 rounded-2xl border border-(--hairline) glass hover:bg-(--surface-2) hover:border-(--hairline-strong) transition-colors group"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-(--accent-soft)">
                  <Icon name="mail" className="w-5 h-5 text-(--accent)" />
                </div>
                <div>
                  <p className="text-xs text-(--ink-subtle)">{lang === "es" ? "Correo electrónico" : "Email"}</p>
                  <p className="text-sm font-medium text-(--ink)">{siteConfig.author.email}</p>
                </div>
              </a>

              <a
                href={siteConfig.social.phone}
                className="flex items-center gap-4 p-4 rounded-2xl border border-(--hairline) glass hover:bg-(--surface-2) hover:border-(--hairline-strong) transition-colors group"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-(--accent-soft)">
                  <Icon name="phone" className="w-5 h-5 text-(--accent)" />
                </div>
                <div>
                  <p className="text-xs text-(--ink-subtle)">{lang === "es" ? "Teléfono" : "Phone"}</p>
                  <p className="text-sm font-medium text-(--ink)">+57 313 214 0833</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl border border-(--hairline)">
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-(--accent-soft)">
                  <Icon name="location" className="w-5 h-5 text-(--accent)" />
                </div>
                <div>
                  <p className="text-xs text-(--ink-subtle)">{lang === "es" ? "Ubicación" : "Location"}</p>
                  <p className="text-sm font-medium text-(--ink)">Neiva, Huila, Colombia</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium text-(--ink-subtle) mb-4">
                {lang === "es" ? "Sígueme en:" : "Follow me:"}
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-center w-11 h-11 rounded-lg border border-(--hairline) text-(--ink-muted) hover:text-(--ink) hover:border-(--hairline-strong) transition-colors"
                    aria-label={typeof link.name === "object" ? link.name[lang] : link.name}
                  >
                    <Icon name={link.icon} className="w-4.5 h-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="flex flex-col justify-center">
            <div className="glow-card p-8">
              <div className="flex items-center justify-center w-14 h-14 rounded-[20px] bg-(--accent-soft) mx-auto mb-6">
                <Icon name="sparkles" className="w-7 h-7 text-(--accent)" />
              </div>

              <h3 className="text-lg font-semibold text-(--ink) text-center mb-3">
                {lang === "es" ? "¿Listo para trabajar juntos?" : "Ready to work together?"}
              </h3>

              <p className="text-sm text-(--ink-subtle) text-center mb-8">
                {lang === "es"
                  ? "Ya sea un proyecto, una colaboración o simplemente quieres conectar, estaré encantado de conversar."
                  : "Whether it's a project, collaboration, or just to connect, I'd be happy to chat."}
              </p>

              <div className="space-y-3">
                <a href={siteConfig.social.email} className="btn-primary w-full">
                  <Icon name="mail" className="w-4 h-4" />
                  {content.cta.primary}
                </a>

                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full"
                >
                  <Icon name="github" className="w-4 h-4" />
                  {content.cta.github}
                </a>

                <a href={siteConfig.cv[lang]} download className="btn-secondary w-full">
                  <Icon name="download" className="w-4 h-4" />
                  {content.cta.cv}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
