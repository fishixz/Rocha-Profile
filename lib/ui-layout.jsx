import React from "react";
import { CircleUserRound, Signal } from "lucide-react";
import { COLORS, PAGE_META, PAGE_ORDER } from "./profile-data";

function PresenceLine({ online }) {
  return (
    <div style={{ display: "flex", alignItems: "center", height: 24, marginTop: 16 }}>
      <div style={{ width: 10, height: 10, borderRadius: 999, background: online ? COLORS.green : COLORS.red, flexShrink: 0 }} />
      <div style={{ color: online ? COLORS.green : COLORS.red, fontSize: 14, fontWeight: 650, marginLeft: 12, lineHeight: 1 }}>
        {online ? "Jogador online" : "Jogador offline"}
      </div>
    </div>
  );
}

export function BrandSidebar({ profile, skinUrl, page }) {
  const meta = PAGE_META[page];

  return (
    <div style={{ width: 315, height: 610, borderRadius: 22, border: `1px solid ${COLORS.border}`, background: "#07111C", display: "flex", flexDirection: "column", overflow: "hidden", flexShrink: 0 }}>
      <div style={{ height: 425, margin: "18px 18px 0", borderRadius: 18, border: `1px solid ${COLORS.border}`, background: "linear-gradient(180deg,#091828 0%,#07121F 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", width: 240, height: 240, borderRadius: 120, background: "#0D2743", left: 23, top: 105 }} />
        <div style={{ position: "absolute", width: 158, height: 158, borderRadius: 79, background: "#12385F", left: 64, top: 146 }} />
        <div style={{ position: "absolute", top: 15, left: 16, color: COLORS.muted, fontSize: 11, fontWeight: 750 }}>SKIN ATUAL</div>
        <div style={{ position: "absolute", top: 11, right: 13, height: 34, minWidth: 58, padding: "0 12px", borderRadius: 10, background: "#10243C", color: COLORS.babyBlue, fontSize: 15, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>
          #{profile.skin}
        </div>

        {skinUrl ? (
          <img
            src={skinUrl}
            width="272"
            height="370"
            style={{ objectFit: "contain", objectPosition: "center bottom", zIndex: 3, marginTop: 35 }}
          />
        ) : (
          <CircleUserRound width={118} height={118} color={COLORS.muted2} strokeWidth={1.2} style={{ zIndex: 3 }} />
        )}

        <div style={{ position: "absolute", left: 16, right: 16, bottom: 15, height: 1, background: COLORS.border }} />
      </div>

      <div style={{ padding: "18px 28px 0", display: "flex", flexDirection: "column" }}>
        <div style={{ color: COLORS.muted, fontSize: 11, fontWeight: 750, letterSpacing: .5 }}>PERSONAGEM</div>
        <div style={{ color: COLORS.white, fontSize: 24, fontWeight: 800, marginTop: 8, lineHeight: 1.08, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{profile.nome}</div>
        <PresenceLine online={profile.online} />
      </div>

      <div style={{ marginTop: "auto", padding: "0 28px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", color: COLORS.muted2, fontSize: 11, fontWeight: 700 }}>
          <Signal width={14} height={14} color={COLORS.muted2} />
          <span style={{ marginLeft: 7 }}>{meta.label}</span>
        </div>
        <div style={{ color: COLORS.muted2, fontSize: 11, fontWeight: 800 }}>{meta.number}/{PAGE_ORDER.length}</div>
      </div>
    </div>
  );
}

export function CardShell({ profile, skinUrl, children }) {
  const meta = PAGE_META[profile.page];

  return (
    <div style={{ width: 1200, height: 675, background: `linear-gradient(145deg, ${COLORS.bg} 0%, #07111D 52%, #06101B 100%)`, display: "flex", fontFamily: "Arial, sans-serif", color: COLORS.white, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 22, right: 22, top: 20, bottom: 20, border: `1px solid ${COLORS.border}`, borderRadius: 26, background: "rgba(7,17,29,.94)", overflow: "hidden", display: "flex" }}>
        <div style={{ position: "absolute", left: 0, top: 0, width: "100%", height: 4, background: COLORS.blue }} />
        <div style={{ position: "absolute", left: 0, top: 0, width: 5, height: "100%", background: COLORS.blue }} />
        <div style={{ position: "absolute", width: 900, height: 1, background: "#0F253B", transform: "rotate(-12deg)", right: -180, top: 160 }} />
        <div style={{ position: "absolute", width: 900, height: 1, background: "#0D2237", transform: "rotate(-21deg)", right: -190, bottom: 50 }} />

        <div style={{ display: "flex", padding: "35px 34px 30px 34px", width: "100%", height: "100%", position: "relative", zIndex: 2 }}>
          <BrandSidebar profile={profile} skinUrl={skinUrl} page={profile.page} />

          <div style={{ marginLeft: 35, flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
            <div style={{ height: 124, display: "flex", alignItems: "flex-start" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ color: COLORS.blue, fontSize: 12, fontWeight: 800, letterSpacing: .55 }}>ROCHA SYSTEM</div>
                <div style={{ color: COLORS.white, fontSize: 31, fontWeight: 800, marginTop: 8, lineHeight: 1 }}>ROCHA ROLEPLAY</div>
                <div style={{ color: COLORS.muted, fontSize: 12, fontWeight: 650, marginTop: 11 }}>PERFIL OFICIAL DO PERSONAGEM</div>
              </div>

              <div style={{ marginLeft: "auto", width: 190, height: 60, borderRadius: 15, border: `1px solid ${COLORS.border}`, background: "#0D1927", display: "flex", alignItems: "center", padding: "0 15px" }}>
                <div style={{ color: COLORS.muted, fontSize: 11, fontWeight: 750 }}>PLAYER ID</div>
                <div style={{ marginLeft: "auto", color: COLORS.white, fontSize: 21, fontWeight: 850, lineHeight: 1, display: "flex", alignItems: "center" }}>#{profile.id}</div>
              </div>
            </div>

            <div style={{ height: 1, width: "100%", background: COLORS.borderSoft }} />

            <div style={{ marginTop: 26, display: "flex", flexDirection: "column" }}>
              <div style={{ color: COLORS.blue, fontSize: 12, fontWeight: 800, letterSpacing: .55 }}>{meta.label}</div>
              <div style={{ color: COLORS.white, fontSize: 28, fontWeight: 800, marginTop: 9, lineHeight: 1 }}>{meta.title}</div>
            </div>

            <div style={{ flex: 1, marginTop: 27, display: "flex", minHeight: 0 }}>{children}</div>

            <div style={{ height: 24, display: "flex", alignItems: "center", justifyContent: "flex-end", color: COLORS.muted2, fontSize: 10, fontWeight: 700, letterSpacing: .4 }}>
              ROCHA SYSTEM • ROCHA ROLEPLAY • PERFIL {meta.number}/{PAGE_ORDER.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
