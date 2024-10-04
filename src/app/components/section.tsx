import Image from "next/image";
import BestButton from "./button-link-100";
import React from "react";
export default function Section({
  children,
  subtitle,
  title,
  imageSrc,
  imageAlt,
  isImageRight = true,
  buttons = []
}: {
  children: React.ReactNode;
  subtitle: string,
  title: string,
  imageSrc: string,
  imageAlt: string,
  isImageRight?: boolean;
  buttons?: { link: string; text: string }[],
}) {
  return (
    <div
      className={`flex mb-52 flex-col ${isImageRight ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 mx-10 lg:mx-32 items-center`}
    >
      <div className="lg:w-1/2 w-full md:h-[100%]">
        <h2 className="text-sm md:text-base uppercase">{subtitle}</h2>
        <h1 className="text-3xl lg:text-5xl font-bold uppercase">{title}</h1>
        <div className="text-lg pr-7 mt-5 text-left">
          {children}
        </div>
        <div className="button-container hidden justify-center pt-16">
          {buttons.map((button, index) => (
          <BestButton
            key={index}
            link={button.link}
            text={button.text}
            />
          ))}
        </div>
      </div>
      <div className="flex md:w-1/2 w-full justify-center items-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={500}
          width={500}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
