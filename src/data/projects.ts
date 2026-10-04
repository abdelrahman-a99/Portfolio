import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "nupal",
    title: "NUPal",
    description: "An AI academic and career advising platform for Nile University students, combining academic policy Q&A, semester planning, and career guidance in one unified system.",
    image: "/assets/NUPal-photo.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ASP.NET Core", "MongoDB", "FastAPI", "RAG", "RL", "LLM Orchestration"],
    features: [
      "RAG-based policy FAQ chatbot",
      "RL-based next-semester course recommendations",
      "Route-aware AI agent for request orchestration",
      "Frontend, backend, and AI service integration"
    ],
    github: "https://github.com/abdelrahman-a99/NUPAL-Frontend",
    demo: "https://nupal.vercel.app/",
    category: "Full Stack + AI"
  },
  {
    id: "bayyinah",
    title: "bayyinah",
    description: "Arabic-first RAG Islamic assistant frontend grounded in Qur’an, tafsir, Sunnah, and curated narrative resources, designed for a clean RTL chat experience.",
    image: "/assets/Bayyinah-photo.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase Auth", "Vercel", "RTL UI", "RAG"],
    features: [
      "Arabic RTL chat interface",
      "Supabase Google authentication",
      "Conversation history with rename/delete actions",
      "Streaming responses and citation-aware answer rendering"
    ],
    github: "https://github.com/abdelrahman-a99/Bayyinah-Front",
    demo: "https://bayyinah-alpha.vercel.app/",
    category: "Frontend + RAG"
  },
  {
    id: "nucpa",
    title: "NUCPA",
    description: "Competition registration and administration platform for Nile University competitive programming activities, allowing competitors across Egypt, Africa, and MENA to register online, track updates, and view results after the event.",
    image: "/assets/NUCPA-photo.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Django", "PostgreSQL", "REST APIs"],
    features: [
      "Team registration portal",
      "Admin dashboard and document verification",
      "Status management and contest pages",
      "Secure API communication with HTTP-only cookie handling"
    ],
    github: "https://github.com/abdelrahman-a99/NUCPA-Front",
    demo: "https://nucpa.org",
    category: "Full Stack"
  }
];
