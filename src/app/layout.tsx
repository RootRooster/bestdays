import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import NavBar from "./components/navbar";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "BEST: Dnevi znanosti",
  description: "Nek google seo optimiziran opis strani.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-blue-700 h-screen text-white`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
