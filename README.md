# InfoSec Portfolio

Cybersecurity & Information Security Projects

Este repositório reúne estudos práticos, laboratórios controlados e documentação técnica para demonstrar competências em Segurança da Informação, com foco em **SOC N1, Blue Team e análise de ameaças**.

> **Status:** portfólio em construção. Os resultados publicados correspondem a atividades executadas e documentadas; simulações e limitações são identificadas explicitamente.

## Projetos

| Projeto | Foco | Status |
|---|---|---|
| [01 — Phishing Analysis](./01-phishing-analysis/README.md) | Triagem de e-mail suspeito, cabeçalhos e IOCs | Versão 1.0 concluída; rascunho de divulgação preparado |
| [02 — SOC Home Lab](./02-soc-home-lab/README.md) | Monitoramento Windows, SIEM Wazuh, detecção e correlação | Cinco cenários controlados concluídos; documentação técnica v2.0 |
| [03 — TryHackMe](./03-tryhackme/README.md) | Laboratórios e anotações de segurança | Em organização |

## Apresentação e divulgação

- [Apresentação web do portfólio](https://eu-vinicosta.github.io/infosec-portfolio/) — publicada pelo GitHub Pages a partir de `main/docs`; código-fonte em [docs/index.html](./docs/index.html).
- [Informações de publicação no GitHub Pages](./docs/publicacao-github-pages.md) — fonte configurada e endereço público.
- [Rascunhos para LinkedIn](./docs/rascunhos-linkedin.md) — não publicados.

## Competências trabalhadas

- Análise de e-mails suspeitos e identificação de indicadores de comprometimento (IOCs).
- Leitura e interpretação de logs Windows e telemetria Sysmon.
- Monitoramento e triagem de alertas com SIEM Wazuh.
- Criação e validação de regras locais e correlação de eventos.
- Mapeamento de comportamentos para MITRE ATT&CK.
- Documentação técnica, preservação de evidências e comunicação de limitações.

## Princípios de segurança e transparência

- Testes técnicos somente em ambientes próprios, isolados ou explicitamente autorizados.
- Dados pessoais, credenciais, tokens, endereços privados e identificadores internos são removidos das evidências públicas.
- Simulações são identificadas como simulações; não são apresentadas como incidentes reais.
- Alertas são tratados como sinais para triagem, não como prova isolada de comprometimento.
- Cada relatório distingue fatos observados, interpretação e limitações.
- Evidências originais permanecem em armazenamento privado; o repositório contém documentação e material revisado.

## Estrutura

```text
infosec-portfolio/
├── README.md
├── 01-phishing-analysis/
│   ├── README.md
│   └── relatorio-phishing-detran.md
├── 02-soc-home-lab/
│   ├── README.md
│   ├── relatorio-tecnico.md
│   ├── arquitetura-topologia.md
│   ├── configuracoes-e-regras.md
│   ├── indice-de-evidencias.md
│   ├── licoes-aprendidas.md
│   └── cenarios/
│       ├── 01-whoami-t1033.md
│       ├── 02-ipconfig-t1016.md
│       ├── 03-password-guessing-t1110-001.md
│       ├── 04-network-service-discovery-t1046.md
│       └── 05-encoded-powershell-t1059-001.md
└── 03-tryhackme/
    └── README.md
```

## Sobre

Portfólio pessoal de estudos práticos em Segurança da Informação. O conteúdo é atualizado após execução, validação e revisão de privacidade de cada atividade.
