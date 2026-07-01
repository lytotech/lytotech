import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Container } from "@/components/ui/Container";

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-[#1e1e1e] py-20 sm:py-24"
    >
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-mono text-[#00ff88] mb-3 tracking-widest uppercase">
            Projetos
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            O que tenho construído
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#888888] sm:text-base">
            Produtos SaaS com foco em operação, automação e experiência de uso:
            da modelagem e API até interfaces responsivas, deploy e integrações.
          </p>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
