# Rocha Profile API

API de geração de cards PNG do Rocha Roleplay.

## Endpoint principal

```text
GET /api/profile
```

O parâmetro `page` seleciona a tela:

```text
identity
progress
finances
roleplay
licenses
properties
statistics
inventory
```

Também são aceitos aliases em português e números de 1 a 8.

## Parâmetros globais

| Campo | Exemplo |
|---|---|
| `page` | `identity` |
| `nome` | `Bruno Campibel` |
| `id` ou `idunico` | `4827` |
| `skin` | `29` |
| `sexo` | `Masculino` |
| `telefone` | `(14) 99123-4567` |
| `discord` | `1` |
| `discordNome` | `bruno.campibel` |
| `online` | `1` |

Use `1` para verdadeiro e `0` para falso.

## Identidade

Usa os parâmetros globais.

```text
/api/profile?page=identity&nome=Bruno%20Campibel&id=4827&skin=29&sexo=Masculino&telefone=(14)%2099123-4567&discord=1&discordNome=bruno.campibel&online=1
```

## Progresso

| Campo | Exemplo |
|---|---|
| `nivel` | `18` |
| `xpAtual` | `3450` |
| `xpMax` | `5000` |
| `respeito` | `72` |
| `horas` | `128h 36min` |
| `registro` | `15/03/2024` |
| `ultimoLogin` | `Hoje às 12:47` |
| `titulo` | `Cidadão de Los Santos` |

## Finanças

| Campo | Exemplo |
|---|---|
| `dinheiro` | `12450` |
| `banco` | `238900` |
| `sujo` | `0` |
| `salario` | `1500` |
| `multas` | `0` |
| `dividas` | `0` |

## Vida RP

| Campo | Exemplo |
|---|---|
| `emprego` | `Mecânico` |
| `cargo` | `Especialista` |
| `organizacao` | `Nenhuma` |
| `estadoCivil` | `Solteiro` |
| `procurado` | `0` |
| `prisao` | `0` |

## Licenças

| Campo |
|---|
| `licCarro` |
| `licMoto` |
| `licCaminhao` |
| `licOnibus` |
| categoria especial configurada no renderer |
| `licPesca` |
| `licNautica` |

## Propriedades

| Campo | Exemplo |
|---|---|
| `casas` | `1` |
| `empresas` | `0` |
| `veiculos` | `2` |
| `garagens` | `1` |
| `casaPrincipal` | `ID 324 • Temple` |
| `veiculoPrincipal` | `Sultan • ID 402` |
| `empresaPrincipal` | `Nenhuma` |

## Estatísticas

| Campo | Exemplo |
|---|---|
| `kills` | `12` |
| `mortes` | `8` |
| ocorrências internas | `3` |
| `prisoes` | `1` |
| `tempoPrisao` | `00h 45min` |
| `warns` | `0` |
| `pontosEvento` | `25` |

## Inventário

| Campo | Exemplo |
|---|---|
| `peso` | `18.5` |
| `pesoMax` | `50` |
| `items` | `Celular:1;Radio:1;Agua:2;Pao:5` |

O campo `items` aceita até 12 itens, no formato:

```text
Nome:Quantidade;Nome:Quantidade;Nome:Quantidade
```

## Health

```text
GET /api/health
```

Resposta esperada:

```json
{"online":true,"service":"Rocha Profile Renderer","version":"1.0.0"}
```

## Integração com a GameMode

A GameMode deve consultar os dados do jogador, aplicar URL encoding nos textos, montar a URL e usá-la como imagem do embed.

Quando o usuário trocar de página, edite a mesma mensagem e troque `page` junto com os parâmetros necessários.

Para evitar cache antigo no Discord, acrescente um valor variável:

```text
&updated=1695041234
```

O renderer não precisa usar esse valor. Ele apenas faz a URL mudar.
