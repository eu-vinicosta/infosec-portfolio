# Índice de evidências — SOC Home Lab

Este índice descreve o estado conhecido das evidências. Os exports originais do Wazuh e capturas não sanitizadas devem permanecer em armazenamento privado. O repositório público contém documentação e deve receber apenas versões de imagens/trechos revisadas.

## Exports JSON originais confirmados

| Cenário | Nome do export privado | Detecção | Estado confirmado |
|---|---|---|---|
| 01 — T1033 | 01-detection-whoami-wazuh-export-original.json | Local 100100 | Dropbox: logs/ e evidencias/ |
| 02 — T1016 | 02-detection-ipconfig-wazuh-export-original.json | Local 100101 | Dropbox: logs/ e evidencias/ |
| 03 — T1110.001 | 03-detection-password-guessing-wazuh-export-original.json | Local 100102 | Dropbox: logs/ e evidencias/ |
| 04 — T1046 | 04-detection-network-service-discovery-wazuh-export-original.json | Local 100104 | Dropbox: logs/ e evidencias/ |
| 05 — T1059.001 | cenario05-alerta-wazuh-92057.json | Nativa 92057, nível 12 | Arquivo confirmado no servidor Wazuh; transferência para a pasta privada central pendente |

## Capturas confirmadas no Dropbox

O cenário 04 possui quatro capturas organizadas: conectividade Kali → Windows, resultado da varredura Nmap, visão geral de alertas e detalhe do alerta. Os nomes originais permanecem no índice privado para não expor metadados desnecessários.

## Fontes de telemetria por cenário

- Cenário 01: Sysmon Event ID 1 — criação de processo (whoami.exe).
- Cenário 02: Sysmon Event ID 1 — criação de processo (ipconfig.exe /all).
- Cenário 03: Windows Security Event ID 4625 — falha de logon local.
- Cenário 04: Windows Security Event ID 5157 — conexão bloqueada pela Windows Filtering Platform.
- Cenário 05: Sysmon Event ID 1 — criação de processo PowerShell com -EncodedCommand.

## Pendências de evidência

- Transferir o JSON do alerta 92057 do servidor Wazuh para o armazenamento privado central.
- Copiar a saída textual do Nmap (nmap-soc-win11-scenario04-final.txt) da Kali para o armazenamento privado central.
- Revisar e sanitizar capturas dos cenários 01–03 antes de decidir se serão incluídas em uma apresentação pública.

A ausência de um item neste pacote público não significa que o teste não ocorreu; significa que a evidência ainda não foi incorporada ou aprovada para publicação.

## Privacidade e preservação

Exports originais podem conter endereços IP, nomes de host e usuário, GUIDs, hashes, IDs internos, command lines e campos de autenticação. Não publicar arquivos integrais. Gerar cópias sanitizadas separadas quando necessário e manter os originais imutáveis.

O arquivo archives.json não integra este pacote e não deve ser publicado integralmente sem análise de volume, retenção e privacidade.
