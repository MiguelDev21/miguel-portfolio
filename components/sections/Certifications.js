"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import {
  technicalCertifications,
  englishTest,
  certifications,
  workCertifications,
  certificationStats,
} from "../../data/certifications";
import Reveal from "../ui/Reveal";
import Icon from "../ui/Icon";
import Counter from "../ui/Counter";
import Tilt from "../ui/Tilt";

function TechCertCard({ cert, lang }) {
  return (
    <article className="rounded-[20px] border border-(--hairline) glass bg-(--surface-1) overflow-hidden card-hover">
      <div className="relative aspect-4/3 w-full overflow-hidden border-b border-(--hairline) glass bg-(--surface-2)">
        <Image
          src={cert.preview}
          alt={cert.title[lang]}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-200 hover:scale-[1.02]"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-(--ink)">{cert.title[lang]}</h3>
        <p className="mt-1 text-xs text-(--ink-subtle)">
          {cert.issuer}
          {cert.date && ` · ${lang === "es" ? cert.date : cert.dateEn}`}
        </p>
        {cert.coBadged && (
          <p className="mt-1 text-[11px] font-mono text-(--ink-tertiary)">{cert.coBadged}</p>
        )}
        <p className="mt-3 text-sm text-(--ink-muted) leading-relaxed">{cert.description[lang]}</p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {cert.verifyUrl ? (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-(--success)/15 text-(--success) hover:bg-(--success)/25 transition-colors"
            >
              <Icon name="shieldCheck" className="w-3.5 h-3.5" />
              {lang === "es" ? "Verificar credencial" : "Verify credential"}
            </a>
          ) : (
            <span className="text-[11px] font-mono text-(--ink-tertiary)">
              ID: {cert.credentialId}
            </span>
          )}
          <a
            href={cert.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-(--ink-subtle) hover:text-(--ink) transition-colors"
          >
            <Icon name="externalLink" className="w-3.5 h-3.5" />
            {lang === "es" ? "Ver PDF" : "View PDF"}
          </a>
        </div>
      </div>
    </article>
  );
}

function EnglishWidget({ lang }) {
  return (
    <article className="rounded-[20px] border border-(--hairline) glass bg-(--surface-1) p-6 md:p-8 card-hover">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col items-center justify-center shrink-0">
          <div className="w-24 h-24 rounded-[20px] bg-(--accent-soft) flex items-center justify-center">
            <span className="text-3xl font-semibold text-(--accent)">{englishTest.level}</span>
          </div>
          <p className="mt-3 text-xs text-(--ink-subtle)">{englishTest.date}</p>
        </div>

        <div className="flex-1">
          <p className="text-eyebrow text-(--ink-subtle) mb-2">
            {lang === "es" ? "Test de inglés · Nivel oficial" : "English test · Official level"}
          </p>

          {/* CEFR ladder */}
          <div className="flex gap-1.5 mb-4">
            {englishTest.cefrLevels.map((lvl) => (
              <span
                key={lvl}
                className={`flex-1 text-center text-[11px] font-mono py-1.5 rounded ${
                  lvl === englishTest.level
                    ? "bg-white text-black font-semibold"
                    : "glass bg-(--surface-2) text-(--ink-tertiary)"
                }`}
              >
                {lvl}
              </span>
            ))}
          </div>

          <p className="text-sm text-(--ink-muted) leading-relaxed">{englishTest.description[lang]}</p>

          <a
            href={englishTest.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-(--ink-subtle) hover:text-(--ink) transition-colors"
          >
            <Icon name="externalLink" className="w-3.5 h-3.5" />
            {lang === "es" ? "Ver resultado completo" : "View full result"}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Certifications() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");
  const stats = certificationStats[lang];

  const academicAndAwards = [...certifications, ...workCertifications];
  const filtered =
    activeTab === "all"
      ? academicAndAwards
      : academicAndAwards.filter((c) => c.type === activeTab);

  return (
    <section id="certifications" className="relative max-w-7xl mx-auto px-4 py-20 md:py-24">
      <Reveal className="max-w-2xl">
        <p className="text-eyebrow text-(--accent) mb-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-(--accent)" />
          {lang === "es" ? "Certificaciones" : "Certifications"}
        </p>
        <h2 className="text-display-lg text-(--ink)">
          {lang === "es" ? "Credenciales" : "Credentials"}
        </h2>
        <p className="mt-4 text-sm md:text-base text-(--ink-subtle)">
          {lang === "es"
            ? "Formación técnica, idiomas, títulos académicos y certificaciones laborales — todo verificable."
            : "Technical training, languages, academic degrees, and work certifications — all verifiable."}
        </p>
      </Reveal>

      {/* Stats Grid */}
      <Reveal delay={60} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {Object.values(stats).map((stat, index) => (
          <Tilt key={index} max={4}>
            <div className="rounded-2xl border border-(--hairline) glass bg-(--surface-1) p-4 text-center card-hover">
              <p className="text-2xl font-semibold text-(--accent)">
                <Counter value={stat.value} />
              </p>
              <p className="mt-1 text-[11px] text-(--ink-subtle) leading-tight">{stat.label}</p>
            </div>
          </Tilt>
        ))}
      </Reveal>

      {/* Lane 1: Technical certifications (Anthropic Academy) */}
      <div className="mt-14">
        <h3 className="text-sm font-semibold text-(--ink-subtle) uppercase tracking-wide mb-4">
          {lang === "es" ? "Certificaciones técnicas" : "Technical certifications"}
        </h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technicalCertifications.map((cert) => (
            <Reveal key={cert.slug}>
              <TechCertCard cert={cert} lang={lang} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lane 2: English level */}
      <div className="mt-12">
        <h3 className="text-sm font-semibold text-(--ink-subtle) uppercase tracking-wide mb-4">
          {lang === "es" ? "Idiomas" : "Languages"}
        </h3>
        <Reveal>
          <EnglishWidget lang={lang} />
        </Reveal>
      </div>

      {/* Lane 3: Academic + work certifications */}
      <div className="mt-12">
        <h3 className="text-sm font-semibold text-(--ink-subtle) uppercase tracking-wide mb-4">
          {lang === "es" ? "Formación académica y laboral" : "Academic & work background"}
        </h3>

        <div className="flex flex-wrap gap-2 mb-6">
          {Object.entries({
            all: lang === "es" ? "Todas" : "All",
            academic: lang === "es" ? "Académicas" : "Academic",
            award: lang === "es" ? "Premios" : "Awards",
            employment: lang === "es" ? "Laborales" : "Employment",
            contractor: lang === "es" ? "Servicios" : "Services",
          }).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-colors ${
                activeTab === key
                  ? "glass bg-(--surface-2) text-(--ink) border border-(--hairline-strong)"
                  : "border border-(--hairline) text-(--ink-muted) hover:text-(--ink) hover:border-(--hairline-strong)"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {filtered.map((cert, index) => (
            <Reveal
              key={index}
              className="rounded-[20px] border border-(--hairline) glass bg-(--surface-1) p-6 card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-(--accent-soft)">
                  <Icon
                    name={cert.icon === "graduation" ? "graduation" : cert.icon === "award" ? "award" : cert.icon === "trophy" ? "trophy" : "briefcase"}
                    className="w-5 h-5 text-(--accent)"
                  />
                </div>
                <span className="text-xs px-3 py-1 rounded-full glass bg-(--surface-2) text-(--ink-subtle) whitespace-nowrap">
                  {cert.date || cert.period}
                </span>
              </div>

              <h4 className="text-base font-semibold text-(--ink)">
                {typeof cert.title === "object" ? cert.title[lang] : cert.title}
              </h4>
              <p className="mt-1.5 text-sm font-medium text-(--ink-muted)">
                {cert.institution || cert.company}
              </p>
              {cert.position && (
                <p className="mt-0.5 text-sm text-(--ink-subtle)">
                  {typeof cert.position === "object" ? cert.position[lang] : cert.position}
                </p>
              )}
              {cert.credential && (
                <p className="mt-2 text-xs font-mono text-(--ink-tertiary)">{cert.credential}</p>
              )}

              <p className="mt-3 text-sm text-(--ink-subtle) leading-relaxed">
                {typeof cert.description === "object" ? cert.description[lang] : cert.description}
              </p>

              {cert.responsibilities && (
                <ul className="mt-4 space-y-1.5">
                  {cert.responsibilities[lang].slice(0, 3).map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-(--ink-subtle)">
                      <Icon name="checkSimple" className="w-3.5 h-3.5 text-(--accent) shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                  {cert.responsibilities[lang].length > 3 && (
                    <li className="text-xs text-(--ink-tertiary) pl-5">
                      +{cert.responsibilities[lang].length - 3} {lang === "es" ? "más" : "more"}
                    </li>
                  )}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
