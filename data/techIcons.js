import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiSwift,
  SiApple,
  SiKotlin,
  SiAndroidstudio,
  SiSqlite,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiLangchain,
  SiN8N,
  SiClaude,
  SiDocker,
  SiRailway,
  SiVercel,
  SiHostinger,
  SiGit,
  SiGithub,
  SiUnity,
} from "react-icons/si";
import { FaJava, FaFileExcel } from "react-icons/fa6";
import {
  TbBrandOpenai,
  TbBrandCSharp,
  TbChartBar,
  TbSql,
  TbTransform,
  TbLayoutDashboard,
  TbPresentationAnalytics,
  TbDevices,
  TbApi,
  TbPlugConnected,
  TbStack2,
  TbPalette,
  TbSchema,
  TbGauge,
  TbRobot,
  TbTerminal2,
  TbRoute,
  TbRocket,
  TbServer,
  TbGitBranch,
  TbRepeat,
  TbLayoutKanban,
  TbInfinity,
  TbClipboardCheck,
  TbShieldCheck,
  TbListSearch,
  TbBuildingSkyscraper,
  TbNetwork,
  TbUsersGroup,
  TbClipboardList,
  TbBrain,
  TbWand,
} from "react-icons/tb";
import { LuSigma } from "react-icons/lu";

// Neutral tint for brands whose official color is pure black/white and
// would vanish (or clash) against the glass surfaces in either theme.
const NEUTRAL = "#9aa2b3";

// Real brand logos, keyed by the exact label used in data/skills.js.
export const techIcons = {
  // Frontend
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: NEUTRAL },
  Angular: { Icon: SiAngular, color: "#DD0031" },
  "Vue.js": { Icon: SiVuedotjs, color: "#4FC08D" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: SiCss, color: "#1572B6" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },

  // Backend
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  NestJS: { Icon: SiNestjs, color: "#E0234E" },
  Express: { Icon: SiExpress, color: NEUTRAL },
  Laravel: { Icon: SiLaravel, color: "#FF2D20" },
  PHP: { Icon: SiPhp, color: "#777BB4" },

  // Mobile
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  Swift: { Icon: SiSwift, color: "#F05138" },
  "iOS 27 (Liquid Glass)": { Icon: SiApple, color: NEUTRAL },
  Kotlin: { Icon: SiKotlin, color: "#7F52FF" },
  "Android Studio": { Icon: SiAndroidstudio, color: "#3DDC84" },
  "Java (Android)": { Icon: FaJava, color: "#ED8B00" },
  SQLite: { Icon: SiSqlite, color: "#5AB4D6" },

  // Databases
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },

  // AI
  LangChain: { Icon: SiLangchain, color: "#2FBF8F" },
  n8n: { Icon: SiN8N, color: "#EA4B71" },
  "Claude API": { Icon: SiClaude, color: "#D97757" },
  "OpenAI API": { Icon: TbBrandOpenai, color: NEUTRAL },

  // DevOps
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Railway: { Icon: SiRailway, color: NEUTRAL },
  Vercel: { Icon: SiVercel, color: NEUTRAL },
  Hostinger: { Icon: SiHostinger, color: "#673DE6" },

  // Tools
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: NEUTRAL },

  // Other
  Unity: { Icon: SiUnity, color: NEUTRAL },
  "C#": { Icon: TbBrandCSharp, color: "#9B4F96" },
};

// No brand logo exists for these (confirmed against every icon set in
// react-icons) — representative glyphs instead, not literal brand marks.
// Colors cycle through the site's ambient-glow palette (blue/cyan/violet)
// for the fully generic ones; concepts with a natural real-world color
// (Power BI gold, Excel green) keep that instead.
const representativeIcons = {
  // Frontend
  "Responsive Design": { Icon: TbDevices, color: "#2f6bff" },

  // Backend
  "REST APIs": { Icon: TbApi, color: "#2f6bff" },
  "API Integration": { Icon: TbPlugConnected, color: "#22d3ee" },
  "MVC Architecture": { Icon: TbStack2, color: "#7c5cff" },

  // Mobile
  SwiftUI: { Icon: TbPalette, color: "#7c5cff" },

  // Databases
  "Database Design": { Icon: TbSchema, color: "#2f6bff" },
  "Query Optimization": { Icon: TbGauge, color: "#22d3ee" },

  // Data & AI
  "Power BI": { Icon: TbChartBar, color: "#F2C811" },
  DAX: { Icon: LuSigma, color: "#F2C811" },
  "Advanced Excel": { Icon: FaFileExcel, color: "#217346" },
  "SQL Analytics": { Icon: TbSql, color: "#00758F" },
  ETL: { Icon: TbTransform, color: "#7c5cff" },
  Dashboards: { Icon: TbLayoutDashboard, color: "#2f6bff" },
  "Data Storytelling": { Icon: TbPresentationAnalytics, color: "#22d3ee" },
  "AI Agents": { Icon: TbRobot, color: "#2f6bff" },
  "Prompt Engineering": { Icon: TbTerminal2, color: "#22d3ee" },
  "Agentic Workflows": { Icon: TbRoute, color: "#7c5cff" },

  // DevOps
  "Production Deployment": { Icon: TbRocket, color: "#2f6bff" },
  "Server Management": { Icon: TbServer, color: "#22d3ee" },
  "Version Control": { Icon: TbGitBranch, color: "#7c5cff" },

  // Tools & Methodologies
  Scrum: { Icon: TbRepeat, color: "#2f6bff" },
  Kanban: { Icon: TbLayoutKanban, color: "#22d3ee" },
  Agile: { Icon: TbInfinity, color: "#7c5cff" },
  "QA Manual": { Icon: TbClipboardCheck, color: "#2f6bff" },
  "Quality Control": { Icon: TbShieldCheck, color: "#22d3ee" },
  "Requirements Analysis": { Icon: TbListSearch, color: "#7c5cff" },

  // Other
  "Software Architecture": { Icon: TbBuildingSkyscraper, color: "#2f6bff" },
  "System Design": { Icon: TbNetwork, color: "#22d3ee" },
  "Technical Leadership": { Icon: TbUsersGroup, color: "#7c5cff" },
  "Project Management": { Icon: TbClipboardList, color: "#2f6bff" },
  "LLM Integration": { Icon: TbBrain, color: "#22d3ee" },
  "IA Tools": { Icon: TbWand, color: "#7c5cff" },
};

// Resolves a skill label to a carousel-ready entry, or null when no real
// brand logo exists for it — callers filter those out.
export function resolveTechIcon(name) {
  const entry = techIcons[name] || representativeIcons[name];
  if (!entry) return null;
  return { name, Icon: entry.Icon, color: entry.color };
}
