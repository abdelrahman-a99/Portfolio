import type { Statistic } from "./types";

// Maintain these totals explicitly.
// Featured project cards do not necessarily represent all your work.
export const statistics = {
  studentsMentored: {
    id: "students-mentored",
    value: "300+",
    label: "Students Mentored",
  },
  problemsSolved: {
    id: "problems-solved",
    value: "500+",
    label: "Problems Solved",
  },
  coreTechnologies: {
    id: "core-technologies",
    value: "10+",
    label: "Core Technologies",
  },
  majorPlatforms: {
    id: "major-platforms",
    value: "3+",
    label: "Major Platforms Built",
  },
  recognitions: {
    id: "recognitions",
    value: "5+",
    label: "Certificates & Recognitions",
  },
} satisfies Record<string, Statistic>;

export const aboutStatistics: Statistic[] = [
  statistics.studentsMentored,
  statistics.problemsSolved,
];

export const focusStatistics: Statistic[] = [
  statistics.coreTechnologies,
  statistics.majorPlatforms,
  statistics.recognitions,
];
