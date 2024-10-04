import CompanyP from "@/app/components/compnay-present";
export default function Page() {
  return (
    <>
      <CompanyP>
        <div>
          <h1 className="mt-12 text-4xl">NIB</h1>

          <p className="mt-7">
            Nacionalni inštitut za biologijo (NIB) je eden izmed neodvisnih
            javnih raziskovalnih inštitutov za naravoslovne vede v Sloveniji.
            Inštitut izvaja široko paleto med seboj prepletajočih in
            dopolnjujočih se raziskav. Izvajamo tako temeljne kot uporabne
            biološke raziskave, pri čemer gre za tesno prepletanje s kemijo,
            fiziko, agronomijo, medicino, računalništvom in še drugimi
            naravoslovnimi vedami.
          </p>

          <p className="mt-7">
            V Nacionalnem inštitutu za biologijo se srečajo 4 raziskovalni
            oddelki, ki pomembno prispevajo k znanstveni odličnosti Slovenije:
          </p>

          <ul className="list-disc">
            <li className="ml-8">
              Oddelek za biotehnologijo in sistemsko biologijo: s proučevanjem
              rastlin, njihovih škodljivcev in mikroorganizmov do izboljšav
              kmetijstvu, biotehnologiji, prehrambeni in farmacevtski
              industriji.
            </li>
            <li className="ml-8">
              Oddelek za genetsko toksikologijo in biologijo raka: raziskave, ki
              širijo znanje o raku in genotoksičnih snoveh v okolju ter
              raziskave na področju imunologije in celične imunoterapije.
            </li>

            <li className="ml-8">
              Oddelek za raziskave organizmov in ekosistemov: proučevanje
              bioloških procesov od nivoja celice do celotnih ekosistemov za
              celostno razumevanje biodiverzitete, delovanja organizmov in
              njihove funkcije v okolju.
            </li>

            <li className="ml-8">
              Morska biološka postaja Piran: osrednja slovenska ustanova za
              raziskovanje morskih in obalnih ekosistemov. Raziskave nudijo
              smernice za razvoj morske biotehnologije v regiji.
            </li>
          </ul>
          <p className="mt-7">
            NIB deluje v novozgrajenem Biotehnološkem stičišču v Ljubljani in na
            Morski biološki postaji Piran. Delovanje inštituta je močno vpeto v
            slovenski in svetovni znanstveni prostor. Sodobna raziskovalna
            oprema Biotehnološkega stičišča pomeni izboljšanje raziskovalne
            odličnosti ter nove priložnosti za raziskovalce. Delovanje
            Nacionalnega inštituta za biologijo je močno vpeto v slovenski in
            svetovni znanstveni prostor, saj se povezujemo in sodelujemo z
            raziskovalnimi ustanovami z vseh koncev sveta. Zelo tesno sodelujemo
            z različnimi ustanovami v Evropski uniji.
          </p>
        </div>
      </CompanyP>
    </>
  );
}
