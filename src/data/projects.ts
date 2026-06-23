export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  badges: string[];
  github?: string;
  demo?: string;
  status: "active" | "coming-soon";
}

export const projects: Project[] = [
  {
    id: "turemar",
    name: "Turemar",
    tagline: "Gestão para o turismo",
    description:
      "Plataforma SaaS para gestão de operações turísticas. Em breve mais detalhes.",
    tech: [],
    badges: ["SaaS", "Em breve"],
    status: "coming-soon",
  },
  {
    id: "localbet",
    name: "LocalBet",
    tagline: "Bolões esportivos com gamificação",
    description:
      "Plataforma SaaS para criação e gestão de bolões esportivos. Grupos com convite por link, apostas em placar exato, pontuação automática e leaderboard com XP, níveis e badges.",
    tech: ["React 18", "TypeScript", "Quarkus 3", "PostgreSQL", "TailwindCSS"],
    badges: ["SaaS", "PWA", "Gamificação"],
    status: "active",
  },
  {
    id: "salve-mais",
    name: "Salve Mais",
    tagline: "Controle financeiro pessoal",
    description:
      "SaaS multi-tenant de gestão financeira pessoal com dashboard de KPIs, controle de contas, cartões, parcelas, reserva de emergência e planejamento para aposentadoria. Integração com Stripe.",
    tech: [
      "Angular 19",
      "Spring Boot 3",
      "PostgreSQL",
      "Stripe",
      "Chart.js",
      "TypeScript",
    ],
    badges: ["SaaS", "Multi-tenant", "Stripe"],
    status: "active",
  },
];
