"use client";

import { useLanguage } from "../../context/LanguageContext";
import { education, languages } from "../../data/education";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";

const statusIcons = { code: "code", database: "layers", tool: "settings" };

export default function Education() {
  const { lang } = useLanguage();
  const languagesList = languages[lang];

  return (
    <section id="education" className="relative max-w-7xl mx-auto px-4 py-20 md:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-eyebrow text-(--accent) mb-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
          {lang === "es" ? "Educación" : "Education"}
        </p>
        <h2 className="text-display-lg text-(--ink)">
          {lang === "es" ? "Formación" : "Education"}
        </h2>
        <p className="mt-4 text-sm md:text-base text-(--ink-subtle)">
          {lang === "es"
            ? "Formación académica progresiva en desarrollo de software, sistemas de información y tecnología."
            : "Progressive academic training in software development, information systems, and technology."}
        </p>
      </Reveal>

      {/* Education Timeline */}
      <div className="mt-12 relative">
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-(--hairline)" />

        <div className="space-y-8">
          {education.map((item, index) => {
            const inProgress =
              item.status[lang].toLowerCase().includes("curso") ||
              item.status[lang].toLowerCase().includes("progress");

            return (
              <Reveal key={index} delay={index * 80} className="relative pl-8 md:pl-20">
                <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-4 border-(--canvas) ${
                      inProgress ? "bg-(--success)" : "bg-(--accent)"
                    }`}
                  />
                </div>

                <div className="rounded-[20px] border border-(--hairline) glass bg-(--surface-1) p-6 md:p-8 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-(--ink)">{item.degree[lang]}</h3>
                      <p className="mt-2 text-sm font-medium text-(--ink-muted)">{item.institution}</p>
                      <p className="mt-1 text-sm text-(--ink-subtle)">{item.location}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-start sm:items-end">
                      <span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full glass bg-(--surface-2) text-(--ink-subtle) whitespace-nowrap">
                        <Icon name="calendar" className="w-3 h-3" />
                        {item.period}
                      </span>
                      <span
                        className={`text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap ${
                          inProgress ? "bg-(--success)/15 text-(--success)" : "bg-(--accent-soft) text-(--accent)"
                        }`}
                      >
                        {item.status[lang]}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-(--ink-muted) leading-relaxed">{item.description[lang]}</p>

                  {item.credential && (
                    <div className="mt-4 flex items-center gap-2 text-xs text-(--ink-subtle)">
                      <Icon name="shieldCheck" className="w-4 h-4" />
                      <span className="font-mono">{item.credential}</span>
                    </div>
                  )}

                  <div className="mt-4 flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg glass bg-(--surface-2) text-(--ink-subtle) w-fit">
                    <Icon name={statusIcons[item.icon] || "code"} className="w-4 h-4 text-(--accent)" />
                    <span>
                      {item.icon === "code" && (lang === "es" ? "Ingeniería" : "Engineering")}
                      {item.icon === "database" && (lang === "es" ? "Tecnología" : "Technology")}
                      {item.icon === "tool" && (lang === "es" ? "Técnico" : "Technical")}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Languages Section */}
      <Reveal delay={100} className="mt-12">
        <h3 className="text-display-md text-(--ink) mb-6">
          {lang === "es" ? "Idiomas" : "Languages"}
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {languagesList.map((item, index) => (
            <div
              key={index}
              className="rounded-[20px] border border-(--hairline) glass bg-(--surface-1) p-6 card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-base font-semibold text-(--ink)">{item.language}</h4>
                  <p className="text-sm text-(--ink-subtle) mt-1">{item.level}</p>
                </div>
                <div className="text-2xl font-semibold text-(--accent)">{item.proficiency}%</div>
              </div>
              <div className="w-full glass bg-(--surface-2) rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-full bg-(--accent) rounded-full transition-all duration-1000"
                  style={{ width: `${item.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <a
          href="#certifications"
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-(--accent) hover:text-(--accent-hover) transition-colors"
        >
          {lang === "es" ? "Ver resultado oficial del test de inglés" : "See official English test result"}
          <Icon name="externalLink" className="w-3.5 h-3.5" />
        </a>
      </Reveal>

      {/* Additional Info */}
      <Reveal delay={140} className="mt-12 rounded-[20px] border border-(--hairline) glass bg-(--surface-1) p-8 md:p-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-base font-semibold text-(--ink) mb-3 flex items-center gap-2">
              <Icon name="sparkles" className="w-5 h-5 text-(--accent)" />
              {lang === "es" ? "Aprendizaje Continuo" : "Continuous Learning"}
            </h3>
            <p className="text-sm text-(--ink-subtle) leading-relaxed">
              {lang === "es"
                ? "Actualmente cursando Ingeniería de Software mientras mantengo actualización constante en nuevas tecnologías y mejores prácticas de desarrollo."
                : "Currently pursuing Software Engineering while maintaining constant updates on new technologies and development best practices."}
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-(--ink) mb-3 flex items-center gap-2">
              <Icon name="shieldCheck" className="w-5 h-5 text-(--accent)" />
              {lang === "es" ? "Formación Oficial" : "Official Training"}
            </h3>
            <p className="text-sm text-(--ink-subtle) leading-relaxed">
              {lang === "es"
                ? "Todos los títulos están registrados en el Ministerio de Educación Nacional de Colombia con credenciales SNIES verificables."
                : "All degrees are registered with the Colombian Ministry of National Education with verifiable SNIES credentials."}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
