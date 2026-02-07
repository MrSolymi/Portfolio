export type ExperienceItem = {
  id: string;
  title: string;        // pl. "Backend Developer (Spring Boot)"
  org: string;          // cég / projekt / egyetem
  period: string;       // "2024 — 2026" vagy "Jun 2025 — Present"
  location?: string;    // optional
  summary: string;      // 1 mondat
  achievements: string[]; // 3-5 bullet
  stack: string[];      // badge-ek
  links?: { label: string; href: string }[];
};

export const experience: ExperienceItem[] = [
  {
    id: "portfolio-projects",
    title: "Full-stack Developer",
    org: "Personal Projects",
    period: "2024 — Present",
    location: "Hungary / Remote",
    summary: "Backend fókuszú projektek Spring Boot-tal, Svelte fronttal és Docker-es futtatással.",
    achievements: [
      "REST API-k tervezése és implementálása validációval és hibakezeléssel",
      "Session-alapú autentikáció és auth flow-ok kialakítása",
      "Docker Compose alapú lokális/prod környezetek kialakítása",
    ],
    stack: ["Java", "Spring Boot", "Svelte", "Docker", "SQL"],
    links: [{ label: "GitHub", href: "https://github.com/..." }]
  },
  {
    id: "wpf-contact",
    title: "Desktop Developer (WPF)",
    org: "McDContactManager",
    period: "2025",
    summary: "WPF app kontaktok kinyerésére emailekből és adatbázisban való kezelésére.",
    achievements: [
      "MVVM architektúra + újrafelhasználható komponensek",
      "SQLite alapú tárolás + keresés/szűrés DataGridben",
      "Import pipeline: parsing → normalizálás → deduplikáció",
    ],
    stack: ["C#", "WPF", "MVVM", "SQLite", "OAuth"],
  },
];
