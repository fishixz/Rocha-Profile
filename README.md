# Rocha Profile

Gerador de cards de perfil do **Rocha Roleplay** para uso no Discord Connector / SA-MP.

O projeto foi preparado para deploy na **Vercel**. A GameMode monta uma URL com os dados do personagem e o endpoint retorna uma imagem PNG pronta para ser usada no embed do Discord.

## Endpoints

- `GET /api/health` — saúde da aplicação.
- `GET /api/profile?page=identity&...` — gera o card PNG.
- `GET /` — documentação rápida no navegador.

## Exemplo

```text
/api/profile?page=identity&nome=Bruno%20Campibel&id=4827&skin=29&sexo=Masculino&telefone=(14)%2099123-4567&discord=1&discordNome=bruno.campibel&online=1
```

## Páginas planejadas

1. Identidade — implementada
2. Progresso
3. Finanças
4. Vida RP
5. Licenças
6. Propriedades
7. Estatísticas
8. Inventário

Veja `docs/API.md` para os parâmetros.

## Deploy

Importe este repositório na Vercel e faça o deploy sem alterar o Build Command. O projeto usa Next.js e `next/og` para retornar PNG dinamicamente.

Depois do deploy, a GameMode poderá usar:

```text
https://SEU-PROJETO.vercel.app/api/profile?page=identity&...
```
