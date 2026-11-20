# Índice de evidências — SOC Home Lab

Este índice descreve o estado conhecido das evidências. Os exports originais do Wazuh e capturas não sanitizadas devem permanecer em armazenamento privado. O repositório público contém documentação e deve receber apenas versões de imagens/trechos revisadas.

## Exports privados de detecção

| Cenário | Arquivo/registro | Detecção | Estado confirmado |
|---|---|---|---|
| 01 — T1033 | Export JSON original | Local 100100 | Confirmado em armazenamento privado |
| 02 — T1016 | Export JSON original | Local 100101 | Confirmado em armazenamento privado |
| 03 — T1110.001 | Export JSON original | Local 100102 | Confirmado em armazenamento privado |
| 04 — T1046 | Export JSON original | Local 100104 | Confirmado em armazenamento privado |
| 05 — T1059.001 | `05-detection-powershell-encoded-wazuh-export-scp-original.json` | Nativa 92057, nível 12 | Original SCP de 4.018 bytes validado e arquivado em `evidencias/` e `logs/`; cópias anteriores reserializadas de 5.107 bytes preservadas separadamente |

## Evidências públicas selecionadas

| Cenário | Arquivo público | Conteúdo preservado e sanitização |
|---|---|---|
| 04 — T1046 | `docs/assets/evidence/scenario-04-nmap-results.png` | Tabela Nmap das 20 portas, todas `filtered`; MAC e identidade do terminal omitidos |
| 04 — T1046 | `evidencias/nmap-soc-win11-scenario04-sanitizado.txt` | Output textual fornecido a partir do original; IP privado e MAC removidos; 20 portas `filtered` |
| 04 — T1046 | `docs/assets/evidence/scenario-04-wazuh-alert-detail.png` | Regra 100104, nível 10, T1046; IPs, hostname e campos internos omitidos |
| 05 — T1059.001 | `docs/assets/evidence/scenario-05-wazuh-alert-overview.png` | Dois eventos da regra 92057, nível 12; sem hostname visível |
| 05 — T1059.001 | `docs/assets/evidence/scenario-05-wazuh-alert-detail.png` | Regra 92057, nível 12, T1059.001; nome do Manager omitido |

Os cenários 01–03 são representados por cartões técnicos textuais; não foram selecionadas capturas de baixa qualidade ou com dados internos.

## Fontes de telemetria por cenário

- Cenário 01: Sysmon Event ID 1 — criação de processo (whoami.exe).
- Cenário 02: Sysmon Event ID 1 — criação de processo (ipconfig.exe /all).
- Cenário 03: Windows Security Event ID 4625 — falha de logon local.
- Cenário 04: Windows Security Event ID 5157 — conexão bloqueada pela Windows Filtering Platform.
- Cenário 05: Sysmon Event ID 1 — criação de processo PowerShell com -EncodedCommand.

## Preservação da evidência textual

A cópia pública sanitizada do output Nmap foi derivada do arquivo original `nmap-soc-win11-scenario04-final.txt`, cuja existência foi confirmada pelo usuário. O original não foi alterado nem transferido por esta atualização e permanece na VM Kali. A cópia pública omite o IP privado e o endereço MAC.

## Privacidade e preservação

Exports originais podem conter endereços IP, nomes de host e usuário, GUIDs, hashes, IDs internos, command lines e campos de autenticação. Não publicar arquivos integrais. Gerar cópias sanitizadas separadas quando necessário e manter os originais imutáveis.

O arquivo archives.json não integra este pacote e não deve ser publicado integralmente sem análise de volume, retenção e privacidade.