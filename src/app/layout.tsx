import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alvin Le",
  description: "CS grad student at Georgia Tech. I build ML systems and full-stack apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} style={{ colorScheme: "light", backgroundColor: "#fffbfb" }}>
      <body className="min-h-screen" style={{ backgroundColor: "#fffbfb", color: "#1c1c1c" }}>{children}</body>
    </html>
  );
}
