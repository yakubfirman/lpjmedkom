import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Laporan Perkembangan Instagram - Medkomunnes",
  description: "Laporan perkembangan akun Instagram @medkomunnes dari bulan ke bulan dengan dokumentasi visual pertumbuhan followers dan engagement.",
  keywords: ["Instagram", "Laporan Perkembangan", "Social Media Analytics", "Medkomunnes"],
  authors: [{ name: "Medkomunnes" }],
  openGraph: {
    title: "Laporan Perkembangan Instagram",
    description: "Dokumentasi visual pertumbuhan akun Instagram",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}