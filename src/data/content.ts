import { academicSummary, formatList, profile } from "./profile";
import { statistics } from "./statistics";
import type { Highlight } from "./types";

export const heroContent = {
  greeting: "Hi, I'm",

  introduction:
    `${academicSummary.full} ${academicSummary.institutionPreposition} ` +
    `${profile.education.institution} building AI-powered applications ` +
    "with RAG, NLP, and AI agents. I combine AI engineering with " +
    "full-stack development to build the models, services, and " +
    "interfaces behind complete applications.",

  contactButton: "Get In Touch",
  resumeButton: "Download CV",
};

export const aboutContent = {
  title: "About Me",

  description:
    "Building AI-powered applications, sharing what I learn, " +
    "and creating tools that help others.",

  paragraphs: [
    {
      id: "background",
      text:
        `I'm a ${academicSummary.full} ` +
        `${academicSummary.institutionPreposition} ${profile.education.institution}, ` +
        `graduating with ${profile.education.honors} and a ` +
        `${academicSummary.gpaDisplay} GPA. My work combines AI engineering ` +
        "and full-stack development using " +
        `${formatList([...profile.primaryStack, "SQL/NoSQL databases"])}.`,
    },
    {
      id: "development",
      text:
        `My graduation project, ${profile.graduationProject.name}, ` +
        `won ${profile.graduationProject.award}. I contributed across ` +
        "frontend, backend, and AI development and integration, combining " +
        "academic policy retrieval, reinforcement learning-based course " +
        "recommendations, and agent orchestration. I also contributed " +
        "to both the RAG pipeline and web interface of بَيِّنَة, " +
        "an Arabic-first Islamic assistant.",
    },
    {
      id: "mentorship",
      text:
        `Alongside development, I have mentored and taught ` +
        `${statistics.studentsMentored.value} students through ` +
        `${profile.education.institution}, GDG, Microsoft Student Club, ` +
        "and iSchool. I also practice competitive programming as a " +
        `${profile.competitiveProgrammingRank}, strengthening my ` +
        "algorithms and problem-solving skills.",
    },
  ],
};

export const highlights: Highlight[] = [
  {
    id: "education",
    icon: "graduation",
    title: academicSummary.title,
    description:
      `${profile.education.institution} · ${profile.education.honors} · ` +
      `GPA ${academicSummary.gpaDisplay}`,
  },
  {
    id: "development",
    icon: "graduation",
    title: "Award-Winning Graduation Project",
    description: `${profile.graduationProject.name} · ${profile.graduationProject.award}`,
  },
  {
    id: "ai",
    icon: "brain",
    title: "AI & Full-Stack Engineering",
    description: "RAG, NLP, AI agents, backend APIs, and web applications",
  },
  {
    id: "mentorship",
    icon: "users",
    title: "Teaching & Mentorship",
    description:
      `Mentored and taught ${statistics.studentsMentored.value} students ` +
      "across university courses and student communities",
  },
];

export const skillsContent = {
  title: "Skills & Expertise",

  description:
    "Technologies and practices I use to build AI-powered applications, " +
    "backend services, and responsive web interfaces",

  focusTitle: "Current Focus",

  focusDescription:
    "My current focus is building and evaluating AI-powered applications, " +
    "particularly RAG, NLP, and agent-based systems, supported by " +
    "reliable backend services and clear user experiences.",
};

export const footerContent = {
  description:
    `${profile.headline} building AI-powered applications, ` +
    "backend services, and web interfaces.",

  availability:
    "Open to AI engineering, full-stack development, and software " +
    "engineering opportunities, particularly roles combining " +
    "application development with AI systems.",

  quickLinksTitle: "Quick Links",
  connectTitle: "Connect",
  copyright: "All rights reserved.",
  builtWith: "Built with",
  technologyCredit: "using Next.js & TypeScript",
};

export const projectsContent = {
  title: "Featured Projects",
  description: "A showcase of my AI, RAG, and full-stack development projects",

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
