"use client";

import { useLanguage } from "../../context/LanguageContext";
import { skills, expertise } from "../../data/skills";
import { resolveTechIcon } from "../../data/techIcons";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import TechCarousel from "../ui/TechCarousel";

const categoryIcons = {
  frontend: "code",
  backend: "layers",
  mobile: "device",
  data: "chart",
  ai: "sparkles",
  database: "settings",
  devops: "target",
  tools: "settings",
  other: "sparkles",
};

export default function Skills() {
  const { lang } = useLanguage();
  const expertiseItems = expertise[lang];

  return (
    <section id="skills" className="relative max-w-7xl mx-auto px-4 py-20 md:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-eyebrow text-(--accent) mb-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
          {lang === "es" ? "Habilidades" : "Skills"}
        </p>
        <h2 className="text-display-lg text-(--ink)">
          {lang === "es" ? "Stack técnico" : "Technical stack"}
        </h2>
        <p className="mt-4 text-sm md:text-base text-(--ink-subtle)">
          {lang === "es"
            ? "Stack tecnológico y áreas de expertise desarrolladas a través de proyectos reales y formación continua."
            : "Technology stack and areas of expertise developed through real projects and continuous training."}
        </p>
      </Reveal>

      {/* Expertise Cards */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {expertiseItems.map((item, index) => (
          <Reveal
            key={index}
            delay={index * 60}
            className="rounded-2xl border border-(--hairline) glass bg-(--surface-1) p-6 card-hover"
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-(--accent-soft) mb-4">
              <Icon name={item.icon} className="w-5 h-5 text-(--accent)" />
            </div>
            <h3 className="text-base font-semibold text-(--ink) mb-2">{item.title}</h3>
            <p className="text-sm text-(--ink-subtle) leading-relaxed">{item.description}</p>
          </Reveal>
        ))}
      </div>

      {/* Technical Skills Grid — mono stack badges */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, data], index) => (
          <Reveal
            key={category}
            delay={index * 60}
            className="min-w-0 rounded-2xl border border-(--hairline) glass bg-(--surface-1) p-6 card-hover"
          >
            <div className="flex items-center gap-2 mb-4">
              <Icon name={categoryIcons[category] || "code"} className="w-4 h-4 text-(--accent)" />
              <h3 className="text-sm font-semibold text-(--ink)">{data.title[lang]}</h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {data.items.map((skill, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[11px] px-2 py-1 rounded glass bg-(--surface-2) text-(--ink-muted)"
                >
                  {skill}
                </span>
              ))}
            </div>

            <TechCarousel items={data.items.map(resolveTechIcon).filter(Boolean)} />
          </Reveal>
        ))}
      </div>

      {/* Additional Info */}
      <Reveal delay={120} className="mt-6 rounded-[20px] border border-(--hairline) glass bg-(--surface-1) p-8 md:p-10">
        <h3 className="text-lg font-semibold text-(--ink) mb-6">
          {lang === "es" ? "Competencias Adicionales" : "Additional Competencies"}
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-(--ink) mb-2 flex items-center gap-2">
              <Icon name="check" className="w-4 h-4 text-(--accent)" />
              {lang === "es" ? "Buenas Prácticas" : "Best Practices"}
            </h4>
            <p className="font-mono text-xs text-(--ink-subtle)">Clean Code · SOLID · DRY · Code Review</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-(--ink) mb-2 flex items-center gap-2">
              <Icon name="settings" className="w-4 h-4 text-(--accent)" />
              {lang === "es" ? "Metodologías Ágiles" : "Agile Methodologies"}
            </h4>
            <p className="font-mono text-xs text-(--ink-subtle)">Scrum · Kanban · Sprint Planning</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-(--ink) mb-2 flex items-center gap-2">
              <Icon name="users" className="w-4 h-4 text-(--accent)" />
              {lang === "es" ? "Soft Skills" : "Soft Skills"}
            </h4>
            <p className="text-sm text-(--ink-subtle)">
              {lang === "es" ? "Liderazgo · Comunicación · Trabajo en equipo" : "Leadership · Communication · Teamwork"}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
