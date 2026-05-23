import { Toaster } from "@/components/ui/toaster";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { BASE_URL, personalLinks } from "@/data";

import "./globals.css";

export const metadata = {
  title: "Abdelrahman Ahmed | Full Stack & AI/RAG Systems Developer",
  description: "Portfolio of Abdelrahman Ahmed, Senior Computer Science student at Nile University building full-stack web applications, backend services, and AI/RAG systems using .NET, Django, FastAPI, Next.js, React, and TypeScript.",
  keywords: [
    "Abdelrahman Ahmed",
    "Portfolio",
    "Full Stack Developer",
    "Software Engineer",
    ".NET Developer",
    "Django Developer",
    "Next.js Developer",
    "React Developer",
    "Backend Developer",
    "Frontend Developer",
    "AI Engineer",
    "RAG Systems",
    "LLM Orchestration",
    "Nile University",
    "Codeforces Specialist",
  ],
  authors: [{ name: "Abdelrahman Ahmed", url: personalLinks.linkedin }],
  openGraph: {
    title: "Abdelrahman Ahmed | Full Stack & AI/RAG Systems Developer",
    description: "Portfolio showcasing full-stack, backend, frontend, and AI/RAG systems projects by Abdelrahman Ahmed.",
    url: BASE_URL,
    siteName: "Abdelrahman Ahmed Portfolio",
    images: [
      {
        url: "/assets/profile-photo.jpg",
        width: 800,
        height: 600,
        alt: "Abdelrahman Ahmed Profile Photo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Ahmed | Full Stack & AI/RAG Systems Developer",
    description: "Full-stack, backend, frontend, and AI/RAG systems portfolio.",
    images: ["/assets/profile-photo.jpg"],
  },
  metadataBase: new URL(BASE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/assets/profile-photo.jpg" type="image/jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdelrahman Ahmed",
              url: BASE_URL,
              image: "/assets/profile-photo.jpg",
              sameAs: [personalLinks.linkedin, personalLinks.github],
              jobTitle: "Full Stack Developer and AI/RAG Systems Developer",
              description: "Senior Computer Science student at Nile University building full-stack applications, backend services, and AI/RAG systems.",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: BASE_URL,
              name: "Abdelrahman Ahmed Portfolio",
              potentialAction: {
                "@type": "SearchAction",
                target: `${BASE_URL}/?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body className="dark" suppressHydrationWarning>
        <Toaster />
        <ScrollToTop />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
