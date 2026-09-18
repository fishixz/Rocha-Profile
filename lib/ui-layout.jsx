import React from "react";
import { CircleUserRound, Signal } from "lucide-react";
import { COLORS, PAGE_META, PAGE_ORDER } from "./profile-data";

function PresenceLine({ online }) {
  return (
    <div style={{ display: "flex", alignItems: "center", height: 22, marginTop: 13 }}>
      <div style={{ width: 10, height: 10, borderRadius: 999, background: online ? COLORS.green : COLORS.red, flexShrink: 0 }} />
      <div style={{ color: online ? COLORS.green : COLORS.red, fontSize: 13, fontWeight: 700, marginLeft: 11, lineHeight: 1 }}>
        {online ? "Jogador online" : "Jogador offline"}
      </div>
    </div>
  );
}

export function BrandSidebar({ profile, skinUrl, page }) {
  const meta = PAGE_META[page];

  return (
    <div style={{ width: 300, height: "100%", borderRadius: 21, border: `1px solid ${COLORS.border}`, background: "#07111C", display: "flex", flexDirection: "column", overflow: "hidden", flexShrink: 0 }}>
      <div style={{ height: 392, margin: "16px 16px 0", borderRadius: 17, border: `1px solid ${COLORS.border}`, background: "linear-gradient(180deg,#091828 0%,#07121F 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", width: 222, height: 222, borderRadius: 111, background: "#0D2743", left: 23, top: 94 }} />
        <div style={{ position: "absolute", width: 150, height: 150, borderRadius: 75, background: "#12385F", left: 59, top: 130 }} />

        <div style={{ position: "absolute", top: 14, left: 15, color: COLORS.muted, fontSize: 10, fontWeight: 700 }}>SKIN ATUAL</div>
        <div style={{ position: "absolute", top: 10, right: 12, height: 32, minWidth: 56, padding: "0 11px", borderRadius: 10, background: "#10243C", color: COLORS.babyBlue, fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
          #{profile.skin}
        </div>

        {skinUrl ? (
          <img
            src={skinUrl}
            width="260"
            height="340"
            style={{ objectFit: "contain", objectPosition: "center bottom", zIndex: 3, marginTop: 31 }}
          />
        ) : (
          <CircleUserRound width={112} height={112} color={COLORS.muted2} strokeWidth={1.2} style={{ zIndex: 3 }} />
        )}

        <div style={{ position: "absolute", left: 15, right: 15, bottom: 13, height: 1, background: COLORS.border }} />
      </div>

      <div style={{ padding: "15px 26px 0", display: "flex", flexDirection: "column" }}>
        <div style={{ color: COLORS.muted, fontSize: 10, fontWeight: 700, letterSpacing: .5 }}>PERSONAGEM</div>
        <div style={{ color: COLORS.white, fontSize: 22, fontWeight: 700, marginTop: 7, lineHeight: 1.08, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{profile.nome}</div>
        <PresenceLine online={profile.online} />
      </div>

      <div style={{ marginTop: "auto", padding: "0 26px 17px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", color: COLORS.muted2, fontSize: 10, fontWeight: 700 }}>
          <Signal width={13} height={13} color={COLORS.muted2} />
          <span style={{ marginLeft: 7 }}>{meta.label}</span>
        </div>
        <div style={{ color: COLORS.muted2, fontSize: 10, fontWeight: 700 }}>{meta.number}/{PAGE_ORDER.length}</div>
      </div>
    </div>
  );
}

export function CardShell({ profile, skinUrl, children }) {
  const meta = PAGE_META[profile.page];

  return (
    <div style={{ width: 1200, height: 675, background: `linear-gradient(145deg, ${COLORS.bg} 0%, #07111D 52%, #06101B 100%)`, display: "flex", color: COLORS.white, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 20, right: 20, top: 18, bottom: 18, border: `1px solid ${COLORS.border}`, borderRadius: 26, background: "rgba(7,17,29,.96)", overflow: "hidden", display: "flex" }}>
        <div style={{ position: "absolute", left: 0, top: 0, width: "100%", height: 4, background: COLORS.blue }} />
        <div style={{ position: "absolute", left: 0, top: 0, width: 5, height: "100%", background: COLORS.blue }} />
        <div style={{ position: "absolute", width: 900, height: 1, background: "#0F253B", transform: "rotate(-12deg)", right: -180, top: 150 }} />
        <div style={{ position: "absolute", width: 900, height: 1, background: "#0D2237", transform: "rotate(-21deg)", right: -190, bottom: 45 }} />

        <div style={{ display: "flex", padding: "24px 28px 18px 28px", width: "100%", height: "100%", position: "relative", zIndex: 2, boxSizing: "border-box" }}>
          <BrandSidebar profile={profile} skinUrl={skinUrl} page={profile.page} />

          <div style={{ marginLeft: 32, flex: 1, minWidth: 0, display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ height: 86, display: "flex", alignItems: "flex-start", flexShrink: 0 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ color: COLORS.blue, fontSize: 11, fontWeight: 700, letterSpacing: .55 }}>ROCHA SYSTEM</div>
                <div style={{ color: COLORS.white, fontSize: 29, fontWeight: 700, marginTop: 7, lineHeight: 1 }}>ROCHA ROLEPLAY</div>
                <div style={{ color: COLORS.muted, fontSize: 11, fontWeight: 600, marginTop: 9 }}>PERFIL OFICIAL DO PERSONAGEM</div>
              </div>

              <div style={{ marginLeft: "auto", width: 184, height: 56, borderRadius: 14, border: `1px solid ${COLORS.border}`, background: "#0D1927", display: "flex", alignItems: "center", padding: "0 14px", boxSizing: "border-box" }}>
                <div style={{ color: COLORS.muted, fontSize: 10, fontWeight: 700 }}>PLAYER ID</div>
                <div style={{ marginLeft: "auto", color: COLORS.white, fontSize: 20, fontWeight: 700, lineHeight: 1, display: "flex", alignItems: "center" }}>#{profile.id}</div>
              </div>
            </div>

            <div style={{ height: 1, width: "100%", background: COLORS.borderSoft, flexShrink: 0 }} />

            <div style={{ marginTop: 18, display: "flex", flexDirection: "column", flexShrink: 0 }}>
              <div style={{ color: COLORS.blue, fontSize: 11, fontWeight: 700, letterSpacing: .55 }}>{meta.label}</div>
              <div style={{ color: COLORS.white, fontSize: 26, fontWeight: 700, marginTop: 8, lineHeight: 1 }}>{meta.title}</div>
            </div>

            <div style={{ flex: 1, marginTop: 18, display: "flex", minHeight: 0 }}>{children}</div>

            <div style={{ height: 18, display: "flex", alignItems: "center", justifyContent: "flex-end", color: COLORS.muted2, fontSize: 9, fontWeight: 700, letterSpacing: .4, flexShrink: 0 }}>
              ROCHA SYSTEM • ROCHA ROLEPLAY • PERFIL {meta.number}/{PAGE_ORDER.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
