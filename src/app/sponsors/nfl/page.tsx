import CompanyP from "@/app/components/compnay-present";
export default function Page() {
  return (
    <>
      <CompanyP>
        <div>
          <h1 className="mt-12 text-4xl">Nacionalni forenzični laboratorij</h1>
          <p className="mt-7">
            Nacionalni forenzični laboratorij (NFL) je specializirana notranja
            organizacijska enota generalne policijske uprave. Glavna naloga NFL
            je podajanje poročil o preiskavah in izvedenskih mnenj s področja
            forenzičnih znanosti.
          </p>
          <p className="mt-7">
            NFL je razdeljen na šest oddelkov. Oddelek za kemijske preiskave je
            zaradi posebnega načina analiziranja neznanih snovi oddelek z največ
            instrumentalne opreme. Prevladujejo kromatografske, masno
            spektrometrične in spektroskopske metode.
          </p>
          <p className="mt-7">
            Več kot 80 % zahtevkov za kemijske preiskave se nanaša na preiskave
            drog, med katere sodi tudi metodologija kemijskih karakterizacij in
            identifikacij novih psihoaktivnih substanc (NPS).
          </p>
        </div>
      </CompanyP>
    </>
  );
}
