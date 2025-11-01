import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "언제칠까 - GolfTech Platform",
  description: "골프의 모든 순간을 하나로 연결하는 플랫폼",
  keywords: ["골프", "언제칠까", "스크린골프", "골프앱", "EXMO"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link 
          href="https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquare.woff2" 
          rel="preload" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} bg-gray-200`}>
        {children}
      </body>
    </html>
  );
}
