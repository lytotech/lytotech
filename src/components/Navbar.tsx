"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#contact", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1e1e1e]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="shrink-0 text-lg font-bold tracking-tight text-[#00ff88] font-mono"
        >
          lytotech
        </a>
        <ul className="flex min-w-0 gap-3 sm:gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-xs text-[#888888] transition-colors hover:text-white sm:text-sm"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
