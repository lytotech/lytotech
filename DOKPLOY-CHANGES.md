# Alterações no Dokploy e Docker Swarm

Data: 14/09/2026

## Problema identificado

O domínio `karaoke.lyto.com.br` retornava `502 Bad Gateway`.

O container da aplicação estava ativo e respondia na porta interna `3000`, mas o Traefik não conseguia alcançar o serviço pelo VIP padrão do Docker Swarm (`endpoint_mode: vip`).

## Correções aplicadas

- Criado o arquivo `/etc/dokploy/traefik/dynamic/acme.json`.
- Ajustada a permissão do `acme.json` para `600`.
- Corrigido o volume dinâmico do Traefik para permitir escrita.
- Adicionada a chave SSH automática do Dokploy ao `root` do LXC Docker.
- Alterado o serviço `lytotech-openkaraoke-4cq9nm` de `vip` para `dnsrr`.
- Mantida somente a porta interna `3000` do karaoke; nenhuma porta pública adicional foi reativada.
- Configurado o domínio `karaoke.lyto.com.br` no Traefik/Dokploy.
- Configurado o túnel Cloudflare para encaminhar ao Traefik em `http://192.168.2.51:80`.

## Serviços alterados para `dnsrr`

- `lytotech-openkaraoke-4cq9nm`
- `jehdoces-backend-z2vvnx`
- `lytotech-stoky-iqt3yy`
- `lytotech-vamoscantar-7v3iqi`
- `salvemais-backend-nn0gvj`
- `sgtur-backend-rdqznw`

O serviço `localbet-backend-oes6rf` não foi alterado porque está sem réplica ativa e utiliza publicação em modo host.

## Validações

- `karaoke.lyto.com.br`: Traefik retornando `HTTP 200`.
- `confeiti.com.br`: Traefik retornando `HTTP 200`.
- Comunicação Traefik → karaoke pela `dokploy-network`: `HTTP 200`.
- Serviço `jehdoces-backend-z2vvnx`: `1/1` réplicas e `HTTP 200`.

## Observação de persistência

As alterações de `endpoint_mode` foram aplicadas diretamente nos serviços Docker Swarm. Elas normalmente sobrevivem a reinícios do Docker, mas podem ser sobrescritas se o Dokploy recriar ou redeployar os serviços.

Para persistência definitiva, os arquivos de deploy dos projetos devem declarar:

```yaml
services:
  app:
    expose:
      - "3000"
    networks:
      - dokploy-network
    deploy:
      endpoint_mode: dnsrr

networks:
  dokploy-network:
    external: true
```

Não foram incluídos neste arquivo tokens, senhas, chaves privadas ou variáveis de ambiente sensíveis.
