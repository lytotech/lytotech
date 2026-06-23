import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Container } from "@/components/ui/Container";

export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-[#1e1e1e]">
      <Container>
        <div className="mb-12">
          <p className="text-xs font-mono text-[#00ff88] mb-3 tracking-widest uppercase">
            Projetos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            O que tenho construído
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
