# 🛠️ Especificação Técnica (Tech Spec) - Sistema de Gestão AEC Futebol 7

Este documento detalha a arquitetura técnica, o modelo de dados e os contratos de API (via JSON Server) necessários para o funcionamento do painel administrativo do 1º Campeonato de Futebol 7 da AEC.

## 1. Modelo de Dados (Diagrama ER)

Abaixo está o Diagrama Entidade-Relacionamento (DER) que representa a estrutura do nosso "banco de dados" (`db.json`) e como as informações se conectam.

```mermaid
erDiagram
    TIME ||--o{ JOGADOR : "possui"
    TIME ||--o{ PARTIDA : "joga_como_mandante"
    TIME ||--o{ PARTIDA : "joga_como_visitante"

    TIME {
        string id PK "Gerado automaticamente"
        string nome
        string sigla
        int pontos "Atualizado pós-jogo"
        int vitorias
        int gols
        string classeBadge "Classe CSS do escudo"
    }

    JOGADOR {
        string id PK
        string nome
        int numero_camisa
        string timeId FK "Vínculo com o Time"
    }

    PARTIDA {
        string id PK
        string time_mandante_id FK
        string time_visitante_id FK
        int gols_mandante
        int gols_visitante
        string status "Ex: TEMPO NORMAL, PENALTIS, WO"
        string telefone_arbitro "Validado via Regex"
        string cep_local "Autopreenchido via ViaCEP"
    }
