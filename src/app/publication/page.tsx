"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Popin from "../components/popin";

type posterDataObject = {
  id: number;
  avtorji: string[];
  naslov: string;
};
const posterData: posterDataObject[] = [
  {
    id: 0,
    avtorji: [
      "J. Štenkler",
      "I. Kralj Cigić",
      "T. Balaško",
      "N. Guzelj",
      "L. Lengar",
      "J. Levstek",
      "G. Pirnat",
      "L. Stepanova",
      "L. Šarić",
      "K. Ziherl",
      "H. Prosen",
    ],
    naslov:
      "Pravilnost odgovorov in omejitve prosto dostopnega orodja ChatGPT v slovenščini na primerih okoljske problematike",
  },
  {
    id: 1,
    avtorji: [
      "Natalija Tomažin",
      "Marko Božinović",
      "Francesca Annunziata",
      "Andrea Pinto",
      "Polona Žnidaršič-Plazl",
    ],
    naslov:
      "Development of a continuous δ-viniferin synthesis in a microreactor using immobilized horseradish peroxidase",
  },
  {
    id: 2,
    avtorji: ["Neža Lesjak", "Jeremy Di Domizio"],
    naslov:
      "Understanding the mode of activation of plasmacytoid dendritic cells in different skin disorders",
  },
  {
    id: 3,
    avtorji: [
      "Nadja Suhorepec",
      "Luka Ciber",
      "Uroš Grošelj",
      "Bogdan Štefane",
      "Marko Novinec",
      "Jurij Svete",
    ],
    naslov:
      "Bioconjugation and covalent binding of native proteins using azide-alkyne cycloaddition",
  },
  {
    id: 4,
    avtorji: [
      "Tjaša Like",
      "Ula Rozman",
      "Jernej Imperl",
      "Gabriela Kalčíková",
    ],
    naslov:
      "Study of the desorption of nanoparticles previously adsorbed on polyethlene microplastics",
  },
  {
    id: 5,
    avtorji: ["Špela Rapuš", "mag. Urša Čerček", "prof. dr. Boris Rogelj"],
    naslov: "Izražanje in izolacija proteina fenilalanin tRNA-sintetaze (FARS)",
  },
  {
    id: 6,
    avtorji: ["Lena Kogoj", "dr. Emmanouil Kyriakakis", "prof. Anne Spang"],
    naslov:
      "Vloga transteritinu-podobnih proteinov v proteostazi pri C. elegans",
  },
  {
    id: 7,
    avtorji: ["Milena Stojkovska Docevska"],
    naslov:
      "Optimisation of protein production in FreeStyle 293-F cells with six peptones",
  },
  {
    id: 8,
    avtorji: [
      "Blaž Režonja",
      "Ela Vavpetič",
      "Neža Kokalj",
      "Aleš Kladnik",
      "Primož Vavpetič",
      "Mitja Kelemen",
      "Paula Pongrac",
    ],
    naslov: "Tissue-specific element profiles in edible seeds",
  },
  {
    id: 9,
    avtorji: ["Martina Mileva", "Aleksander Kravos", "Helena Prosen"],
    naslov:
      "Simplified and fast analysis of selected pharmaceuticals with dispersive micro solid-phase extraction (DMSPE)",
  },
  {
    id: 10,
    avtorji: ["Nik Nikoli", "Jan Ocepek", "Ida Kraševec", "Matija Strlič"],
    naslov:
      "Študija degradacije zgodovinskega papirja z metodami pospešene razgradnje",
  },
  {
    id: 11,
    avtorji: ["Pia Mencin", "Metka Novak", "Barbara Breznik"],
    naslov: "Preučevanje interakcije PD-1/PD-L1 v mikrookolju glioblastoma",
  },
  {
    id: 12,
    avtorji: [
      "Katarina Čubej",
      "Samo Bordon",
      "Jena Jamšek",
      "Oliver Bajt",
      "Helena Prosen",
    ],
    naslov:
      "Optimization of analytical methods for photodegradation products of PAH and phthalate esters adsorbed on microplastics",
  },
  {
    id: 13,
    avtorji: ["Žiga Koren"],
    naslov: "Vpliv oznake FLAG na fazno separacijo tekoče-tekoče",
  },
  {
    id: 14,
    avtorji: ["Janja Bohte", "Tadeja Kuret", "Peter Veranič"],
    naslov:
      "Modulatng infammaton, oxidatve stress and urothelial barrier dysfuncton: The role of taurine in an in vitro model of intersttal cystts",
  },
  {
    id: 15,
    avtorji: ["Ula Mikoš"],
    naslov: "Nepričakovan preobrat pri inhibiciji invazije rakavih celic!",
  },
  {
    id: 16,
    avtorji: [
      "Martin Jazbec",
      "Prasenjit P. Sukul",
      "Luís F. Santos",
      "Rui M. Almeida",
    ],
    naslov:
      "Impact of Substrate on Optical Properties of 1-D Photonic Crystals for White LEDs",
  },
  {
    id: 17,
    avtorji: [
      "Lora Gržin, mag. farm.",
      "izr. prof. dr. Anja Pišlar, mag. farm.",
      "asist. Selene Horvat, mag.",
    ],
    naslov:
      "Izražanje γ-enolaze in njeno uravnavanje s katepsinom X v poškodovanih dopaminergičnih nevroblastomskih celicah",
  },
  {
    id: 18,
    avtorji: ["Anastazija Rakar"],
    naslov:
      "Triazolijeve soli kot napredni ligandi: Sinteza in njihova uporabnost",
  },
  {
    id: 19,
    avtorji: ["Zoja Žnidarič"],
    naslov: "Pretvorbe elektronsko bogatih aromatov pri alternativnih pogojih",
  },
  {
    id: 20,
    avtorji: ["Špela Blaznik", "Ana Lisac", "Aleš Podgornik"],
    naslov:
      "The effect of Staphylococcus capitis growth rate on the effectiveness of bacteriophage K",
  },
  {
    id: 22,
    avtorji: ["Marcel Žafran", "Ana Gajić", "Lovro Žiberna", "Alen Albreht"],
    naslov:
      "In vitro antioxidant activity and total phenolic content of different extracts of Himalayan Balsam (Impatiens glandulifera Royle)",
  },
  {
    id: 23,
    avtorji: [
      "Tjaša Likeb",
      "Martin Capuder",
      "Tina Skalar",
      "Andreja Pondelak",
    ],
    naslov: "Analysis of Adhesive Joint Using Beech Wood",
  },
  {
    id: 21,
    avtorji: ["Tina Logonder", "Aljaž Gaber"],
    naslov:
      "Raziskovanje strukture signalnega kompleksa FHL2:β-katenin v povezavi z EpCAM",
  },
];
export default function Page() {
  const [image, setImage] = useState(-1);
  const [type, setType] = useState("poster");
  const [count, setCount] = useState(0);

  const showPoster = (id: number) => {
    setImage(id);
    setType("poster");
    setCount(posterData.length);
  };
  const showZbornik = () => {
    setImage(0);
    setType("zbornik");
    setCount(15);
  };
  const showZbornik2 = () => {
    setImage(0);
    setType("zbornik2");
    setCount(27);
  }
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
          className={`${image == -1 ? "hidden" : ""} bg-best-blue-900 bg-opacity-50 fixed top-0 w-[100vw] h-[100vh] z-50`}
        >
          <div
            className="absolute top-0 left-0 my-5 mx-10 text-xl"
            onClick={() => setImage(-1)}
          >
            X
          </div>
          <div
            id="prev"
            className="absolute left-0 top-[45vh] py-7 md:py-20 px-3 md:px-10 bg-best-blue-900 bg-opacity-50 text-xl"
            onClick={() => setImage((((image - 1) % count) + count) % count)}
          >
            &lt;
          </div>
          <div
            id="next"
            className="absolute right-0 top-[45vh] py-7 md:py-20 px-3 md:px-10 bg-best-blue-900 bg-opacity-50  text-xl"
            onClick={() => setImage((((image + 1) % count) + count) % count)}
          >
            &gt;
          </div>
          <div className="flex items-center h-[100vh] w-[100vw] justify-center align-middle">
            <div className="items-center md:m-20">
              {type == "zbornik" ? (
                <Link href={`/${type}/0.pdf`}>
                  <Image
                    src={`/${type}/${image}.png`}
                    alt="poster"
                    width={900}
                    height={500}
                  />
                </Link>
              ) : (
                <Link href={`/${type}/${image}.pdf`}>
                  <Image
                    src={`/${type}/${image}.jpg`}
                    alt="poster"
                    width={900}
                    height={500}
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className={`${!subHidden ? "hidden" : ""}`}>
          <div className="w-[100%] min-h-[100%] pt-24 mb-20">
            <h1 className="text-2xl md:text-4xl mb-12">
              Zbornik povzetkov konference 2024
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                <div
                  className="transition hover:-translate-y-10 flex justify-center mx-2"
                  onClick={() => showZbornik()}
                >
                  <Popin>
                    <Image
                      className=""
                      src={`/zbornik/0.png`}
                      alt="poster"
                      height={433}
                      width={433}
                    />
                  </Popin>
                  <div
                    className="transition hover:-translate-y-10 flex justify-center mx-2"
                    onClick={() => showZbornik2()}
                  >
                    <Popin>
                      <Image
                        className=""
                        src={`/zbornik2/0.jpg`}
                        alt="poster"
                        height={433}
                        width={433}
                      />
                    </Popin>
                </div>
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl mb-12">Poster minute 2024</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-14">
              {posterData.map(({ id, avtorji, naslov }) => (
                <div
                  key={id}
                  className="w-80 transition hover:-translate-y-10 flex justify-center mx-2"
                  onClick={() => showPoster(id)}
                >
                  <Popin>
                    <Image
                      src={`/poster/${id}.jpg`}
                      alt="poster"
                      height={333}
                      width={333}
                    />
                    {id == 0 ? (
                      <p className="w-80 uppercase text-red-500 bg-white opacity-50">
                        Poster originalno objavlen na Slovenskih kemijskih
                        dnevih 2024.
                      </p>
                    ) : (
                      ""
                    )}
                    <p className="w-80 uppercase font-bold text-best-blue-900 bg-white opacity-50">
                      {naslov}
                    </p>
                    <p className="w-80 text-best-blue-900 bg-white opacity-50">
                      {avtorji.map((item: string, index: number) => (
                        <span key={index}>
                          {item}
                          {index < avtorji.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
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
