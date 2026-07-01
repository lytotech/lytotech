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
  image?: string;
  github?: string;
  demo?: string;
  status: "active" | "coming-soon";
}

export const projects: Project[] = [
  {
    id: "turemar",
    name: "Turemar",
    tagline: "Cruzeiros e turismo personalizado",
    description:
      "Site institucional para uma agência especializada em turismo marítimo, cruzeiros e pacotes personalizados, com apresentação de serviços, história da marca e canais de contato.",
    role: "Site institucional",
    year: "2026",
    tech: ["Angular", "TypeScript", "Azure Static Web Apps", "GitHub Actions"],
    badges: ["Institucional", "Turismo", "Azure"],
    highlights: [
      "Serviços para cruzeiros, passagens e pacotes completos",
      "Conteúdo comercial com foco em atendimento personalizado",
      "Formulário e canais diretos para contato e WhatsApp",
    ],
    image: "/projects/turemar.png",
    demo: "https://www.turemar.com.br",
    status: "active",
  },
  {
    id: "sgtur",
    name: "SGTur",
    tagline: "Gestão completa para agências de turismo",
    description:
      "Sistema para agências de turismo centralizarem vendas, clientes, pagamentos e comissões em uma plataforma web pensada para a operação turística brasileira.",
    role: "Full stack",
    year: "2025",
    tech: ["Angular", "Spring Boot", "PostgreSQL", "Docker", "Azure"],
    badges: ["SaaS", "Turismo", "Gestão"],
    highlights: [
      "Centralização de vendas, clientes e pagamentos",
      "Controle de comissões para rotina comercial",
      "Landing page com chamada para teste gratuito",
    ],
    image: "/projects/sgtur.png",
    demo: "https://www.sgtur.com.br",
    status: "active",
  },
  {
    id: "localbet",
    name: "LocalBet",
    tagline: "Bolão entre amigos, sem casa de aposta",
    description:
      "Plataforma para organizar bolões sociais entre amigos, família e grupos conhecidos. Permite criar grupos, registrar palpites, apurar placares e acompanhar ranking em tempo real.",
    role: "Full stack",
    year: "2025",
    tech: ["React 18", "TypeScript", "Quarkus 3", "PostgreSQL", "TailwindCSS"],
    badges: ["SaaS", "Social", "Gamificação"],
    highlights: [
      "Grupos privados com convite por link",
      "Pontuação, ranking e prêmio calculados automaticamente",
      "XP, níveis, badges e notificações para o grupo",
    ],
    image: "/projects/localbet.png",
    demo: "https://www.localbet.com.br",
    status: "active",
  },
  {
    id: "salve-mais",
    name: "Salve Mais",
    tagline: "Controle financeiro para famílias",
    description:
      "SaaS de gestão financeira familiar para organizar receitas, despesas, cartões e investimentos em um só lugar, com uma experiência simples, segura e orientada à rotina da família.",
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
    badges: ["SaaS", "Finanças", "Família"],
    highlights: [
      "Organização de receitas, despesas e cartões",
      "Acompanhamento de investimentos e vida financeira",
      "Assinaturas e cobrança integradas com Stripe",
    ],
    image: "/projects/salve-mais.png",
    demo: "https://www.salvemais.com.br",
    status: "active",
  },
  {
    id: "invmetro",
    name: "Invmetro",
    tagline: "Inspeção veicular com presença digital",
    description:
      "Site institucional para uma empresa de inspeção veicular acreditada pela CGCRE e licenciada pelo SENATRAN, com foco em apresentação de serviços, unidades e canais de atendimento.",
    role: "Site institucional",
    year: "2025",
    tech: ["Angular", "TypeScript", "Bootstrap", "Font Awesome", "Google Analytics"],
    badges: ["Institucional", "Inspeção veicular", "Angular"],
    highlights: [
      "Páginas para serviços, documentos e tabela de preços",
      "Conteúdo para unidades em Curitiba e Campo Largo",
      "FAQ e chamadas para agendamento via WhatsApp",
    ],
    image: "/projects/invmetro.png",
    demo: "https://invmetro.com.br/#/",
    status: "active",
  },
];
