# 📄 Product Requirements Document (PRD) - Sistema de Gestão AEC Futebol 7

## 1. Visão Geral e Objetivo

O **Sistema de Gestão AEC Futebol 7** é uma aplicação web administrativa desenvolvida para organizar e documentar o 1º Campeonato de Futebol 7 da Associação Esportiva de Candói. 

**O grande diferencial (Regra de Negócio Principal):** O sistema parte da premissa de que os 16 times e seus respectivos atletas já estão previamente cadastrados no banco de dados. O foco central da aplicação é fornecer um "Painel de Mesário" (Súmula Digital) para o registro oficial dos resultados de cada partida, calculando e listando a classificação em tempo real para o público, além de fornecer utilitários como a previsão climática da sede esportiva.

## 2. Atores do Sistema

- **Mesário / Administrador:** Usuário responsável por operar o sistema à beira do campo, registrando os placares, status das partidas, dados da arbitragem e o local dos jogos.
- **Torcedor / Atleta:** Usuário final (leitor) que acessa a plataforma para visualizar a tabela de classificação atualizada e as regras do campeonato (Código de Conduta).
- **O Sistema (Serviços):** Ator automatizado que valida regras matemáticas de preenchimento (Regex), previne a perda de dados no navegador (Web Storage) e consome APIs públicas e locais.

## 3. Histórias de Usuário e Escopo

Abaixo estão as funcionalidades principais do MVP (Minimum Viable Product), mapeadas para atender às necessidades do campeonato e aos requisitos acadêmicos da disciplina.

### 📊 Épico 1: Dashboard e Acompanhamento (Página Inicial e Regulamento)

- **US01 - Acompanhamento da Classificação:** Como um Torcedor, quero visualizar a tabela de pontuação dos 16 times participantes na página inicial.
  - *Critérios de Aceitação:* Os dados devem ser consumidos de forma assíncrona (GET) da API Fake local (JSON Server) e renderizados via manipulação de DOM; a tabela não pode ser estática no HTML.
- **US02 - Condições de Jogo (Widget Climático):** Como um Mesário ou Torcedor, quero ver a temperatura exata da cidade sede ao vivo.
  - *Critérios de Aceitação:* O sistema fará uma requisição à API Open-Meteo; caso haja falha na rede, o sistema não deve quebrar, exibindo uma interface amigável de erro.
- **US03 - Código de Conduta:** Como um Participante, quero ler as regras do torneio.
  - *Critérios de Aceitação:* O layout deve ser responsivo, utilizando CSS puro (Flexbox/Grid) e imagens tratadas para não distorcerem independentemente do tamanho da tela.

### 📝 Épico 2: Gestão de Súmulas (Página de Registro de Partida)

- **US04 - Registro de Placar:** Como um Mesário, quero preencher a súmula selecionando os times e informando os gols de cada um.
  - *Critérios de Aceitação:* O formulário deve obrigar a seleção dos times (tag `select`); os campos de gols não podem aceitar valores negativos (Validação nativa HTML5); o status do jogo (Tempo Normal ou Pênaltis) deve ser marcado via botões de seleção (`radio`).
- **US05 - Validação da Arbitragem:** Como o Sistema, preciso garantir que o telefone de contato do Árbitro Principal da partida seja válido para eventuais auditorias.
  - *Critérios de Aceitação:* Ao submeter a súmula, o telefone do árbitro será interceptado e analisado por uma Expressão Regular (Regex); o envio deve ser bloqueado se o formato não for estritamente (XX) XXXXX-XXXX.
- **US06 - Localização da Partida (Campos Alternativos):** Como um Mesário registrando jogos fora da sede principal, quero digitar apenas o CEP do local da partida para que o endereço seja autopreenchido.
  - *Critérios de Aceitação:* O sistema deve consultar a API do ViaCEP e preencher Rua, Bairro e Cidade, bloqueando a edição manual durante a busca.
- **US07 - Proteção de Rascunho (Prevenção de Falhas):** Como um Mesário à beira do gramado, quero garantir que o placar digitado não seja perdido se o notebook desligar ou a página recarregar acidentalmente.
  - *Critérios de Aceitação:* A cada tecla digitada, a súmula deve ser salva no armazenamento local do navegador (LocalStorage); ao reabrir a página, os dados devem ser restaurados automaticamente; ao finalizar o envio (POST) com sucesso para a API Fake, o rascunho deve ser apagado.
