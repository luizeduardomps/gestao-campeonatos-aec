# Design System - 1º Campeonato de Futebol 7 (AEC)

Este documento define as diretrizes visuais da aplicação, garantindo consistência em todas as telas (ID 06) e facilitando a customização do framework Bootstrap.

## 🎨 Paleta de Cores

As cores foram extraídas da identidade visual oficial da Associação Esportiva de Candói (AEC).

* **Cor Primária (Azul Escuro AEC):** `#1b365d`
    * *Uso:* Barra de navegação, rodapé, títulos principais e botões de ação primária. Substitui a variável `$primary` do Bootstrap.
* **Cor Secundária (Azul Médio AEC):** `#4a77a1`
    * *Uso:* Elementos de destaque secundários, detalhes em cards e fundos de tabelas. Substitui a variável `$secondary`.
* **Cor de Destaque/Alerta (Amarelo AEC):** `#ffcc00`
    * *Uso:* Ícones de alerta, botões de aviso e destaques na tabela de classificação. Substitui a variável `$warning`.
* **Cores de Fundo e Superfície:**
    * *Fundo Principal (Branco):* `#ffffff`
    * *Fundo Secundário (Cinza Claro):* `#f8f9fa` (Ideal para seções alternadas e fundo de modais, variável `$light`).
* **Cores de Texto:**
    * *Texto Principal:* `#333333` (Para contraste e legibilidade).
    * *Texto Invertido:* `#ffffff` (Para uso sobre fundos escuros, como o Azul Primário).

## 🔤 Tipografia

* **Fonte Principal (Títulos e Navegação):** `Montserrat`, sans-serif. Escolhida por ter um aspecto limpo, moderno e esportivo.
* **Fonte Secundária (Corpo de Texto):** `Roboto` ou sistema padrão (`system-ui`), garantindo legibilidade e carregamento rápido.
* *(ID 08)*: A tipografia utilizará unidades relativas (`rem`) e classes responsivas do Bootstrap (`fs-1`, `fs-2`, etc.) para adaptação fluida em telas mobile.

## 🧩 Componentes Base (Bootstrap Customizado)

* **Botões:** Bordas levemente arredondadas (`border-radius: 4px`), utilizando as cores primária e de alerta. Efeito de *hover* aplicando um leve escurecimento (`darken`) na cor original.
* **Cards:** Fundo branco com sombra suave (`box-shadow`) para criar profundidade em relação ao fundo cinza claro.
* **Imagens:** O mascote "Lobinho" e os escudos dos times usarão as classes `.img-fluid` e a propriedade CSS `object-fit: contain` para manter a proporção sem distorção (ID 09).