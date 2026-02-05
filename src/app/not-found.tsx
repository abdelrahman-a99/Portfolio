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
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
      <div className="text-center container mx-auto">
        <h1 className="text-[12rem] font-bold text-indigo-400">
          404
        </h1>

        <div className="mt-2 space-y-2">
          <h2 className="text-3xl font-bold text-gray-400">
            Page not found
          </h2>

          <p className="mx-auto max-w-lg text-lg text-gray-400">
            Oops! It seems you've wandered into uncharted territory.
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-indigo-400 hover:bg-indigo-500 text-indigo-900 px-8 py-3 rounded-full font-semibold shadow-glow hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <Link href="/">
              <MoveLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 