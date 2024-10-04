import Section from "../components/section";

export default function Page() {
  return (
    <div className="flex flex-col">
      <Section
        title="Spoprijemanje z odstopi v aseptičnem okolju"
        subtitle="LEK"
        imageSrc="/book.png"
        imageAlt="book and chem"
      >
        <div>
          <p className="mt-2">
            <span className="font-bold">Lek</span> je vodilni ponudnik sodobnih
            bioloških zdravil in eden glavnih ponudnikov generičnih zdravil v
            Sloveniji.
          </p>

          <br />
          <p className="mt-2">
            Proizvodnja aseptičnih izdelkov je ključni proces v{" "}
            <span className="font-bold">farmacevtski industriji</span>, ki
            zahteva neprekinjeno pozornost, natančnost in strokovno
            usposobljenost, ter{" "}
            <span className="font-bold">visoke zahteve po sterilnosti</span>.
            Inovativne rešitve, tehnološki napredek in tesno sodelovanje med
            strokovnjaki različnih področij so ključni za uspešno premagovanje
            ovir v tem nenehno izzivalnem področju. V zdravilih, ki jih
            razvijamo in izdelujemo, združujemo desetletja izkušenj in
            strokovnega znanja. Proizvodnja sledi strogim{" "}
            <span className="font-bold">mednarodnim standardom kakovosti</span>{" "}
            (kot na primer dobra proizvodna praksa; ang. Good Manufacturing
            Practice - GMP).
          </p>

          <br />
          <p className="mt-2">
            Sodelovanje pri{" "}
            <span className="font-bold">Lekovem Case Study-ju</span> je odlična
            priložnost za pridobitev dragocenih izkušenj in vpogleda v vrhunske
            prakse, ki oblikujejo prihodnost proizvodnje.
          </p>
          <br />

          <p className="mt-2">
            Prijavi se s svojo ekipo{" "}
            <span className="font-bold">
              do 4 tekmovalcev (lahko se prijaviš tudi sam in te v ekipo
              dodelimo)
            </span>
            , najdi inovativno rešitev in se poteguj za{" "}
            <span className="font-bold">denarne nagrade</span>!
          </p>
        </div>
      </Section>
    </div>
  );
}
