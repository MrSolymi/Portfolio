import { readFile } from "node:fs/promises";
import { error } from "@sveltejs/kit";

export async function GET() {
  try {
    const pdf = await readFile("static/cv/Solymosi Attila CV Eng.pdf");

    return new Response(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Attila_Solymosi_CV.pdf"'
      }
    });
  } catch {
    throw error(404, "CV not found");
  }
}
