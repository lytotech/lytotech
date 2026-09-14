import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://lyto.com.br"),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "lytotech — Desenvolvedor Full Stack",
    description:
      "Portfólio de Tallyto Rodrigues — Desenvolvedor Full Stack especializado em aplicações SaaS.",
    type: "website",
    url: "https://lyto.com.br",
    siteName: "lytotech",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "lytotech — Desenvolvedor Full Stack",
    description:
      "Aplicações SaaS, arquitetura e infraestrutura do código à produção.",
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
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5694426191156721"
        crossOrigin="anonymous"
      />
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Tallyto Rodrigues",
            url: "https://lyto.com.br",
            jobTitle: "Desenvolvedor Full Stack",
            sameAs: [
              "https://github.com/tallyto",
              "https://linkedin.com/in/tallyto",
            ],
          }),
        }}
      />
      <body>{children}</body>
    </html>
  );
}
