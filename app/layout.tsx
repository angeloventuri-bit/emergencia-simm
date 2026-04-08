import type { Metadata } from "next";
import { LanguageProvider } from "./i18n/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emergência SIMM — Medicina de Emergência",
  description:
    "Medicina de Emergência. Dessa vez, em mãos de emergencistas. Desde 2019 · Preceptores do HC-USP e InCor · +10.000 médicos formados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Outfit:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#0A0E14] text-[#E8E8EA] font-[Inter] antialiased overflow-x-hidden selection:bg-[#20CAD8] selection:text-[#0A0E14]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
