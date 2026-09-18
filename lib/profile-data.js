export const PAGE_ORDER = [
  "identity",
  "progress",
  "finances",
  "roleplay",
  "licenses",
  "properties",
  "statistics",
  "inventory"
];

export const PAGE_ALIASES = {
  identity: "identity",
  identidade: "identity",
  "1": "identity",
  progress: "progress",
  progresso: "progress",
  "2": "progress",
  finances: "finances",
  financas: "finances",
  finanças: "finances",
  "3": "finances",
  roleplay: "roleplay",
  rp: "roleplay",
  vidarp: "roleplay",
  "vida-rp": "roleplay",
  "4": "roleplay",
  licenses: "licenses",
  licencas: "licenses",
  licenças: "licenses",
  "5": "licenses",
  properties: "properties",
  propriedades: "properties",
  "6": "properties",
  statistics: "statistics",
  estatisticas: "statistics",
  estatísticas: "statistics",
  stats: "statistics",
  "7": "statistics",
  inventory: "inventory",
  inventario: "inventory",
  inventário: "inventory",
  "8": "inventory"
};

export const PAGE_META = {
  identity: { number: 1, label: "IDENTIDADE", title: "Informações do personagem" },
  progress: { number: 2, label: "PROGRESSO", title: "Evolução do jogador" },
  finances: { number: 3, label: "FINANÇAS", title: "Resumo financeiro" },
  roleplay: { number: 4, label: "VIDA RP", title: "Vida e ocupação no roleplay" },
  licenses: { number: 5, label: "LICENÇAS", title: "Habilitações e permissões" },
  properties: { number: 6, label: "PROPRIEDADES", title: "Patrimônio do personagem" },
  statistics: { number: 7, label: "ESTATÍSTICAS", title: "Histórico e desempenho" },
  inventory: { number: 8, label: "INVENTÁRIO", title: "Itens carregados pelo jogador" }
};

export const COLORS = {
  bg: "#05090F",
  bg2: "#07101A",
  panel: "#09131F",
  panel2: "#0D1826",
  panel3: "#102033",
  border: "#1D344D",
  borderSoft: "#15283B",
  babyBlue: "#79B8FF",
  blue: "#4F8FFF",
  blueDeep: "#183B64",
  white: "#F7FAFF",
  text: "#DCE6F3",
  muted: "#74889F",
  muted2: "#52667D",
  green: "#55DDA3",
  greenBg: "#11382C",
  red: "#FF7B7B",
  redBg: "#402020",
  amber: "#FFC970",
  amberBg: "#493717"
};

export function textParam(sp, key, fallback = "", max = 64) {
  const raw = sp.get(key);
  if (!raw) return fallback;
  return raw.replace(/[\r\n\t<>]/g, " ").trim().slice(0, max) || fallback;
}

export function boolParam(sp, key, fallback = false) {
  const raw = sp.get(key);
  if (raw == null) return fallback;
  return ["1", "true", "sim", "yes", "on", "possui", "ativo", "online"].includes(raw.toLowerCase());
}

export function numberParam(sp, key, fallback = 0, min = -999999999, max = 999999999) {
  const n = Number(sp.get(key));
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

export function normalizePage(raw) {
  if (!raw) return "identity";
  return PAGE_ALIASES[String(raw).toLowerCase()] || "identity";
}

export function brMoney(value) {
  const n = Number(value);
  const safe = Number.isFinite(n) ? n : 0;
  return "R$ " + new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 0
  }).format(safe);
}

export function parseInventory(raw) {
  if (!raw) {
    return [
      ["Celular", "1"],
      ["Rádio", "1"],
      ["Água", "2"],
      ["Pão", "5"],
      ["Kit Médico", "2"],
      ["Documentos", "1"],
      ["Lockpick", "4"],
      ["Munição", "50"],
      ["Dinheiro", "1"],
      ["", ""],
      ["", ""],
      ["", ""]
    ];
  }

  return raw
    .split(/[;|]/)
    .map((entry) => entry.trim())
    .filter(Boolean)
    .slice(0, 12)
    .map((entry) => {
      const idx = entry.lastIndexOf(":");
      if (idx === -1) return [entry.slice(0, 28), "1"];
      return [entry.slice(0, idx).trim().slice(0, 28), entry.slice(idx + 1).trim().slice(0, 8) || "1"];
    });
}

