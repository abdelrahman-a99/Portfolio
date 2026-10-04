import type { Profile } from "./types";

export const profile: Profile = {
  name: "Abdelrahman Ahmed",
  shortName: "Abdelrahman",

  headline: "Full Stack Developer",
  professionalTitle: "Full Stack Developer and AI/RAG Systems Developer",
  seoHeadline: "Full Stack & AI/RAG Systems Developer",

  photo: "/assets/profile-photo.jpg",
  resumeUrl:
    "https://drive.google.com/file/d/1DTtSsYwfSxdeF0jRNPmb5zUaX4QyT0el/view?usp=sharing",

  email: "abdelrahmanahmedfouad9@gmail.com",
  phone: {
    number: "+201200351201",
    display: "+20 120 035 1201",
  },
  location: "Giza, Egypt",

  links: {
    github: "https://github.com/abdelrahman-a99",
    linkedin: "https://www.linkedin.com/in/abdelrahman-ahmed-fouad/",
    huggingFace: "https://huggingface.co/Abdelrahman-a99",
  },

  education: {
    status: "student",
    studyYear: "senior",
    degree: "Computer Science",
    degreeShort: "CS",
    institution: "Nile University",
    gpa: "3.6",
  },

  competitiveProgrammingRank: "Codeforces Specialist",

  primaryStack: [
    ".NET",
    "Django",
    "FastAPI",
    "Next.js",
    "React",
    "TypeScript",
  ],
};

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

const studentPrefix = profile.education.studyYear
  ? `${profile.education.studyYear} `
  : "";

export const academicSummary = {
  short:
    profile.education.status === "graduate"
      ? `${profile.education.degreeShort} graduate`
      : `${capitalize(studentPrefix)}${profile.education.degreeShort} student`,

  full:
    profile.education.status === "graduate"
      ? `${profile.education.degree} graduate`
      : `${studentPrefix}${profile.education.degree} student`,

  institutionPreposition:
    profile.education.status === "graduate" ? "from" : "at",
};

export const formatList = (items: string[]) =>
  new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  }).format(items);

export const primaryStackSummary = formatList(profile.primaryStack);
