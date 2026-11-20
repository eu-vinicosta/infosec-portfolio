# Configurações e regras — SOC Home Lab

## Componentes observados

- Wazuh Manager, Indexer e Dashboard 4.14.10 em Ubuntu Server 24.04.5 LTS.
- Wazuh Agent 4.14.10 no Windows 11 Pro.
- Sysmon 15.22 no endpoint Windows.
- Kali Linux 2026.3 com Nmap 7.99.

## Regras locais usadas nos cenários 01–04

| ID | Finalidade | Critério técnico observado | MITRE | Nível |
|---|---|---|---|---:|
| 100100 | Execução de whoami.exe | Regra pai 61603; campo win.eventdata.image; Sysmon Event ID 1 | T1033 | 5 |
| 100101 | Execução de ipconfig.exe | Regra pai 61603; campo win.eventdata.image; Sysmon Event ID 1 | T1016 | 5 |
| 100102 | Falhas repetidas de autenticação | Regra pai 60122; frequência 3 em 600 s; agrupamento por win.eventdata.targetUserName | T1110.001 | 10 |
| 100103 | Conexão TCP bloqueada | Regra pai 60104; Windows Event ID 5157; filtros para origem/destino/protocolo TCP do laboratório | — | 5 |
| 100104 | Possível reconhecimento de serviços | Correlação de 2 eventos em 60 s; mesma origem/destino e portas destino diferentes | T1046 | 10 |

As regras 100103 e 100104 incorporam parâmetros específicos da rede de teste. Não devem ser copiadas para outro ambiente sem adaptar critérios de origem/destino e validar falsos positivos.

## Cenário 05 — detecção nativa

O alerta observado durante a execução real do laboratório para T1059.001 foi gerado pela regra nativa 92057, nível 12, com descrição equivalente à detecção de um processo PowerShell que executou um comando codificado em Base64. A telemetria era Sysmon Event ID 1.

Uma regra local experimental 100105 foi testada manualmente com wazuh-logtest, mas não foi a regra que produziu o alerta observado em tempo real. Após backup, ela foi removida para evitar manter uma regra redundante sem acionamento demonstrado no fluxo real.

## Auditoria Windows e evento 5157

A auditoria da subcategoria Windows Filtering Platform Connection foi utilizada para produzir eventos de conexão bloqueada. Durante a preparação do cenário 04, identificou-se que o Event ID 5157 estava excluído do filtro de coleta do canal Security no agente. A exclusão específica foi removida após backup e o serviço do agente foi reiniciado. O evento 5157 passou a ser recebido e correlacionado pelo Wazuh.

## Estado de arquivamento ao fechamento

Após concluir a coleta necessária, foi revertida a habilitação temporária do arquivamento JSON bruto. O estado validado em 19 nov. 2026 foi:

| Opção | Valor final | Observação |
|---|---|---|
| jsonout_output | yes | Saída JSON de alertas mantida |
| alerts_log | yes | Registro de alertas mantido |
| logall | no | Arquivamento geral em formato texto desativado |
| logall_json | no | Arquivamento geral JSON desativado após investigação |

A validação wazuh-analysisd -t terminou com código de saída 0. Após o reinício do Manager, Manager, Indexer e Dashboard estavam ativos e o agente Windows estava conectado.

## Operação segura

- Fazer backup antes de editar configurações ou regras.
- Validar sintaxe e regras antes de reiniciar serviços.
- Após alterações, verificar estado dos serviços e comunicação do agente.
- Manter arquivos de configuração integrais, backups e exports brutos em armazenamento privado.
- Não publicar tokens, senhas, chaves, usuários, IPs, IDs de agente, GUIDs ou hashes de processo.
