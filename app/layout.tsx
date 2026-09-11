import type { Metadata } from "next";
import { Archivo, Archivo_Black, IBM_Plex_Mono } from "next/font/google";
import { LanguageController } from "@/components/LanguageController";
import "./globals.css";

const body = Archivo({ subsets: ["latin"], variable: "--font-body" });
const display = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const mono = IBM_Plex_Mono({ weight: ["400", "500"], subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://gustavorpolo.com"),
  title: "Gustavo Ramos Polo — Tecnólogo creativo y creador de productos digitales",
  description: "Tecnólogo creativo y creador de productos digitales especializado en postproducción, desarrollo asistido por IA, narrativa visual y productos digitales.",
  openGraph: {
    title: "Gustavo Ramos Polo — Construyo cosas.",
    description: "Postproducción, productos digitales, diseño e IA desde Panamá.",
    url: "https://gustavorpolo.com",
    siteName: "Gustavo Ramos Polo",
    locale: "es_PA",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Gustavo Ramos Polo — Construyo cosas." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${body.variable} ${display.variable} ${mono.variable}`}>{children}<LanguageController /></body>
    </html>
  );
}
