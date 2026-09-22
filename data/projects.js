export const projects = [
  // Proyectos Profesionales
  {
    title: {
      es: "Sistema de Gestión en Salud",
      en: "Healthcare Management System",
    },
    role: {
      es: "Full Stack Developer & Líder de Proyecto",
      en: "Full Stack Developer & Project Lead",
    },
    impact: {
      es: "Digitalizó el flujo clínico completo de una red de clínicas de oftalmología, desde historias clínicas hasta permisos por rol.",
      en: "Digitized the full clinical workflow for an ophthalmology clinic network, from medical records to role-based permissions.",
    },
    description: {
      es: "Plataforma empresarial integral para clínicas de oftalmología y optometría. Sistema completo con gestión de usuarios, roles, módulos administrativos, historias clínicas y flujos críticos del sector salud.",
      en: "Comprehensive enterprise platform for ophthalmology and optometry clinics. Complete system with user management, roles, administrative modules, clinical records, and critical healthcare workflows.",
    },
    stack: ["React", "Node.js", "NestJS", "PostgreSQL", "Tailwind CSS", "Docker"],
    type: "Profesional",
    category: "healthcare",
    github: null, // Privado
    demo: null,
    highlights: {
      es: ["Arquitectura escalable", "Multi-rol y permisos", "Integración de APIs", "Gestión documental"],
      en: ["Scalable architecture", "Multi-role and permissions", "API integration", "Document management"],
    },
  },
  {
    title: {
      es: "Plataforma DIAN - Gestión Tributaria",
      en: "DIAN Platform - Tax Management",
    },
    role: {
      es: "Desarrollador Frontend (Freelance)",
      en: "Frontend Developer (Freelance)",
    },
    impact: {
      es: "Interfaz de gestión tributaria para una entidad del gobierno colombiano, con validaciones complejas y foco en accesibilidad.",
      en: "Tax management interface for a Colombian government entity, with complex validations and an accessibility-first approach.",
    },
    description: {
      es: "Sistema frontend para entidad gubernamental colombiana. Plataforma de gestión de impuestos con interfaces accesibles, validaciones robustas y optimización de UX para usuarios finales.",
      en: "Frontend system for Colombian government entity. Tax management platform with accessible interfaces, robust validations, and UX optimization for end users.",
    },
    stack: ["React", "JavaScript", "CSS3", "HTML5", "REST APIs"],
    type: "Gobierno",
    category: "government",
    github: null, // Privado
    demo: null,
    highlights: {
      es: ["Estándares de accesibilidad", "Integración APIs REST", "Validaciones complejas"],
      en: ["Accessibility standards", "REST API integration", "Complex validations"],
    },
  },

  // Proyectos Educativos
  {
    title: {
      es: "Sistema Escolar con Gestión Documental",
      en: "School System with Document Management",
    },
    role: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    impact: {
      es: "Reemplazó procesos manuales de notas y asistencia por un flujo digital con comunicación directa padres-docentes.",
      en: "Replaced manual grading and attendance processes with a digital flow connecting parents and teachers directly.",
    },
    description: {
      es: "Software completo para gestión educativa con publicación de notas, gestión documental, control de asistencia y módulo de comunicación entre padres y docentes.",
      en: "Complete software for educational management with grade publication, document management, attendance control, and communication module between parents and teachers.",
    },
    stack: ["React", "Node.js", "MongoDB", "Express"],
    type: "Educativo",
    category: "education",
    github: null,
    demo: null,
    highlights: {
      es: ["Gestión de calificaciones", "Control de asistencia", "Reportes automatizados"],
      en: ["Grade management", "Attendance control", "Automated reports"],
    },
  },
  {
    title: {
      es: "Videojuego Educativo - Autismo",
      en: "Educational Video Game - Autism",
    },
    role: {
      es: "Desarrollador de Videojuego",
      en: "Game Developer",
    },
    impact: {
      es: "Herramienta de apoyo cognitivo para niños con autismo, premiada como proyecto ganador de innovación tecnológica.",
      en: "Cognitive-support tool for children with autism, awarded as a winning technological innovation project.",
    },
    description: {
      es: "Videojuego educativo diseñado específicamente para niños con autismo. Incluye mecánicas adaptativas, ejercicios cognitivos y retroalimentación visual intuitiva.",
      en: "Educational video game specifically designed for children with autism. Includes adaptive mechanics, cognitive exercises, and intuitive visual feedback.",
    },
    stack: ["Unity", "C#", "Game Design"],
    type: "Educativo",
    category: "education",
    github: null,
    demo: null,
    highlights: {
      es: ["Diseño inclusivo", "Mecánicas adaptativas", "Retroalimentación visual"],
      en: ["Inclusive design", "Adaptive mechanics", "Visual feedback"],
    },
  },

  // Proyectos Empresariales
  {
    title: {
      es: "Sistema de Seguros",
      en: "Insurance System",
    },
    role: {
      es: "Desarrollador Full Stack (Freelance)",
      en: "Full Stack Developer (Freelance)",
    },
    impact: {
      es: "Cotizador y gestión de pólizas en línea para una aseguradora, reduciendo la dependencia de procesos manuales.",
      en: "Online quoting and policy management for an insurance company, reducing reliance on manual processes.",
    },
    description: {
      es: "Plataforma web para empresa de seguros con cotizador en línea, gestión de pólizas, panel de clientes y administración de solicitudes.",
      en: "Web platform for insurance company with online quote calculator, policy management, client panel, and request administration.",
    },
    stack: ["Vue.js", "Laravel", "MySQL", "PHP"],
    type: "Empresarial",
    category: "business",
    github: null,
    demo: null,
    highlights: {
      es: ["Cotizador automático", "Gestión de pólizas", "Panel de clientes"],
      en: ["Automatic quote calculator", "Policy management", "Client panel"],
    },
  },
  {
    title: {
      es: "Plataforma de Paneles Solares",
      en: "Solar Panels Platform",
    },
    role: {
      es: "Desarrollador Full Stack (Freelance)",
      en: "Full Stack Developer (Freelance)",
    },
    impact: {
      es: "Calculadora de ahorro energético y gestión de instalaciones para una empresa de energía solar.",
      en: "Energy-savings calculator and installation management for a solar energy company.",
    },
    description: {
      es: "Sistema web para empresa de energía solar con cotizaciones, cálculo de ahorro energético, gestión de proyectos e instalaciones.",
      en: "Web system for solar energy company with quotes, energy savings calculator, project management, and installations.",
    },
    stack: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    type: "Empresarial",
    category: "business",
    github: null,
    demo: null,
    highlights: {
      es: ["Calculadora de ahorro", "Gestión de instalaciones", "Cotizaciones en línea"],
      en: ["Savings calculator", "Installation management", "Online quotes"],
    },
  },
  {
    title: {
      es: "Sistema Club de Fútbol",
      en: "Football Club System",
    },
    role: {
      es: "Desarrollador Full Stack (Freelance)",
      en: "Full Stack Developer (Freelance)",
    },
    impact: {
      es: "Plataforma de gestión integral para un club deportivo: socios, reservas, torneos y pagos en un solo lugar.",
      en: "End-to-end management platform for a sports club: members, bookings, tournaments and payments in one place.",
    },
    description: {
      es: "Plataforma para club deportivo con gestión de socios, reservas de canchas, torneos, estadísticas de jugadores y sistema de pagos.",
      en: "Platform for sports club with member management, field reservations, tournaments, player statistics, and payment system.",
    },
    stack: ["React", "Node.js", "MongoDB", "Express"],
    type: "Deportivo",
    category: "sports",
    github: null,
    demo: null,
    highlights: {
      es: ["Gestión de socios", "Reservas online", "Estadísticas de jugadores"],
      en: ["Member management", "Online reservations", "Player statistics"],
    },
  },
  {
    title: {
      es: "Sistema de Indicadores Gerenciales",
      en: "Management Indicators System",
    },
    role: {
      es: "Desarrollador Full Stack (Freelance)",
      en: "Full Stack Developer (Freelance)",
    },
    impact: {
      es: "Panel de indicadores por área (compras, contabilidad, financiera, gerencia, gestión humana, HSEQ, operaciones) para centralizar la lectura del negocio.",
      en: "Per-department indicator dashboard (purchasing, accounting, finance, management, HR, HSEQ, operations) to centralize business reporting.",
    },
    description: {
      es: "Sistema web para el seguimiento de indicadores de gestión gerencial, con módulos independientes por área de la empresa y consolidado ejecutivo por período.",
      en: "Web system for tracking management indicators, with independent modules per company department and an executive consolidated view by period.",
    },
    stack: ["JavaScript", "HTML5", "CSS3", "Vercel"],
    type: "Empresarial",
    category: "business",
    github: "https://github.com/MiguelDev21/Sistema-indicadores-gerencia",
    demo: "https://sistema-indicadores-gerencia.vercel.app",
    highlights: {
      es: ["Módulos por área", "Consolidado ejecutivo", "Reportes por período"],
      en: ["Per-department modules", "Executive consolidated view", "Period-based reports"],
    },
  },

  // Proyectos GitHub Públicos
  {
    title: {
      es: "Portafolio Personal",
      en: "Personal Portfolio",
    },
    role: {
      es: "Desarrollador",
      en: "Developer",
    },
    impact: {
      es: "Este mismo sitio — rediseñado con foco en performance y una identidad visual propia.",
      en: "This very site — redesigned with a focus on performance and a distinct visual identity.",
    },
    description: {
      es: "Portafolio profesional desarrollado con Next.js y Tailwind CSS. Diseño oscuro de una sola pieza, soporte multilenguaje (ES/EN), full responsive y optimizado para velocidad de carga.",
      en: "Professional portfolio built with Next.js and Tailwind CSS. Single dark theme, multilingual support (ES/EN), fully responsive, and optimized for load speed.",
    },
    stack: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    type: "Personal",
    category: "portfolio",
    github: "https://github.com/MiguelDev21/miguel-portfolio",
    demo: null,
    highlights: {
      es: ["Diseño Linear-inspired", "Multi-idioma", "Optimizado para velocidad"],
      en: ["Linear-inspired design", "Multi-language", "Optimized for speed"],
    },
  },
  {
    title: {
      es: "Sideo - Plataforma de Evaluación de Desempeño",
      en: "Sideo - Performance Evaluation Platform",
    },
    role: {
      es: "Desarrollador Backend",
      en: "Backend Developer",
    },
    impact: {
      es: "Backend SaaS multi-empresa para evaluaciones de desempeño de empleados, con roles, suscripciones y reportes automáticos.",
      en: "Multi-tenant SaaS backend for employee performance evaluations, with roles, subscriptions, and automated reports.",
    },
    description: {
      es: "API backend con NestJS para una plataforma SaaS de evaluación de desempeño: gestión de empresas y empleados, control de acceso basado en roles (CASL), suscripciones, generación de reportes en PDF y notificaciones por correo.",
      en: "NestJS backend API for a performance-evaluation SaaS platform: company and employee management, role-based access control (CASL), subscriptions, PDF report generation, and email notifications.",
    },
    stack: ["NestJS", "TypeScript", "TypeORM", "PostgreSQL", "Supabase", "JWT", "CASL"],
    type: "Personal",
    category: "business",
    github: "https://github.com/MiguelDev21/sideo-backend",
    demo: null,
    highlights: {
      es: ["Multi-tenant (empresas)", "Roles y permisos con CASL", "Reportes PDF automáticos"],
      en: ["Multi-tenant (companies)", "CASL role-based permissions", "Automated PDF reports"],
    },
  },
  {
    title: {
      es: "FitVance",
      en: "FitVance",
    },
    role: {
      es: "Desarrollador Full Stack Móvil (Colaborador)",
      en: "Full Stack Mobile Developer (Collaborator)",
    },
    impact: {
      es: "App de rutinas de gimnasio para iOS y Android que convierte el progreso en algo competitivo: subes de división entrenando solo, con un amigo o con tu entrenador.",
      en: "Gym routine app for iOS and Android that turns progress into something competitive: you climb divisions training solo, with a friend, or with your trainer.",
    },
    description: {
      es: "App móvil de rutinas de gimnasio con un enfoque social y competitivo: gestión de rutinas y ejercicios, seguimiento de progreso, sistema de divisiones para subir de nivel junto a un amigo o un entrenador dentro de su comunidad, y control nutricional documentando lo que consumes para que la app ayude a optimizar resultados. En desarrollo activo junto a otro desarrollador.",
      en: "Mobile gym-routine app with a social, competitive angle: routine and exercise management, progress tracking, a division system to level up together with a friend or a trainer within their community, and nutrition tracking that logs what you eat so the app can help optimize your results. Actively being built together with another developer.",
    },
    stack: ["React Native", "NestJS", "PostgreSQL"],
    type: "Personal",
    category: "mobile",
    github: "https://github.com/CamiloVargas05/FitVance_Front",
    demo: null,
    highlights: {
      es: ["iOS y Android (React Native)", "Divisiones y competitividad", "Control nutricional"],
      en: ["iOS and Android (React Native)", "Divisions and competitiveness", "Nutrition tracking"],
    },
  },
  {
    title: {
      es: "Prueba Técnica Full Stack",
      en: "Full Stack Technical Test",
    },
    role: {
      es: "Desarrollador (Prueba técnica)",
      en: "Developer (Technical test)",
    },
    impact: {
      es: "CRUD completo con autenticación y panel admin, resuelto como evaluación técnica para un proceso de selección.",
      en: "Complete CRUD with authentication and admin panel, solved as a technical evaluation for a hiring process.",
    },
    description: {
      es: "Aplicación full stack desarrollada como prueba técnica. Implementa CRUD completo, autenticación, gestión de usuarios y panel administrativo.",
      en: "Full stack application developed as technical test. Implements complete CRUD, authentication, user management, and admin panel.",
    },
    stack: ["Vue.js", "Node.js", "MongoDB"],
    type: "Técnico",
    category: "technical",
    github: "https://github.com/MiguelDev21/prueba-tecnica-igmcolombia-fullstack-junior",
    demo: null,
    highlights: {
      es: ["CRUD completo", "Autenticación", "Panel admin"],
      en: ["Complete CRUD", "Authentication", "Admin panel"],
    },
  },
  {
    title: {
      es: "Pages React - Proyecto Web",
      en: "React Pages - Web Project",
    },
    role: {
      es: "Desarrollador",
      en: "Developer",
    },
    impact: {
      es: "Colección de componentes y layouts React reutilizables, usados como base en proyectos posteriores.",
      en: "Collection of reusable React components and layouts, used as a base in later projects.",
    },
    description: {
      es: "Colección de páginas y componentes React reutilizables. Incluye diferentes layouts, componentes UI y patrones de diseño modernos.",
      en: "Collection of reusable React pages and components. Includes different layouts, UI components, and modern design patterns.",
    },
    stack: ["React", "JavaScript", "CSS"],
    type: "Personal",
    category: "components",
    github: "https://github.com/MiguelDev21/pages-react",
    demo: null,
    highlights: {
      es: ["Componentes reutilizables", "Patrones modernos", "Layouts variados"],
      en: ["Reusable components", "Modern patterns", "Various layouts"],
    },
  },
  {
    title: {
      es: "Prueba Técnica JavaScript",
      en: "JavaScript Technical Test",
    },
    role: {
      es: "Desarrollador (Prueba técnica)",
      en: "Developer (Technical test)",
    },
    impact: {
      es: "Algoritmos y manipulación del DOM resueltos en JavaScript puro, sin frameworks.",
      en: "Algorithms and DOM manipulation solved in vanilla JavaScript, no frameworks.",
    },
    description: {
      es: "Proyecto de prueba técnica enfocado en JavaScript vanilla. Implementa algoritmos, manipulación del DOM y resolución de problemas de lógica.",
      en: "Technical test project focused on vanilla JavaScript. Implements algorithms, DOM manipulation, and logic problem solving.",
    },
    stack: ["JavaScript", "HTML5", "CSS3"],
    type: "Técnico",
    category: "technical",
    github: "https://github.com/MiguelDev21/Prueba-Tecnica",
    demo: null,
    highlights: {
      es: ["Algoritmos", "Manipulación DOM", "JavaScript puro"],
      en: ["Algorithms", "DOM manipulation", "Pure JavaScript"],
    },
  },
  {
    title: {
      es: "Prueba Técnica QA - Lite Thinking",
      en: "QA Technical Test - Lite Thinking",
    },
    role: {
      es: "QA Engineer (Prueba técnica)",
      en: "QA Engineer (Technical test)",
    },
    impact: {
      es: "Suite de QA completa para una arquitectura de microservicios: pruebas manuales, automatizadas, de carga y de rendimiento en un solo entregable.",
      en: "Full QA suite for a microservices architecture: manual, automated, load, and performance testing in a single deliverable.",
    },
    description: {
      es: "Prueba técnica de QA que cubre pruebas manuales documentadas, automatización con Selenium, colecciones de Postman, pruebas de carga, auditorías de Lighthouse y monitoreo, sobre una arquitectura de microservicios.",
      en: "QA technical test covering documented manual testing, Selenium automation, Postman collections, load testing, Lighthouse audits, and monitoring over a microservices architecture.",
    },
    stack: ["Selenium", "Postman", "Lighthouse", "JavaScript", "Microservices", "Load Testing"],
    type: "Técnico",
    category: "technical",
    github: "https://github.com/MiguelDev21/PruebaTecnica-QA-LiteThinking",
    demo: null,
    highlights: {
      es: ["Automatización con Selenium", "Pruebas de carga", "Auditorías Lighthouse"],
      en: ["Selenium automation", "Load testing", "Lighthouse audits"],
    },
  },
  {
    title: {
      es: "Prueba Técnica Backend - Entidad Financiera",
      en: "Backend Technical Test - Financial Entity",
    },
    role: {
      es: "Desarrollador Backend (Prueba técnica)",
      en: "Backend Developer (Technical test)",
    },
    impact: {
      es: "API REST en Java/Spring Boot para gestión de clientes, productos financieros y transacciones, con pruebas unitarias y de integración.",
      en: "Java/Spring Boot REST API for managing clients, financial products, and transactions, with unit and integration tests.",
    },
    description: {
      es: "API REST desarrollada en Java con Spring Boot para la administración de clientes, productos financieros y transacciones de una entidad financiera, con arquitectura en capas (controller/service/repository) y tests con JUnit 5 y Mockito.",
      en: "Java REST API built with Spring Boot for managing clients, financial products, and transactions for a financial entity, with a layered architecture (controller/service/repository) and JUnit 5 + Mockito tests.",
    },
    stack: ["Java", "Spring Boot", "PostgreSQL", "JPA/Hibernate", "JUnit 5", "Mockito"],
    type: "Técnico",
    category: "technical",
    github: "https://github.com/MiguelDev21/Prueba-tecnica-Backend-entidad-financiera",
    demo: null,
    highlights: {
      es: ["Arquitectura en capas", "Tests unitarios e integración", "Validaciones de negocio"],
      en: ["Layered architecture", "Unit and integration tests", "Business validations"],
    },
  },
  {
    title: {
      es: "Ejercicios en C",
      en: "C Language Exercises",
    },
    role: {
      es: "Estudiante",
      en: "Student",
    },
    impact: {
      es: "Base de estructuras de datos y algoritmos fundamentales en C, previa a los frameworks web.",
      en: "Foundation of data structures and fundamental algorithms in C, before moving to web frameworks.",
    },
    description: {
      es: "Repositorio de ejercicios y prácticas en lenguaje C. Incluye estructuras de datos, algoritmos y ejercicios de programación fundamental.",
      en: "Repository of exercises and practices in C language. Includes data structures, algorithms, and fundamental programming exercises.",
    },
    stack: ["C"],
    type: "Académico",
    category: "academic",
    github: null,
    demo: null,
    highlights: {
      es: ["Estructuras de datos", "Algoritmos básicos", "Fundamentos C"],
      en: ["Data structures", "Basic algorithms", "C fundamentals"],
    },
  },
  {
    title: {
      es: "Proyecto HTML/CSS",
      en: "HTML/CSS Project",
    },
    role: {
      es: "Desarrollador",
      en: "Developer",
    },
    impact: {
      es: "Ejercicio de fundamentos: HTML semántico, CSS responsive y animaciones sin dependencias.",
      en: "Fundamentals exercise: semantic HTML, responsive CSS and animations with zero dependencies.",
    },
    description: {
      es: "Proyecto web estático con HTML5 y CSS3. Implementa diseño responsive, animaciones CSS y estructura semántica moderna.",
      en: "Static web project with HTML5 and CSS3. Implements responsive design, CSS animations, and modern semantic structure.",
    },
    stack: ["HTML5", "CSS3"],
    type: "Personal",
    category: "frontend",
    github: null,
    demo: null,
    highlights: {
      es: ["Diseño responsive", "Animaciones CSS", "HTML semántico"],
      en: ["Responsive design", "CSS animations", "Semantic HTML"],
    },
  },
];

