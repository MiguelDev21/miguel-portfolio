"use client";

import { useLanguage } from "../../context/LanguageContext";
import { profileText, personalInfo, focus, stack } from "../../data/profile";
import { siteConfig } from "../../data/siteConfig";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import Tilt from "../ui/Tilt";
import Parallax from "../ui/Parallax";
import Counter from "../ui/Counter";

export default function Hero() {
  const { lang } = useLanguage();
  const text = profileText[lang];
  const focusItems = focus[lang];
  const stackItems = stack.split(" · ");

  return (
    <section
      id="hero"
      className="relative max-w-7xl mx-auto px-4 pt-10 pb-20 md:pt-14 md:pb-28 min-h-[88vh] flex items-center overflow-hidden"
    >
      {/* Decorative parallax layer — isolated from content so its mask
          never clips real text/cards (see globals.css .bg-grid note). */}
      <Parallax speed={0.12} className="absolute inset-0 pointer-events-none">
        <div className="bg-grid absolute inset-0" />
      </Parallax>

      <div className="grid gap-5 lg:grid-cols-3 relative w-full">
        {/* Main Hero Card */}
        <Reveal
          as="div"
          className="lg:col-span-2 rounded-[20px] border border-(--hairline) glass bg-(--surface-1) p-8 md:p-12 flex flex-col justify-between"
        >
          <div>
            {/* Availability Badge */}
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-(--accent-soft) text-(--accent) mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-(--accent) opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-(--accent)" />
              </span>
              {text.availability}
            </span>

            {/* Eyebrow */}
            <p className="text-eyebrow text-(--ink-subtle) mb-3">
              {personalInfo.location} · {text.role}
            </p>

            {/* Name */}
            <h1 className="text-display-xxl text-(--ink)">
              {personalInfo.name.split(" ").slice(0, 2).join(" ")}
              <br />
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg, var(--glow-blue), var(--glow-cyan))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {personalInfo.name.split(" ").slice(2).join(" ")}
              </span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-(--ink-muted)">
              {text.subtitle}
            </p>

            <p className="mt-4 max-w-2xl text-sm md:text-base text-(--ink-subtle) leading-relaxed">
              {text.description}
            </p>

            {/* Quick Stats */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-(--ink-subtle)">
                <Icon name="location" className="w-4 h-4 text-(--accent)" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-(--ink-subtle)">
                <Icon name="briefcase" className="w-4 h-4 text-(--accent)" />
                <span className="text-sm">
                  <Counter value={text.experience} /> {text.experienceLabel}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              {lang === "es" ? "Ver proyectos" : "View projects"}
            </a>
            <a href="#certifications" className="btn-secondary">
              {lang === "es" ? "Certificaciones" : "Certifications"}
            </a>
            <a href={siteConfig.cv[lang]} download className="btn-secondary">
              <Icon name="download" className="w-4 h-4" />
              CV
            </a>
          </div>
        </Reveal>

        {/* Right Bento Column */}
        <div className="grid gap-5">
          <Tilt max={5}>
            <Reveal delay={80} className="glow-card p-6">
              <p className="text-eyebrow text-(--ink-subtle)">
                {lang === "es" ? "Experiencia" : "Experience"}
              </p>
              <p className="mt-3 text-2xl font-semibold text-(--ink)">
                <Counter value={text.experienceDetail} />
              </p>
            </Reveal>
          </Tilt>

          <Tilt max={5}>
            <Reveal
              delay={140}
              className="rounded-[20px] border border-(--hairline) glass bg-(--surface-1) p-6 card-hover"
            >
              <p className="text-eyebrow text-(--ink-subtle) mb-4">
                {lang === "es" ? "Especialidad" : "Focus"}
              </p>
              <ul className="space-y-2.5 text-sm">
                {focusItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-(--ink-muted)">
                    <Icon name="checkSimple" className="w-4 h-4 text-(--accent) shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Tilt>

          <Tilt max={5}>
            <Reveal
              delay={200}
              className="rounded-[20px] border border-(--hairline) glass bg-(--surface-1) p-6 card-hover"
            >
              <p className="text-eyebrow text-(--ink-subtle) mb-3">Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {stackItems.slice(0, 10).map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11px] px-2 py-1 rounded glass bg-(--surface-2) text-(--ink-muted)"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </Tilt>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-(--ink-tertiary) hover:text-(--ink-subtle) transition-colors"
      >
        <span className="text-xs">{lang === "es" ? "Desplázate" : "Scroll"}</span>
        <Icon name="chevronDown" className="w-4 h-4" />
      </a>
    </section>
  );
}
