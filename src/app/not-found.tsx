"use client";

import { useEffect } from "react";

import Link from "next/link";

export default function NotFound() {

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      window.location.pathname
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-indigo-400">404</h1>
        <p className="text-xl text-gray-400 mb-4">Oops! Page not found</p>
        <Link
          href="/"
          className="text-indigo-400 underline decoration-indigo-400 transition-colors hover:text-indigo-200 hover:decoration-indigo-200"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
} 