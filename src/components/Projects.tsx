'use client';
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import { projects, personalLinks } from "@/data";

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-900 text-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my work spanning full-stack development, AI/ML, and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden border-gray-700 animate-fade-in bg-gray-800 text-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={192}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 bg-gray-700"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-indigo-900/20 text-indigo-400 font-medium">
                      {project.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-indigo-900 text-indigo-400"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-gray-100 mb-2">Key Features:</h4>
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-400">
                      <ArrowRight className="h-3 w-3 mr-2 text-indigo-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="flex gap-3 w-full">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-indigo-900 text-indigo-400 hover:bg-indigo-900 hover:text-indigo-100 cursor-pointer"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>

                  {project.demo && (
                    <Button
                      asChild
                      size="sm"
                      className="flex-1 bg-indigo-900 hover:bg-indigo-800 text-indigo-100 cursor-pointer"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <a
            href={personalLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-indigo-900 text-indigo-400 hover:bg-indigo-900 hover:text-indigo-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}