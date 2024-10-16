import Image from "next/image";
import Link from "next/link";
import Popin from "./popin";

type TextItem = {
  text: string;
  key: string;
  textClass: string;
};

export default function Card({
  subtitle,
  title,
  text,
  image,
  dateDay,
  dateMonth,
  readMore,
  register,
}: {
  subtitle: { text: string; textClass: string };
  title: { text: string; textClass: string };
  text: TextItem[];
  image: string;
  dateDay: string;
  dateMonth: string;
  readMore: string;
  register: string;
}) {
  return (
    <div className="w-100 flex justify-center">
      <Popin>
        <div className="bg-best-blue-900 m-4 rounded-xl relative sm:m-14 md:h-[40rem] md:w-[70rem]">
          <div className="bg-best-blue-100 top-0 absolute h-14 sm:h-20 w-14 sm:w-20 right-10 sm:right-14 z-10">
            <div className="text-best-blue-900 sm:mx-4 mx-2 mt-2 font-bold h-4 sm:mt-5 sm:text-xl">
              {dateDay}
            </div>
            <div className="text-best-blue-900 sm:mx-4 mx-2 font-bold sm:text-xl">
              {dateMonth}
            </div>
          </div>
          <div className="md:flex flex-row h-full relative ">
            <div className="md:w-[50%] z-10 flex flex-col justify-center">
              <div className="text-content mt-10 mx-5">
                <div className="uppercase sm:text-lg">
                  <h2 className={subtitle.textClass}>{subtitle.text}</h2>
                </div>
                <div className="text-3xl mb-5 sm:text-4xl">
                  <h2 className={title.textClass}>{title.text}</h2>
                </div>
                <div className="font-light text-sm sm:text-base">
                  {text.map((data: TextItem) => (
                    <p key={data.key} className={data.textClass}>
                      {data.text} <br />
                      <br />
                    </p>
                  ))}
                </div>
              </div>
              {/*pomojem je treba buttonse gor prestavt tud?*/}
              <div className="buttons mx-5 flex justify-center gap-5 mb-5">
                <a href={register}>
                  <div className="flex justify-center bg-best-blue-100 text-best-blue-900 rounded-3xl px-7 py-3 sm:px-14 md:px-7">
                    <div className="uppercase font-bold text-xs sm:text-base md:text-sm">
                      Prijavi se
                    </div>
                  </div>
                </a>
                <Link href={readMore}>
                  <div className="flex justify-center bg-best-blue-900 border-white border rounded-3xl px-7 py-3 sm:px-14 md:px-7">
                    <div className="uppercase font-bold text-xs sm:text-base md:text-sm">
                      Preberi več
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <div className="rounded-xl relative w-full h-auto">
                <Image
                  className="w-full h-full rounded-xl"
                  src={image}
                  width={400}
                  height={400}
                  alt="Workshops in action."
                />
                <div className="absolute inset-0 bottom-44 md:bottom-0 bg-gradient-to-b from-best-blue-900 to-transparent md:bg-gradient-to-r"></div>
              </div>
            </div>
            <div className="hidden md:block absolute top-0 left-[40%] right-0 bottom-0">
              <div className="rounded-xl w-full h-full">
                <Image
                  className="w-full h-full rounded-xl"
                  src={image}
                  width={400}
                  height={400}
                  alt="Workshops in action."
                />
                <div className="absolute inset-0 bottom-44 md:bottom-0 bg-gradient-to-b from-best-blue-900 to-transparent md:bg-gradient-to-r"></div>
              </div>
            </div>
          </div>
        </div>
      </Popin>
    </div>
  );
}
