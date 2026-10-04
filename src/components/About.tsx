'use client';

import { Card, CardContent } from "@/components/ui/card";

import {
  aboutContent,
  aboutStatistics,
  highlights,
} from "@/data";

import { PortfolioIcon } from "@/components/PortfolioIcon";

export function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-gray-900 text-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">
            {aboutContent.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {aboutContent.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="prose prose-lg max-w-none text-gray-400">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph.id}
                  className={
                    "text-gray-400 leading-relaxed" +
                    (index < aboutContent.paragraphs.length - 1 ? " mb-4" : "")
                  }
                >
                  {paragraph.text}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {aboutStatistics.map((statistic) => (
                <div
                  key={statistic.id}
                  className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700"
                >
                  <div className="text-2xl font-bold text-indigo-400">
                    {statistic.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {statistic.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Highlight cards */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={highlight.id}
                className="hover:shadow-md transition-all duration-300 hover:scale-105 animate-fade-in border-gray-700 bg-gray-800 text-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-indigo-900/20 rounded-lg flex items-center justify-center">
                        <PortfolioIcon
                          name={highlight.icon}
                          className="h-6 w-6 text-indigo-400"
                        />
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