"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Popin from "../components/popin";
let posterIds: number[] = [];
for (let i = 0; i < 12; i++) {
  posterIds.push(i);
}
export default function Page() {
  const [image, setImage] = useState(-1);
  const subHidden = true;
  return (
    <>
      <div className="justify-center flex min-h-[100vh]">
        <div className={`${subHidden ? "hidden" : ""}`}>
          <div className="justify-start w-[80%] md:w-[60%] mt-20 md:max-w-[50rem]">
            <h1 className="text-2xl md:text-4xl mb-12">
              Oddaj svoj POSTER - Poster minute 2024
            </h1>

            <div className="pt-6 pb-7">
              <p>
                V torek, 22. oktobra, bo v sklopu dogodka BEST dnevi znanosti
                potekala predstavitev na plakatih ali Poster minute.
              </p>

              <p className="mt-7">
                Na plakatu lahko predstaviš svoje diplomsko, magistrsko,
                doktorsko ali drugo raziskovalno delo.
              </p>

              <p className="mt-7">
                Plakat bo razstavljen na dogodku in ga lahko prideš tudi
                predstaviti. Objavljen pa bo tudi na spletni strani dogodka BEST
                dnevi znanosti.
              </p>

              <p className="mt-7">
                Oddaja je odprta za študente vseh fakultet, katerih raziskovalna
                dela se navezujejo na vsaj eno izmed sledečih področij: kemija,
                biokemija, računalništvo in tehnologija.
              </p>

              <p className="mt-7">
                Oddaja je odprta do petka, 4. oktobra, oddaje pa zbiramo preko
                spodnjega obrazca, število mest je omejeno.
              </p>

              <p className="mt-7">
                V primeru vprašanj nam piši na: bdz@bestljubljana.si
              </p>
            </div>
            <div
              className={`flex mb-20 columns-2 duration-300 justify-start mt-12 md:mt-20`}
            >
              <a
                className={`transition ease-in-out delay-150 hover:scale-110 hover:-translate-y-1 bg-best-blue-100 shadow-md hover:shadow-xl font-bold p-5 md:px-20 text-xl md:text-base px-32 rounded-full text-best-blue-900`}
                href="https://forms.gle/Dm2HiuRQs7YRjd1a7"
              >
                ODDAJ POSTER
              </a>
            </div>
          </div>
        </div>

        <div
          className={`${image == -1 ? "hidden" : ""} bg-best-blue-900 bg-opacity-50 fixed top-0 w-[100vw] h-[100vh] z-30`}
        >
          <div className="absolute top-0 left-0 my-5 mx-10 text-xl"
                onClick={() => setImage(-1)}>X</div>
          <div
            id="prev"
            className="absolute left-0 top-[45vh] py-20 px-10 bg-best-blue-900 bg-opacity-50 text-xl"
            onClick={() => setImage(Math.abs((image-1)%posterIds.length))}
          >
            &lt;
          </div>
          <div
            id="next"
            className="absolute right-0 top-[45vh] py-20 px-10 bg-best-blue-900 bg-opacity-50  text-xl"
            onClick={() => setImage(Math.abs((image+1)%posterIds.length))}
          >
            &gt;
          </div>
          <div className="flex items-center h-[100vh] w-[100vw] justify-center align-middle">
            <div className="items-center md:m-20">
              <Link href={`/poster/${image}.pdf`}>
                <Image
                  src={`/poster/${image}.jpg`}
                  alt="poster"
                  width={900}
                  height={500}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={`${!subHidden ? "hidden" : ""}`}>
          <div className="this w-[100%] min-h-[100%] pt-24">
            <h1 className="text-2xl md:text-4xl mb-12">Poster minute 2024</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-14">
              {posterIds.map((id) => (
                <div
                  key={id}
                  className="transition hover:-translate-y-10"
                  onClick={() => setImage(id)}
                >
                  <Popin>
                    <Image
                      src={`/poster/${id}.jpg`}
                      alt="poster"
                      height={333}
                      width={333}
                    />
                  </Popin>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
