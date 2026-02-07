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
      "A WPF desktop app to extract, store, and review contacts from emails (MVVM, SQLite).",
    tags: ["WPF", "C#", "SQLite", "MVVM"],
    highlights: [
      "Regex-based contact extraction with deduplication",
      "Filters, DataGrid UX, and review/status fields for a smooth workflow",
      "Google OAuth 2.0 integration (Gmail)",
    ],
    links: { repo: "https://github.com/...", caseStudy: true },
    caseStudy: {
      problem:
        "Manually extracting contacts from emails was slow and error-prone — a fast, review-first workflow was needed.",
      solution: [
        "MVVM architecture with scalable UI state management",
        "SQLite + EF Core with a repository-style data layer for clean separation and testability",
        "Import pipeline: email → regex parsing → normalization → deduplication",
      ],
      results: [
        "Faster processing with a consistent review workflow",
        "Searchable/filterable database with clean auditability",
      ],
      stack: ["C#", "WPF", "MVVM", "SQLite", "Google OAuth 2.0"],
    },
  },
  {
    id: "spring-svelte-app",
    title: "Spring Boot + Svelte Full-stack",
    description:
      "Spring Boot backend API with a Svelte frontend, session-based auth, and a clean endpoint structure.",
    tags: ["Java", "Spring Boot", "Svelte", "Auth"],
    highlights: [
      "Session-based authentication with secure password handling and auth flow design",
      "REST API design + validation, error handling, and a clean endpoint structure"
    ],
    // links: { repo: "https://github.com/...", live: "https://..." },
    links: { repo: "https://github.com/..." },
  },
];
