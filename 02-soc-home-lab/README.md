# 02 — SOC Home Lab

**Status:** Planejado

## Objetivo

Construir um laboratório local e isolado para praticar coleta de eventos, monitoramento, triagem de alertas e investigação básica de incidentes, simulando atividades de um SOC N1.

## Arquitetura inicial proposta

- **SIEM/XDR:** Wazuh (servidor e dashboard).
- **Endpoint:** máquina virtual Windows com Sysmon e agente Wazuh.
- **Sistema de testes:** máquina virtual Linux para gerar eventos controlados.
- **Virtualização:** VirtualBox ou VMware, conforme os recursos disponíveis.

A arquitetura final será ajustada à memória, CPU e armazenamento disponíveis no computador.

## Plano de execução

1. Verificar os requisitos do computador e escolher a plataforma de virtualização.
2. Criar uma rede virtual isolada, sem exposição desnecessária à rede doméstica.
3. Instalar e configurar o Wazuh.
4. Preparar o endpoint Windows e configurar Sysmon/agente.
5. Confirmar a ingestão e visualização dos logs.
6. Gerar eventos benignos e controlados para validar a telemetria.
7. Investigar os alertas recebidos, documentando hipótese, evidência e conclusão.
8. Registrar a arquitetura, configurações relevantes e resultados.

## Cenários de validação previstos

- Logon bem-sucedido e falhas de autenticação geradas de forma controlada.
- Criação de processo e eventos de sistema observáveis.
- Alterações controladas em arquivos de teste.
- Detecção e triagem de eventos pelo Wazuh.

Os cenários serão limitados ao laboratório próprio. Não serão executados testes contra sistemas de terceiros.

## Entregáveis

- [ ] Diagrama da arquitetura.
- [ ] Inventário de máquinas e recursos.
- [ ] Passo a passo de instalação e configuração.
- [ ] Evidências de ingestão de logs.
- [ ] Capturas de alertas com dados sensíveis removidos.
- [ ] Relatório de investigação de pelo menos um cenário.
- [ ] Lições aprendidas e limitações.

## Evidências e resultados

Esta seção será atualizada depois da execução. Nenhum alerta, ataque ou resultado é declarado como realizado neste momento.

## Segurança do laboratório

Manter as VMs em rede isolada/host-only durante os testes, usar snapshots, evitar credenciais reais e não compartilhar arquivos de configuração que contenham senhas, chaves ou tokens.
