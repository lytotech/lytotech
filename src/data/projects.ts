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
    demo: "https://www.turemar.com.br",
    status: "active",
  },
  {
    id: "sgtur",
    name: "SGTur",
    tagline: "Operação turística integrada",
    description:
      "Aplicação web para centralizar rotinas de gestão turística, atendimento, cadastros, controle operacional e acompanhamento de processos internos.",
    role: "Full stack",
    year: "2025",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "Azure"],
    badges: ["Turismo", "Operacional", "Web app"],
    highlights: [
      "Fluxos internos para equipes de turismo",
      "Cadastros e consultas operacionais",
      "Publicação em ambiente cloud",
    ],
    demo: "https://www.sgtur.com.br",
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
    demo: "https://www.localbet.com.br",
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
    demo: "https://www.salvemais.com.br",
    status: "active",
  },
  {
    id: "invmetro",
    name: "InvMetro",
    tagline: "Controle para inventário metrológico",
    description:
      "Sistema para organizar instrumentos, medições, calibrações e histórico de controle metrológico com foco em rastreabilidade e rotina operacional.",
    role: "Full stack",
    year: "2025",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "TypeScript", "TailwindCSS"],
    badges: ["Controle", "Metrologia", "Web app"],
    highlights: [
      "Cadastro de instrumentos e responsáveis",
      "Histórico de calibrações e medições",
      "Acompanhamento de status operacional",
    ],
    demo: "https://invmetro.com.br/#/",
    status: "active",
  },
];
