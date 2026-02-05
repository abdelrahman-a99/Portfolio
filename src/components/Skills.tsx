'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/data";

export function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I use to build
            innovative solutions
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
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Technology evolves rapidly, and so do I. I&apos;m constantly exploring new frameworks,
              methodologies, and best practices. Currently, I&apos;m diving deeper into full stack,
              advanced AI concepts, and cloud technologies to stay at the forefront of innovation.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400 mb-2">120+</div>
                <div className="text-sm text-gray-400">Hours of Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400 mb-2">10+</div>
                <div className="text-sm text-gray-400">Technologies Explored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-400 mb-2">5+</div>
                <div className="text-sm text-gray-400">Certifications Earned</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}