# Relatório técnico — SOC Home Lab

## 1. Resumo executivo

Foi implementado um laboratório SOC virtualizado para observar e classificar atividades controladas em um endpoint Windows. O ambiente integra Wazuh Manager, Indexer e Dashboard em Ubuntu Server, Windows 11 com Wazuh Agent e Sysmon, e Kali Linux para gerar parte das atividades de teste.

O trabalho validou cinco cenários relacionados às técnicas MITRE ATT&CK T1033, T1016, T1110.001, T1046 e T1059.001. Os resultados demonstram coleta e triagem de telemetria, correspondência de regras, correlação e interpretação contextual. As simulações foram realizadas somente em ativos próprios e em rede virtual privada.

## 2. Objetivo

Praticar o fluxo operacional básico de um SOC: geração controlada de atividade, coleta de eventos, encaminhamento ao SIEM, avaliação de regras, verificação do alerta, análise da evidência e registro de limitações.

## 3. Escopo e metodologia

Para cada cenário, o procedimento seguiu esta sequência:

1. Definir a técnica/comportamento a observar e o limite do teste.
2. Executar uma ação benigna e controlada no endpoint ou a partir da VM de teste.
3. Confirmar a geração da telemetria na fonte Windows (Sysmon ou Security log).
4. Verificar o recebimento e a classificação pelo Wazuh.
5. Conferir regra, severidade, campos relevantes e mapeamento MITRE.
6. Preservar um export original em armazenamento privado e registrar resultado e limitações.

Um alerta é um indicador para triagem, não uma conclusão automática de comprometimento. A interpretação considera origem, usuário, processo, contexto, frequência e evidências associadas.

## 4. Resultados consolidados

| Cenário | Técnica | Fonte | Regra/detecção | Resultado observado |
|---|---|---|---|---|
| 01 | T1033 | Sysmon 1 | Local 100100 / nível 5 | Execução de whoami.exe classificada como descoberta de usuário |
| 02 | T1016 | Sysmon 1 | Local 100101 / nível 5 | Execução de ipconfig.exe /all classificada como descoberta de configuração de rede |
| 03 | T1110.001 | Security 4625 | Local 100102 / nível 10 | Três falhas em janela de 600 s correlacionadas; tentativas locais via loopback |
| 04 | T1046 | Security 5157 | Locais 100103 e 100104 / nível 10 na correlação | Conexões TCP bloqueadas correlacionadas; scan SYN top-20 terminou com todas as portas filtered |
| 05 | T1059.001 | Sysmon 1 | Nativa 92057 / nível 12 | Execução de PowerShell com -EncodedCommand benigno identificada em execução real do laboratório |

## 5. Pontos técnicos relevantes

### Telemetria Windows

- Sysmon Event ID 1: criação de processo, usado nos cenários 01, 02 e 05.
- Windows Security Event ID 4625: falha de logon, usado no cenário 03.
- Windows Security Event ID 5157: conexão bloqueada pela Windows Filtering Platform, usado no cenário 04.

### Regras locais

As regras 100100 a 100104 foram usadas nos cenários 01–04. Os parâmetros didáticos estão resumidos em Configurações e regras. O cenário 05 foi detectado pela regra nativa Wazuh 92057; a regra local experimental 100105 não foi usada no alerta observado e foi removida.

### Retenção e limpeza

Durante a investigação do cenário 04, logall_json foi habilitado temporariamente para análise de eventos brutos. Após a coleta e preservação das evidências necessárias, a opção foi desativada novamente. Ao fechamento, logall=no, logall_json=no, jsonout_output=yes e alerts_log=yes.

## 6. Limitações e interpretação

- T1033 e T1016 são comandos administrativos legítimos; o alerta isolado não prova intenção maliciosa.
- T1110.001 foi exercitado localmente. Os eventos apresentaram origem loopback (::1); não se trata de ataque remoto ou de força bruta contra serviço externo.
- T1046 produziu eventos de conexão bloqueada. O resultado filtered não permite afirmar que os serviços estavam abertos ou fechados de forma conclusiva; o teste não identificou portas abertas.
- T1059.001 usou comando PowerShell codificado e inofensivo para validação. A regra nativa 92057 gerou o alerta observado; a regra personalizada experimental 100105 só foi exercitada no wazuh-logtest e foi removida.
- Regras com endereços de origem/destino e limites de frequência específicos precisam ser calibradas antes de uso em outra topologia.
- O pacote público não contém exports brutos nem todas as capturas do laboratório; consulte o índice para o estado do material de evidência.

## 7. Estado operacional ao fechamento

Em 19 nov. 2026, após as alterações de limpeza, wazuh-analysisd -t retornou código 0. Os serviços wazuh-manager, wazuh-indexer e wazuh-dashboard foram verificados como active; o agente Windows constava como Active.

## 8. Conclusão

O laboratório atingiu o objetivo educacional: validar ingestão de telemetria Windows, detecção baseada em regras e correlação no Wazuh, mapear comportamentos a técnicas MITRE e interpretar limites do que os alertas demonstram. A etapa final prioriza organização e sanitização das evidências, com distinção explícita entre alertas observados, hipóteses e lacunas ainda não resolvidas.
