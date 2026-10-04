import { statistics } from "./statistics";
import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "code",
    skills: ["Python", "C/C++", "Java", "C#", "JavaScript", "TypeScript", "HTML/CSS"],
    description: "Programming foundations across backend, frontend, AI/data workflows, and competitive programming"
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "globe",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "shadcn/ui", "Responsive UI"],
    description: "Building modern, responsive interfaces, dashboards, forms, chat UIs, and user-facing web applications"
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "database",
    skills: [".NET Core", "ASP.NET MVC", "Django", "FastAPI", "Flask", "REST APIs", "SQL Server", "PostgreSQL", "MongoDB"],
    description: "Developing APIs, database-backed systems, authentication flows, and service integrations"
  },
  {
    id: "ai",
    title: "AI, RAG & Data",
    icon: "brain",
    skills: ["RAG Systems", "LLM Orchestration", "AI Agents", "RL Basics", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "OpenCV"],
    description: "Experience with AI-integrated systems, retrieval-grounded assistants, ML projects, and data analysis"
  },
  {
    id: "tools",
    title: "Tools & Practices",
    icon: "wrench",
    skills: ["Git", "GitHub", "Docker", "Postman", "Unit Testing", "Clean Architecture", "MVC", "Agile", "Code Review"],
    description: "Using modern development workflows, clean code practices, testing, and team collaboration"
  },
  {
    id: "leadership",
    title: "Leadership & Communication",
    icon: "users",
    skills: ["Mentoring", "Teaching", "Problem Solving", "Team Collaboration", "Leadership", "Project Management"],
    description:
      `Mentored and taught ${statistics.studentsMentored.value} students ` +
      "while supporting teams through code reviews and technical guidance",
  }
];
