'use client';

import { Card, CardContent } from "@/components/ui/card";
import { highlights } from "@/data";

export function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-gray-900 text-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A passionate developer combining academic knowledge with practical experience
            to create innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="prose prose-lg max-w-none text-gray-400">
              <p className="text-gray-400 leading-relaxed mb-4">
                I&apos;m a senior Computer Science student at Nile University focused on software engineering,
                full-stack development, and AI-powered systems. I build web applications using .NET, Django,
                FastAPI, Next.js, React, TypeScript, and SQL/NoSQL databases.
              </p>

              <p className="text-gray-400 leading-relaxed mb-4">
                My work includes backend APIs, responsive frontends, admin dashboards, authentication flows,
                multi-step forms, clean architecture, and AI-integrated platforms. I&apos;ve contributed to projects
                involving RAG-based assistants, RL-based recommendations, route-aware agents, and LLM orchestration.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Alongside development, I have mentored and taught 300+ students through Nile University, GDG,
                Microsoft Students Club, and iSchool. I also actively practice competitive programming as a
                Codeforces Specialist.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-indigo-400">300+</div>
                <div className="text-sm text-gray-400">Students Mentored</div>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-indigo-400">500+</div>
                <div className="text-sm text-gray-400">Problems Solved</div>
              </div>
            </div>
          </div>

          {/* Right side - Highlight cards */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={highlight.title}
                className="hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in border-gray-700 bg-gray-800 text-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-indigo-900/20 rounded-lg flex items-center justify-center">
                        <highlight.icon className="h-6 w-6 text-indigo-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-100 mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}