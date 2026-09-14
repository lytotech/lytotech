import { Container } from "@/components/ui/Container";

const capabilities = [
  {
    title: "Arquitetura de produto",
    description:
      "Aplicações SaaS multi-tenant, APIs REST, PostgreSQL e integrações de cobrança, autenticação e armazenamento.",
  },
  {
    title: "Deploy e automação",
    description:
      "Pipelines com GitHub Actions, Docker, Azure Static Web Apps, Dokploy e estratégias de entrega reproduzíveis.",
  },
  {
    title: "Infraestrutura e observabilidade",
    description:
      "Ambientes Proxmox, LXC, Cloudflare, Tailscale, PostgreSQL dedicado e monitoramento com Prometheus, Loki e Tempo.",
  },
];

export function Infrastructure() {
  return (
    <section
      id="infrastructure"
      className="scroll-mt-20 border-t border-[#1e1e1e] py-20 sm:py-24"
    >
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#00ff88]">
            Arquitetura & DevOps
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Do código à operação
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#888888] sm:text-base">
            Além das interfaces, estruturo os ambientes, automatizo entregas e
            acompanho os serviços para que os produtos continuem confiáveis em
            produção.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="rounded-lg border border-[#1e1e1e] bg-[#111111] p-5 sm:p-6"
            >
              <span className="mb-6 block h-1 w-10 rounded-full bg-[#00ff88]" />
              <h3 className="mb-3 text-lg font-semibold text-white">
                {capability.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#888888]">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
