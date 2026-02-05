import {
  Code, Database, Globe, Brain, Wrench, Users,
  GraduationCap, Code2, Trophy,
  Mail, Phone, MapPin, Github, Linkedin
} from "lucide-react";

export const highlights = [
  {
    icon: GraduationCap,
    title: "Computer Science Student",
    description: "Senior CS student at Nile University with a 3.6 GPA, focusing on software engineering and machine learning"
  },
  {
    icon: Code2,
    title: ".NET Full Stack Developer",
    description: "Graduate of the DEPI Full Stack Program, experienced in C#, .NET Core, and ASP.NET MVC"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Built an image classifier with TensorFlow achieving 85% accuracy and explored data-driven growth prediction models"
  },
  {
    icon: Trophy,
    title: "Mentorship & Recognition",
    description: "Mentored 250+ students via GDG and Nile University TA role; active in UJRF and programming competitions"
  }
];

export const projects = [
  {
    title: "NUPal",
    description: "An AI-powered advising platform that guides Nile University students from academic planning to career development through a unified system with an intelligent chatbot.",
    image: "/assets/NUPal-photo.png",
    technologies: ["C#", ".NET", "MongoDB", "Next.js", "REST APIs", "RAG", "Reinforcement Learning", "AI Agent"],
    features: [
      "RAG chatbot to answer Nile University policy FAQs",
      "RL-based recommendations for next-semester courses",
      "AI agent that routes requests between RAG and RL models",
      "End-to-end chatbot pipeline (agent + model orchestration)"
    ],
    github: "https://github.com/abdelrahman-a99/NUPAL-Frontend",
    demo: "https://nupal-frontend.vercel.app",
    category: "Full Stack"
  },
  {
    title: "NUCPA",
    description: "Competition registration and administration portal for NUCPA, allowing competitors across Egypt, Africa, and MENA to register online, track updates, and view results after the event.",
    image: "/assets/NUCPA-photo.png",
    technologies: ["Python", "Django", "PostgreSQL", "JavaScript", "TypeScript", "React", "Next.js", "REST APIs"],
    features: [
      "Competitor registration and submission forms",
      "Yearly About pages and competition information updates",
      "Admin panel to verify documents",
      "Post-competition results publishing"
    ],
    github: "https://github.com/abdelrahman-a99/NUCPA-Front",
    demo: "https://nucpa.org",
    category: "Full Stack"
  },
  {
    title: "Hospital Management System",
    description: "Django-based web application enabling patients and doctors to manage appointments, view schedules, and track medical records through a secure and user-friendly interface.",
    image: "/assets/HMS-photo.png",
    technologies: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Patient-doctor registration and login",
      "Appointment scheduling",
      "Medical history  tracking",
      "Doctor schedule dashboard"
    ],
    github: "https://github.com/abdelrahman-a99/Hospital-Management-System",
    // demo: "#",
    category: "Full Stack"
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "C/C++", "Java", "C#", "HTML/CSS", "JavaScript", "TypeScript"],
    description: "Proficient in multiple programming languages used across full stack development"
  },
  {
    title: "Frameworks & Libraries",
    icon: Globe,
    skills: [".NET", "FastAPI", "Flask", "Django", "React", "Next.js"],
    description: "Hands-on experience with modern frameworks and libraries for building scalable web applications"
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: ["MySQL", "SQL Server", "PostgreSQL", "MongoDB", "Git", "Docker"],
    description: "Skilled in database management and development tools expertise"
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: ["NumPy", "Pandas", "Matplotlip", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "OpenCV"],
    description: "Experience in building machine learning models and performing data analysis"
  },
  {
    title: "Development Practices",
    icon: Wrench,
    skills: ["Agile", "REST APIs", "Testing", "CI/CD", "Version Control", "Code Review"],
    description: "Knowledge of  modern development workflows, methodologies and best practices"
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Communication & Collaboration", "Leadership", "Project Management"],
    description: "Strong interpersonal skills essential for mentoring, teamwork, and project execution"
  }
];

export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "abdelrahmanahmedfouad9@gmail.com",
    href: "mailto:abdelrahmanahmedfouad9@gmail.com"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+20 120 035 1201",
    href: "tel:+201200351201"
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
    href: "https://github.com/abdelrahman-a99",
    color: "hover:text-gray-900 dark:hover:text-white"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abdelrahman-ahmed-fouad/",
    color: "hover:text-blue-600"
  }
];
