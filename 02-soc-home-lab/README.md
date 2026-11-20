# 02 — SOC Home Lab | Security Monitoring & Threat Detection

**Status:** cinco cenários controlados concluídos; documentação técnica v2.0.  
**Escopo:** laboratório local, virtualizado e isolado.

Veja também a [apresentação web publicada](https://eu-vinicosta.github.io/infosec-portfolio/), seu [código-fonte](../docs/index.html) e os [rascunhos de divulgação](../docs/rascunhos-linkedin.md). A fonte do GitHub Pages está configurada em `main/docs`.

## Objetivo

Praticar o fluxo operacional básico de um SOC: gerar atividades benignas e controladas, coletar telemetria Windows, encaminhar eventos ao Wazuh, validar regras e alertas, analisar contexto e registrar evidências e limitações.

Todas as simulações foram realizadas em ativos próprios, dentro da rede virtual do laboratório. Não representam incidentes reais nem autorizam testes em sistemas de terceiros.

## Arquitetura resumida

- **SIEM:** Wazuh Manager, Indexer e Dashboard em Ubuntu Server 24.04.5 LTS (Wazuh 4.14.10).
- **Endpoint:** Windows 11 Pro com Wazuh Agent 4.14.10 e Sysmon 15.22.
- **Origem de testes:** Kali Linux 2026.3 com Nmap 7.99.
- **Virtualização:** Oracle VirtualBox 7.2.22.
- **Rede:** Host-Only para tráfego de teste entre VMs; NAT disponível para operações controladas como atualização.

Consulte [arquitetura e topologia](./arquitetura-topologia.md).

## Cenários concluídos

| # | Atividade | MITRE ATT&CK | Telemetria | Detecção observada |
|---:|---|---|---|---|
| 01 | Descoberta de usuário com `whoami.exe` | T1033 | Sysmon Event ID 1 | Regra local `100100`, nível 5 |
| 02 | Descoberta de configuração de rede com `ipconfig.exe /all` | T1016 | Sysmon Event ID 1 | Regra local `100101`, nível 5 |
| 03 | Falhas controladas de autenticação | T1110.001 | Security Event ID 4625 | Regra local `100102`, nível 10; 3 eventos/600 s |
| 04 | Varredura SYN limitada às 20 portas TCP mais comuns | T1046 | Security Event ID 5157 | Regras locais `100103` e `100104`; correlação em 60 s |
| 05 | PowerShell com comando benigno codificado em Base64 | T1059.001 | Sysmon Event ID 1 | Regra nativa Wazuh `92057`, nível 12 |

Relatórios individuais: [01 — T1033](./cenarios/01-whoami-t1033.md) · [02 — T1016](./cenarios/02-ipconfig-t1016.md) · [03 — T1110.001](./cenarios/03-password-guessing-t1110-001.md) · [04 — T1046](./cenarios/04-network-service-discovery-t1046.md) · [05 — T1059.001](./cenarios/05-encoded-powershell-t1059-001.md).

## Principais aprendizados

- A visibilidade depende da geração do evento, da auditoria na origem e dos filtros de coleta do agente.
- Regras locais e correlação ajudam a classificar comportamentos, mas parâmetros específicos precisam de calibração em outros ambientes.
- Eventos de falha local não demonstram ataque remoto; conexões bloqueadas não demonstram portas abertas.
- A regra nativa Wazuh `92057` identificou em execução real no laboratório o comando PowerShell codificado. A regra local experimental `100105` passou no `wazuh-logtest`, mas não gerou o alerta observado e foi removida.
- O arquivamento JSON bruto foi usado temporariamente na investigação e desativado após a coleta; a saída normal de alertas foi mantida.

## Evidências e privacidade

Os exports JSON originais e as capturas não sanitizadas permanecem em armazenamento privado. O pacote público contém quatro recortes de evidência revisados: dois do cenário 04 e dois do cenário 05, além de uma cópia textual sanitizada do resultado Nmap do cenário 04. Os cenários 01–03 usam cartões técnicos textuais. IP privado e endereço MAC foram removidos da cópia pública; o arquivo original permanece na VM Kali.

Não publicar exports brutos, `archives.json`, configurações integrais, credenciais, GUIDs, hashes de processos, IDs internos ou endereços privados.

## Documentação

- [Relatório técnico consolidado](./relatorio-tecnico.md)
- [Arquitetura e topologia](./arquitetura-topologia.md)
- [Configurações e regras](./configuracoes-e-regras.md)
- [Índice de evidências](./indice-de-evidencias.md)
- [Lições aprendidas](./licoes-aprendidas.md)

## Estado operacional ao fechamento

Em 19 nov. 2026, `wazuh-analysisd -t` terminou com código `0`. Após o reinício, `wazuh-manager`, `wazuh-indexer` e `wazuh-dashboard` estavam `active`, e o agente Windows estava `Active`. A configuração final manteve `jsonout_output=yes` e `alerts_log=yes`, com `logall=no` e `logall_json=no`.

## Limitações

O laboratório demonstra exercícios educacionais controlados, não uma operação SOC empresarial. Os critérios das regras, os limites temporais e a topologia são específicos do ambiente e precisam ser revistos antes de reutilização.