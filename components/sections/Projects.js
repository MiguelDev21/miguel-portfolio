"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import {
  projects,
  projectCategories,
  projectGroupOrder,
  projectGroupLabels,
} from "../../data/projects";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import ProjectVisual from "../ui/ProjectVisual";
import FlipCard from "../ui/FlipCard";

function ProjectCard({ project, lang }) {
  const title = project.title[lang];
  const hasLinks = project.github || project.demo;

  return (
    <FlipCard
      className="h-full"
      front={({ flip }) => (
        <article className="h-full flex flex-col rounded-[20px] border border-(--hairline) glass bg-(--surface-1) overflow-hidden card-hover">
          <div className="p-6 flex-1 flex flex-col">
            <ProjectVisual category={project.category} label={project.stack[0]} />

            {/* Eyebrow + links */}
            <div className="mt-5 flex items-start justify-between gap-3">
              <p className="text-eyebrow text-(--ink-subtle) flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
                {project.type}
              </p>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--ink-tertiary) hover:text-(--ink) transition-colors"
                  aria-label={lang === "es" ? "Ver en GitHub" : "View on GitHub"}
                >
                  <Icon name="github" className="w-4.5 h-4.5" />
                </a>
              )}
            </div>

            {/* Title + impact */}
            <h3 className="mt-3 text-lg font-semibold text-(--ink)">{title}</h3>
            <p className="mt-2 text-sm text-(--ink-muted) leading-relaxed">
              {project.impact[lang]}
            </p>

            {/* Stack */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-2 py-1 rounded glass bg-(--surface-2) text-(--ink-muted)"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex-1" />

            {/* Actions row */}
            <div className="mt-5 flex items-center justify-between">
              <button
                onClick={flip}
                className="flex items-center gap-1.5 text-sm font-medium text-(--accent) hover:text-(--accent-hover) transition-colors"
              >
                {lang === "es" ? "Ver detalle" : "View detail"}
                <Icon name="rotate" className="w-3.5 h-3.5" />
              </button>

              {!hasLinks ? (
                <span className="text-[11px] font-mono px-2 py-1 rounded glass bg-(--surface-2) text-(--ink-tertiary)">
                  {lang === "es" ? "Privado" : "Private"}
                </span>
              ) : (
                project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-(--ink-subtle) hover:text-(--ink) transition-colors"
                  >
                    <Icon name="externalLink" className="w-3.5 h-3.5" />
                    Demo
                  </a>
                )
              )}
            </div>

            {/* Flip hint */}
            <p className="mt-3 flex items-center gap-1.5 text-[11px] text-(--ink-tertiary)">
              <Icon name="rotate" className="w-3 h-3 hint-wiggle" />
              {lang === "es" ? "Gira la tarjeta para ver más" : "Flip the card for more"}
            </p>
          </div>
        </article>
      )}
      back={({ flip }) => (
        <article className="h-full flex flex-col rounded-[20px] border border-(--hairline) glass bg-(--surface-2) overflow-hidden card-hover p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold text-(--ink)">{title}</h3>
            <button
              onClick={flip}
              className="flex items-center gap-1.5 text-sm font-medium text-(--accent) hover:text-(--accent-hover) transition-colors shrink-0"
            >
              <Icon name="rotate" className="w-3.5 h-3.5" />
              {lang === "es" ? "Volver" : "Back"}
            </button>
          </div>

          <div className="mt-4 space-y-4 overflow-y-auto">
            <div>
              <p className="text-eyebrow text-(--ink-subtle) mb-1.5">
                {lang === "es" ? "Mi rol" : "My role"}
              </p>
              <p className="text-sm text-(--ink)">{project.role[lang]}</p>
            </div>

            <div>
              <p className="text-eyebrow text-(--ink-subtle) mb-1.5">
                {lang === "es" ? "Solución" : "Solution"}
              </p>
              <ul className="space-y-1.5">
                {project.highlights[lang].map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-(--ink-muted)">
                    <Icon name="checkSimple" className="w-3.5 h-3.5 text-(--accent) shrink-0 mt-1" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.stack.length > 5 && (
              <div>
                <p className="text-eyebrow text-(--ink-subtle) mb-1.5">
                  {lang === "es" ? "Stack completo" : "Full stack"}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2 py-1 rounded glass bg-(--surface-1) text-(--ink-muted)"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <p className="text-sm text-(--ink-subtle) leading-relaxed pt-1">
              {project.description[lang]}
            </p>
          </div>
        </article>
      )}
    />
  );
}

