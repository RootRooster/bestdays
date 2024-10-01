import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.scss";
import NavBar from "./components/navbar";
import Image from "next/image";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "BEST dnevi znanosti",
  description: `<b>Strokovno-izobraževalni dogodek</b>, namenjen študentom Fakultete za
            kemijo in kemijsko tehnologijo ter Fakultete za računalništvo in
            informatiko.`,
  openGraph: {
    images: [
      {
        url: "https://www.best-dnevi-znanosti.si/_next/image?url=%2Fogtag.png&w=1920&q=100",
        secureUrl:
          "https://www.best-dnevi-znanosti.si/_next/image?url=%2Fogtag.png&w=1920&q=100",
        width: 1920,
        height: 1080,
        alt: "Knowledge is power.",
      },
    ],
    title: "BEST dnevi znanosti",
    siteName: "BEST dnevi znanosti",
    description:
      "Strokovno-izobraževalni dogodek, namenjen študentom Fakultete za kemijo in kemijsko tehnologijo ter Fakultete za računalništvo in informatiko.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BESTLjubljana",
    title: "BEST dnevi znanosti",
    description:
      "Strokovno-izobraževalni dogodek, namenjen študentom Fakultete za kemijo in kemijsko tehnologijo ter Fakultete za računalništvo in informatiko.",
    creator: "@BESTLjubljana",
    images: {
      url: "https://www.best-dnevi-znanosti.si/_next/image?url=%2Fogtag.png&w=1920&q=100",
      alt: "Knowledge is power.",
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  keywords: [
    "BEST",
    "dnevi znanosti",
    "best dnevi znanosti",
    "simpozij",
    "Ljubljana",
    "best dnevi znanosti ljubljana",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} bg-best-blue h-screen text-white overflow-x-hidden`}
      >
        <div className="spots w-[100vw] h-[100vh] absolute -z-20 overflow-hidden">
          <div className="-z-10 absolute top-0 right-[-50vw] md:right-[-30vw] radialbestblue100 w-[90vw] md:w-[60vw] h-[60vh] md:h-[90vh] -rotate-45 animate-pulse"></div>
          <div className="-z-10 absolute top-[-45vh] left-[-45vw] radialbestblue900 w-[90vw] h-[90vh] rotate-45 animate-[pulse_4s_ease-in-out_infinite]"></div>
        </div>
        <NavBar />
        {children}
        <footer className="bottom-0">
          <div className="flex w-full h-32 bg-best-blue-900 justify-center items-center gap-20">
            <a href="https://www.facebook.com/BestLjubljana/">
              <Image
                src="/facebook.svg"
                alt="facebook logo"
                width={500}
                height={500}
                className="w-10"
              />
            </a>
            <a href="https://www.instagram.com/best_dnevi_znanosti/">
              <Image
                src="/instagram.svg"
                alt="instagram logo"
                width={500}
                height={500}
                className="w-10"
              />
            </a>
          </div>
          <p className="w-full bg-black text-sm flex justify-center py-2">
            Copyright © {new Date().getFullYear()}; Best Team
          </p>
        </footer>
      </body>
    </html>
  );
}
