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
      className={`relative flex flex-col p-6 rounded-xl border bg-[#111111] transition-all duration-300 group ${
        isComingSoon
          ? "border-[#1e1e1e] opacity-60"
          : "border-[#1e1e1e] hover:border-[#00ff88]/30 hover:bg-[#131313]"
      }`}
    >
      {/* Top badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.badges.map((badge) => (
          <TechBadge key={badge} label={badge} variant="tag" />
        ))}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-1">{project.name}</h3>
      <p className="text-sm text-[#00ff88] mb-3 font-medium">
        {project.tagline}
      </p>

      {/* Description */}
      <p className="text-sm text-[#888888] leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tech stack */}
      {project.tech.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <TechBadge key={t} label={t} variant="tech" />
          ))}
        </div>
      )}

      {/* Links */}
      {!isComingSoon && (project.github || project.demo) && (
        <div className="flex gap-3 mt-auto pt-4 border-t border-[#1e1e1e]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#888888] hover:text-white transition-colors"
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
              className="flex items-center gap-1.5 text-xs text-[#00ff88] hover:text-[#00cc6a] transition-colors"
            >
              <ExternalLinkIcon />
              Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}
