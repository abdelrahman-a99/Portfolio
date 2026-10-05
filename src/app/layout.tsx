import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";

import { ScrollToTop } from "@/components/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";
import {
  BASE_URL,
  personStructuredData,
  profile,
  seoContent,
  site,
  websiteStructuredData,
} from "@/data";

import "./globals.css";

export const metadata: Metadata = {
  title: seoContent.title,
  description: seoContent.description,
  keywords: seoContent.keywords,

  authors: [
    {
      name: profile.name,
      url: profile.links.linkedin,
    },
  ],

  metadataBase: new URL(BASE_URL),

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: profile.photo,
  },

  openGraph: {
    title: seoContent.title,
    description: seoContent.openGraphDescription,
    url: BASE_URL,
    siteName: seoContent.siteName,
    images: [seoContent.image],
    locale: site.locale,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: seoContent.title,
    description: seoContent.twitterDescription,
    images: [seoContent.image.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={site.language} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData).replace(
              /</g,
              "\\u003c",
            ),
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
