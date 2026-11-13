# 01 — Phishing Analysis

**Status:** Versão 1.0 concluída | Apresentação no LinkedIn pendente

## Projeto

Investigação estática de uma mensagem que se apresenta como notificação do Detran e ameaça suspender a CNH do destinatário. A análise utilizou o arquivo original `.eml`, incluindo cabeçalhos SMTP e HTML.

## Resultado

**Classificação:** phishing com alta confiança.

Principais achados:
- SPF, DKIM e DMARC sem resultados positivos (`none`).
- Remetente e Return-Path usando `infracao@detran276448`, sem domínio institucional oficial.
- IP observado no primeiro salto SMTP: `149.28.215.14`.
- URL com texto semelhante a Microsoft antes de `@`; o host real está depois de `@` e usa `run.app`.
- Identificadores de processo e protocolo inconsistentes.
- CNPJ informado no rodapé não passa na validação matemática dos dígitos verificadores.
- Metadados do Microsoft 365 indicam entrega na pasta de lixo eletrônico.

## Relatório técnico

- [Relatório completo sanitizado](./relatorio-phishing-detran.md)
- [Repositório principal](../README.md)

O PDF de uma página e a prévia visual foram arquivados no Dropbox privado, junto da mensagem original. O repositório público contém apenas a documentação sanitizada em Markdown. Dados pessoais do destinatário e identificadores internos da caixa postal foram omitidos.

## Entregáveis

- [x] Amostra original preservada em armazenamento privado.
- [x] Cabeçalhos e conteúdo HTML analisados.
- [x] IOCs identificados e defangados.
- [x] Relatório técnico sanitizado em Markdown.
- [x] Relatório executivo de uma página em PDF.
- [x] Evidência visual sanitizada arquivada no Dropbox privado.
- [x] PDF executivo arquivado no Dropbox privado.
- [x] Relatório técnico sanitizado publicado no GitHub.
- [ ] Preparar e publicar apresentação no LinkedIn (próxima etapa).

## Metodologia e segurança

- Análise estática do arquivo `.eml`.
- Nenhum link foi aberto e nenhum anexo foi executado.
- O IP e o hostname não foram acessados; reputação externa não foi confirmada.
- Dados pessoais, Message-ID e identificadores internos foram omitidos da publicação.
- A amostra original não deve ser publicada em repositório público.

## Aprendizados demonstrados

Leitura de cabeçalhos SMTP; interpretação de SPF/DKIM/DMARC; análise de Received e Return-Path; extração segura de URLs; reconhecimento de userinfo em URLs; identificação de engenharia social; registro de IOCs e limitações.
