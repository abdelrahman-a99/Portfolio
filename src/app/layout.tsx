import { Toaster } from '../components/ui/toaster';
import { Toaster as Sonner } from '../components/ui/sonner';
import { TooltipProvider } from '../components/ui/tooltip';

import { Providers } from "@/components/providers";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { BASE_URL, personalLinks } from "@/data";

import "./globals.css";

export const metadata = {
  title: "Abdelrahman Ahmed | Portfolio",
  description: "Portfolio of Abdelrahman Ahmed, Full Stack Developer & Computer Science Student. Showcasing projects in web development, AI/ML, and more.",
  keywords: [
    "Abdelrahman Ahmed",
    "Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "Web Application",
    "AI",
    "Machine Learning",
    "Frontend",
    "React",
    "Next.js",
    "Django",
    ".NET",
    "Projects"
  ],
  authors: [{ name: "Abdelrahman Ahmed", url: personalLinks.linkedin }],
  openGraph: {
    title: "Abdelrahman Ahmed | Portfolio",
    description: "Portfolio of Abdelrahman Ahmed, Full Stack Developer & Computer Science Student. Showcasing projects in web development, AI/ML, and more.",
    url: BASE_URL,
    siteName: "Abdelrahman Ahmed Portfolio",
    images: [
      {
        url: "/assets/profile-photo.jpg",
        width: 800,
        height: 600,
        alt: "Abdelrahman Ahmed Profile Photo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Ahmed | Portfolio",
    description: "Portfolio of Abdelrahman Ahmed, Full Stack Developer & Computer Science Student.",
    images: ["/assets/profile-photo.jpg"]
  },
  metadataBase: new URL(BASE_URL)
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
              "name": "Abdelrahman Ahmed",
              "url": BASE_URL,
              "image": "/assets/profile-photo.jpg",
              "sameAs": [
                personalLinks.linkedin,
                personalLinks.github
              ],
              "jobTitle": "Full Stack Developer & Computer Science Student",
              "description": "Portfolio of Abdelrahman Ahmed, Full Stack Developer & Computer Science Student. Showcasing projects in web development, AI/ML, and more."
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": BASE_URL,
              "name": "Abdelrahman Ahmed Portfolio",
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${BASE_URL}/?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="dark">
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <ScrollToTop />
            <Analytics />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
