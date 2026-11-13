# 01 — Phishing Analysis

**Status:** Planejado

## Objetivo

Investigar um e-mail suspeito de forma segura, identificar sinais de phishing e produzir um relatório técnico conciso, com evidências sanitizadas.

## Escopo

- Revisar remetente, endereço de resposta, assunto e conteúdo.
- Examinar cabeçalhos disponíveis: `Received`, `Return-Path`, `Reply-To`, `Authentication-Results` (SPF, DKIM e DMARC), quando presentes.
- Identificar URLs, domínios, anexos mencionados e possíveis indicadores de comprometimento (IOCs), sem abrir links ou executar arquivos.
- Correlacionar os achados e registrar limitações.

## Metodologia prevista

1. Selecionar uma mensagem suspeita recebida pelo próprio analista.
2. Exportar a mensagem como `.eml` ou copiar cabeçalhos completos.
3. Remover dados pessoais e informações sensíveis antes de compartilhar ou publicar.
4. Analisar os campos e sinais técnicos disponíveis.
5. Classificar os achados, separando evidência de hipótese.
6. Elaborar um relatório de uma página com conclusão e recomendações.

## Ferramentas possíveis

- Cliente de e-mail e visualizador de cabeçalhos.
- Python para parsing local de mensagens, se necessário.
- Ferramentas de reputação de domínio/URL, consultadas sem visitar links suspeitos diretamente.

## Entregáveis

- [ ] Amostra sanitizada ou artefato reproduzível, sem dados pessoais.
- [ ] Lista de IOCs observados, com contexto e tipo.
- [ ] Relatório técnico em PDF.
- [ ] Evidências (prints sanitizados).
- [ ] Resumo executivo para apresentação no LinkedIn.

## Modelo de conclusão

A conclusão será preenchida após a análise da amostra. Não serão presumidos resultados antes da inspeção do e-mail.

## Cuidados

Não clicar nos links, não baixar/abrir anexos e não responder ao remetente. Não publicar endereços, nomes, IDs de mensagens, tokens ou dados de terceiros. Se a mensagem contiver informação confidencial, usar uma amostra pública ou sintética.
