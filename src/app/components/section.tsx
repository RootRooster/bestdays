import Image from "next/image";
import BestButton from "./button-link-100";
export default function Section({
  subtitle,
  title,
  text,
  imageSrc,
  imageAlt,
  isImageRight = true,
}: {
  subtitle: string,
  title: string,
  text: string,
  imageSrc: string,
  imageAlt: string,
  isImageRight?: boolean;
}) {
  return (
    <div
      className={`flex mb-52 flex-col ${isImageRight ? "md:flex-row" : "md:flex-row-reverse"} gap-10 mx-10 md:mx-32 items-center`}
    >
      <div className="md:w-1/2 w-full md:h-[100%]">
        <h2 className="text-base uppercase">{subtitle}</h2>
        <h1 className="text-7xl font-bold uppercase">{title}</h1>
        <p className="text-lg pr-7 text-justify mt-5">
          {text}
        </p>
        <div className="button-container flex justify-center pt-16">
          <BestButton
            link="https://forms.gle/Dm2HiuRQs7YRjd1a7"
            text="Prijavi se"
          />
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
