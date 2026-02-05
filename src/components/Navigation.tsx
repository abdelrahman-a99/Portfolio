'use client';

import { useState, useEffect, useLayoutEffect, useCallback, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [manualActiveSection, setManualActiveSection] = useState<string | null>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateActiveSection = useCallback(() => {
    if (manualActiveSection) return; // Don't update if user is scrolling to a section
    const sectionIds = navigationItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    let observer: IntersectionObserver | null = null;
    if (sections.length === 0) return;

    observer = new window.IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let activeId = sectionIds[0];
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeId = entry.target.id;
          }
        });
        setActiveSection(activeId);
      },
      {
        root: null,
        rootMargin: "0px 0px -40% 0px",
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );
    sections.forEach((section) => {
      observer!.observe(section);
    });
    return () => {
      if (observer) observer.disconnect();
    };
  }, [manualActiveSection]);

  useLayoutEffect(() => {
    const cleanup = updateActiveSection();
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("scroll", updateActiveSection);
    return () => {
      if (cleanup) cleanup();
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, [updateActiveSection]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      setManualActiveSection(href.replace('#', ''));
      element.scrollIntoView({ behavior: "smooth" });
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setManualActiveSection(null);
      }, 700); // Wait for smooth scroll to finish
    }
    setIsMobileMenuOpen(false);
  };

  const currentActiveSection = manualActiveSection || activeSection;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-gray-800/90 backdrop-blur-md border-b border-gray-700"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              className="text-xl font-bold text-indigo-400 hover:scale-105 transition-transform cursor-pointer"
            >
              Abdelrahman
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-gray-100 hover:text-indigo-300 transition-colors duration-200 font-medium cursor-pointer ${currentActiveSection === item.href.replace("#", "")
                      ? "text-indigo-400 font-bold underline underline-offset-8 decoration-indigo-400"
                      : ""
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="h-10 w-10 cursor-pointer hover:bg-indigo-900/20 transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-indigo-400" />
                ) : (
                  <Menu className="h-5 w-5 text-indigo-400" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/80 backdrop-blur-sm rounded-lg mt-2 border border-gray-700">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-3 py-2 text-gray-100 hover:text-indigo-300 hover:bg-indigo-900/10 rounded-md transition-colors cursor-pointer ${currentActiveSection === item.href.replace("#", "")
                      ? "text-indigo-400 font-bold bg-indigo-900/10 underline underline-offset-8 decoration-indigo-400"
                      : ""
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}