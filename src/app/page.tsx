"use client";
import Card from "./components/card";
import Hero from "./components/hero";
import Popin from "./components/popin";

const cards: {
  subtitle: { text: string; textClass: string };
  title: { text: string; textClass: string };
  text: { text: string; key: string; textClass: string }[];
  image: string;
  dateDay: string;
  dateMonth: string;
  key: string;
  readMore: string;
  register: string;
}[] = [
    {
      subtitle: { text: "Konferenca", textClass: "" },
      title: {
        text: "Nič več znanstvena fantastika: AI in napredne tehnologije v znanosti",
        textClass: "",
      },
      text: [
        {
          text: "Konferenca je sestavljena iz simpozija, okrogle mize, stojnic podjetij in Poster minute.",
          key: "2.1",
          textClass: "",
        },
        {
          text: "Na simpoziju “AI in napredne tehnologije v znanosti” in okrogli mizi na temo bioinformatike boste lahko prisluhnili strokovnjakom z inštitutov, fakultet in vodilnih podjetij iz industrije.",
          key: "2.2",
          textClass: "",
        },
        {
          text: "Potekalo bo tudi mreženje študentov in podjetij na stojnicah (PARTNERJI) in predstavitev diplomskih, magistrskih, doktorskih in raziskovalnih del študentov na plakatih (POSTER MINUTE 2024).",
          key: "2.3",
          textClass: "",
        },
      ],
      image: "/mockimage3.png",
      dateDay: "22",
      dateMonth: "OKT",
      key: "2",
      readMore: "/conference",
      register: "https://forms.gle/d7zSiyPxhuyjQqjC7",
    },
    {
      subtitle: { text: "delavnice", textClass: "" },
      title: { text: "Interaktivne delavnice", textClass: "" },
      text: [
        {
          text: "Kratke interaktivne delavnice študentom omogočajo, da znotraj 2 ur pridobijo praktično-uporabne izkušnje in znanja, za kar se jim podeli certifikat. Število mest je omejeno.",
          key: "1.1",
          textClass: "",
        },
        {
          text: "Letos jih prirejamo v sodelovanju s Krko, Novartisom, Pipistrelom in Tehnološkim parkom.",
          key: "1.2",
          textClass: "",
        },
      ],
      image: "/mockimage2.png",
      dateDay: "23",
      dateMonth: "OKT",
      key: "1",
      readMore: "/workshops",
      register: "https://forms.gle/ek6Gvo43GRP4GXNm6",
    },
    {
      subtitle: { text: "Študija primera", textClass: "" },
      title: { text: "Case Study", textClass: "" },
      text: [
        {
          text: "Na študiji primera (“Case Study”) lahko študenti pokažejo svoje znanje, sposobnosti reševanja problemov in dela v skupini, za kar lahko osvojijo tudi denarne nagrade.",
          key: "3.1",
          textClass: "",
        },
        {
          text: "Organiziramo jo v sodelovanju z Lekom.",
          key: "3.2",
          textClass: "",
        },
      ],
      image: "/mockimage1.png",
      dateDay: "24",
      dateMonth: "OKT",
      key: "3",
      readMore: "/study-case",
      register: "https://forms.gle/C56YNVq4RQXz5Rxm6",
    },
  ];
export default function Home() {
  return (
    <main>
      <Popin>
        <Hero title="Best dnevi znanosti" buttonText="">
          <div className="text-sm md:text-3xl flex justify-center">
            <div className="md:w-[75%]">
            <p>
              <span className="font-bold">
                Interdisciplinarni strokovno-izobraževalni dogodek
              </span>
              , ki ga organiziramo člani neprofitnega študentskega društva{" "}
              <span className="font-bold">BEST Ljubljana</span> (angl. Board of
              European Students of Technology).
            </p>
<p className="mt-2">
              V okviru dogodka organiziramo{" "}
              <span className="font-bold">konferenco, delavnice</span> in{" "}
              <span className="font-bold">študijo primera</span>.
            </p>
            </div>
          </div>
        </Hero>
      </Popin>
      {cards.map((card) => (
          <Card
            subtitle={card.subtitle}
            title={card.title}
            text={card.text}
            image={card.image}
            readMore={card.readMore}
            dateDay={card.dateDay}
            dateMonth={card.dateMonth}
            key={card.key}
            register={card.register}
          />
      ))}
    </main>
  );
}
