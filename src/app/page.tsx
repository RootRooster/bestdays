import Hero from "./components/hero";
import Section from "./components/section";
export default function Home() {
  return (
    <main>
      <Hero 
      title="Best dnevi znanosti"
      text="Strokovno-izobraževalni dogodek, namenjen študentom Fakultete za kemijo in kemijsko tehnologijo ter Fakultete za računalništvo in informatiko. Dogodek pripravljajo člani neprofitnega študentskega društva BEST Ljubljana (angl. “Board of European Students of Technology“). V okviru dogodka organiziramo konferenco delavnice in študijo primera.

        "
      />
      <Section 
        subtitle="Konferenca"
        title="AI in napredne tehnologije v znanosti"
        text="Konferenca je sestavljena iz simpozija, okrogle mize, stojnic podjetij in Poster minute"
        imageSrc="/image1.png"
        imageAlt="Microscope AI code atom technology"
        isImageRight={true}
      />
      <Section 
        subtitle="Delavnice"
        title="Delavnice"
        text="Kratke interaktivne delavnice študentom omogočajo, da znotraj 2 ur pridobijo praktično-uporabne izkušnje in znanja, za kar se jim podeli certifikat."
        imageSrc="/image2.png"
        imageAlt="Book workshop chemistry"
        isImageRight={false}
      />
      <Section 
        subtitle="Študiji primera"
        title="Case Study"
        text="Na študiji primera (“Case Study”) pa lahko študenti pokažejo svoje znanje in sposobnosti reševanja problemov ter dela v skupini, za kar lahko osvojijo tudi lepe nagrade."
        imageSrc="/image3.png"
        imageAlt="Stury teaching whiteboard"
        isImageRight={true}
      />
    </main>
  );
}
