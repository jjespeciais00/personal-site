import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carlos Silva Personal Trainer | Transforme seu corpo em 90 dias",
  description:
    "Treino personalizado online e presencial em São Paulo. +500 alunos transformados. Avaliação gratuita disponível. Comece hoje!",
  keywords: [
    "personal trainer",
    "treino personalizado",
    "academia",
    "emagrecimento",
    "hipertrofia",
    "São Paulo",
  ],
  openGraph: {
    title: "Carlos Silva Personal Trainer",
    description: "Transforme seu corpo em até 90 dias com treino personalizado",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#0D0D0D] text-white antialiased">{children}</body>
    </html>
  );
}
