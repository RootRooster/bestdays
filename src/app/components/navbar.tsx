"use client";
import Logo from "./logo";
import { useState } from "react";
export default function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <header className="bg-white shadow-xl text-black font-bold">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div className="pl-5 py-8">
            <Logo color="black" />
          </div>
          <div
            className={`md:static bg-white md:min-h-fit absolute min-h-[60vh] left-0 ${isExpanded ? "top-28" : "top-[-100%]"} md:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-12">
              <li>
                <a className="hover:text-gray-300" href="">
                  DOMOV
                </a>
              </li>
              <li>
                <a className="hover:text-gray-300" href="">
                  PREDSTAVITEV
                </a>
              </li>
              <li>
                <a className="hover:text-gray-300" href="">
                  PARTNERJI
                </a>
              </li>
              <li>
                <a className="hover:text-gray-300" href="">
                  PUBLIKACIJE
                </a>
              </li>
              <li>
                <a className="hover:text-gray-300" href="">
                  O NAS
                </a>
              </li>
            </ul>
          </div>

          <div
            onClick={handleToggle}
            className="flex items-center gap-6 md:hidden click:bg-gray-100 hover:bg-gray-50 border p-2 rounded-lg border-gray-300"
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
