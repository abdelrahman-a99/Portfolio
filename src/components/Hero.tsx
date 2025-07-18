'use client';

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const aboutElement = document.querySelector("#about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 text-gray-100 pt-24 pb-24">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-indigo-900/20 opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-900/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-800/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-indigo-400 shadow-lg animate-glow">
              <Image
                src="/assets/profile-photo.jpg"
                alt="Abdelrahman Ahmed"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="block text-gray-100">Hi, I&apos;m</span>
              <span className="block text-indigo-400">
                Abdelrahman Ahmed
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-400 font-light">
              Full Stack Developer & Computer Science Student
            </p>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Junior Computer Science student at Nile University with hands-on experience in full stack development
              using .NET, Django, and Next.js. Graduate of the Digital Egypt Pioneers Full Stack Program. Passionate about 
              scalable web solutions, AI/ML, and competitive programming.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="bg-indigo-400 hover:bg-indigo-500 text-indigo-900 px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>

              <a
                href="https://drive.google.com/file/d/1DTtSsYwfSxdeF0jRNPmb5zUaX4QyT0el/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-indigo-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a
                href="https://github.com/abdelrahman-a99"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-indigo-900/10 hover:text-indigo-400 transition-all duration-300 hover:scale-110 text-gray-100 cursor-pointer">
                  <Github className="h-6 w-6" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/abdelrahman-ahmed-fouad/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-indigo-900/10 hover:text-indigo-400 transition-all duration-300 hover:scale-110 text-gray-100 cursor-pointer">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </a>
              <a
                href="mailto:abdelrahmanahmedfouad9@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
              >
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-indigo-900/10 hover:text-indigo-400 transition-all duration-300 hover:scale-110 text-gray-100 cursor-pointer">
                  <Mail className="h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="rounded-full hover:bg-indigo-900/10 hover:text-indigo-400 transition-all duration-300 text-gray-100 cursor-pointer"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}