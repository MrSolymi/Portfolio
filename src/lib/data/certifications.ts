export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string; // pl. "2025-05"
  credentialId?: string;
  url?: string;
  tags?: string[];
};

export const certifications: Certification[] = [
  {
    id: "unity-certified-user-programmer",
    name: "Unity Certified User: Programmer",
    issuer: "Certiport - A Pearson VUE Business",
    date: "2025-05",
    credentialId: "wMwqD-H9mA",
    tags: ["Unity", "C#"]
    // url: "https://..." // ha megvan a credential link, ide jöhet
  },
  {
    id: "it-specialist-python",
    name: "Information Technology Specialist – Python",
    issuer: "Certiport - A Pearson VUE Business",
    date: "2024-02",
    credentialId: "BRUH-s4NA",
    tags: ["Python"]
  },
  {
    id: "it-specialist-java",
    name: "Information Technology Specialist – Java",
    issuer: "Certiport - A Pearson VUE Business",
    date: "2024-01",
    credentialId: "DbUk-4wbh",
    tags: ["Java", "OOP"]
  },
  {
    id: "it-specialist-software-development",
    name: "Information Technology Specialist – Software Development",
    issuer: "Certiport - A Pearson VUE Business",
    date: "2023-12",
    credentialId: "Dwuz-XMz3",
    tags: ["Software Development"]
  },
  {
    id: "it-specialist-javascript",
    name: "Information Technology Specialist – JavaScript",
    issuer: "Certiport - A Pearson VUE Business",
    date: "2023-12",
    credentialId: "wuaz4-48e7",
    tags: ["JavaScript"]
  }
];

