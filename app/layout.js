export const metadata = {
  title: "Rocha Profile API",
  description: "Renderer de perfis do Rocha Roleplay"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
