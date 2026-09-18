import React from "react";
import {
  Car, Bike, Truck, Bus, Shield, Fish, Anchor, Home, Building2,
  Warehouse, Skull, Lock, Clock, AlertTriangle, Trophy, Package, Weight,
  ShieldAlert, CarFront
} from "lucide-react";
import { COLORS } from "./profile-data";
import { FieldCard, LicenseRow, SmallStat, ProgressBar, IconBox } from "./ui-core";

function TwoColRow({ left, right, top = 0 }) {
  return (
    <div style={{ display: "flex", width: "100%", marginTop: top }}>
      <div style={{ display: "flex", flex: 1, marginRight: 9 }}>{left}</div>
      <div style={{ display: "flex", flex: 1, marginLeft: 9 }}>{right}</div>
    </div>
  );
}

function PropertyMetric({ icon, label, value, sub }) {
  const Icon = icon;
  return (
    <div style={{ width: "100%", height: 118, borderRadius: 15, border: `1px solid ${COLORS.border}`, background: COLORS.panel2, display: "flex", alignItems: "center", padding: "0 18px" }}>
      <IconBox icon={Icon} size={21} />
      <div style={{ marginLeft: 15, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div style={{ color: COLORS.muted, fontSize: 11, fontWeight: 700, letterSpacing: .45 }}>{label.toUpperCase()}</div>
        <div style={{ color: COLORS.white, fontSize: 28, fontWeight: 800, marginTop: 7, lineHeight: 1 }}>{value}</div>
        <div style={{ color: COLORS.muted2, fontSize: 11, marginTop: 7, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 250 }}>{sub}</div>
      </div>
    </div>
  );
}

export function LicensesPage({ profile }) {
  const rows = [
    [Car, "Carro • Categoria B", profile.licCarro],
    [Bike, "Moto • Categoria A", profile.licMoto],
    [Truck, "Caminhão • Categoria C", profile.licCaminhao],
    [Bus, "Ônibus • Categoria D", profile.licOnibus],
    [Shield, "Licença especial • Categoria E", profile.licArmas],
    [Fish, "Licença de pesca", profile.licPesca],
    [Anchor, "Licença náutica", profile.licNautica]
  ];

  return (
    <div style={{ width: "100%", border: `1px solid ${COLORS.border}`, borderRadius: 16, background: COLORS.panel2, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {rows.map(([Icon, label, owned]) => (
        <LicenseRow key={label} icon={Icon} label={label} owned={owned} />
      ))}
    </div>
  );
}

export function PropertiesPage({ profile }) {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <TwoColRow
        left={<PropertyMetric icon={Home} label="Casas" value={profile.casas} sub={profile.casaPrincipal} />}
        right={<PropertyMetric icon={Building2} label="Empresas" value={profile.empresas} sub={profile.empresaPrincipal} />}
      />
      <TwoColRow
        top={18}
        left={<PropertyMetric icon={CarFront} label="Veículos" value={profile.veiculos} sub={profile.veiculoPrincipal} />}
        right={<PropertyMetric icon={Warehouse} label="Garagens" value={profile.garagens} sub={profile.garagens > 0 ? "Garagens registradas no personagem" : "Nenhuma garagem"} />}
      />

      <div style={{ marginTop: 18, height: 96, borderRadius: 15, border: `1px solid ${COLORS.border}`, background: "linear-gradient(90deg,#0D1826,#0B1B2B)", display: "flex", alignItems: "center", padding: "0 20px" }}>
        <IconBox icon={Home} size={21} />
        <div style={{ marginLeft: 15, display: "flex", flexDirection: "column" }}>
          <div style={{ color: COLORS.muted, fontSize: 11, fontWeight: 700, letterSpacing: .45 }}>RESUMO PATRIMONIAL</div>
          <div style={{ color: COLORS.white, fontSize: 19, fontWeight: 800, marginTop: 7 }}>
            {profile.casas + profile.empresas + profile.veiculos + profile.garagens} registro(s) vinculados ao personagem
          </div>
        </div>
      </div>
    </div>
  );
}

export function StatisticsPage({ profile }) {
  const stats = [
    [Trophy, "Vitórias", profile.kills],
    [Skull, "Derrotas", profile.mortes],
    [ShieldAlert, "Ocorrências", profile.assaltos],
    [Lock, "Prisões", profile.prisoes],
    [Clock, "Tempo em prisão", profile.tempoPrisao],
    [AlertTriangle, "Advertências", profile.warns]
  ];

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ display: "flex", flex: 1, marginRight: 6 }}><SmallStat icon={stats[0][0]} label={stats[0][1]} value={String(stats[0][2])} /></div>
        <div style={{ display: "flex", flex: 1, marginLeft: 6, marginRight: 6 }}><SmallStat icon={stats[1][0]} label={stats[1][1]} value={String(stats[1][2])} /></div>
        <div style={{ display: "flex", flex: 1, marginLeft: 6 }}><SmallStat icon={stats[2][0]} label={stats[2][1]} value={String(stats[2][2])} /></div>
      </div>

      <div style={{ display: "flex", width: "100%", marginTop: 16 }}>
        <div style={{ display: "flex", flex: 1, marginRight: 6 }}><SmallStat icon={stats[3][0]} label={stats[3][1]} value={String(stats[3][2])} /></div>
        <div style={{ display: "flex", flex: 1, marginLeft: 6, marginRight: 6 }}><SmallStat icon={stats[4][0]} label={stats[4][1]} value={String(stats[4][2])} /></div>
        <div style={{ display: "flex", flex: 1, marginLeft: 6 }}><SmallStat icon={stats[5][0]} label={stats[5][1]} value={String(stats[5][2])} /></div>
      </div>

      <div style={{ marginTop: 16 }}>
        <FieldCard icon={Trophy} label="Pontos de evento" value={String(profile.pontosEvento)} accent={COLORS.amber} compact />
      </div>
    </div>
  );
}

