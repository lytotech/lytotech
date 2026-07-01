export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  tech: string[];
  badges: string[];
  highlights: string[];
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
      "Sistema para operadoras de turismo organizarem reservas, clientes, roteiros, pagamentos e a rotina comercial em uma única plataforma.",
    role: "Produto próprio",
    year: "2026",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Azure", "Stripe"],
    badges: ["SaaS", "Turismo", "Em construção"],
    highlights: [
      "Gestão de reservas e passageiros",
      "Painel operacional para roteiros",
      "Fluxo comercial com pagamentos",
    ],
    status: "active",
  },
  {
    id: "localbet",
    name: "LocalBet",
    tagline: "Bolões esportivos com gamificação",
    description:
      "Plataforma SaaS para criação e gestão de bolões esportivos. Grupos com convite por link, apostas em placar exato, pontuação automática e leaderboard com XP, níveis e badges.",
    role: "Full stack",
    year: "2025",
    tech: ["React 18", "TypeScript", "Quarkus 3", "PostgreSQL", "TailwindCSS"],
    badges: ["SaaS", "PWA", "Gamificação"],
    highlights: [
      "Convites por link para grupos privados",
      "Pontuação automática por placar",
      "Ranking com XP, níveis e conquistas",
    ],
    status: "active",
  },
  {
    id: "salve-mais",
    name: "Salve Mais",
    tagline: "Controle financeiro pessoal",
    description:
      "SaaS multi-tenant de gestão financeira pessoal com dashboard de KPIs, controle de contas, cartões, parcelas, reserva de emergência e planejamento para aposentadoria. Integração com Stripe.",
    role: "Arquitetura e full stack",
    year: "2025",
    tech: [
      "Angular 19",
      "Spring Boot 3",
      "PostgreSQL",
      "Stripe",
      "Chart.js",
      "TypeScript",
    ],
    badges: ["SaaS", "Multi-tenant", "Stripe"],
    highlights: [
      "Dashboards financeiros com KPIs",
      "Contas, cartões e parcelas",
      "Assinaturas e cobrança com Stripe",
    ],
    status: "active",
  },
];
