const pages = [
  ["identity", "Identidade"],
  ["progress", "Progresso"],
  ["finances", "Finanças"],
  ["roleplay", "Vida RP"],
  ["licenses", "Licenças"],
  ["properties", "Propriedades"],
  ["statistics", "Estatísticas"],
  ["inventory", "Inventário"]
];

function preview(page) {
  const base = "/api/profile";
  const common = "nome=Bruno%20Campibel&id=4827&skin=29&sexo=Masculino&telefone=(14)%2099123-4567&discord=1&discordNome=bruno.campibel&online=1";
  return `${base}?page=${page}&${common}`;
}

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(145deg,#05090f,#081523)",
      color: "#f7faff",
      padding: "48px 20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{ maxWidth: 1040, margin: "0 auto" }}>
        <div style={{ color: "#4f8fff", fontSize: 12, fontWeight: 800, letterSpacing: 1 }}>ROCHA SYSTEM</div>
        <h1 style={{ fontSize: 42, margin: "10px 0 8px" }}>Rocha Profile Renderer</h1>
        <p style={{ color: "#8498b0", fontSize: 16, maxWidth: 760, lineHeight: 1.6 }}>
          API oficial de cards do Rocha Roleplay. Cada URL retorna uma imagem PNG pronta para ser usada em embeds do Discord Connector.
        </p>

        <div style={{
          marginTop: 28,
          padding: 22,
          border: "1px solid #1d344d",
          borderRadius: 18,
          background: "#09131f"
        }}>
          <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 12 }}>Saúde da aplicação</div>
          <a href="/api/health" style={{ color: "#79b8ff", textDecoration: "none" }}>/api/health</a>
        </div>

        <div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 14 }}>
          {pages.map(([key, label], index) => (
            <a
              key={key}
              href={preview(key)}
              style={{
                textDecoration: "none",
                border: "1px solid #1d344d",
                borderRadius: 16,
                background: "#0d1826",
                padding: "18px 20px",
                display: "flex",
                alignItems: "center"
              }}
            >
              <div style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                background: "#10233a",
                color: "#79b8ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900
              }}>
                {index + 1}
              </div>
              <div style={{ marginLeft: 14 }}>
                <div style={{ fontSize: 17, fontWeight: 800 }}>{label}</div>
                <div style={{ fontSize: 12, color: "#6f839a", marginTop: 5 }}>Abrir preview PNG</div>
              </div>
            </a>
          ))}
        </div>

        <div style={{
          marginTop: 30,
          padding: 22,
          border: "1px solid #1d344d",
          borderRadius: 18,
          background: "#09131f"
        }}>
          <div style={{ fontSize: 14, fontWeight: 800 }}>Endpoint principal</div>
          <code style={{ display: "block", color: "#79b8ff", marginTop: 12, wordBreak: "break-all" }}>
            /api/profile?page=identity&amp;nome=Bruno%20Campibel&amp;id=4827&amp;skin=29&amp;online=1
          </code>
          <p style={{ color: "#71869e", fontSize: 13, lineHeight: 1.6, marginBottom: 0 }}>
            Use um parâmetro como v ou updated no final da URL quando quiser forçar uma nova URL e evitar cache do Discord.
          </p>
        </div>
      </div>
    </main>
  );
}
