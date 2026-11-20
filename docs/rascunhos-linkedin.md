# Rascunhos para LinkedIn

Os textos abaixo são rascunhos e ainda não foram publicados. Revise cada texto antes de publicar; os links do portfólio apontam para os recursos públicos atuais.

## Projeto 01 — Phishing Analysis

Concluí a versão 1.0 de uma análise estática de um e-mail que simulava uma notificação do Detran sobre suspensão da CNH.

Revisei cabeçalhos SMTP, resultados SPF/DKIM/DMARC, conteúdo HTML e a estrutura da URL apresentada na mensagem. A evidência sustentou a classificação de phishing com alta confiança. Não acessei o link nem executei anexos; por isso, o comportamento do site de destino permanece não testado.

O exercício reforçou a importância de separar os indicadores observados das hipóteses e de preservar a amostra original enquanto se publica somente um relatório sanitizado.

Relatório: [inserir link do relatório sanitizado]

#SegurançaDaInformação #Phishing #BlueTeam #AnáliseDeAmeaças

## Projeto 02 — SOC Home Lab

Documentei cinco cenários controlados em um laboratório virtual próprio, com Windows 11, Sysmon, Wazuh, Kali Linux e Oracle VirtualBox.

Os exercícios cobriram descoberta de usuário e rede, falhas locais de autenticação, conexões bloqueadas durante uma varredura Nmap limitada às 20 portas mais comuns e execução de um comando benigno de PowerShell codificado. Registrei as fontes de telemetria, regras acionadas e limitações de cada resultado.

Alguns pontos importantes: as falhas de autenticação foram locais via loopback; as 20 portas da varredura ficaram `filtered` e nenhuma porta aberta foi identificada; o alerta do PowerShell veio da regra nativa Wazuh 92057. Nenhum desses resultados, isoladamente, prova comprometimento.

Documentação: [inserir link do projeto SOC Home Lab]

#SOC #BlueTeam #Wazuh #Sysmon #MITREATTACK #HomeLab

## Apresentação geral do portfólio

Organizei meu portfólio de estudos em Segurança da Informação com foco em oportunidades de entrada em SOC N1, Blue Team e Segurança da Informação Jr.

O material reúne uma análise estática de phishing e um SOC Home Lab com cinco cenários controlados. Em cada projeto, procurei explicar método, evidência, resultado e limitações sem apresentar simulações como incidentes reais ou ampliar conclusões além do que os dados mostram.

Estou preparando a próxima etapa de aprendizagem em TryHackMe; ela ainda não foi iniciada neste fechamento.

Portfólio: https://eu-vinicosta.github.io/infosec-portfolio/
Código e relatórios: https://github.com/eu-vinicosta/infosec-portfolio

#SegurançaDaInformação #SOC #BlueTeam #Cybersecurity #Portfólio
