import {
  Code, Database, Globe, Brain, Wrench, Users,
  GraduationCap, Code2, Trophy,
  Mail, Phone, MapPin, Github, Linkedin
} from "lucide-react";

export const BASE_URL = "https://abdelrahmanahmedfouad.vercel.app";
export const RESUME_URL = "https://drive.google.com/file/d/1DTtSsYwfSxdeF0jRNPmb5zUaX4QyT0el/view?usp=sharing";

export const personalLinks = {
  github: "https://github.com/abdelrahman-a99",
  linkedin: "https://www.linkedin.com/in/abdelrahman-ahmed-fouad/",
  email: "mailto:abdelrahmanahmedfouad9@gmail.com",
  phone: "tel:+201200351201"
};

export const highlights = [
  {
    icon: GraduationCap,
    title: "Senior CS student",
    description: "Senior Computer Science student at Nile University with a 3.6 GPA and a software engineering focus"
  },
  {
    icon: Code2,
    title: "Full Stack Developer",
    description: "Builds web applications using .NET, Django, FastAPI, Next.js, React, TypeScript, and SQL/NoSQL databases"
  },
  {
    icon: Brain,
    title: "AI/RAG Systems",
    description: "Works on AI-integrated platforms involving RAG, LLM orchestration, AI agents, and RL-based recommendations"
  },
  {
    icon: Trophy,
    title: "Mentorship & Problem Solving",
    description: "Mentored and taught 300+ students; Codeforces Specialist with strong algorithms and problem-solving background"
  }
];

export const projects = [
  {
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
    title: "بَيِّنَة",
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

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C/C++", "Java", "C#", "JavaScript", "TypeScript", "HTML/CSS"],
    description: "Programming foundations across backend, frontend, AI/data workflows, and competitive programming"
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "shadcn/ui", "Responsive UI"],
    description: "Building modern, responsive interfaces, dashboards, forms, chat UIs, and user-facing web applications"
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [".NET Core", "ASP.NET MVC", "Django", "FastAPI", "Flask", "REST APIs", "SQL Server", "PostgreSQL", "MongoDB"],
    description: "Developing APIs, database-backed systems, authentication flows, and service integrations"
  },
  {
    title: "AI, RAG & Data",
    icon: Brain,
    skills: ["RAG Systems", "LLM Orchestration", "AI Agents", "RL Basics", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "OpenCV"],
    description: "Experience with AI-integrated systems, retrieval-grounded assistants, ML projects, and data analysis"
  },
  {
    title: "Tools & Practices",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Postman", "Unit Testing", "Clean Architecture", "MVC", "Agile", "Code Review"],
    description: "Using modern development workflows, clean code practices, testing, and team collaboration"
  },
  {
    title: "Leadership & Communication",
    icon: Users,
    skills: ["Mentoring", "Teaching", "Problem Solving", "Team Collaboration", "Leadership", "Project Management"],
    description: "Mentored and taught 300+ students while supporting teams through code reviews and technical guidance"
  }
];

export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "abdelrahmanahmedfouad9@gmail.com",
    href: personalLinks.email
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+20 120 035 1201",
    href: personalLinks.phone
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Giza, Egypt",
    // href: "#"
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: personalLinks.github,
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: personalLinks.linkedin,
    color: "hover:text-blue-600"
  }
];
