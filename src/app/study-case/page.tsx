import Section from "./components/section";

export default function Page() {
  const textParagraphs = [
    <><strong>Lek j</strong>e vodilni ponudnik sodobnih bioloških zdravil in eden glavnih ponudnikov generičnih zdravil v Sloveniji.</>,
    <>Proizvodnja aseptičnih izdelkov je ključni proces v <strong>farmacevtski industriji</strong>, ki zahteva neprekinjeno pozornost, natančnost in strokovno usposobljenost, ter <strong>visoke zahteve po sterilnosti.</strong></>,
    <>Inovativne rešitve, tehnološki napredek in tesno sodelovanje med strokovnjaki različnih področij so ključni za uspešno premagovanje ovir v tem nenehno izzivalnem področju. V zdravilih, ki jih razvijamo in izdelujemo, združujemo desetletja izkušenj in strokovnega znanja.</>,
    <>Proizvodnja sledi strogim <strong>mednarodnim standardom kakovosti</strong> (kot na primer dobra proizvodna praksa; ang. Good Manufacturing Practice - GMP).</>,
    <>Sodelovanje pri <strong>Lekovem Case Study-ju</strong> je odlična priložnost za pridobitev dragocenih izkušenj in vpogleda v vrhunske prakse, ki oblikujejo prihodnost proizvodnje.</>,
    <>Prijavi se s svojo ekipo do <strong>4 tekmovalcev</strong>, najdi inovativno rešitev in se poteguj za <strong>denarne nagrade</strong>!</>
  ];

  return (
    <div className="flex flex-col">
      <Section
        title="Spoprijamanje z odstopi v aseptičnem okolju"
        subtitle="LEK"
        text={textParagraphs}
        imageSrc="/book.png"
        imageAlt="book and chem"
      />
    </div>
  );
}
