import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.scss";
import NavBar from "./components/navbar";
import Image from "next/image";

const jost = Jost({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "BEST dnevi znanosti",
  description: `Strokovno-izobraževalni dogodek</b>, namenjen študentom Fakultete za
            kemijo in kemijsko tehnologijo ter Fakultete za računalništvo in
            informatiko.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} bg-best-blue h-screen text-white overflow-x-hidden`}>
        <div className="spots w-[100vw] h-[100vh] absolute -z-20 overflow-hidden">
          <div className="-z-10 absolute top-0 right-[-50vw] md:right-[-30vw] radialbestblue100 w-[90vw] md:w-[60vw] h-[60vh] md:h-[90vh] -rotate-45 animate-pulse"></div>
          <div className="-z-10 absolute top-[-45vh] left-[-45vw] radialbestblue900 w-[90vw] h-[90vh] rotate-45 animate-[pulse_4s_ease-in-out_infinite]"></div>
        </div>
        <NavBar />
        {children}
        <footer className="bottom-0">
          <div className="flex w-full h-32 bg-best-blue-900 justify-center items-center gap-20">
<a href="https://www.facebook.com/BestLjubljana/">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/best_ljubljana/">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
            </svg>
          </a>
          <a href="">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
            </svg>
          </a>
          </div>
          <p className="w-full bg-black text-sm flex justify-center py-2">Copyright © {new Date().getFullYear()}; Designed by Leonardo the Ninja Turtle</p>
        </footer>
      </body>
    </html>
  );
}