// Categorías para filtrado
export const projectCategories = {
  es: {
    all: "Todos",
    healthcare: "Salud",
    government: "Gobierno",
    education: "Educación",
    business: "Empresarial",
    sports: "Deportivo",
    mobile: "Móvil",
    portfolio: "Portafolio",
    technical: "Técnico",
    academic: "Académico",
    components: "Componentes",
    frontend: "Frontend",
  },
  en: {
    all: "All",
    healthcare: "Healthcare",
    government: "Government",
    education: "Education",
    business: "Business",
    sports: "Sports",
    mobile: "Mobile",
    portfolio: "Portfolio",
    technical: "Technical",
    academic: "Academic",
    components: "Components",
    frontend: "Frontend",
  },
};

// Orden de agrupación por relevancia para reclutadores (project-case-study skill)
export const projectGroupOrder = ["Profesional", "Gobierno", "Educativo", "Empresarial", "Deportivo", "Personal", "Técnico", "Académico"];

export const projectGroupLabels = {
  es: {
    Profesional: "Profesional",
    Gobierno: "Gobierno",
    Educativo: "Educativo",
    Empresarial: "Empresarial",
    Deportivo: "Deportivo",
    Personal: "Personal",
    Técnico: "Pruebas técnicas",
    Académico: "Académico",
  },
  en: {
    Profesional: "Professional",
    Gobierno: "Government",
    Educativo: "Educational",
    Empresarial: "Business",
    Deportivo: "Sports",
    Personal: "Personal",
    Técnico: "Technical tests",
    Académico: "Academic",
  },
};
