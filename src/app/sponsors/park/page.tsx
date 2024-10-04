import CompanyP from "@/app/components/compnay-present";
export default function Page() {
  return (
    <>
      <CompanyP>
        <div>
          <h1 className="mt-12 text-4xl">Tehnološki park</h1>

          <p className="mt-7">
            Tehnološki park Ljubljana je središče inovacij in razvoja, v katerem
            verjamejo v ustvarjanje boljšega sveta s pomočjo naprednih
            tehnologij. S skoraj 30-letno tradicijo in 32.000 m² poslovnih
            prostorov na Brdu predstavlja največji tehnološki park v Sloveniji.
            Povezuje tehnološka podjetja ter s številnimi pobudami in
            mednarodnim sodelovanjem spodbuja njihovo rast in razvoj na
            globalnem trgu.
          </p>

          <p className="mt-7">
            Cilj TP LJ je spodbujanje nastanka novih in rasti obstoječih
            tehnoloških podjetij ter prenos znanja iz raziskovalnih sfer v
            gospodarstvo. Sodeluje z različnimi akterji, kot so zbornice,
            univerze, inkubatorji in pospeševalniki, ter ustvarja podporni
            ekosistem, ki zagotavlja razvoj podjetništva, inovacij in
            internacionalizacijo.
          </p>

          <p className="mt-7">
            Izvaja seminarje, delavnice, meet-upe ter nudi individualna
            mentorstva za startup in scaleup podjetja. Ključna področja
            delovanja so:
          </p>
          <ol className="list-disc">
            <li className="ml-7">
              Splošno podjetništvo: Podpora pri razvoju poslovnih idej,
              predstavitvah pred investitorji in širjenju na globalne trge.
            </li>
            <li className="ml-7">
              Digitalno zdravstveno podjetništvo: Pomoč podjetjem z digitalnimi
              zdravstvenimi inovacijami pri vstopu v zahtevne zdravstvene
              ekosisteme.
            </li>
            <li className="ml-7">
              Tehnološko podjetništvo: Podpora podjetjem na področjih umetne
              inteligence, krožnega gospodarstva, virtualne in razširjene
              resničnosti ter tovarn prihodnosti.
            </li>
          </ol>

          <p className="mt-7">
            Vizija TP LJ je postati mednarodno prepoznaven tehnološki hub, kjer
            se srečujejo vrhunske tehnologije in podjetja, ki oblikujejo
            prihodnost. Poslanstvo TPLJ je podpirati tehnološka podjetja pri
            njihovi rasti in s tem prispevati k boljšemu svetu.
          </p>
        </div>
      </CompanyP>
    </>
  );
}
