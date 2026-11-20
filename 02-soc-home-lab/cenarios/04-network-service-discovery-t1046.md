# Cenário 04 — Network Service Discovery com Nmap

**MITRE ATT&CK:** T1046 — Network Service Discovery  
**Tática:** Discovery  
**Ferramenta:** Nmap 7.99 em Kali Linux 2026.3  
**Regras locais:** 100103 e 100104  
**Telemetria Windows:** Security Event ID 5157  
**Resultado:** conexões bloqueadas identificadas e correlacionadas

## Objetivo

Executar uma varredura TCP limitada contra um único endpoint Windows próprio e validar se conexões bloqueadas são registradas pelo Windows Filtering Platform e correlacionadas pelo Wazuh.

## Preparação

A auditoria Windows da subcategoria Filtering Platform Connection foi habilitada para registrar os eventos necessários. Durante a preparação, foi identificada uma exclusão do Event ID 5157 no filtro do canal Security do agente Wazuh. A exclusão específica foi removida após backup; o agente foi reiniciado.

## Procedimento

A partir da VM Kali, foi executada uma varredura SYN (-sS), com temporização -T3, limitada às 20 portas TCP mais comuns (--top-ports 20) contra o endpoint Windows da rede virtual Host-Only.

## Resultado da varredura

O host respondeu como ativo, mas as 20 portas testadas foram classificadas como **filtered**. Nenhuma porta aberta foi identificada. Esse resultado é compatível com filtragem ou bloqueio do tráfego; não demonstra que os serviços estavam abertos nem permite concluir indisponibilidade definitiva.

## Telemetria e detecção

O Windows registrou eventos Security 5157, correspondentes a conexões bloqueadas pela Windows Filtering Platform.

- A regra local 100103 classifica conexões TCP bloqueadas que correspondem aos critérios de origem/destino definidos para o laboratório, com base na regra nativa 60104.
- A regra local 100104 correlaciona pelo menos dois eventos em uma janela de 60 segundos, considerando a mesma origem e destino e portas de destino diferentes. O alerta de correlação utiliza nível 10 e MITRE T1046.

A visão geral do Dashboard apresentou ocorrências da regra 100104. O JSON original selecionado registra evento 5157 e a regra 100104 com MITRE T1046.

## Interpretação

O cenário demonstra que a telemetria WFP pode fornecer visibilidade sobre tentativas de conexão bloqueadas e que múltiplos eventos podem ser correlacionados para sinalizar possível reconhecimento de serviços.

O resultado não deve ser descrito como descoberta de portas abertas: nenhuma foi identificada na varredura. Os IPs e os limites das regras são específicos da rede virtual deste laboratório.

## Evidências

Foram preservados em armazenamento privado: captura de conectividade Kali → Windows, captura do resultado Nmap, visão geral de alertas, detalhe do alerta e export JSON original. O usuário confirmou a presença do output textual original na VM Kali. Uma cópia sanitizada, sem IP privado e endereço MAC, foi incluída em [evidencias/nmap-soc-win11-scenario04-sanitizado.txt](../evidencias/nmap-soc-win11-scenario04-sanitizado.txt).

Recortes públicos revisados:

- [Resultado Nmap — 20 portas `filtered`](../../docs/assets/evidence/scenario-04-nmap-results.png)
- [Detalhe do alerta Wazuh — regra 100104, nível 10, MITRE T1046](../../docs/assets/evidence/scenario-04-wazuh-alert-detail.png)

Os recortes omitem endereço MAC, IPs, hostname e campos de evento que não são necessários para sustentar o resultado. O Event ID 5157 está documentado acima; os dados integrais permanecem privados.