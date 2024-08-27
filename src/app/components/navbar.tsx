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
            <Logo color="white" />
          </div>
          <div
            className={`md:static z-50 md:min-h-fit absolute min-h-[100vh] left-0 ${isExpanded ? "top-0 bg-blue-700" : "top-[-100%]"} md:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-20  w-full justify-center items-center">
              <li>
                <Link onClick={handleToggle} className="hover:text-gray-300" href="/">
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
                <Link onClick={handleToggle} className="hover:text-gray-300" href="/team">
                  O NAS
                </Link >
              </li>
            </ul>
          </div>

          <div
            onClick={handleToggle}
            className="flex items-center gap-6 md:hidden click:bg-gray-100 hover:bg-best-blue-900/30 border p-2 rounded-lg border-gray-300"
          >
            <svg
              xmlns="http://www.w2.org/2000/svg"
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
