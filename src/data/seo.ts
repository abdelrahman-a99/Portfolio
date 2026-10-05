import { academicSummary, profile } from "./profile";
import { BASE_URL } from "./site";

const educationDescription =
  `${academicSummary.full.charAt(0).toUpperCase()}` +
  `${academicSummary.full.slice(1)} ` +
  `${academicSummary.institutionPreposition} ` +
  profile.education.institution;

export const seoContent = {
  title: `${profile.name} | ${profile.seoHeadline}`,

  description:
    `${profile.name} is an ${profile.professionalTitle} and a ` +
    `${academicSummary.full} ${academicSummary.institutionPreposition} ` +
    `${profile.education.institution}. Explore his work in RAG, NLP, ` +
    "AI agents, and full-stack applications.",

  keywords: [
    profile.name,
    "Portfolio",
    profile.headline,
    "AI Engineer",
    "Generative AI",
    "RAG Systems",
    "LLM Orchestration",
    "NLP",
    "AI Agents",
    "Software Engineer",
    "Full-Stack Development",
    ".NET Developer",
    "Django Developer",
    "Next.js Developer",
    "React Developer",
    "Backend Developer",
    "Frontend Developer",
    profile.education.institution,
    profile.competitiveProgrammingRank,
  ],

  siteName: `${profile.name} Portfolio`,

  openGraphDescription: `RAG, NLP, AI agents, and full-stack projects by ${profile.name}.`,

  twitterDescription:
    "AI engineering, RAG, NLP, AI agents, and full-stack development.",

  image: {
    url: new URL(profile.photo, BASE_URL).toString(),
    width: 800,
    height: 600,
    alt: `${profile.name} Profile Photo`,
  },

  personDescription:
    `${profile.professionalTitle}. ${educationDescription} building ` +
    "AI-powered applications, backend services, and web interfaces.",
};

export const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: BASE_URL,
  image: seoContent.image.url,
  sameAs: [profile.links.linkedin, profile.links.github],
  jobTitle: profile.professionalTitle,
  description: seoContent.personDescription,
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: BASE_URL,
  name: seoContent.siteName,
};
