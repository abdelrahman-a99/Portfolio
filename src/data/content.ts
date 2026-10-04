import {
  academicSummary,
  formatList,
  primaryStackSummary,
  profile,
} from "./profile";

import { statistics } from "./statistics";
import type { Highlight } from "./types";

export const heroContent = {
  greeting: "Hi, I'm",

  introduction:
    `${academicSummary.short} ${academicSummary.institutionPreposition} ` +
    `${profile.education.institution} building full-stack web applications ` +
    `and AI-integrated systems with ${primaryStackSummary}. ` +
    `${profile.competitiveProgrammingRank} with experience in RAG systems, ` +
    `LLM orchestration, and mentoring ${statistics.studentsMentored.value} students.`,

  contactButton: "Get In Touch",
  resumeButton: "Download CV",
};

export const aboutContent = {
  title: "About Me",

  description:
    "A passionate developer combining academic knowledge with practical " +
    "experience to create innovative solutions",

  paragraphs: [
    {
      id: "background",
      text:
        `I'm a ${academicSummary.full} ` +
        `${academicSummary.institutionPreposition} ${profile.education.institution} ` +
        "focused on software engineering, full-stack development, and " +
        "AI-powered systems. I build web applications using " +
        `${formatList([...profile.primaryStack, "SQL/NoSQL databases"])}.`,
    },
    {
      id: "development",
      text:
        "My work includes backend APIs, responsive frontends, admin dashboards, " +
        "authentication flows, multi-step forms, clean architecture, and " +
        "AI-integrated platforms. I've contributed to projects involving " +
        "RAG-based assistants, RL-based recommendations, route-aware agents, " +
        "and LLM orchestration.",
    },
    {
      id: "mentorship",
      text:
        `Alongside development, I have mentored and taught ` +
        `${statistics.studentsMentored.value} students through ` +
        `${profile.education.institution}, GDG, Microsoft Students Club, ` +
        "and iSchool. I also actively practice competitive programming as a " +
        `${profile.competitiveProgrammingRank}.`,
    },
  ],
};

export const highlights: Highlight[] = [
  {
    id: "education",
    icon: "graduation",
    title: academicSummary.short,
    description:
      `${academicSummary.full.charAt(0).toUpperCase()}${academicSummary.full.slice(1)} ` +
      `${academicSummary.institutionPreposition} ${profile.education.institution} ` +
      `with a ${profile.education.gpa} GPA and a software engineering focus`,
  },
  {
    id: "development",
    icon: "code2",
    title: profile.headline,
    description:
      "Builds web applications using " +
      formatList([...profile.primaryStack, "SQL/NoSQL databases"]),
  },
  {
    id: "ai",
    icon: "brain",
    title: "AI/RAG Systems",
    description:
      "Works on AI-integrated platforms involving RAG, LLM orchestration, " +
      "AI agents, and RL-based recommendations",
  },
  {
    id: "mentorship",
    icon: "trophy",
    title: "Mentorship & Problem Solving",
    description:
      `Mentored and taught ${statistics.studentsMentored.value} students; ` +
      `${profile.competitiveProgrammingRank} with strong algorithms ` +
      "and problem-solving background",
  },
];

export const skillsContent = {
  title: "Skills & Expertise",

  description:
    "Technologies and practices I use to build full-stack applications, " +
    "backend services, AI-integrated platforms, and responsive user experiences",

  focusTitle: "Current Focus",

  focusDescription:
    "I'm currently focused on strengthening full-stack engineering, " +
    "backend architecture, AI/RAG systems, LLM orchestration, and " +
    "production-ready web applications. I'm also exploring computer vision, " +
    "quantum computing, and game development.",
};

export const footerContent = {
  description:
    `${profile.headline} building web applications, backend services, ` +
    "and AI/RAG systems with modern technologies.",

  availability:
    "Open to full-stack, backend, frontend, AI/RAG, and R&D-oriented software roles.",

  quickLinksTitle: "Quick Links",
  connectTitle: "Connect",
  copyright: "All rights reserved.",
  builtWith: "Built with",
  technologyCredit: "using Next.js & TypeScript",
};
