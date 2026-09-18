import React from "react";
import {
  User, IdCard, Phone, Mars, Venus, Gauge, Star, Clock, CalendarDays,
  LogIn, Award, Wallet, Landmark, DollarSign, Receipt, Briefcase,
  Building2, Shield, Heart, AlertTriangle, Timer
} from "lucide-react";
import { brMoney, COLORS } from "./profile-data";
import { FieldCard, PlayerStatusCard, DiscordCard, ProgressBar, SmallStat, IconBox } from "./ui-core";

export function IdentityPage({ profile }) {
  const SexIcon = String(profile.sexo).toLowerCase().startsWith("f") ? Venus : Mars;

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <FieldCard icon={User} label="Nome completo" value={profile.nome} accent={COLORS.white} />
        <FieldCard icon={IdCard} label="Identificação única" value={`#${profile.id}`} accent={COLORS.white} />
        <FieldCard icon={SexIcon} label="Sexo" value={profile.sexo} accent={COLORS.white} />
        <FieldCard icon={Phone} label="Telefone" value={profile.telefone} accent={COLORS.white} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 18 }}>
        <PlayerStatusCard online={profile.online} />
        <DiscordCard linked={profile.discord} username={profile.discordNome} />
      </div>
    </div>
  );
}

export function ProgressPage({ profile }) {
  const xpPct = Math.round((profile.xpAtual / Math.max(1, profile.xpMax)) * 100);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 18 }}>
        <div style={{ height: 156, borderRadius: 16, border: `1px solid ${COLORS.border}`, background: COLORS.panel2, display: "flex", padding: "20px 22px", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconBox icon={Gauge} size={22} />
            <div style={{ marginLeft: 14, display: "flex", flexDirection: "column" }}>
              <div style={{ color: COLORS.muted, fontSize: 11, fontWeight: 750, letterSpacing: .45 }}>NÍVEL ATUAL</div>
              <div style={{ color: COLORS.white, fontSize: 30, fontWeight: 850, marginTop: 5 }}>{profile.nivel}</div>
            </div>
            <div style={{ marginLeft: "auto", color: COLORS.babyBlue, fontSize: 13, fontWeight: 800 }}>{xpPct}%</div>
          </div>
          <div style={{ marginTop: 18 }}>
            <ProgressBar value={profile.xpAtual} max={profile.xpMax} label="EXPERIÊNCIA" rightLabel={`${profile.xpAtual.toLocaleString("pt-BR")} / ${profile.xpMax.toLocaleString("pt-BR")} XP`} />
          </div>
        </div>

        <div style={{ height: 156, borderRadius: 16, border: `1px solid ${COLORS.border}`, background: COLORS.panel2, display: "flex", padding: "20px 22px", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconBox icon={Star} size={22} />
            <div style={{ marginLeft: 14, display: "flex", flexDirection: "column" }}>
              <div style={{ color: COLORS.muted, fontSize: 11, fontWeight: 750, letterSpacing: .45 }}>RESPEITO</div>
              <div style={{ color: COLORS.white, fontSize: 30, fontWeight: 850, marginTop: 5 }}>{profile.respeito}<span style={{ fontSize: 15, color: COLORS.muted }}>/100</span></div>
            </div>
          </div>
          <div style={{ marginTop: 18 }}>
            <ProgressBar value={profile.respeito} max={100} label="REPUTAÇÃO DO PERSONAGEM" />
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 18, marginTop: 18 }}>
        <SmallStat icon={Clock} label="Horas jogadas" value={profile.horas} />
        <SmallStat icon={CalendarDays} label="Registro" value={profile.registro} />
        <SmallStat icon={LogIn} label="Último login" value={profile.ultimoLogin} />
      </div>

      <div style={{ marginTop: 18 }}>
        <FieldCard icon={Award} label="Título atual" value={profile.titulo} compact />
      </div>
    </div>
  );
}

export function FinancesPage({ profile }) {
  const cards = [
    [Wallet, "Dinheiro em mãos", brMoney(profile.dinheiro), COLORS.green],
    [Landmark, "Saldo bancário", brMoney(profile.banco), COLORS.babyBlue],
    [DollarSign, "Dinheiro sujo", brMoney(profile.sujo), profile.sujo > 0 ? COLORS.amber : COLORS.muted],
    [DollarSign, "Salário", brMoney(profile.salario), COLORS.green],
    [Receipt, "Multas pendentes", brMoney(profile.multas), profile.multas > 0 ? COLORS.red : COLORS.green],
    [Receipt, "Dívidas", brMoney(profile.dividas), profile.dividas > 0 ? COLORS.red : COLORS.green]
  ];

  return (
    <div style={{ display: "grid", width: "100%", gridTemplateColumns: "1fr 1fr", gap: 18, alignContent: "start" }}>
      {cards.map(([Icon, label, value, accent]) => (
        <FieldCard key={label} icon={Icon} label={label} value={value} accent={accent} />
      ))}
    </div>
  );
}

export function RoleplayPage({ profile }) {
  const wanted = profile.procurado > 0;

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <FieldCard icon={Briefcase} label="Emprego" value={profile.emprego} />
        <FieldCard icon={Award} label="Cargo" value={profile.cargo} />
        <FieldCard icon={Building2} label="Organização" value={profile.organizacao} />
        <FieldCard icon={Heart} label="Estado civil" value={profile.estadoCivil} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 18 }}>
        <div style={{ height: 104, borderRadius: 14, border: `1px solid ${COLORS.border}`, background: COLORS.panel2, display: "flex", alignItems: "center", padding: "0 18px" }}>
          <IconBox icon={AlertTriangle} color={wanted ? COLORS.amber : COLORS.green} />
          <div style={{ marginLeft: 15, display: "flex", flexDirection: "column" }}>
            <div style={{ color: COLORS.muted, fontSize: 11, fontWeight: 750, letterSpacing: .45 }}>NÍVEL DE PROCURADO</div>
            <div style={{ color: wanted ? COLORS.amber : COLORS.white, fontSize: 22, fontWeight: 800, marginTop: 8 }}>{wanted ? `${profile.procurado} estrela(s)` : "Sem procura"}</div>
          </div>
        </div>

        <div style={{ height: 104, borderRadius: 14, border: `1px solid ${COLORS.border}`, background: COLORS.panel2, display: "flex", alignItems: "center", padding: "0 18px" }}>
          <IconBox icon={Timer} color={profile.prisaoAtual ? COLORS.red : COLORS.green} />
          <div style={{ marginLeft: 15, display: "flex", flexDirection: "column" }}>
            <div style={{ color: COLORS.muted, fontSize: 11, fontWeight: 750, letterSpacing: .45 }}>SITUAÇÃO PENAL</div>
            <div style={{ color: profile.prisaoAtual ? COLORS.red : COLORS.white, fontSize: 22, fontWeight: 800, marginTop: 8 }}>{profile.prisaoAtual ? "Em prisão" : "Em liberdade"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
