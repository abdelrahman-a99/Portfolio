import { statistics } from "./statistics";
import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    title: "AI, NLP & Machine Learning",
    icon: "brain",
    skills: [
      "Generative AI",
      "NLP",
      "RAG Systems",
      "AI Agents",
      "LLM Orchestration",
      "Reinforcement Learning",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "LangChain",
      "LangGraph",
    ],
    description:
      "Experience with AI-integrated systems, retrieval-grounded assistants, and ML projects",
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "database",
    skills: [
      "ASP.NET Core",
      "ASP.NET Core MVC",
      "Django",
      "FastAPI",
      "Flask",
      "REST APIs",
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Microservices",
      "Supabase Auth",
    ],
    description:
      "Developing APIs, database-backed systems, authentication flows, and service integrations",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "globe",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "HTML/CSS",
      "shadcn/ui",
      "Responsive UI",
      "RTL Interfaces",
      "Streaming Chat UI",
    ],
    description:
      "Building modern, responsive interfaces, dashboards, forms, chat UIs, and user-facing web applications",
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: "code",
    skills: ["Python", "C/C++", "Java", "C#", "JavaScript", "TypeScript"],
    description:
      "Programming foundations across backend, frontend, AI/data workflows, and competitive programming",
  },
  {
    id: "tools",
    title: "Tools & Practices",
    icon: "wrench",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Unit Testing",
      "Postman",
      "MVC",
      "Clean Architecture",
      "Agile",
      "Code Review",
    ],
    description:
      "Using modern development workflows, clean code practices, testing, and team collaboration",
  },
  {
    id: "leadership",
    title: "Leadership & Communication",
    icon: "users",
    skills: [
      "Team Collaboration",
      "Mentoring",
      "Problem Solving",
      "Teaching",
      "Leadership",
      "Project Management",
    ],
    description:
      `Mentored and taught ${statistics.studentsMentored.value} students ` +
      "while supporting teams through code reviews and technical guidance",
  },
];