export function buildProfile(searchParams) {
  const sexo = textParam(searchParams, "sexo", "Masculino", 20);
  const statusText = textParam(searchParams, "status", "", 20);
  const online = searchParams.has("online")
    ? boolParam(searchParams, "online", true)
    : ["ativo", "online"].includes(statusText.toLowerCase()) || !statusText;

  return {
    page: normalizePage(searchParams.get("page") || searchParams.get("pagina")),
    nome: textParam(searchParams, "nome", "Bruno Campibel", 36),
    id: textParam(searchParams, "id", textParam(searchParams, "idunico", "4827", 16), 16),
    skin: Math.round(numberParam(searchParams, "skin", 29, 0, 311)),
    sexo,
    telefone: textParam(searchParams, "telefone", "(14) 99123-4567", 28),
    discord: boolParam(searchParams, "discord", true),
    discordNome: textParam(searchParams, "discordNome", textParam(searchParams, "discordnome", "bruno.campibel", 32), 32),
    online,

    nivel: Math.round(numberParam(searchParams, "nivel", 18, 0, 999)),
    xpAtual: numberParam(searchParams, "xpAtual", 3450, 0),
    xpMax: numberParam(searchParams, "xpMax", 5000, 1),
    respeito: Math.round(numberParam(searchParams, "respeito", 72, 0, 100)),
    horas: textParam(searchParams, "horas", "128h 36min", 26),
    registro: textParam(searchParams, "registro", "15/03/2024", 22),
    ultimoLogin: textParam(searchParams, "ultimoLogin", "Hoje às 12:47", 28),
    titulo: textParam(searchParams, "titulo", "Cidadão de Los Santos", 34),

    dinheiro: numberParam(searchParams, "dinheiro", 12450),
    banco: numberParam(searchParams, "banco", 238900),
    sujo: numberParam(searchParams, "sujo", 0),
    salario: numberParam(searchParams, "salario", 1500),
    multas: numberParam(searchParams, "multas", 0),
    dividas: numberParam(searchParams, "dividas", 0),

    emprego: textParam(searchParams, "emprego", "Mecânico", 30),
    cargo: textParam(searchParams, "cargo", "Especialista", 30),
    organizacao: textParam(searchParams, "organizacao", "Nenhuma", 32),
    estadoCivil: textParam(searchParams, "estadoCivil", "Solteiro", 22),
    procurado: Math.round(numberParam(searchParams, "procurado", 0, 0, 6)),
    prisaoAtual: boolParam(searchParams, "prisao", false),

    licCarro: boolParam(searchParams, "licCarro", true),
    licMoto: boolParam(searchParams, "licMoto", true),
    licCaminhao: boolParam(searchParams, "licCaminhao", false),
    licOnibus: boolParam(searchParams, "licOnibus", false),
    licArmas: boolParam(searchParams, "licArmas", true),
    licPesca: boolParam(searchParams, "licPesca", true),
    licNautica: boolParam(searchParams, "licNautica", false),

    casas: Math.round(numberParam(searchParams, "casas", 1, 0, 99)),
    empresas: Math.round(numberParam(searchParams, "empresas", 0, 0, 99)),
    veiculos: Math.round(numberParam(searchParams, "veiculos", 2, 0, 999)),
    garagens: Math.round(numberParam(searchParams, "garagens", 1, 0, 99)),
    casaPrincipal: textParam(searchParams, "casaPrincipal", "ID 324 • Temple", 34),
    veiculoPrincipal: textParam(searchParams, "veiculoPrincipal", "Sultan • ID 402", 34),
    empresaPrincipal: textParam(searchParams, "empresaPrincipal", "Nenhuma", 34),

    kills: Math.round(numberParam(searchParams, "kills", 12, 0)),
    mortes: Math.round(numberParam(searchParams, "mortes", 8, 0)),
    assaltos: Math.round(numberParam(searchParams, "assaltos", 3, 0)),
    prisoes: Math.round(numberParam(searchParams, "prisoes", 1, 0)),
    tempoPrisao: textParam(searchParams, "tempoPrisao", "00h 45min", 24),
    warns: Math.round(numberParam(searchParams, "warns", 0, 0)),
    pontosEvento: Math.round(numberParam(searchParams, "pontosEvento", 25, 0)),

    peso: numberParam(searchParams, "peso", 18.5, 0),
    pesoMax: numberParam(searchParams, "pesoMax", 50, 1),
    items: parseInventory(searchParams.get("items"))
  };
}
