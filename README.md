# Sistema de Gestão - 1º Campeonato de Futebol 7 (AEC)

**Identificação/Autor:** Luiz Eduardo Menegazzo Pereira da Silva

**Descrição do projeto:** Aplicação web responsiva desenvolvida para gerenciar e divulgar o 1º Campeonato de Futebol 7 da AEC. O sistema permite o cadastro de times e jogadores, além de exibir a tabela de classificação e próximos jogos. O projeto consome uma API local (JSON Server) para dados do torneio e uma API pública para a previsão do tempo nos dias de jogo.

**Documentação do projeto:**
Para entender as regras de negócio, o escopo e a arquitetura técnica da aplicação, consulte os documentos abaixo:
* [Product Requirements Document (PRD)](./docs/prd.md) - Visão geral, atores e histórias de usuário.
* [Especificação Técnica (Tech Spec)](./docs/spec.md) - Diagrama de banco de dados (DER), dicionário de dados e rotas da API (JSON Server).

**Prototipação no Figma:** [Acessar protótipo do Projeto](https://www.figma.com/design/9zAXHil8vW4nC4XTbg2AQM/gestao-campeonatos-aec?node-id=0-1&t=vK8sQqbf2f3TU2pX-1)

**Prototipação no Stitch:** [Acessar protótipo do Projeto](https://stitch.withgoogle.com/projects/1915889823401437527)

**Design System:** [Ver documentação do Design System](./docs/design-system.md)

**Tecnologias, Dependências e Justificativas:**

* **Framework CSS:** Bootstrap 5
    * *Justificativa:* O Bootstrap foi escolhido por possuir um sistema de grid responsivo extremamente robusto, lidando perfeitamente com a adaptação da tabela de classificação entre Mobile e Desktop. Além disso, fornece componentes interativos nativos em JavaScript (como as *Tabs* que usaremos na página de Cadastro e os *Cards* editoriais) sem a necessidade de bibliotecas externas pesadas. O projeto no GitHub é altamente ativo, com documentação impecável e licença MIT, o que garante longevidade e segurança à aplicação.
* **API Pública:** Open-Meteo API (Previsão do Tempo)
    * *Justificativa:* O sistema consumirá esta API para exibir no Dashboard (Tela Inicial) a previsão do tempo para a cidade de Candói nos dias das partidas. Essa integração agrega valor real ao usuário (torcedores e jogadores), fornecendo dados úteis para o planejamento esportivo. A escolha pela Open-Meteo se dá pela sua confiabilidade open-source e ausência de necessidade de chaves de autenticação (API Keys).
* **Bibliotecas Auxiliares:**
    * jQuery & jQuery Mask Plugin (Para formatação de inputs no formulário).
    * JSON Server (Para simulação do banco de dados e REST API local).

**Link para o site em produção:** [Link do GitHub Pages - a ser preenchido ao final do semestre]

---

## Checklist de Funcionalidades (Indicadores de Desempenho)

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
- [ ] **ID 24** - Realiza requisições assíncronas para APIs públicas reais (ex: OpenWeather).

---

## Instruções de Execução

1. Clone o repositório: `git clone https://github.com/luizeduardomps/gestao-campeonatos-aec.git`
2. Acesse a pasta do projeto: `cd gestao-campeonatos-aec`
3. Instale as dependências: `npm install`
4. Inicie o JSON Server (API Fake): `npm run server` (ou o comando que configuraremos no package.json)
5. Abra o arquivo `index.html` no seu navegador ou utilize a extensão Live Server.

---

## Telas da Aplicação
