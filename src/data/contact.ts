import { personalLinks, profile } from "./profile";
import type { ContactItem, SocialLink } from "./types";

export const contactInfo: ContactItem[] = [
  {
    id: "email",
    icon: "mail",
    title: "Email",
    details: profile.email,
    href: personalLinks.email,
  },
  {
    id: "phone",
    icon: "phone",
    title: "Phone",
    details: profile.phone.display,
    href: personalLinks.phone,
  },
  {
    id: "location",
    icon: "map-pin",
    title: "Location",
    details: profile.location,
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    name: "GitHub",
    icon: "github",
    href: personalLinks.github,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "linkedin",
    href: personalLinks.linkedin,
  },
];

export const emailLink: SocialLink = {
  id: "email",
  name: "Email",
  icon: "mail",
  href: personalLinks.email,
};

export const footerSocialLinks: SocialLink[] = [...socialLinks, emailLink];
