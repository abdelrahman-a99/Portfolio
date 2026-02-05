"use client";

import { useEffect } from "react";
import { Button } from "../components/ui/button";

import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      window.location.pathname
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center container mx-auto px-4 relative z-10 animate-fade-in">
        <h1 className="text-9xl mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
          404
        </h1>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
            Page Not Found
          </h2>

          <p className="mx-auto max-w-lg text-lg text-gray-400 leading-relaxed">
            Oops! It seems you&apos;ve ventured into uncharted digital territory.
            The page you&apos;re looking for might have been moved or doesn&apos;t exist.
          </p>

          <div className="flex justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-indigo-900/20 transition-all duration-300 hover:scale-105 hover:shadow-indigo-900/40"
            >
              <Link href="/" className="flex items-center gap-2">
                <MoveLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                Return Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 