function InventorySlot({ name, qty }) {
  const empty = !name;

  return (
    <div style={{ width: "100%", height: 96, borderRadius: 13, border: `1px solid ${empty ? COLORS.borderSoft : COLORS.border}`, background: empty ? "#09131E" : COLORS.panel2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", opacity: empty ? .58 : 1 }}>
      <IconBox icon={Package} size={20} color={empty ? COLORS.muted2 : COLORS.white} bg={empty ? "#101923" : COLORS.panel3} />
      <div style={{ marginTop: 7, fontSize: 12, fontWeight: 700, color: empty ? COLORS.muted2 : COLORS.text, maxWidth: 132, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {empty ? "Slot vazio" : name}
      </div>
      {!empty ? (
        <div style={{ position: "absolute", top: 7, right: 8, minWidth: 27, height: 23, padding: "0 7px", borderRadius: 12, background: "#152B46", color: COLORS.babyBlue, fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center" }}>
          x{qty}
        </div>
      ) : null}
    </div>
  );
}

function InventoryRow({ items, start }) {
  return (
    <div style={{ display: "flex", width: "100%", marginTop: start === 0 ? 0 : 12 }}>
      {[0, 1, 2, 3].map((offset) => {
        const item = items[start + offset] || ["", ""];
        const style = offset === 0
          ? { marginRight: 6 }
          : offset === 3
            ? { marginLeft: 6 }
            : { marginLeft: 6, marginRight: 6 };

        return (
          <div key={start + offset} style={{ display: "flex", flex: 1, ...style }}>
            <InventorySlot name={item[0]} qty={item[1]} />
          </div>
        );
      })}
    </div>
  );
}

export function InventoryPage({ profile }) {
  const items = [...profile.items];
  while (items.length < 12) items.push(["", ""]);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 78, borderRadius: 14, border: `1px solid ${COLORS.border}`, background: COLORS.panel2, display: "flex", alignItems: "center", padding: "0 18px" }}>
        <IconBox icon={Weight} size={20} />
        <div style={{ marginLeft: 14, width: 170, display: "flex", flexDirection: "column" }}>
          <div style={{ color: COLORS.muted, fontSize: 11, fontWeight: 700 }}>CAPACIDADE</div>
          <div style={{ color: COLORS.white, fontSize: 18, fontWeight: 800, marginTop: 4 }}>{profile.peso.toFixed(1)} / {profile.pesoMax.toFixed(1)} kg</div>
        </div>
        <div style={{ flex: 1, marginLeft: 18 }}>
          <ProgressBar value={profile.peso} max={profile.pesoMax} label="PESO UTILIZADO" rightLabel={`${Math.round((profile.peso / profile.pesoMax) * 100)}%`} />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
        <InventoryRow items={items} start={0} />
        <InventoryRow items={items} start={4} />
        <InventoryRow items={items} start={8} />
      </div>
    </div>
  );
}
