'use client';

import { GraduationCap, Code2, Brain, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: GraduationCap,
    title: "Computer Science Student",
    description: "Junior CS student at Nile University with a 3.55 GPA, focusing on software engineering and machine learning"
  },
  {
    icon: Code2,
    title: ".NET Full Stack Developer",
    description: "Graduate of the DEPI Full Stack Program, experienced in C#, .NET Core, and ASP.NET MVC"
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Built an image classifier with TensorFlow achieving 85% accuracy and explored data-driven growth prediction models"
  },
  {
    icon: Trophy,
    title: "Mentorship & Recognition",
    description: "Mentored 100+ students via GDG and Nile University TA role; active in UJRF and programming competitions"
  }
];

export function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-gray-900 text-gray-100">
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
                I&apos;m a junior Computer Science student at Nile University and a graduate of the Digital Egypt Pioneers Full Stack program. 
                With a strong foundation in .NET development, Django, and Next.js, I enjoy crafting scalable web applications 
                that are both functional and user-friendly.
              </p>

              <p className="text-gray-400 leading-relaxed mb-4">
                My interests span full-stack development and machine learning. 
                I&apos;ve mentored over 100 students through initiatives like the Google Developer Group 
                and served as a Junior Teaching Assistant at Nile University.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Beyond coding, I actively participate in programming competitions and collaborate on academic projects 
                that connect technology with societal impact. I believe in clean code, continuous learning, 
                and using tech to solve meaningful problems.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-indigo-400">15+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-indigo-400">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
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