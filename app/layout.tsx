import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobin Joy - Full Stack Developer",
  description:
    "I'm a full stack web developer with proven remote work experience and international client collaborations, delivers high-quality code that meets and exceeds project requirements. My repertoire includes Javascript and tools such as ReactJS, NextJS, Express, NodeJS, MongoDB and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <main className="container mx-auto p-4 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
