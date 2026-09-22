"use client";

import { useLanguage } from "../../context/LanguageContext";
import { aboutContent, highlights } from "../../data/siteConfig";
import { metrics } from "../../data/skills";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import Counter from "../ui/Counter";
import Tilt from "../ui/Tilt";

const highlightIcons = ["users", "briefcase", "settings", "target"];

export default function About() {
  const { lang } = useLanguage();
  const content = aboutContent[lang];
  const highlightItems = highlights[lang];
  const stats = metrics[lang];

  return (
    <section id="about" className="relative max-w-7xl mx-auto px-4 py-20 md:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-eyebrow text-(--accent) mb-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
          {lang === "es" ? "Sobre mí" : "About"}
        </p>
        <h2 className="text-display-lg text-(--ink)">{content.title}</h2>
        <p className="mt-4 text-sm md:text-base text-(--ink-subtle)">{content.subtitle}</p>
      </Reveal>

      {/* Content Grid */}
      <div className="mt-12 grid gap-8 lg:grid-cols-2 items-start">
        {/* Left - Story */}
        <Reveal delay={80} className="space-y-5">
          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-sm md:text-base text-(--ink-muted) leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Metrics */}
          <div className="pt-4 grid grid-cols-2 gap-3">
            {Object.values(stats).map((stat, index) => (
              <Tilt key={index} max={4}>
                <div className="rounded-2xl border border-(--hairline) glass bg-(--surface-1) p-4 card-hover">
                  <p className="text-2xl font-semibold text-(--accent)">
                    <Counter value={stat.value} />
                  </p>
                  <p className="mt-1 text-xs text-(--ink-subtle)">{stat.label}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </Reveal>

        {/* Right - Highlights */}
        <div className="grid gap-4 sm:grid-cols-2">
          {highlightItems.map((item, index) => (
            <Reveal
              key={index}
              delay={100 + index * 60}
              className="rounded-2xl border border-(--hairline) glass bg-(--surface-1) p-5 card-hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon name={highlightIcons[index] || "target"} className="w-5 h-5 text-(--accent)" />
                <p className="text-sm font-medium text-(--ink)">{item.label}</p>
              </div>
              <p className="text-sm text-(--ink-subtle) leading-relaxed">{item.value}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Additional Info Section */}
      <Reveal delay={120} className="mt-12 rounded-[20px] border border-(--hairline) glass bg-(--surface-1) p-8 md:p-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Icon name="target" className="w-5 h-5 text-(--accent)" />
              <h3 className="text-sm font-semibold text-(--ink)">
                {lang === "es" ? "Enfoque Profesional" : "Professional Approach"}
              </h3>
            </div>
            <p className="text-sm text-(--ink-subtle) leading-relaxed">
              {lang === "es"
                ? "Código limpio, arquitecturas escalables y soluciones centradas en el usuario"
                : "Clean code, scalable architectures, and user-centered solutions"}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Icon name="users" className="w-5 h-5 text-(--accent)" />
              <h3 className="text-sm font-semibold text-(--ink)">
                {lang === "es" ? "Trabajo en Equipo" : "Teamwork"}
              </h3>
            </div>
            <p className="text-sm text-(--ink-subtle) leading-relaxed">
              {lang === "es"
                ? "Experiencia coordinando equipos multidisciplinarios bajo metodologías ágiles"
                : "Experience coordinating multidisciplinary teams under agile methodologies"}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Icon name="sparkles" className="w-5 h-5 text-(--accent)" />
              <h3 className="text-sm font-semibold text-(--ink)">
                {lang === "es" ? "Aprendizaje Continuo" : "Continuous Learning"}
              </h3>
            </div>
            <p className="text-sm text-(--ink-subtle) leading-relaxed">
              {lang === "es"
                ? "Siempre actualizándome con las últimas tecnologías y mejores prácticas"
                : "Always updating with the latest technologies and best practices"}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
