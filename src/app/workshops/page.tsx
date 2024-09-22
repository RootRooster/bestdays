import Section from "../components/section";

const sections: {
  subtitle: string;
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  isImageRight: boolean;
}[] = [
  {
    subtitle: "KRKA",
    title: "Virtualni Krkin laboratorij in reševanje farmacevtskega izziva",
    text: "Vabljeni na navdihujočo delavnico z raziskovalci iz Krke!  Pridružite se nam na edinstveni delavnici, kjer vam bodo Krkini raziskovalci razkrili skrivnosti razvoja in proizvodnje njihovih generičnih zdravil. S pomočjo mešane resničnosti boste vstopili v svet vrhunske Krkine tehnologije in doživeli proces, kot ga vidijo strokovnjaki. ",
    imageSrc: "/microscope.png",
    imageAlt: "microscope",
    isImageRight: true,
  },
  {
    subtitle: "NOVARTIS",
    title: "Postani detektiv v farmacevtski proizvodnji",
    text: "Si želiš preizkusiti svoje detektivske veščine v farmacevtski industriji? Pridruži se naši delavnici in se sooči z izzivi, s katerimi se vsakodnevno srečujejo tehnologi v proizvodnji. Prevzel boš vlogo detektiva in obravnaval resnični primer iz proizvodnje. S pomočjo analize podatkov in grafov boš iskal vzrok za nastalo težavo ter pomagal najti optimalno rešitev.",
    imageSrc: "/zoom.svg",
    imageAlt: "microscope",
    isImageRight: false,
  },
  {
    subtitle: "PIPISTREL",
    title: "Inovacije v letalstvu s Pipistrel Velis Electro",
    text: "Na delavnici si boste skupaj z inženirji podjetja Pipistrel podrobneje pogledali letalo Velis Electro, prvo certificirano popolnoma električno letalo na svetu. Spoznali boste značilnosti električnega letala ter prednosti napram konvecionalnim pogonom, glavne komponente elektro pogona ter vlogo vgrajene programske opreme in algoritmov za delovanje letala. Izvedeli boste kaj je EASA tipski certifikat ter kako poteka certificiranje programske opreme.   V drugem delu delavnice se boste posvetili praktičnim vidikom uporabe letala. Skupaj z inženirji boste preverili delovanje snemalnika leta in vizualizirali prodobljene podatke. V nadaljevanju si boste pobližje pogledali kako poteka diagnostika in katere vse zanimive informacije letalo še skriva pred uporabniki. Za zaključek boste izvedli še nadgradnjo vgrajene programske opreme.   Delavnica je namenjena vsem študentom, ki jih zanima preplet letalstva in tehnologije. Predhodno znanje o letalstvu ali razvoji programske opreme ni potrebno.",
    imageSrc: "/plane.png",
    imageAlt: "microscope",
    isImageRight: true,
  },
  {
    subtitle: "TEHNOLOŠKI PARK",
    title: "Osnove razširjene resničnosti (XR) in umetne inteligence (AI)",
    text: "Pridružite se nam, da odkrijete, kako sodobne tehnologije spreminjajo svet in industrijo. V sodelovanju z vrhunskimi strokovnjaki se boste seznanili z osnovami XR, kjer boste z uporabo očal za virtualno resničnost (VR) izkusili futuristične aplikacije in inovativne pristope.",
    imageSrc: "/vr.png",
    imageAlt: "microscope",
    isImageRight: false,
  },
];
export default function Page() {
  return (
    <div className="flex justify-center flex-col my-40">
      {sections.map((section) => (<Section
        subtitle={section.subtitle}
        title={section.title}
        text={section.text}
        imageSrc={section.imageSrc}
        key={section.title}
        imageAlt={section.imageAlt}
        isImageRight={section.isImageRight}
      />))}
    </div>
  );
}
