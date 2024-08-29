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
            className={`md:static z-50 min-h-fit ${isExpanded ? "left-0" : "left-[-100%]"} top-0 md:w-auto w-full flex items-center fixed h-full md:bg-transparent bg-best-blue`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-[10vh] md:gap-[4vw] w-full justify-center">
              <li>
                <Link
                  onClick={handleToggle}
                  className="hover:text-gray-300"
                  href="/"
                >
                  DOMOV
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleToggle}
                  className="hover:text-gray-300"
                  href="/sponsors"
                >
                  PARTNERJI
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleToggle}
                  className="hover:text-gray-300"
                  href="/publication"
                >
                  PUBLIKACIJE
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleToggle}
                  className="hover:text-gray-300"
                  href="/team"
                >
                  O NAS
                </Link>
              </li>
            </ul>
          </div>
          <div
            onClick={handleToggle}
            className="h-12 w-12 border border-white flex justify-center items-center rounded md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </nav>
      </header>
    </>
  );
}
