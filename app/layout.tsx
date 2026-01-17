import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chroma Vibe | 色彩共鸣",
  description: "What color is your mood?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`antialiased bg-black text-white font-serif`}>
        {children}
      </body>
    </html>
  );
}
