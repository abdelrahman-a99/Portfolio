import type { Profile } from "./types";

const roleTitle = "AI Engineer & Full-Stack Developer";

export const profile: Profile = {
  name: "Abdelrahman Ahmed",
  shortName: "Abdelrahman",

  headline: roleTitle,
  professionalTitle: roleTitle,
  seoHeadline: roleTitle,

  photo: "/assets/profile-graduation-2026.jpg",
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
    status: "graduate",
    studyYear: "",
    degree: "Computer Science",
    degreeShort: "CS",
    institution: "Nile University",
    gpa: "3.62",
    gpaScale: "4.00",
    honors: "High Honors",
  },

  graduationProject: {
    name: "NUPal",
    award: "1st Place among ITCS Graduation Projects",
  },

  competitiveProgrammingRank: "Codeforces Specialist",

  primaryStack: [
    "Python",
    "FastAPI",
    ".NET",
    "Django",
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

  title:
    profile.education.status === "graduate"
      ? `${profile.education.degree} Graduate`
      : `${capitalize(studentPrefix)}${profile.education.degree} Student`,

  gpaDisplay: `${profile.education.gpa}/${profile.education.gpaScale}`,
};

export const formatList = (items: string[]) =>
  new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  }).format(items);

export const primaryStackSummary = formatList(profile.primaryStack);

export const RESUME_URL = profile.resumeUrl;

export const personalLinks = {
  github: profile.links.github,
  linkedin: profile.links.linkedin,
  email: `mailto:${profile.email}`,
  phone: `tel:${profile.phone.number}`,
};
