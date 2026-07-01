import { Project } from "@/data/projects";
import { TechBadge } from "./TechBadge";

interface ProjectCardProps {
  project: Project;
}

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isComingSoon = project.status === "coming-soon";

  return (
    <div
      className={`relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-lg border bg-[#111111] transition-all duration-300 group ${
        isComingSoon
          ? "border-[#1e1e1e] opacity-60"
          : "border-[#1e1e1e] hover:border-[#00ff88]/30 hover:bg-[#131313]"
      }`}
    >
      <div className="border-b border-[#1e1e1e] bg-[#0d0d0d] p-4">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="grid min-h-32 grid-cols-[1.15fr_0.85fr] gap-3 rounded-md border border-[#1e1e1e] bg-[#090909] p-3">
          <div className="flex flex-col gap-2">
            <span className="h-3 w-20 rounded bg-[#00ff88]/40" />
            <span className="h-2 w-full rounded bg-white/10" />
            <span className="h-2 w-5/6 rounded bg-white/10" />
            <span className="mt-auto h-8 rounded border border-[#00ff88]/20 bg-[#00ff88]/10" />
          </div>
          <div className="grid grid-rows-3 gap-2">
            <span className="rounded border border-white/10 bg-white/[0.04]" />
            <span className="rounded border border-white/10 bg-white/[0.04]" />
            <span className="rounded border border-white/10 bg-white/[0.04]" />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.badges.map((badge) => (
            <TechBadge key={badge} label={badge} variant="tag" />
          ))}
        </div>

        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="break-words text-xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-[#00ff88]">
              {project.tagline}
            </p>
          </div>
          <span className="shrink-0 rounded border border-[#1e1e1e] px-2 py-1 font-mono text-xs text-[#888888]">
            {project.year}
          </span>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-[#888888]">
          {project.description}
        </p>

        <div className="mb-5 rounded-md border border-[#1e1e1e] bg-[#0d0d0d] p-4">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#666]">
            Entrega
          </p>
          <p className="mb-3 text-sm text-white">{project.role}</p>
          <ul className="space-y-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-2 text-sm leading-snug text-[#888888]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00ff88]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} variant="tech" />
          ))}
        </div>

        {!isComingSoon && (project.github || project.demo) && (
          <div className="mt-auto flex gap-3 border-t border-[#1e1e1e] pt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#888888] transition-colors hover:text-white"
              >
                <GithubIcon />
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[#00ff88] transition-colors hover:text-[#00cc6a]"
              >
                <ExternalLinkIcon />
                Acessar app
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
