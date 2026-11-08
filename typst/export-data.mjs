// Exports the CV data in src/data/*.ts to typst/cv.json so the Typst
// templates read the same single source of truth as the website.
// Node 22.18+/24 strips TypeScript types natively, so no build step needed.
import { writeFileSync } from "node:fs";
import * as cv from "../src/data/cv.ts";

const data = {
  name: "Pete Benbow",
  headline: "James B. Duke Assistant Professor of the Practice in Data Science",
  institution: "Davidson College",
  website: "petebenbow.com",
  education: cv.education,
  appointments: cv.appointments,
  priorExperience: cv.priorExperience,
  teaching: cv.teaching,
  software: cv.software,
  conferences: cv.conferences,
  service: cv.service,
  honors: cv.honors,
  skills: cv.skills.map(({ category, items }) => ({ category, items })),
};

writeFileSync(new URL("./cv.json", import.meta.url), JSON.stringify(data, null, 2));
console.log("Wrote typst/cv.json");
