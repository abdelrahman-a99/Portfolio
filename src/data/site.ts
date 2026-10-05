import type { NavigationItem } from "./types";

export const site = {
  baseUrl: "https://abdelrahmanahmedfouad.vercel.app",
  language: "en",
  locale: "en_US",

  contactForm: {
    endpoint: "https://api.web3forms.com/submit",
    senderName: "Portfolio Website",
  },
};

export const BASE_URL = site.baseUrl;

export const navigationItems: NavigationItem[] = [
  { id: "home", name: "Home", href: "#home", showInFooter: false },
  { id: "about", name: "About", href: "#about", showInFooter: true },
  { id: "projects", name: "Projects", href: "#projects", showInFooter: true },
  { id: "skills", name: "Skills", href: "#skills", showInFooter: true },
  { id: "contact", name: "Contact", href: "#contact", showInFooter: true },
];

export const footerNavigationItems = navigationItems.filter(
  (item) => item.showInFooter
);
