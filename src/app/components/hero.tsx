"use client";
import { useState } from "react";

export default function Hero({
  title,
  text,
  texts,
  buttonText,
}: {
  title: string;
  text?: string;
  texts?: string[];
  buttonText: string;
}) {
  const [isHidden, setTextHidden] = useState(true);

  const toggleHidden = () => {
    setTextHidden(!isHidden);
  };

  return (
    <>
      <div className="flex justify-center">
        <div
          className={`text duration-300 mt-[16vh] ${isHidden ? "mb-[30vh]" : "mb-[15vh]"} md:my-[30vh] text-center`}
        >
          <div className="mb-10">
            <h1 className="text-5xl md:text-9xl font-bold uppercase">
              {title}
            </h1>
          </div>
          <div
            className={`px-20 duration-300 overflow-hidden ${isHidden ? "h-20" : "h-60"} md:h-auto`}
          >
            {text !== undefined && text !== "" && 
              <p className="text-lg md:text-2xl">
                {text}
              </p>
            }

            {texts !== undefined && texts.length > 0 && (
              texts.map((text, index) => (
                <p key={index} className="text-lg md:text-2xl" style={{paddingBottom: "40px"}}>
                  {text}
                </p>
              ))
            )}

          </div>
          <div className="md:hidden text-best-blue-900 mt-5">
            <button onClick={toggleHidden}>
              {isHidden ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`flex ${buttonText == "" ? "hidden" : ""} columns-2 duration-300 justify-center ${isHidden ? "mt-52" : "mt-12"} md:mt-20`}
          >
            <a
              className={`transition  ease-in-out delay-150 hover:scale-110 hover:-translate-y-1 bg-best-blue-100 shadow-md hover:shadow-xl font-bold p-5 md:px-20 text-xl md:text-base px-32 rounded-full text-best-blue-900`}
              href="https://forms.gle/Dm2HiuRQs7YRjd1a7"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
