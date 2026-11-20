# Cenário 05 — PowerShell com comando codificado

**MITRE ATT&CK:** T1059.001 — PowerShell  
**Tática:** Execution  
**Detecção observada em execução real no laboratório:** regra nativa Wazuh 92057  
**Nível Wazuh:** 12  
**Telemetria:** Sysmon Event ID 1 — Process Create  
**Resultado:** detecção validada

## Objetivo

Validar se a execução do Windows PowerShell com o parâmetro -EncodedCommand é observada pelo Sysmon e identificada pelo mecanismo de regras do Wazuh.

## Procedimento

No endpoint Windows de laboratório foi iniciado o PowerShell com -NoLogo, -NoProfile, -NonInteractive e -EncodedCommand. O conteúdo Base64 decodificado executava somente uma saída de texto de validação (Write-Output com marcador do laboratório) e a consulta da data/hora ISO (Get-Date -Format o). Nenhum payload malicioso, acesso remoto ou alteração destrutiva foi utilizado.

O Sysmon registrou a criação do processo (Event ID 1), incluindo powershell.exe e a linha de comando com -EncodedCommand.

## Detecção observada

O Wazuh gerou um alerta pela regra nativa 92057, nível 12, com a descrição:

> Powershell.exe spawned a powershell process which executed a base64 encoded command

O alerta foi associado à técnica MITRE T1059.001, ao endpoint Windows monitorado e ao Sysmon Event ID 1. O registro foi validado por timestamp, ID de regra, nível, descrição, mapeamento MITRE e evento Windows.

## Esclarecimento sobre a regra personalizada experimental

Durante a investigação, uma regra local experimental 100105 foi criada e passou em um teste manual com wazuh-logtest. **Ela não foi a regra que gerou o alerta observado no fluxo real.** O alerta foi produzido pela regra nativa 92057.

Após a preservação da evidência e backup dos arquivos de configuração, a regra experimental 100105 foi removida para não manter uma regra redundante sem acionamento demonstrado no fluxo real.

## Triagem de evento adicional

Durante os testes também apareceu um evento associado à criação de um arquivo temporário __PSScriptPolicyTest_...ps1, relacionado ao teste de política de execução do PowerShell. Esse evento foi tratado como artefato benigno do procedimento e não como evidência de transferência de malware.

## Interpretação e limitações

A detecção demonstra que a regra nativa identificou o uso de um mecanismo de execução do PowerShell com comando codificado. O uso de Base64, isoladamente, não prova atividade maliciosa: administradores e ferramentas legítimas também podem usar comandos codificados. A análise deve considerar processo pai, usuário, conteúdo decodificado, origem, frequência e contexto.

## Evidência

O alerta foi exportado e validado em JSON no servidor Wazuh. O arquivo ainda precisa ser transferido para a pasta privada central de evidências; não está incluído neste pacote público.
