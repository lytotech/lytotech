import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "lytotech — Desenvolvedor Full Stack",
  description:
    "Portfólio de Tallyto Rodrigues — Desenvolvedor Full Stack especializado em aplicações SaaS com Angular, React, Spring Boot e Quarkus.",
  keywords: [
    "desenvolvedor",
    "full stack",
    "Angular",
    "React",
    "Spring Boot",
    "Quarkus",
    "SaaS",
    "freelancer",
  ],
  authors: [{ name: "Tallyto Rodrigues" }],
  openGraph: {
    title: "lytotech — Desenvolvedor Full Stack",
    description:
      "Portfólio de Tallyto Rodrigues — Desenvolvedor Full Stack especializado em aplicações SaaS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
