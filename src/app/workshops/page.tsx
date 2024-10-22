import Section from "../components/section";
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex justify-center flex-col my-40">
      <Section
        subtitle="KRKA"
        title="Virtualni Krkin laboratorij in reševanje farmacevtskega izziva"
        imageSrc="/microscope.png"
        imageAlt="Krka Image"
      >
        <div className="py-6">
          <p>
            Vabljeni na navdihujočo delavnico z raziskovalci iz Krke! Pridružite
            se nam na edinstveni delavnici, kjer vam bodo Krkini raziskovalci
            razkrili skrivnosti razvoja in proizvodnje njihovih generičnih
            zdravil. S pomočjo mešane resničnosti boste vstopili v svet vrhunske
            Krkine tehnologije in doživeli proces, kot ga vidijo strokovnjaki.
          </p>
          <br />
          <h2 className="mt-4 font-bold">Kaj vas čaka?</h2>
          <br />

          <p className="mt-2">
            <span className="font-bold">Ekskluzivni vpogled:</span> Spoznajte,
            kako poteka razvoj in proizvodnja Krkinih zdravilnih učinkovin ter
            zdravil, od začetne ideje do končnega izdelka.
          </p>
          <br />

          <p className="mt-2">
            <span className="font-bold">Interaktivna izkušnja:</span> S pomočjo
            mešane resničnosti boste doživeli tehnologijo, ki poganja Krkine
            inovacije.
          </p>
          <br />

          <p className="mt-2">
            <span className="font-bold">Reševanje izzivov:</span> Združite moči
            s študenti različnih smeri in skupaj rešite modelni problem v
            proizvodnji zdravila.
          </p>
          <br />

          <p className="mt-2">
            <span className="font-bold">Analiza podatkov:</span> Na podlagi
            analiznih in tehnoloških podatkov boste identificirali odstopanja in
            našli rešitve za izboljšanje procesa. Cilj delavnice je povezovanje
            znanj in izkušenj študentov različnih smeri za reševanje  izzivov v
            farmacevtski industriji. Pridobite dragocene izkušnje, spoznajte
            nove ljudi in se potopite v svet farmacevtske industrije!
          </p>
        </div>
      </Section>

      <Section
        subtitle="NOVARTIS"
        title="Postani detektiv v farmacevtski proizvodnji"
        imageSrc="/zoom.png"
        imageAlt="Novartis Image"
      >
        <div className="py-6">
          <p>
            <span className="font-bold">Ste radovedni detektivski tip?</span> Bi
            se radi preizkusili v vznemirljivem svetu farmacevtske industrije?
          </p>
          <br />
          <p>Potem je naša delavnica ravno prava za vas!</p>
          <br />
          <ul className="list-disc pl-6 mt-2">
            <li>
              Na delavnici boste{" "}
              <span className="font-bold">
                reševali realen primer iz proizvodnje
              </span>
              , kar vam bo omogočilo{" "}
              <span className="font-bold">
                vpogled v izzive, s katerimi se tehnologi vsakodnevno spopadajo.
              </span>
            </li>
            <li className="mt-2">
              S pomočjo{" "}
              <span className="font-bold">analize podatkov in grafov</span> se
              boste podali na zanimivo raziskovalno pot, kjer boste iskali
              vzroke za težave in pomagali najti optimalne rešitve.
            </li>
            <li className="mt-2">
              Ne le to, delavnica vam bo omogočila{" "}
              <span className="font-bold">neposreden stik z Novartisom</span>,
              enim izmed vodilnih farmacevtskih podjetij. Spoznali boste njihov
              oddelek MS&T ter se{" "}
              <span className="font-bold">
                pogovarjali z izkušenimi strokovnjaki za tehnologije in znanost
              </span>
              .
            </li>
            <li className="mt-2">
              Ta priložnost vam omogoča, da se poglobite v različne aktivnosti
              farmacevtske proizvodnje ter pridobite neprecenljive{" "}
              <span className="font-bold">izkušnje</span>, ki vam bodo koristile
              pri vaši karierni poti.
            </li>
          </ul>

          <p className="mt-4">
            Ne zamudite te edinstvene priložnosti za{" "}
            <span className="font-bold">
              odkrivanje skrivnosti farmacevtske industrije in razvijanje svojih
              detektivskih spretnosti.
            </span>{" "}
            Pridružite se nam na delavnici!
          </p>
        </div>
      </Section>

      <Section
        subtitle="PIPISTREL"
        title="Inovacije v letalstvu s Pipistrel Velis Electro - Brez emisij med oblake"
        imageSrc="/plane.png"
        imageAlt="Pipistrel Image"
      >
        <div className="py-6">
          <p className="mt-2">
            Na delavnici si boste{" "}
            <span className="font-bold">
              skupaj z inženirji podjetja Pipistrel podrobneje pogledali letalo
              Velis Electro
            </span>
            , prvo certificirano popolnoma električno letalo na svetu. Spoznali
            boste značilnosti električnega letala ter prednosti napram
            konvecionalnim pogonom, glavne komponente elektro pogona ter vlogo
            vgrajene programske opreme in algoritmov za delovanje letala.
            Izvedeli boste kaj je EASA tipski certifikat ter kako poteka
            certificiranje programske opreme.
          </p>
          <br />
          <p className="mt-2">
            V drugem delu delavnice se boste posvetili{" "}
            <span className="font-bold">praktičnim vidikom uporabe letala</span>
            . Skupaj z inženirji boste preverili delovanje snemalnika leta in
            vizualizirali prodobljene podatke. V nadaljevanju si boste pobližje
            pogledali <span className="font-bold">kako poteka diagnostika</span>{" "}
            in katere vse zanimive informacije letalo še skriva pred uporabniki.
            Za zaključek boste izvedli še{" "}
            <span className="font-bold">
              nadgradnjo vgrajene programske opreme
            </span>
            .
          </p>
          <br />
          <p className="mt-2">
            Delavnica je namenjena vsem študentom, ki jih zanima preplet
            letalstva in tehnologije. Predhodno znanje o letalstvu ali razvoju
            programske opreme ni potrebno.
          </p>
        </div>
      </Section>

      <Section
        subtitle="TEHNOLOŠKI PARK"
        title="Raziskovanje nemogočega: Kako XR in AI preoblikujeta svet!"
        imageSrc="/vr.png"
        imageAlt="Technological Park Image"
      >
        <div className="py-6">
          <p className="mt-2">
            Vabimo vas na edinstveno delavnico, kjer boste raziskovali{" "}
            <span className="font-bold">
              osnove razširjene resničnosti (XR)
            </span>{" "}
            in umetne inteligence (AI)! Strokovnjaki iz Tehnološkega parka vam
            bodo predstavili osnove XR in AI ter razložili, kako te tehnologije
            spreminjajo različne industrije.
          </p>
          <br />
          <p className="mt-2 font-bold">Kaj boste doživeli?</p>
          <br />
          <p className="mt-2">
            <span className="font-bold">Uvod v XR in AI</span>: Spoznajte
            ključne pojme in praktične uporabe razširjene resničnosti ter umetne
            inteligence.
          </p>
          <br />
          <p className="mt-2">
            <span className="font-bold">Uporaba VR očal</span>: Z VR očali boste
            izkusili interaktivne simulacije in aplikacije, ki prepletajo
            resnični in digitalni svet.
          </p>
          <br />
          <p className="mt-2">
            <span className="font-bold">Pogled v prihodnost</span>: Pogovorili
            se bomo o potencialu XR in AI ter njihovem vplivu na razvojne
            procese v industriji.
          </p>
          <br />
          <p className="mt-2">
            Pridobite nova znanja in odkrijte, kako lahko XR in AI oblikujeta
            prihodnost!
          </p>
        </div>
        <br />
        <div className="flex mb-5">
        <Image
          src="/tehpark1.jpg"
          height={100}
          width={100}
          alt="logotip projekta digi-si"
        />

        <Image
          src="/tehpark1.png"
          height={100}
          width={1000}
          alt="logotip projekta digi-si"
        /></div>

        <div className="text-5xl font-bold">
          Število mest na delavnicah je omejeno!
        </div>
      </Section>
      <a href="https://forms.gle/ek6Gvo43GRP4GXNm6">
        <div className="flex justify-center m-24 bg-best-blue-100 text-best-blue-900 rounded-3xl px-7 py-3 sm:px-14 md:px-7">
          <div className="uppercase font-bold text-xs sm:text-base md:text-sm">
            Prijavi se
          </div>
        </div>
      </a>
    </div>
  );
}
