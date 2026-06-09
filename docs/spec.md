# Especificação Técnica

## Modelo de Dados

Abaixo está o mapeamento das principais entidades do sistema e como elas se relacionam para fazer o campeonato funcionar.

```mermaid
erDiagram
    TIME ||--o{ JOGADOR : possui
    TIME ||--o{ PARTIDA : joga_como_mandante
    TIME ||--o{ PARTIDA : joga_como_visitante

    TIME {
        string id PK
        string nome
        string url_escudo
        int pontos
    }

    JOGADOR {
        string id PK
        string nome
        int numero_camisa
        string time_id FK
    }

    PARTIDA {
        string id PK
        string data_hora
        string time_mandante_id FK
        string time_visitante_id FK
        int gols_mandante
        int gols_visitante
        boolean finalizada
    }