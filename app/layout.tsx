import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Isaac Lopes — Desenvolvedor FullStack Jr.",
  description:
    "Portfólio de Isaac Lopes, desenvolvedor FullStack Jr. de Juazeiro do Norte, CE. React, Next.js, Node.js, Java Spring Boot e design de interfaces.",
  keywords: ["desenvolvedor fullstack", "react", "nextjs", "nodejs", "portfolio", "isaac lopes"],
  authors: [{ name: "Isaac Lopes" }],
  openGraph: {
    title: "Isaac Lopes — Desenvolvedor FullStack Jr.",
    description: "Portfólio de Isaac Lopes — React, Next.js, Node.js e Design de Interfaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <Navbar />
          <main>
            {children}
          </main>
        </header>
      </body>
    </html>
  );
}
