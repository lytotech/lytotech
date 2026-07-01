import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[720px] flex-col justify-center overflow-hidden pt-24 pb-24 sm:min-h-screen"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Accent glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00ff88]/5 blur-[100px] sm:h-96 sm:w-96 sm:blur-[120px]" />

      <Container className="relative z-10 text-center">
        {/* Avatar monogram */}
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-lg border border-[#1e1e1e] bg-[#111111]">
          <span className="text-2xl font-bold font-mono text-[#00ff88]">
            LT
          </span>
        </div>

        {/* Tag line above name */}
        <p className="mb-3 text-sm uppercase tracking-widest text-[#888888] font-mono">
          Desenvolvedor Full Stack
        </p>

        {/* Main headline */}
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Olá, sou{" "}
          <span className="text-[#00ff88]">Tallyto</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-[#888888] sm:text-lg">
          Crio aplicações{" "}
          <span className="text-white">SaaS completas</span> — do backend ao
          frontend. Apaixonado por resolver problemas reais com tecnologia.
        </p>

        {/* CTAs */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-lg bg-[#00ff88] px-8 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#00cc6a]"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-[#1e1e1e] px-8 py-3.5 text-sm text-white transition-colors hover:border-[#888888]"
          >
            Entrar em contato
          </a>
        </div>
      </Container>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-40 sm:flex">
        <span className="text-xs text-[#888888] font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#888888] to-transparent" />
      </div>
    </section>
  );
}
