import { profile } from "./profile";
import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "nupal",
    title: profile.graduationProject.name,
    award: profile.graduationProject.award,
    description:
      "An AI academic and career advising platform for Nile University students, combining academic policy Q&A, next-semester course recommendations, schedule matching, and career guidance in one unified system.",
    image: "/assets/NUPal-photo.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ASP.NET Core",
      "MongoDB",
      "FastAPI",
      "RAG",
      "RL",
      "LLM Orchestration",
      "Microservices",
    ],
    features: [
      "Policy Q&A with RAG",
      "Next-semester course recommendations with Double Dueling DQN",
      "Agent orchestration between policy retrieval and course recommendation",
      "Schedule matching and career preparation",
    ],
    github: "https://github.com/abdelrahman-a99/NUPAL-Frontend",
    demo: "https://nupal.vercel.app/",
    category: "AI & Full-Stack",
  },
  {
    id: "bayyinah",
    title: "بَيِّنَة",
    description:
      "An Arabic-first RAG Islamic assistant grounded in Qur’an, tafsir, Sunnah, and curated narrative resources, with an RTL chat experience and source citations.",
    image: "/assets/Bayyinah-photo.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase Auth",
      "Vercel",
      "RTL UI",
      "RAG",
    ],
    features: [
      "Retrieval-grounded answers from Islamic reference material",
      "Arabic RTL chat interface with streaming responses and citations",
      "Supabase Google authentication",
      "Conversation history with rename and delete actions",
    ],
    github: "https://github.com/abdelrahman-a99/Bayyinah-Front",
    demo: "https://bayyinah-alpha.vercel.app/",
    category: "RAG & Web Development",
  },
  {
    id: "nucpa",
    title: "NUCPA",
    description:
      "Competition registration and administration platform for Nile University competitive programming activities, allowing competitors across Egypt, Africa, and MENA to register online, track updates, and view results after the event.",
    image: "/assets/NUCPA-photo.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Django",
      "PostgreSQL",
      "REST APIs",
      "Supabase Auth",
    ],
    features: [
      "Team registration portal",
      "Admin dashboard and document verification",
      "Status management and contest pages",
      "Secure API communication with HTTP-only cookie handling",
    ],
    github: "https://github.com/abdelrahman-a99/NUCPA-Front",
    demo: "https://nucpa.org",
    category: "Full Stack",
  },
];
