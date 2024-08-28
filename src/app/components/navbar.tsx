"use client";
import Logo from "./logo";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <header className="text-white font-bold">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div className="pl-5 py-8">
            <Link href="/">
              <Logo color="white" />
            </Link>
          </div>
          <div
            className={`static z-50 min-h-fit left-0 md:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex flex-row items-center gap-[4vw] w-full justify-center">
              <li>
                <Link onClick={handleToggle} className="hover:text-gray-300 hidden md:block" href="/">
                  DOMOV
                </Link >
              </li>
              <li>
                <Link onClick={handleToggle} className="hover:text-gray-300" href="/sponsors">
                  PARTNERJI
                </Link >
              </li>
              <li>
                <Link onClick={handleToggle} className="hover:text-gray-300" href="/publication">
                  PUBLIKACIJE
                </Link >
              </li>
              <li>
                <Link onClick={handleToggle} className="hover:text-gray-300 hidden md:block" href="/team">
                  O NAS
                </Link >
              </li>
            </ul>
          </div>

        </nav>
      </header>
    </>
  );
}
