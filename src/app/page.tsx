import Card from "./components/card";
import Hero from "./components/hero";
const cards: {
  subtitle: {text: string, textClass: string};
  title: {text:string, textClass: string};
  text: { text: string; key: string, textClass: string }[];
  image: string;
  dateDay: string;
  dateMonth: string;
  key: string;
  readMore: string;
}[] = [
  {
    subtitle: {text: "Konferenca", textClass:""},
    title: {text: "Nič več znanstvena fantastika: AI in napredne tehnologije v znanosti", textClass:""},
    text: [
      {
        text: "Konferenca je sestavljena iz simpozija, okroglih miz, stojnic podjetij in Poster minute. Na simpoziju o naprednih tehnologijah in znanosti in okrogli mizi na temo bioinformatike boste lahko prisluhnili strokovnjakom iz industrije, fakultet in vodilnih podjetij iz industrije.",
        key: "2.1",
        textClass: "",
      },
      {
        text: "Potekalo bo tudi mreženje študentov in podjetij na stojnicah (PARTNERJI). Študenti lahko oddate poster svojega diplomskega, magistrskega, doktorskega ali raziskovalnega dela. Poster bo razstavljen na dogodku, kar ga lahko pridete predstaviti. Objavljen bo tudi na spletni strani (PUBLIKACIJE).",
        key: "2.2",
        textClass: "",
      },
    ],
    image: "/mockimage3.png",
    dateDay: "22",
    dateMonth: "OKT",
    key: "2",
    readMore: "/conference", 
  },
  {
    subtitle: {text: "delavnice", textClass:""},
    title: {text: "Interaktivne delavnice", textClass:""},
    text: [
      {
        text: "Kratke interaktivne delavnice študentom omogočajo, da znotraj 2 ur pridobijo praktično-uporabne izkušnje in znanja, za kar se jim podeli certifikat.",
        key: "1.1",
        textClass: "",
      },
      {
        text: "Letos jih prirejamo v sodelovanju s Krko, Novartisom, Pipistrelom in Tehnološkim parkom.",
        key: "1.2",
        textClass: "",
      },
    ],
    image: "/mockimage1.png",
    dateDay: "23",
    dateMonth: "OKT",
    key: "1",
    readMore: "/workshops", 
  },
  {
    subtitle: {text: "Študija primera", textClass:""},
    title: {text: "Case Study", textClass:""},
    text: [
      {
        text: 'Na študiji primera ("Case Study") lahko študenti pokažejo svoje znanje, sposobnosti reševanja problemov in dela v skupini, za kar lahko osvojijo tudi denarne nagrade.',
        key: "3.1",
        textClass: "",
      },
      {
        text: "Organiziramo jo v sodelovanju z Lek-om.",
        key: "3.2",
        textClass: "",
      },
    ],
    image: "/mockimage2.png",
    dateDay: "24",
    dateMonth: "OKT",
    key: "3",
    readMore: "/study-case", 
  },
];
export default function Home() {
  return (
    <main>
      <div>
        <Hero
          title="Best dnevi znanosti"
          text="Interdisciplinarni strokovno-izobraževalni dogodek, ki ga organiziramo člani neprofitnega študentskega društva BEST Ljubljana (angl. Board of European Students of Technology). V okviru dogodka organiziramo konferenco, delavnice in študijo primera."
          buttonText=""
        />
      </div>
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
        />
      ))}
    </main>
  );
}