export default function Projects() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = projectCategories[lang];
  const groupLabels = projectGroupLabels[lang];

  const filteredProjects = useMemo(
    () =>
      activeCategory === "all"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const grouped = useMemo(() => {
    if (activeCategory !== "all") return null;
    const map = new Map();
    for (const type of projectGroupOrder) map.set(type, []);
    for (const project of projects) {
      if (!map.has(project.type)) map.set(project.type, []);
      map.get(project.type).push(project);
    }
    return [...map.entries()].filter(([, list]) => list.length > 0);
  }, [activeCategory]);

  return (
    <section id="projects" className="relative max-w-7xl mx-auto px-4 py-20 md:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-eyebrow text-(--accent) mb-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
          {lang === "es" ? "Proyectos" : "Projects"}
        </p>
        <h2 className="text-display-lg text-(--ink)">
          {lang === "es" ? "Lo que he construido" : "What I've built"}
        </h2>
        <p className="mt-4 text-sm md:text-base text-(--ink-subtle)">
          {lang === "es"
            ? "Proyectos profesionales y personales, agrupados por relevancia. Gira cada tarjeta para ver mi rol y la solución."
            : "Professional and personal projects, grouped by relevance. Flip each card to see my role and the solution."}
        </p>
      </Reveal>

      {/* Category Filters */}
      <Reveal delay={60} className="mt-10 flex flex-wrap gap-2">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors ${
              activeCategory === key
                ? "glass bg-(--surface-2) text-(--ink) border border-(--hairline-strong)"
                : "border border-(--hairline) text-(--ink-muted) hover:text-(--ink) hover:border-(--hairline-strong)"
            }`}
          >
            {label}
          </button>
        ))}
      </Reveal>

      {/* Grouped view (default) */}
      {grouped ? (
        <div className="mt-10 space-y-12">
          {grouped.map(([type, list]) => (
            <div key={type}>
              <h3 className="text-sm font-semibold text-(--ink-subtle) uppercase tracking-wide mb-4">
                {groupLabels[type] || type}
                <span className="ml-2 font-mono text-(--ink-tertiary) normal-case">
                  {list.length}
                </span>
              </h3>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((project) => {
                  const key = `${project.type}-${project.title.en}`;
                  return (
                    <Reveal key={key}>
                      <ProjectCard project={project} lang={lang} />
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            const key = `${project.type}-${project.title.en}`;
            return (
              <Reveal key={key}>
                <ProjectCard project={project} lang={lang} />
              </Reveal>
            );
          })}
        </div>
      )}

      {/* GitHub CTA */}
      <Reveal delay={100} className="glow-card mt-14 p-8 md:p-10 text-center">
        <Icon name="github" className="w-9 h-9 mx-auto text-(--ink-subtle)" />
        <h3 className="mt-4 text-lg font-semibold text-(--ink)">
          {lang === "es" ? "Más proyectos en GitHub" : "More projects on GitHub"}
        </h3>
        <p className="mt-2 text-sm text-(--ink-subtle) max-w-md mx-auto">
          {lang === "es"
            ? "Explora todos mis repositorios públicos, contribuciones y experimentos de código."
            : "Explore all my public repositories, contributions, and code experiments."}
        </p>
        <a
          href="https://github.com/MiguelDev21"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6"
        >
          {lang === "es" ? "Ver GitHub" : "View GitHub"}
          <Icon name="externalLink" className="w-4 h-4" />
        </a>
      </Reveal>
    </section>
  );
}
