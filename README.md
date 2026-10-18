# Bar da Curva — Dados

Repositório de dados do app **Bar da Curva** (Itatiaiuçu - MG).

## Arquivos

| Arquivo | Conteúdo |
|---------|----------|
| `manifest.json` | Versões por arquivo (sync do app) |
| `cardapio.json` | Cardápio, preços e disponibilidade (`tem`) |
| `eventos.json` | Eventos do bar |
| `local.json` | Endereço, horários e contato |
| `assets/logo.png` | Logo do bar |

## URLs raw (repo público)

Substitua `SEU_USUARIO` pelo seu usuário GitHub:

```
https://raw.githubusercontent.com/SEU_USUARIO/bar-da-curva/main/manifest.json
https://raw.githubusercontent.com/SEU_USUARIO/bar-da-curva/main/cardapio.json
https://raw.githubusercontent.com/SEU_USUARIO/bar-da-curva/main/eventos.json
https://raw.githubusercontent.com/SEU_USUARIO/bar-da-curva/main/local.json
```

## Publicar atualização

1. Edite os JSON necessários
2. Incremente a versão correspondente em `manifest.json`
3. Commit e push — o app detecta a mudança na próxima sync
