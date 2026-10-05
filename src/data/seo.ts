import {
  academicSummary,
  primaryStackSummary,
  profile,
} from "./profile";

import { BASE_URL } from "./site";

const educationDescription =
  `${academicSummary.full.charAt(0).toUpperCase()}` +
  `${academicSummary.full.slice(1)} ` +
  `${academicSummary.institutionPreposition} ` +
  profile.education.institution;

export const seoContent = {
  title: `${profile.name} | ${profile.seoHeadline}`,

  description:
    `Portfolio of ${profile.name}, ${educationDescription} building ` +
    "full-stack web applications, backend services, and AI/RAG systems " +
    `using ${primaryStackSummary}.`,

  keywords: [
    profile.name,
    "Portfolio",
    profile.headline,
    "Software Engineer",
    ".NET Developer",
    "Django Developer",
    "Next.js Developer",
    "React Developer",
    "Backend Developer",
    "Frontend Developer",
    "AI Engineer",
    "RAG Systems",
    "LLM Orchestration",
    profile.education.institution,
    profile.competitiveProgrammingRank,
  ],

  siteName: `${profile.name} Portfolio`,

  openGraphDescription:
    "Portfolio showcasing full-stack, backend, frontend, and " +
    `AI/RAG systems projects by ${profile.name}.`,

  twitterDescription:
    "Full-stack, backend, frontend, and AI/RAG systems portfolio.",

  image: {
    url: new URL(profile.photo, BASE_URL).toString(),
    width: 800,
    height: 600,
    alt: `${profile.name} Profile Photo`,
  },

  personDescription:
    `${educationDescription} building full-stack applications, ` +
    "backend services, and AI/RAG systems.",
};

export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: BASE_URL,
  image: seoContent.image.url,
  sameAs: [
    profile.links.linkedin,
    profile.links.github,
  ],
  jobTitle: profile.professionalTitle,
  description: seoContent.personDescription,
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: BASE_URL,
  name: seoContent.siteName,
};
