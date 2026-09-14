import { Container } from "@/components/ui/Container";

const skillGroups = [
  {
    name: "Backend",
    skills: ["Spring Boot", "Quarkus", "Java", "Hibernate"],
  },
  {
    name: "Frontend",
    skills: ["Angular", "React", "TypeScript", "TailwindCSS", "PrimeNG"],
  },
  {
    name: "Dados & plataforma",
    skills: ["PostgreSQL", "Flyway", "Docker"],
  },
  {
    name: "DevOps",
    skills: ["Azure", "GitHub Actions", "Nx Monorepo"],
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <div className="grid items-start gap-16 md:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#00ff88]">
              Sobre mim
            </p>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Construindo produtos{" "}
              <span className="text-[#00ff88]">do zero ao deploy</span>
            </h2>
            <div className="space-y-4 leading-relaxed text-[#888888]">
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

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#888888]">
              Tecnologias
            </p>
            <div className="space-y-5">
              {skillGroups.map((group) => (
                <div key={group.name}>
                  <p className="mb-2 text-xs text-[#666666]">{group.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="cursor-default rounded-lg border border-[#1e1e1e] bg-[#111111] px-3 py-1.5 font-mono text-sm text-[#888888] transition-colors hover:border-[#00ff88]/30 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
