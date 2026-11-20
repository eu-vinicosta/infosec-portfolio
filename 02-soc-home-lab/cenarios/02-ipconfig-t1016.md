# Cenário 02 — Descoberta de configuração de rede com ipconfig.exe /all

**MITRE ATT&CK:** T1016 — System Network Configuration Discovery  
**Tática:** Discovery  
**Regra local:** 100101  
**Nível Wazuh:** 5  
**Telemetria:** Sysmon Event ID 1 — Process Create  
**Resultado:** detecção validada

## Objetivo

Validar a coleta de uma consulta à configuração de rede executada no endpoint Windows e a classificação do processo no Wazuh.

## Procedimento

Foi executado ipconfig.exe /all no Windows monitorado. O Sysmon registrou a criação do processo no canal operacional do Sysmon, Event ID 1, incluindo a linha de comando.

## Detecção

A regra local 100101 utiliza a regra pai 61603, verifica o campo win.eventdata.image para ipconfig.exe e associa o alerta à técnica T1016.

Descrição observada: execução de ipconfig.exe no endpoint de laboratório.

## Resultado e interpretação

O alerta foi observado com nível 5 e mapeamento T1016. O export original confirma o Event ID 1, a imagem ipconfig.exe, a opção /all e a regra 100101.

A atividade representa descoberta da configuração de rede local. ipconfig.exe /all também é usado rotineiramente para diagnóstico; o alerta isolado não determina intenção maliciosa.

## Evidência

O export original JSON está preservado em armazenamento privado. A versão pública não incorpora o JSON bruto, pois ele inclui identificadores do endpoint, usuário, processo e hashes.
