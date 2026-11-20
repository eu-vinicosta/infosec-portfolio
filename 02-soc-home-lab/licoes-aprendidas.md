# Lições aprendidas — SOC Home Lab

## 1. Telemetria depende da fonte e do agente

O cenário 04 mostrou que uma fonte pode gerar o evento esperado no Windows, mas o SIEM não o recebe se o canal ou Event ID estiver excluído do filtro do agente. A validação deve cobrir auditoria na origem, coleta do agente, recebimento no Manager e regra de detecção.

## 2. Regras devem refletir comportamento e contexto

As regras locais facilitaram o aprendizado, mas parâmetros fixos de rede e limites temporais precisam ser calibrados para outros ambientes. Regras simples para comandos administrativos como whoami.exe e ipconfig.exe produzem alertas úteis para exercício, não conclusões de incidente.

## 3. Correlação melhora o sinal, mas não elimina falsos positivos

O cenário 03 demonstrou correlação de falhas de autenticação, mas ocorreu localmente por loopback. O cenário 04 correlacionou múltiplas conexões bloqueadas. Em ambos, origem, tipo de evento, janela temporal e contexto são indispensáveis para interpretar o alerta.

## 4. Regras nativas também precisam ser consideradas

No cenário 05, a regra nativa 92057 identificou em execução real no laboratório o comando PowerShell codificado. A regra local experimental 100105 passou no wazuh-logtest, mas não gerou o alerta observado; removê-la após backup evitou redundância e manteve a documentação alinhada ao comportamento real.

## 5. Arquivamento bruto deve ser temporário e governado

logall_json foi habilitado para investigação e depois desativado. O arquivamento geral de eventos pode consumir espaço e armazenar dados sensíveis. A documentação final deve registrar o motivo da habilitação, a decisão de desativação e a manutenção da saída normal de alertas.

## 6. Evidência original e evidência pública são coisas diferentes

O JSON original é valioso para auditoria e reinterpretação, mas pode conter dados internos. O material público precisa de sanitização e deve preservar apenas campos essenciais para explicar a conclusão. Nunca se deve inventar capturas para preencher lacunas.

## 7. O resultado negativo também é um resultado

A varredura Nmap não encontrou portas abertas; todas as 20 portas estavam filtered. Registrar esse resultado corretamente é mais importante do que transformar um teste inconclusivo em uma descoberta que não ocorreu.
