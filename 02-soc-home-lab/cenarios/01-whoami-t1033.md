# Cenário 01 — Descoberta de usuário com whoami.exe

**MITRE ATT&CK:** T1033 — System Owner/User Discovery  
**Tática:** Discovery  
**Regra local:** 100100  
**Nível Wazuh:** 5  
**Telemetria:** Sysmon Event ID 1 — Process Create  
**Resultado:** detecção validada

## Objetivo

Verificar se a execução de whoami.exe no endpoint Windows gera um evento Sysmon de criação de processo e se o Wazuh classifica esse evento como atividade compatível com descoberta de usuário.

## Procedimento

Foi executado whoami.exe no Windows monitorado. O Sysmon registrou a criação do processo no canal operacional do Sysmon (Event ID 1). O agente encaminhou o evento ao Wazuh Manager.

## Detecção

A regra local 100100 utiliza a regra pai 61603, verifica o campo win.eventdata.image para a imagem whoami.exe e associa o alerta à técnica T1033.

Descrição observada: execução de whoami.exe no endpoint de laboratório.

## Resultado e interpretação

O alerta foi observado com nível 5 e mapeamento T1033. O export original confirma o Event ID 1, a imagem whoami.exe e a regra 100100.

A atividade confirma que o pipeline Sysmon → Wazuh coletou e classificou a execução. whoami.exe é um utilitário legítimo de administração e diagnóstico; o alerta isolado não determina intenção maliciosa nem prova comprometimento.

## Evidência

O export original JSON está preservado em armazenamento privado. A versão pública não incorpora o JSON bruto, pois contém identificadores de endpoint, usuário, processo e hashes que precisam permanecer sanitizados.
