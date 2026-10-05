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

export const projectsContent = {
  title: "Featured Projects",
  description:
    "A showcase of my strongest full-stack, AI/RAG, and software engineering projects",

  featuresLabel: "Key Features:",
  codeButton: "Code",
  demoButton: "Demo",
  allProjectsButton: "View All Projects on GitHub",
};

export const contactContent = {
  title: "Get In Touch",

  description:
    "Ready to collaborate? Let's discuss your next project or any " +
    "opportunities you'd like to explore together.",

  connectTitle: "Let's Connect",

  connectDescription:
    "I'm always open to discussing new opportunities, interesting projects, " +
    "or just having a chat about technology and innovation. Feel free to reach out!",

  followTitle: "Follow Me",
  formTitle: "Send a Message",

  form: {
    nameLabel: "Name *",
    namePlaceholder: "Your full name",

    emailLabel: "Email *",
    emailPlaceholder: "your.email@example.com",

    messageLabel: "Message *",
    messagePlaceholder: "Tell me about your project or opportunity...",

    submitLabel: "Send Message",
    submittingLabel: "Sending...",
  },

  messages: {
    notConfiguredTitle: "Contact form unavailable",
    notConfiguredDescription: "Please contact me using the email link instead.",

    requiredFields: "Please fill in all required fields",

    successTitle: "Message sent successfully!",
    successDescription: "Thank you. I’ll get back to you soon.",

    failureTitle: "Could not send your message",
    failureDescription:
      "Please try again in a minute (or contact me via email).",
    failureFallback: "Failed to send message",
  },
};

export const notFoundContent = {
  title: "Page Not Found",
  description:
    "Oops! It seems you've ventured into uncharted digital territory. " +
    "The page you're looking for might have been moved or doesn't exist.",
  button: "Return Home",
};

export const accessibilityContent = {
  toggleMobileMenu: "Toggle mobile menu",
  scrollToTop: "Scroll to top",
  socialProfileLabel: "Visit my {name} profile",
  emailContact: "Send me an email",
  scrollToAbout: "Scroll to About",
};
