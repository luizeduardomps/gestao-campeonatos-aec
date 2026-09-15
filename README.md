# Sistema de Gestão de Súmulas - 1º Campeonato de Futebol 7 (AEC)

**Autor:** Luiz Eduardo Menegazzo Pereira da Silva

Este projeto tem como objetivo implementar progressivamente e de forma didática uma aplicação web administrativa para organizar e documentar o 1º Campeonato de Futebol 7 da Associação Esportiva de Candói. O diferencial do sistema é focar no "Painel do Mesário", partindo da premissa de que os 16 times e atletas já estão previamente cadastrados no banco de dados. A aplicação permite registrar o placar das partidas com segurança (validações rigorosas e proteção contra perda de dados) e exibe a tabela de classificação e condições climáticas em tempo real para o público.

O frontend da aplicação foi desenvolvido com HTML, CSS (Sass/Bootstrap) e JavaScript, e o backend foi simulado pela implementação de uma API Fake, usando o JSON Server.

---

## 📚 Documentação do Projeto

Para entender as regras de negócio, o escopo e a arquitetura técnica da aplicação, consulte os documentos abaixo:

- [📄 Product Requirements Document (PRD)](./docs/prd.md) - Visão geral, atores e histórias de usuário.
- [🛠️ Especificação Técnica (Tech Spec)](./docs/spec.md) - Diagrama de banco de dados (DER), dicionário de dados e rotas da API (JSON Server).

## 🎨 Design

- [🎨 Design System](./docs/design-system.md) - Identidade visual baseada no "The Stadium Archive".
- [🖼️ Protótipo no Figma](https://www.figma.com/design/9zAXHil8vW4nC4XTbg2AQM/gestao-campeonatos-aec?node-id=0-1&t=vK8sQqbf2f3TU2pX-1) - Telas interativas da aplicação.
- [🧩 Protótipo no Stitch](https://stitch.withgoogle.com/projects/1915889823401437527) - Visão de componentes isolados gerados por IA.

## 🌐 Site em Produção - GitHub Pages

🔗 **Acesse a aplicação online:** [https://luizeduardomps.github.io/gestao-campeonatos-aec/index.html](https://luizeduardomps.github.io/gestao-campeonatos-aec/index.html)

## 💻 Tecnologias e Dependências

- **Framework CSS (Bootstrap 5):** Escolhido por possuir um sistema de grid robusto para a tabela de classificação e componentes interativos nativos (modais, cards), dispensando bibliotecas pesadas.
- **APIs Públicas:** 
  - **Open-Meteo API:** Fornece a previsão do tempo ao vivo para a sede esportiva.
  - **ViaCEP:** Preenche automaticamente o endereço da partida externa a partir do CEP.
- **JavaScript & jQuery:** Utilizados para requisições assíncronas, manipulação do DOM e formatação de inputs (via jQuery Mask Plugin).
- **JSON Server:** Utilizado para simular uma API REST e banco de dados local.

---

## ✅ Checklist | Indicadores de Desempenho (ID) dos Resultados de Aprendizagem (RA)

**RA1 - Utilizar Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos.**
- [ ] **ID 01** - Prototipa interfaces adaptáveis para no mínimo os tamanhos de tela mobile e desktop, usando ferramentas de design tradicionais ou IA (Stitch).
- [ ] **ID 02** - Implementa layout responsivo com Framework CSS (Bootstrap) usando Flexbox ou Grid do próprio framework.
- [ ] **ID 03** - Implementa layout responsivo com CSS puro, usando Flexbox ou Grid Layout.
- [ ] **ID 04** - Utiliza componentes prontos de um Framework CSS (ex.: card, button) e componentes JavaScript do framework.
- [ ] **ID 05** - Cria layout fluido usando unidades relativas (vw, vh, %, em, rem) no lugar de unidades fixas (px).
- [ ] **ID 06** - Aplica um Design System consistente (cores, tipografia, padrões de componentes) em toda a aplicação.
- [ ] **ID 07** - Utiliza Sass (SCSS) com ou sem framework, aplicando variáveis, mixins e funções para modularizar o código.
- [ ] **ID 08** - Aplica tipografia responsiva (media queries mobile first) ou tipografia fluida (função clamp() + unidades relativas).
- [ ] **ID 09** - Aplica técnicas de responsividade de imagens usando CSS (object-fit, containers com unidades relativas).
- [ ] **ID 10** - Otimiza imagens usando formatos modernos (WebP) e carregamento adaptativo.

**RA2 - Realizar tratamento de formulários e aplicar validações customizadas no lado cliente.**
- [ ] **ID 11** - Implementa validação HTML nativa (campos obrigatórios, tipos, limites de caracteres) com mensagens de erro/sucesso.
- [ ] **ID 12** - Aplica expressões regulares (REGEX) para validações customizadas (ex: telefone do árbitro).
- [ ] **ID 13** - Utiliza elementos de seleção em formulários (checkbox, radio, select) para coleta de dados da súmula.
- [ ] **ID 14** - Implementa leitura e escrita no Web Storage (localStorage) para persistir o rascunho do formulário localmente.

**RA3 - Aplicar ferramentas para otimização do processo de desenvolvimento web.**
- [ ] **ID 15** - Configura ambiente com Node.js e NPM para gerenciamento de pacotes e dependências.
- [ ] **ID 16** - Utiliza boas práticas de versionamento no Git/GitHub (branch main).
- [ ] **ID 17** - Mantém um README.md padronizado, conforme template da disciplina, com checklist preenchido.
- [ ] **ID 18** - Organiza arquivos do projeto de forma modular, seguindo padrão fornecido.
- [ ] **ID 19** - Configura linters e formatadores (Prettier) para manter qualidade e padronização do código.

**RA4 - Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar interatividade.**
- [ ] **ID 20** - Utiliza jQuery para manipulação do DOM e interatividade (renderização dinâmica da tabela).
- [ ] **ID 21** - Integra e configura um plugin jQuery relevante (jQuery Mask Plugin para CEP e Telefone).

**RA5 - Efetuar requisições assíncronas para uma API fake e APIs públicas.**
- [ ] **ID 22** - Realiza requisições assíncronas para uma API fake (JSON Server) para persistir os dados do formulário de súmula.
- [ ] **ID 23** - Realiza requisições assíncronas para uma API fake para exibir a tabela de classificação na página.
- [ ] **ID 24** - Realiza requisições assíncronas para APIs públicas reais (Open-Meteo, ViaCEP), exibindo dados e tratando erros.

---

## 🚀 Manual de Execução

1. **Clonar o repositório:**
   ```bash
   git clone [https://github.com/luizeduardomps/gestao-campeonatos-aec.git](https://github.com/luizeduardomps/gestao-campeonatos-aec.git)
