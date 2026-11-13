# Caso PA-001 — Falsa notificação de suspensão da CNH

**Classificação:** phishing com alta confiança  
**Data da mensagem:** 12/10/2026 06:37:08 UTC  
**Data da análise:** 13/11/2026  
**Amostra:** `phishing-detran.eml` (19.322 bytes)  
**SHA-256 da amostra:** `0219d437940afdbd540b877aa11e07e5712f5b0c48448ef738f4e161d779145c`

> **Privacidade:** esta publicação é sanitizada. O endereço do destinatário, identificadores internos da caixa postal e outros dados pessoais foram omitidos. O arquivo .eml original permanece privado e não deve ser publicado.

## 1. Resumo executivo

A mensagem se apresenta como uma notificação oficial do Detran, afirma existir uma infração grave associada à CNH e ameaça iniciar uma suspensão. Para evitar as consequências, induz o destinatário a clicar em um botão de “regularização”.

A análise dos cabeçalhos e do HTML encontrou ausência de resultados positivos de autenticação, remetente sem domínio institucional completo, URL com aparência de Microsoft usada como disfarce, destino hospedado em um hostname `run.app`, inconsistências no conteúdo e CNPJ com dígitos verificadores inválidos.

**Conclusão:** phishing de alta confiança, com provável objetivo de levar a vítima a uma página falsa para coleta de dados e/ou cobrança. O comportamento final do site não foi testado.

## 2. Evidências técnicas

| Elemento | Achado | Interpretação |
|---|---|---|
| From / Return-Path | `infracao@detran276448` | O endereço não usa o domínio oficial divulgado pelo Detran-RJ. O texto de exibição “Detran Notifica” pode ser definido pelo remetente e não comprova identidade. |
| SPF | `none` | Nenhum resultado SPF positivo foi apresentado. O domínio de envelope observado é `detran276448`. |
| DKIM | `none` | A mensagem não apresenta assinatura DKIM validada. |
| DMARC | `none` | Nenhum resultado DMARC positivo foi apresentado para o domínio do cabeçalho. “None” não deve ser descrito como “fail” sem evidência adicional. |
| Origem SMTP | `149.28.215.14` | IP registrado no primeiro salto externo de `Received` e em `X-Sender-IP`. A reputação/propriedade do IP não foi enriquecida externamente nesta análise. |
| HELO / Received | `[127.0.1.1]` | Nome apresentado no salto SMTP usa endereço de loopback, enquanto o IP de conexão registrado é `149.28.215.14`; anomalia adicional. |
| Antispam | `SCL: 9`, `dest:J`, `RF:JunkEmail` | Os metadados indicam entrega na pasta de lixo eletrônico. A Microsoft ressalta que SCL isolado não determina, por si só, o veredito ou a ação final no Microsoft 365. |
| URL do botão | Host real: `dete2-489991573399.southamerica-east1.run.app` | O texto com aparência de Microsoft aparece antes de `@` como userinfo. O hostname real está depois de `@`, não em microsoft.com nem em domínio governamental. |
| Conteúdo | Ameaça de suspensão; prazo 15/10/2026; botão de “regularização” | Urgência, ameaça e chamada à ação são técnicas de engenharia social. |
| Inconsistência de processo | Número do processo no assunto difere do protocolo no corpo | Os identificadores apresentados não são consistentes entre si. |
| CNPJ no rodapé | Dígitos verificadores não conferem | A validação matemática local do CNPJ informado resultou em final `27`, enquanto o e-mail apresenta final `80`. Não foi feita consulta cadastral à Receita Federal. |

### URL disfarçada

O href original tinha a estrutura:

```text
hxxps://www[.]microsoft[.]com-pt-br[texto]@dete2-489991573399[.]southamerica-east1[.]run[.]app
```

Na sintaxe padrão de URLs, o trecho antes de `@` é informação de usuário (*userinfo*). O host real é o trecho depois de `@`.

O hostname usa o formato de URL padrão do Google Cloud Run (`SERVICE-PROJECT_NUMBER.REGION.run.app`). Isso identifica o padrão de hospedagem, mas **não prova, por si só, que o serviço é malicioso**. O indicador suspeito é o uso desse destino para simular uma regularização oficial do Detran.

## 3. IOCs observados

Os indicadores abaixo estão defangados para evitar acesso acidental.

| Tipo | Indicador | Contexto |
|---|---|---|
| IPv4 | `149.28.215[.]14` | IP de conexão SMTP registrado pelo servidor receptor. |
| Hostname | `dete2-489991573399[.]southamerica-east1[.]run[.]app` | Host real extraído do href do botão. |
| Remetente | `infracao@detran276448` | Endereço em From e Return-Path. |

## 4. Corroboração oficial

O Detran-RJ publicou alerta informando que não envia notificações de infrações ou suspensão da CNH por e-mail/SMS e que as comunicações sobre infrações seguem os canais oficiais. O órgão também descreveu golpes que imitam o gov.br e usam links de “regularização”, correspondendo ao padrão observado nesta amostra.

- [Detran-RJ — alerta sobre sites falsos e tentativas de fraude por e-mail e SMS (05/01/2026)](https://detran.rj.gov.br/noticias/detran-rj-alerta-sobre-sites-falsos-e-tentativas-de-fraude-por-e-mail-e-sms-2.html)
- [Detran-RJ — alerta sobre golpe que imita notificação de suspensão da CNH (21/11/2024)](https://www.detran.rj.gov.br/noticias/detran-rj-alerta-motoristas-sobre-golpe-que-imita-a-notificacao-da-suspensao-da-cnh.html)

## 5. Ações recomendadas

1. Não clicar no botão, não responder e não fornecer dados ou efetuar pagamentos.
2. Marcar a mensagem como phishing/spam e manter a amostra original em armazenamento privado.
3. Consultar eventual situação da CNH somente digitando o endereço oficial do Detran-RJ ou usando o aplicativo oficial Carteira Digital de Trânsito.
4. Se algum dado tiver sido informado no site, alterar credenciais reutilizadas e contatar os canais oficiais pertinentes.

## 6. Escopo e limitações

- Análise estática do arquivo `.eml`, incluindo cabeçalhos e conteúdo HTML.
- A URL não foi aberta, o IP não foi acessado e nenhum teste ativo ou sandbox foi executado.
- Não foi comprovado se o site ainda está ativo, se coleta credenciais, se realiza cobrança ou se algum dispositivo foi comprometido.
- A reputação externa do IP e do hostname não foi confirmada.
- A amostra contém partes `text/plain` e `text/html`; não foram encontrados anexos.

## 7. Aprendizados demonstrados

- Leitura de cabeçalhos SMTP e resultados SPF/DKIM/DMARC.
- Identificação de IP de origem e anomalias em Received/HELO.
- Extração e interpretação segura de URLs com userinfo.
- Reconhecimento de engenharia social e impersonação de órgão público.
- Registro de IOCs, limitações e evidências de forma reproduzível.
