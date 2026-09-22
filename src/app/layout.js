import "./globals.css";
import { LanguageProvider } from "../../context/LanguageContext";
import { ThemeProvider } from "../../context/ThemeContext";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollProgress from "../../components/ui/ScrollProgress";
import AmbientGlow from "../../components/ui/AmbientGlow";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://migueldev.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Miguel Bahamón | Ingeniero de Software",
    template: "%s | Miguel Bahamón",
  },
  description:
    "Ingeniero de Software Full Stack, desarrollador móvil iOS/Android, Analista de Datos y especialista en automatización con agentes de IA. React, Next.js, Swift, Kotlin, Power BI y certificaciones Anthropic en IA aplicada.",
  keywords: [
    "desarrollador full stack",
    "react",
    "next.js",
    "node.js",
    "software engineer",
    "desarrollador movil",
    "ios developer",
    "android developer",
    "swift",
    "kotlin",
    "swiftui",
    "QA",
    "project manager",
    "analista de datos",
    "power bi",
    "automatizacion con ia",
    "agentes de ia",
    "Claude AI",
    "Anthropic",
  ],
  authors: [{ name: "Miguel Ángel Bahamón Rocha", url: siteUrl }],
  creator: "Miguel Ángel Bahamón Rocha",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Miguel Bahamón | Ingeniero de Software",
    description:
      "Full Stack, Móvil (iOS/Android), Analista de Datos y Automatización con IA. Proyectos en salud, gobierno y sector privado, más certificaciones Anthropic en IA aplicada.",
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Miguel Bahamón",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Bahamón | Ingeniero de Software",
    description: "Full Stack · Móvil (iOS/Android) · Analista de Datos · Automatización con IA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Miguel Ángel Bahamón Rocha",
  jobTitle: "Ingeniero de Software",
  url: siteUrl,
  email: "mailto:miguel061010@hotmail.com",
  sameAs: [
    "https://github.com/MiguelDev21",
    "https://www.linkedin.com/in/miguel-angel-bahamon-rocha",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Desarrollo iOS",
    "Swift",
    "SwiftUI",
    "Desarrollo Android",
    "Kotlin",
    "Claude AI",
    "Arquitectura de Software",
    "Análisis de Datos",
    "Power BI",
    "Automatización con Agentes de IA",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Prevent a flash of the wrong theme — runs before paint, before React hydrates. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <AmbientGlow />
        <ScrollProgress />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
