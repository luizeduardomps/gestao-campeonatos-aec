# Sistema de Gestão - 1º Campeonato de Futebol 7 (AEC)

Este projeto tem como objetivo implementar uma aplicação web responsiva para gerenciar e divulgar o 1º Campeonato de Futebol 7 da AEC. O sistema permite o cadastro de times e jogadores, além de exibir a tabela de classificação e próximos jogos. O frontend consome uma API local (JSON Server) para dados do torneio e uma API pública para a previsão do tempo nos dias de jogo.

**Autor:** Luiz Eduardo Menegazzo Pereira da Silva

---

## 📚 Documentação do Projeto

Para entender as regras de negócio, o escopo e a arquitetura técnica da aplicação, consulte os documentos abaixo:

* [Product Requirements Document (PRD)](./docs/prd.md) - Visão geral, atores e histórias de usuário.
* [Especificação Técnica (Tech Spec)](./docs/spec.md) - Diagrama de banco de dados (DER), dicionário de dados e rotas da API.

## 🎨 Design

* [Design System](./docs/design-system.md) - Identidade visual baseada no "The Stadium Archive".
* [Protótipo no Figma](https://www.figma.com/design/9zAXHil8vW4nC4XTbg2AQM/gestao-campeonatos-aec?node-id=0-1&t=vK8sQqbf2f3TU2pX-1) - Telas interativas da aplicação.
* [Protótipo no Stitch](https://stitch.withgoogle.com/projects/1915889823401437527) - Visão de componentes isolados gerados por IA.

## 🌐 Site em Produção - GitHub Pages

* [Link do GitHub Pages - a ser preenchido ao final do semestre]

## 💻 Tecnologias e Dependências

* **Framework CSS (Bootstrap 5):** Escolhido por possuir um sistema de grid robusto para a tabela de classificação e componentes interativos nativos, dispensando bibliotecas pesadas.
* **API Pública (Open-Meteo API):** Fornece a previsão do tempo para a Sede Esportiva sem a necessidade de chaves de autenticação (API Keys).
* **jQuery & jQuery Mask Plugin:** Utilizados para animações, manipulação do DOM e formatação de inputs no formulário.
* **JSON Server:** Utilizado para simular uma API REST de backend no ambiente de desenvolvimento.

---

## ✅ Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

### RA1 - Utilizar Frameworks CSS para estilização e layouts responsivos
- [x] **ID 01** - Prototipa interfaces adaptáveis para mobile e desktop.
- [x] **ID 02** - Implementa layout responsivo com Framework CSS usando Flexbox ou Grid.
- [ ] **ID 03** - Implementa layout responsivo com CSS puro, usando Flexbox ou Grid Layout.
- [ ] **ID 04** - Utiliza componentes prontos de um Framework CSS (card, button) e componentes JS (modal, carousel).
- [ ] **ID 05** - Cria layout fluido usando unidades relativas (vw, vh, %, em, rem).
- [x] **ID 06** - Aplica um Design System consistente em toda a aplicação.
- [ ] **ID 07** - Utiliza Sass (SCSS) aplicando variáveis, mixins e funções.
- [ ] **ID 08** - Aplica tipografia responsiva ou tipografia fluida.
- [ ] **ID 09** - Aplica técnicas de responsividade de imagens usando CSS (object-fit).
- [ ] **ID 10** - Otimiza imagens usando formatos modernos (WebP) e carregamento adaptativo.

### RA2 - Tratar formulários e aplicar validações no lado cliente
- [ ] **ID 11** - Implementa validação HTML nativa com mensagens de erro/sucesso.
- [ ] **ID 12** - Aplica expressões regulares (REGEX) para validações customizadas.
- [ ] **ID 13** - Utiliza elementos de seleção em formulários (checkbox, radio, select).
- [ ] **ID 14** - Implementa leitura e escrita no Web Storage para persistir dados localmente.

### RA3 - Aplicar ferramentas para otimização do desenvolvimento
- [ ] **ID 15** - Configura ambiente com Node.js e NPM.
- [ ] **ID 16** - Utiliza boas práticas de versionamento no Git/GitHub.
- [x] **ID 17** - Mantém um README.md padronizado, com checklist preenchido.
- [ ] **ID 18** - Organiza arquivos do projeto de forma modular.
- [x] **ID 19** - Configura linters e formatadores (ESLint, Prettier).

### RA4 - Aplicar bibliotecas JavaScript para interatividade
- [ ] **ID 20** - Utiliza jQuery para manipulação do DOM e interatividade.
- [ ] **ID 21** - Integra e configura um plugin jQuery (jQuery Mask Plugin).

### RA5 - Efetuar requisições assíncronas (APIs)
- [ ] **ID 22** - Realiza requisições assíncronas para uma API fake (JSON Server) para persistir dados.
- [ ] **ID 23** - Realiza requisições assíncronas para uma API fake para exibir dados.
- [ ] **ID 24** - Realiza requisições assíncronas para APIs públicas reais (ex: Open-Meteo).

---

## 🚀 Manual de Execução

1. Clonar o repositório com `git clone https://github.com/luizeduardomps/gestao-campeonatos-aec.git`
2. Abrir o projeto no editor Visual Studio Code (VS Code).
3. Abrir um terminal pelo VS Code apontando para o diretório raiz do projeto.
4. Instalar as dependências contidas no `package.json` com o comando: `npm i`
5. (Opcional) Instalar o JSON Server globalmente. Comando: `npm i -g json-server`
6. Executar a API Fake (JSON Server) via execução explícita: `json-server --watch db.json --routes routes.json` (O serviço rodará em `localhost:3000`).
7. Executar o projeto frontend abrindo o arquivo `index.html` no seu navegador ou utilizando a extensão Live Server.---

## Telas da Aplicação
