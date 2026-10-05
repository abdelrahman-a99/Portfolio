export interface Profile {
  name: string;
  shortName: string;
  headline: string;
  professionalTitle: string;
  seoHeadline: string;

  photo: string;
  resumeUrl: string;

  email: string;
  phone: {
    number: string;
    display: string;
  };
  location: string;

  links: {
    github: string;
    linkedin: string;
    huggingFace: string;
  };

  education: {
    status: "student" | "graduate";
    studyYear: string;
    degree: string;
    degreeShort: string;
    institution: string;
    gpa: string;
    gpaScale: string;
    honors: string;
  };

  graduationProject: {
    name: string;
    award: string;
  };

  competitiveProgrammingRank: string;
  primaryStack: string[];
}

export interface NavigationItem {
  id: string;
  name: string;
  href: `#${string}`;
  showInFooter: boolean;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
}

export type IconName =
  | "code"
  | "database"
  | "globe"
  | "brain"
  | "wrench"
  | "users"
  | "graduation"
  | "code2"
  | "trophy"
  | "mail"
  | "phone"
  | "map-pin"
  | "github"
  | "linkedin";

export interface Highlight {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  award?: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github: string;
  demo?: string;
  category: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: IconName;
  skills: string[];
  description: string;
}

export interface ContactItem {
  id: string;
  icon: IconName;
  title: string;
  details: string;
  href?: string;
}

export interface SocialLink {
  id: "github" | "linkedin" | "email";
  name: string;
  icon: IconName;
  href: string;
}
