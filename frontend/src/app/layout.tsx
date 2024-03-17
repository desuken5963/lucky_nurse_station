import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
import Header from "@/components/layouts/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucky訪問看護ステーション",
  description: "私たちは、質の高い在宅看護サービスを提供しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet" />
      </Head> */}
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
