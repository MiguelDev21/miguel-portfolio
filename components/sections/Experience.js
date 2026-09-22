"use client";

import { useLanguage } from "../../context/LanguageContext";
import { experience } from "../../data/experience";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import Counter from "../ui/Counter";
import Tilt from "../ui/Tilt";

const stackByIndex = [
  ["AI Agents", "Automation", "n8n", "Claude API"],
  ["React", "Node.js", "PostgreSQL", "Project Management"],
  ["React", "JavaScript", "REST APIs"],
  ["Full Stack", "Scrum", "Unity"],
];

export default function Experience() {
  const { lang } = useLanguage();

  return (
    <section id="experience" className="relative max-w-7xl mx-auto px-4 py-20 md:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-eyebrow text-(--accent) mb-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
          {lang === "es" ? "Experiencia" : "Experience"}
        </p>
        <h2 className="text-display-lg text-(--ink)">
          {lang === "es" ? "Trayectoria" : "Track record"}
        </h2>
        <p className="mt-4 text-sm md:text-base text-(--ink-subtle)">
          {lang === "es"
            ? "Trayectoria profesional y colaboraciones en proyectos reales del sector público y privado."
            : "Professional trajectory and collaborations on real projects in the public and private sectors."}
        </p>
      </Reveal>

      {/* Timeline */}
      <div className="mt-12 relative">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-(--hairline)" />

        <div className="space-y-8">
          {experience.map((item, index) => (
            <Reveal key={index} delay={index * 80} className="relative pl-8 md:pl-20">
              <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-(--accent) border-4 border-(--canvas)" />
              </div>

              <div className="rounded-[20px] border border-(--hairline) glass bg-(--surface-1) p-6 md:p-8 card-hover">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-(--ink)">{item.role[lang]}</h3>
                    <p className="mt-1 text-sm font-medium text-(--ink-muted)">{item.company}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full glass bg-(--surface-2) text-(--ink-subtle) whitespace-nowrap">
                    <Icon name="calendar" className="w-3 h-3" />
                    {item.period}
                  </span>
                </div>

                <p className="text-sm text-(--ink-muted) leading-relaxed">
                  {item.description[lang]}
                </p>

                {item.achievements && (
                  <div className="mt-6">
                    <p className="text-eyebrow text-(--ink-subtle) mb-3">
                      {lang === "es" ? "Logros destacados" : "Key achievements"}
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {item.achievements[lang].map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-(--ink-muted) glass bg-(--surface-2) rounded-lg p-2.5"
                        >
                          <Icon name="checkSimple" className="w-3.5 h-3.5 text-(--accent) shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {(stackByIndex[index] || []).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2 py-1 rounded glass bg-(--surface-2) text-(--ink-muted)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <Reveal delay={120} className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { value: "4+", label: { es: "Años de experiencia", en: "Years of experience" } },
          { value: "15+", label: { es: "Proyectos completados", en: "Projects completed" } },
          { value: "4", label: { es: "Roles desempeñados", en: "Roles performed" } },
          { value: "4", label: { es: "Sectores trabajados", en: "Sectors worked" } },
        ].map((stat, index) => (
          <Tilt key={index} max={4}>
            <div className="rounded-2xl border border-(--hairline) glass bg-(--surface-1) p-6 text-center card-hover">
              <p className="text-2xl font-semibold text-(--accent)">
                <Counter value={stat.value} />
              </p>
              <p className="mt-2 text-xs text-(--ink-subtle)">{stat.label[lang]}</p>
            </div>
          </Tilt>
        ))}
      </Reveal>
    </section>
  );
}
