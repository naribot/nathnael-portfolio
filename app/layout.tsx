import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { getSiteUrl } from "@/lib/site-url";

import "./globals.css";

const title = "Nathnael Abraham | Full-Stack Software Engineer";
const description =
  "Portfolio of Nathnael Abraham, a full-stack software engineer building web applications, AI-powered tools, and research-driven software systems.";
const siteUrl = getSiteUrl();
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...(siteUrl && { metadataBase: siteUrl }),
  title: {
    default: title,
    template: "%s | Nathnael Abraham",
  },
  description,
  authors: [{ name: "Nathnael Abraham" }],
  keywords: [
    "Full-stack software engineer",
    "React",
    "TypeScript",
    "Node.js",
    "AI applications",
    "AWS",
    "Software engineering portfolio",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Nathnael Abraham",
    ...(siteUrl && { url: siteUrl }),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
