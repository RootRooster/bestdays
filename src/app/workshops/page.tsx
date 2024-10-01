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
  text: `Vabljeni na navdihujočo delavnico z raziskovalci iz Krke!\n\n
Pridružite se nam na edinstveni delavnici, kjer vam bodo Krkini raziskovalci razkrili skrivnosti razvoja in proizvodnje njihovih generičnih zdravil. S pomočjo mešane resničnosti boste vstopili v svet vrhunske Krkine tehnologije in doživeli proces, kot ga vidijo strokovnjaki.\n\n
<b>Kaj vas čaka?</b>\n\n
<b>Ekskluzivni vpogled:</b> Spoznajte, kako poteka razvoj in proizvodnja Krkinih zdravilnih učinkovin ter zdravil, od začetne ideje do končnega izdelka.\n\n
<b>Interaktivna izkušnja:</b> S pomočjo mešane resničnosti boste doživeli tehnologijo, ki poganja Krkine inovacije.\n\n
<b>Reševanje izzivov:</b> Združite moči s študenti različnih smeri in skupaj rešite modelni problem v proizvodnji zdravila.\n\n
<b>Analiza podatkov:</b> Na podlagi analiznih in tehnoloških podatkov boste identificirali odstopanja in našli rešitve za izboljšanje procesa.\n\n
Cilj delavnice je povezovanje znanj in izkušenj študentov različnih smeri za reševanje izzivov v farmacevtski industriji. Pridobite dragocene izkušnje, spoznajte nove ljudi in se potopite v svet farmacevtske industrije!`,
  imageSrc: "/microscope.png",
  imageAlt: "mikroskop",
  isImageRight: true,
},
  {
  subtitle: "NOVARTIS",
  title: "Postani detektiv v farmacevtski proizvodnji",
  text: `<b>Si želiš preizkusiti svoje detektivske veščine v farmacevtski industriji?</b> Pridruži se naši delavnici in se sooči z izzivi, s katerimi se vsakodnevno srečujejo tehnologi v proizvodnji.\n\n
<b>Prevzel boš vlogo detektiva in obravnaval resnični primer iz proizvodnje.</b>\n\n
S pomočjo analize podatkov in grafov boš iskal vzrok za nastalo težavo ter pomagal najti optimalno rešitev.`,
  imageSrc: "/zoom.svg",
  imageAlt: "lupa",
  isImageRight: false,
},
{
  subtitle: "PIPISTREL",
  title: "Inovacije v letalstvu s Pipistrel Velis Electro",
  text: `Na delavnici si boste <b>skupaj z inženirji podjetja Pipistrel podrobneje pogledali letalo Velis Electro</b>, prvo certificirano popolnoma električno letalo na svetu. Spoznali boste značilnosti električnega letala ter prednosti napram konvecionalnim pogonom, glavne komponente elektro pogona ter vlogo vgrajene programske opreme in algoritmov za delovanje letala. Izvedeli boste kaj je EASA tipski certifikat ter kako poteka certificiranje programske opreme.\n\n
V drugem delu delavnice se boste posvetili <b>praktičnim vidikom uporabe letala</b>. Skupaj z inženirji boste preverili delovanje snemalnika leta in vizualizirali prodobljene podatke. V nadaljevanju si boste pobližje pogledali <b>kako poteka diagnostika</b> in katere vse zanimive informacije letalo še skriva pred uporabniki. Za zaključek boste izvedli še <b>nadgradnjo vgrajene programske opreme</b>.\n\n
Delavnica je namenjena vsem študentom, ki jih zanima preplet letalstva in tehnologije. Predhodno znanje o letalstvu ali razvoji programske opreme ni potrebno.`,
  imageSrc: "/plane.png",
  imageAlt: "letalo",
  isImageRight: true,
},
  {
  subtitle: "TEHNOLOŠKI PARK",
  title: "Osnove razširjene resničnosti (XR) in umetne inteligence (AI)",
  text: `Pridružite se nam, da odkrijete, kako sodobne tehnologije spreminjajo svet in industrijo. V sodelovanju z vrhunskimi strokovnjaki se boste seznanili z osnovami XR, kjer boste z uporabo očal za virtualno resničnost (VR) izkusili futuristične aplikacije in inovativne pristope.\n\n
<b>Uvod v XR in AI:</b> Spoznajte osnovne pojme razširjene resničnosti in umetne inteligence, njune praktične uporabe ter vpliv na različne industrijske panoge.\n\n
<b>Uporaba VR očal:</b> Z uporabo VR očal boste doživeli interaktivne simulacije in aplikacije, ki temeljijo na tehnologijah XR in AI. Iz prve roke boste izkusili svet, kjer tehnologija prepleta resničnost in digitalno okolje.\n\n
Skupaj s študenti različnih področij boste reševali izzive, ki temeljijo na podatkovno vodenih scenarijih in inteligentnih sistemih, ki jih poganja AI.\n\n
<b>Raziskovanje prihodnosti:</b> Pogovarjali se bomo o prihodnosti XR in umetne inteligence, njunem potencialu v industriji ter kako lahko ta tehnologija izboljša proizvodne in razvojne procese. Cilj delavnice je ponuditi praktičen vpogled v uporabo sodobnih tehnologij ter povezovanje znanj študentov različnih smeri. Pridobite nova znanja, izkušnje in odkrijte, kako lahko XR in AI vplivata na prihodnost industrije!`,
  imageSrc: "/vr.png",
  imageAlt: "VR očala",
  isImageRight: false,
},
  {
  subtitle: "",
  title: "Število mest na delavnicah je omejeno, zato se čim prej prijavi!",
  text:"",
  imageSrc: "",
  imageAlt: "",
  isImageRight: true,
}
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
