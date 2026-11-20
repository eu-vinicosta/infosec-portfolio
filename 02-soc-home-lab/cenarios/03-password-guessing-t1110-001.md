# Cenário 03 — Falhas controladas de autenticação (Password Guessing)

**MITRE ATT&CK:** T1110.001 — Password Guessing  
**Tática:** Credential Access  
**Regra local:** 100102  
**Nível Wazuh:** 10  
**Telemetria:** Windows Security Event ID 4625  
**Parâmetros:** 3 eventos em 600 segundos  
**Resultado:** correlação validada em simulação local

## Objetivo

Simular falhas de autenticação controladas no endpoint de laboratório e verificar se o Wazuh correlaciona eventos repetidos de logon inválido.

## Procedimento

Foram realizadas tentativas locais e controladas de autenticação inválida para uma conta temporária de laboratório, utilizando runas. O Windows registrou eventos Security 4625. Os registros examinados apresentaram status 0xC000006D e substatus 0xC000006A, compatíveis com credencial incorreta.

## Detecção

A regra local 100102 correlaciona eventos que acionam a regra nativa 60122, com frequência 3 em 600 segundos, agrupando pelo campo win.eventdata.targetUserName. A regra customizada associa o resultado à técnica MITRE T1110.001.

Descrição observada: falhas repetidas de logon para uma conta temporária no endpoint de laboratório.

## Resultado e interpretação

O Wazuh gerou um alerta de nível 10 com mapeamento T1110.001. A evidência original contém eventos 4625 e os campos de status/substatus de falha.

**Limitação essencial:** as tentativas observadas foram locais; o endereço de origem dos eventos era loopback (::1). Portanto, o teste valida a correlação de falhas de autenticação no endpoint, mas não representa uma tentativa remota de Password Guessing ou um ataque contra um serviço de rede.

## Limitações

- O limiar de três ocorrências em 600 segundos é didático e deve ser calibrado com dados reais antes de uso operacional.
- A correlação pelo nome da conta alvo não substitui análise da origem, tipo de logon, usuário de origem e contexto.
- Uma sequência de falhas pode decorrer de erro humano, serviço mal configurado ou atividade autorizada; exige triagem.
- Nenhuma senha é incluída neste relatório.

## Evidência

O export original JSON foi preservado em armazenamento privado. Ele contém previous_output e campos de autenticação que não devem ser publicados integralmente.
