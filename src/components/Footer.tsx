'use client';

import { Heart } from "lucide-react";

import { PortfolioIcon } from "@/components/PortfolioIcon";

import {
  footerContent,
  footerNavigationItems,
  footerSocialLinks,
  profile,
  accessibilityContent
} from "@/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 border-t border-gray-700 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold text-indigo-400 hover:scale-105 transition-transform cursor-pointer"
            >
              {profile.name}
            </button>
            <p className="text-muted-foreground">
              {footerContent.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-100">{footerContent.quickLinksTitle}</h3>
            <div className="space-y-2">
              {footerNavigationItems.map((link) => (
                <button
                  key={link.id}
                  onClick={() =>
                    document.querySelector(link.href)?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="block text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-100">{footerContent.connectTitle}</h3>
            <div className="flex space-x-4">
              {footerSocialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-indigo-400"
                  aria-label={accessibilityContent.socialProfileLabel.replace(
                    "{name}",
                    social.name
                  )}
                >
                  <PortfolioIcon name={social.icon} className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              {footerContent.availability}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {profile.name}. {footerContent.copyright}
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            {footerContent.builtWith}
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            {footerContent.technologyCredit}
          </p>
        </div>
      </div>
    </footer>
  );
}