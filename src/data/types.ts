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
