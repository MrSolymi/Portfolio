export type EducationItem = {
  id: string;
  school: string;
  degree: string;     // pl. BSc Programtervező Informatikus
  period: string;     // 2021 — 2025
  location?: string;
  details?: string[]; // 2-4 bullet
};

export const education: EducationItem[] = [
  {
    id: "bsc-debrecen",
    school: "Debreceni Egyetem",
    degree: "BSc – Programtervező Informatikus",
    period: "2021 — 2025",
    location: "Debrecen, HU",
    details: [
      "Fókusz: szoftverfejlesztés, adatstruktúrák, web/backend",
      "Projektek: Java/Spring, adatbázis, kliens-szerver alkalmazások",
    ],
  },
];
