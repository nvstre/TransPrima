import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MinimalDock } from "./components/minimal-dock";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trans Prima",
  description: "Trans Prima - Transport inter si international",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased`}
      >
        <MinimalDock />
        {children}
      </body>
    </html>
  );
}
