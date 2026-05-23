'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data";

export function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-900 text-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and practices I use to build full-stack applications, backend services,
            AI-integrated platforms, and responsive user experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-gray-700 animate-fade-in bg-gray-800 text-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-indigo-900/20 rounded-lg flex items-center justify-center group-hover:bg-indigo-900/30 transition-colors">
                    <category.icon className="h-6 w-6 text-indigo-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-100">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4 text-sm">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs border-indigo-900 text-indigo-400 bg-gray-900/60">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">
              Current Focus
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I&apos;m currently focused on strengthening full-stack engineering, backend architecture,
              AI/RAG systems, LLM orchestration, and production-ready web applications. I&apos;m also
              exploring computer vision, quantum computing, and game development.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400 mb-2">10+</div>
                <div className="text-sm text-gray-400">Core Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400 mb-2">3+</div>
                <div className="text-sm text-gray-400">Major Platforms Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400 mb-2">5+</div>
                <div className="text-sm text-gray-400">Certificates & Recognitions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}