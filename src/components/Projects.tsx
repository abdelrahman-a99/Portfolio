'use client';
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const projects = [
  {
    title: "Hospital Management System",
    description: "Django-based web application enabling patients and doctors to manage appointments, view schedules, and track medical records through a secure and user-friendly interface.",
    image: "/assets/hospital-project.jpg",
    technologies: ["Python", "Django", "MySQL", , "HTML", "CSS", "JavaScript"],
    features: [
      "Patient-doctor registration and login",
      "Appointment scheduling",
      "Medical history  tracking",
      "Doctor schedule dashboard"
    ],
    github: "github.com/abdelrahman-a99/Hospital-Management-System",
    // demo: "#",
    category: "Full Stack"
  },
  {
    title: "Animal Image Classifier",
    description: "CNN model trained to classify 10 animal categories with 85% accuracy using TensorFlow. The project demonstrates image preprocessing, training, validation, and real-time classification.",
    image: "/assets/ai-classifier-project.jpg",
    technologies: ["Python", "NumPy", "Matplotlib", "Pandas", "TensorFlow", "Keras"],
    features: [
      "Custom dataset of 10 animal classes",
      "CNN architecture implementation",
      "Image preprocessing and augmentation",
      "Accuracy tuning and model evaluation"
    ],
    github: "https://github.com/abdelrahman-a99/Zoo-Classifier",
    // demo: "#",
    category: "AI/ML"
  },
  {
    title: "E-Learning Platform",
    description: "Modern educational platform developed as part of the DEPI program. Built with .NET and Next.js, it includes course management, student progress tracking,  and instructor tools for online education.",
    image: "/assets/elearning-project.jpg",
    technologies: ["C#", ".NET", "SQL Server", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
    features: [
      "Course management and purchase code validation",
      "Student sign-up/login and progress tracking",
      "Interactive assignments and quizes",
      "Instructor dashboard with performance insights"
    ],
    github: "github.com/abdelrahman-a99/LearnEdge-Frontend",
    // demo: "#",
    category: "Education"
  }
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-900 text-gray-100">
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
                    width={600} // or an appropriate width
                    height={192} // or an appropriate height
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
                <h3 className="text-xl font-semibold text-gray-100 mb-3">
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
                      className="text-xs border-indigo-200 text-indigo-400"
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
                    // variant="outline" 
                    size="sm" 
                    // className="flex-1 border-indigo-200 text-indigo-400 hover:bg-indigo-900 hover:text-indigo-100 cursor-pointer"
                    className="flex-1 bg-indigo-900 hover:bg-indigo-800 text-indigo-100 cursor-pointer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  {/* <Button 
                    size="sm" 
                    className="flex-1 bg-indigo-900 hover:bg-indigo-800 text-indigo-100 cursor-pointer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button> */}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <a
            href="https://github.com/abdelrahman-a99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-900 hover:text-indigo-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
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