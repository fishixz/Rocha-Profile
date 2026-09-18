# Rocha Profile

Gerador dinâmico de cards PNG do **Rocha Roleplay**, desenvolvido pela **Rocha System** para integração com Discord Connector / SA-MP.

O projeto foi feito para rodar na **Vercel** usando **Next.js + ImageResponse**, sem depender da VPS do servidor de jogo para renderizar imagens.

## O que já está implementado

O endpoint principal possui 8 telas:

1. Identidade
2. Progresso
3. Finanças
4. Vida RP
5. Licenças
6. Propriedades
7. Estatísticas
8. Inventário

Todas seguem o mesmo design visual, com layout escuro, cinza, branco e azul, cards alinhados, ícones, status e skin do personagem.

## Endpoints

```text
GET /
GET /api/health
GET /api/profile
```

## Exemplo

```text
/api/profile?page=identity&nome=Bruno%20Campibel&id=4827&skin=29&sexo=Masculino&telefone=(14)%2099123-4567&discord=1&discordNome=bruno.campibel&online=1
```

A resposta de `/api/profile` é uma imagem PNG de 1200 × 675.

## Skin

O renderer consulta a skin GTA SA usando o ID recebido em `skin`.

Exemplo:

```text
skin=29
```

## Navegação no Discord

Os botões de próxima/anterior não fazem parte da imagem.

A ideia é o Discord Connector editar a mesma mensagem e trocar apenas:

```text
page=identity
page=progress
page=finances
...
```

## Cache

Para forçar uma URL nova quando os dados mudarem:

```text
&updated=123456
```

ou:

```text
&v=123456
```

## Documentação

Veja:

```text
docs/API.md
```

## Desenvolvimento local

```bash
npm install
npm run dev
```

Depois:

```text
http://localhost:3000
```

## Deploy na Vercel

Importe o repositório na Vercel como um projeto Next.js. Nenhum serviço separado de renderização é necessário.

Após o deploy:

```text
https://SEU-PROJETO.vercel.app/api/profile?page=identity&...
```

Esse endereço pode ser usado diretamente como URL da imagem no embed do Discord.
