export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  highlights: string[];      // 2-4 bullet
  links?: {
    repo?: string;
    live?: string;
    caseStudy?: boolean;     // ha van modal tartalom
  };
  caseStudy?: {
    problem: string;
    solution: string[];
    results: string[];
    stack: string[];
  };
};

export const projects: Project[] = [
  {
    id: "contact-manager",
    title: "ContactManager",
    description:
      "WPF alkalmazás email-ekből kontaktok kinyerésére, tárolására és felülvizsgálatára (MVVM, SQLite).",
    tags: ["WPF", "C#", "SQLite", "MVVM"],
    highlights: [
      "Regex alapú kontakt kinyerés + deduplikáció",
      "Szűrők, DataGrid UX, státusz mezők",
      "Google Cloud OAuth integráció (Gmail)",
    ],
    links: { repo: "https://github.com/...", caseStudy: true },
    caseStudy: {
      problem:
        "Kontaktok manuális kinyerése emailekből lassú és hibára hajlamos volt; kellett egy gyors, review-központú workflow.",
      solution: [
        "MVVM architektúra + jól skálázható UI state",
        "SQLite + EF Core / repository jellegű adatkezelés",
        "Import pipeline: email → regex parsing → normalizálás → deduplikáció",
      ],
      results: [
        "Gyorsabb feldolgozás és egységes review folyamat",
        "Kereshető/szűrhető adatbázis, tiszta auditálhatóság",
      ],
      stack: ["C#", "WPF", "MVVM", "SQLite", "Google OAuth"],
    },
  },
  {
    id: "spring-svelte-app",
    title: "Spring Boot + Svelte Full-stack",
    description:
      "Spring Boot backend API + Svelte frontend, session alapú auth és tiszta endpoint struktúra.",
    tags: ["Java", "Spring Boot", "Svelte", "Auth"],
    highlights: [
      "Session-based authentication",
      "REST API design + validáció"
    ],
    // links: { repo: "https://github.com/...", live: "https://..." },
    links: { repo: "https://github.com/..." },
  },
];
