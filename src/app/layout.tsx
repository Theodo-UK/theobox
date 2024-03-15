import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });

export const metadata: Metadata = {
  title: "Theobox",
  description:
    "A Website to Calculate Timebox Story Point Estimates, made @ Theodo UK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📦</text></svg>"
        />
      </head>
      <body className={archivo.variable}>
        <Header />
        <Analytics />

        {children}
      </body>
    </html>
  );
}
