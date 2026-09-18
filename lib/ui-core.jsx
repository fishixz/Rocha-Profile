import React from "react";
import { BadgeCheck, Check, X } from "lucide-react";
import { COLORS } from "./profile-data";

export function IconBox({ icon: Icon, size = 20, color = COLORS.white, bg = COLORS.panel3 }) {
  return (
    <div style={{ width: 42, height: 42, borderRadius: 11, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      {Icon ? <Icon width={size} height={size} color={color} strokeWidth={2} /> : null}
    </div>
  );
}

export function FieldCard({ icon, label, value, accent = COLORS.babyBlue, compact = false }) {
  return (
    <div style={{ height: compact ? 76 : 88, borderRadius: 14, border: `1px solid ${COLORS.border}`, background: COLORS.panel2, display: "flex", alignItems: "center", padding: compact ? "0 17px" : "0 18px", minWidth: 0 }}>
      <IconBox icon={icon} color={accent} />
      <div style={{ display: "flex", flexDirection: "column", marginLeft: 15, minWidth: 0, flex: 1, justifyContent: "center" }}>
        <div style={{ color: COLORS.muted, fontSize: 11, fontWeight: 700, letterSpacing: 0.55, textTransform: "uppercase", lineHeight: 1.1 }}>{label}</div>
        <div style={{ color: COLORS.white, fontSize: compact ? 20 : 23, fontWeight: 700, marginTop: 7, lineHeight: 1.05, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{value}</div>
      </div>
    </div>
  );
}

export function SmallStat({ icon, label, value, sub }) {
  return (
    <div style={{ border: `1px solid ${COLORS.border}`, background: COLORS.panel2, borderRadius: 14, height: 104, display: "flex", alignItems: "center", padding: "0 18px" }}>
      <IconBox icon={icon} />
      <div style={{ marginLeft: 14, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div style={{ fontSize: 11, color: COLORS.muted, fontWeight: 700, letterSpacing: 0.45 }}>{label.toUpperCase()}</div>
        <div style={{ fontSize: 24, color: COLORS.white, fontWeight: 800, marginTop: 7, whiteSpace: "nowrap" }}>{value}</div>
        {sub ? <div style={{ fontSize: 11, color: COLORS.muted2, marginTop: 3 }}>{sub}</div> : null}
      </div>
    </div>
  );
}

export function StatusPill({ ok = true, trueText = "ONLINE", falseText = "OFFLINE", width = 116 }) {
  return (
    <div style={{ width, height: 40, borderRadius: 20, background: ok ? COLORS.greenBg : COLORS.redBg, border: `1px solid ${ok ? "#1F7054" : "#713939"}`, color: ok ? COLORS.green : COLORS.red, fontSize: 13, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>
      {ok ? trueText : falseText}
    </div>
  );
}

export function PlayerStatusCard({ online }) {
  return (
    <div style={{ border: `1px solid ${COLORS.border}`, background: COLORS.panel2, borderRadius: 14, height: 104, display: "flex", alignItems: "center", padding: "0 18px" }}>
      <div style={{ width: 14, height: 14, borderRadius: 999, background: online ? COLORS.green : COLORS.red, marginLeft: 4, flexShrink: 0 }} />
      <div style={{ marginLeft: 19, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 11, color: COLORS.muted, fontWeight: 700, letterSpacing: .45 }}>STATUS DO JOGADOR</div>
        <div style={{ fontSize: 22, color: COLORS.white, fontWeight: 750, marginTop: 8, lineHeight: 1 }}>{online ? "Online" : "Offline"}</div>
      </div>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}><StatusPill ok={online} /></div>
    </div>
  );
}

export function DiscordCard({ linked, username }) {
  return (
    <div style={{ border: `1px solid ${COLORS.border}`, background: COLORS.panel2, borderRadius: 14, height: 104, display: "flex", alignItems: "center", padding: "0 18px" }}>
      <div style={{ width: 46, height: 46, borderRadius: 23, background: linked ? "#5865F2" : "#263548", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {linked ? <BadgeCheck width={26} height={26} color="#FFFFFF" strokeWidth={2.3} /> : <X width={25} height={25} color="#B7C2D0" strokeWidth={2.3} />}
      </div>
      <div style={{ marginLeft: 15, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div style={{ fontSize: 11, color: COLORS.muted, fontWeight: 700, letterSpacing: .45 }}>CONTA DISCORD</div>
        <div style={{ fontSize: 20, color: COLORS.white, fontWeight: 750, marginTop: 7, lineHeight: 1 }}>{linked ? "Discord vinculado" : "Não vinculado"}</div>
        <div style={{ fontSize: 11, color: COLORS.muted2, marginTop: 7, lineHeight: 1 }}>{linked ? (username || "Conta verificada") : "Nenhuma conta associada"}</div>
      </div>
    </div>
  );
}

export function ProgressBar({ value, max = 100, label, rightLabel }) {
  const pct = Math.max(0, Math.min(100, (Number(value) / Math.max(1, Number(max))) * 100));
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ color: COLORS.muted, fontSize: 11, fontWeight: 700, letterSpacing: .45 }}>{label}</div>
        <div style={{ color: COLORS.text, fontSize: 12, fontWeight: 700 }}>{rightLabel || `${Math.round(pct)}%`}</div>
      </div>
      <div style={{ marginTop: 10, height: 9, width: "100%", borderRadius: 10, background: "#142235", overflow: "hidden", display: "flex" }}>
        <div style={{ width: `${pct}%`, height: "100%", borderRadius: 10, background: `linear-gradient(90deg, ${COLORS.blue}, ${COLORS.babyBlue})` }} />
      </div>
    </div>
  );
}

export function LicenseRow({ icon, label, owned }) {
  return (
    <div style={{ height: 58, borderBottom: `1px solid ${COLORS.borderSoft}`, display: "flex", alignItems: "center", padding: "0 13px" }}>
      <IconBox icon={icon} size={18} bg="#101D2C" />
      <div style={{ marginLeft: 14, fontSize: 17, color: COLORS.text, fontWeight: 650 }}>{label}</div>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", color: owned ? COLORS.green : COLORS.red, fontSize: 13, fontWeight: 750 }}>
        <div style={{ width: 26, height: 26, borderRadius: 13, background: owned ? COLORS.greenBg : COLORS.redBg, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 9 }}>
          {owned ? <Check width={15} height={15} color={COLORS.green} strokeWidth={2.8} /> : <X width={15} height={15} color={COLORS.red} strokeWidth={2.8} />}
        </div>
        {owned ? "Possui" : "Não possui"}
      </div>
    </div>
  );
}
