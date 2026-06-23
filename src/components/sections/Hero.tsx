export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-16"
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00ff88]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Avatar monogram */}
        <div className="w-20 h-20 rounded-2xl bg-[#111111] border border-[#1e1e1e] flex items-center justify-center mx-auto mb-8">
          <span className="text-2xl font-bold font-mono text-[#00ff88]">
            LT
          </span>
        </div>

        {/* Tag line above name */}
        <p className="text-sm text-[#888888] font-mono mb-3 tracking-widest uppercase">
          Desenvolvedor Full Stack
        </p>

        {/* Main headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Olá, sou{" "}
          <span className="text-[#00ff88]">Tallyto</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[#888888] leading-relaxed mb-10 max-w-lg mx-auto">
          Crio aplicações{" "}
          <span className="text-white">SaaS completas</span> — do backend ao
          frontend. Apaixonado por resolver problemas reais com tecnologia.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-[#00ff88] text-black font-semibold rounded-lg text-sm hover:bg-[#00cc6a] transition-colors"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-[#1e1e1e] text-white rounded-lg text-sm hover:border-[#888888] transition-colors"
          >
            Entrar em contato
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-[#888888] font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#888888] to-transparent" />
      </div>
    </section>
  );
}
