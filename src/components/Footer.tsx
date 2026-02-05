'use client';

import { Heart, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/abdelrahman-a99", color: "hover:text-indigo-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/abdelrahman-ahmed-fouad/", color: "hover:text-indigo-400" },
    { name: "Email", icon: Mail, href: "mailto:abdelrahmanahmedfouad9@gmail.com", color: "hover:text-indigo-400" }
  ];

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
              Abdelrahman Ahmed
            </button>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating innovative solutions
              with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-100">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-100">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={`Visit my ${social.name} profile`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Let&apos;s build something amazing together!
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Abdelrahman Ahmed. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}