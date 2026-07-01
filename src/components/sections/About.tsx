import { Container } from "@/components/ui/Container";

const skills = [
  "Spring Boot",
  "Quarkus",
  "Java",
  "Angular",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Flyway",
  "Hibernate",
  "Docker",
  "Azure",
  "GitHub Actions",
  "TailwindCSS",
  "PrimeNG",
  "Nx Monorepo",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <p className="text-xs font-mono text-[#00ff88] mb-3 tracking-widest uppercase">
              Sobre mim
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Construindo produtos{" "}
              <span className="text-[#00ff88]">do zero ao deploy</span>
            </h2>
            <div className="space-y-4 text-[#888888] leading-relaxed">
              <p>
                Sou desenvolvedor Full Stack com experiência em criar aplicações
                SaaS completas — desde a modelagem do banco de dados até
                interfaces responsivas e pipelines de deploy.
              </p>
              <p>
                Trabalho principalmente com{" "}
                <span className="text-white">Spring Boot</span> e{" "}
                <span className="text-white">Quarkus</span> no backend, e{" "}
                <span className="text-white">Angular</span> e{" "}
                <span className="text-white">React</span> no frontend. Tenho
                experiência com arquiteturas multi-tenant, integração de
                pagamentos e deploy em nuvem.
              </p>
              <p>
                Estou disponível para projetos freelance e oportunidades de
                colaboração. Se tens uma ideia ou um problema a resolver, vamos
                conversar.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <p className="text-xs font-mono text-[#888888] mb-4 tracking-widest uppercase">
              Tecnologias
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-mono rounded-lg bg-[#111111] border border-[#1e1e1e] text-[#888888] hover:text-white hover:border-[#00ff88]/30 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
