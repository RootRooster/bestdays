import Hero from "../components/hero";

export default function Page() {
  const textParagraphs = [
    "V torek, 22. oktobra, bo v sklopu dogodka BEST dnevi znanosti potekala predstavitev na plakatih ali Poster minute.",
    "Na plakatu lahko predstaviš svoje diplomsko, magistrsko, doktorsko ali drugo raziskovalno delo.",
    "Plakat bo razstavljen na dogodku in ga lahko prideš tudi predstavit. Objavljen pa bo tudi na spletni strani dogodka BEST dnevi znanosti.",
    "Oddaja je odprta za študente vseh fakultet, katerih raziskovalna dela se navezujejo na vsaj eno izmed sledečih področij: kemija, biokemija, računalništvo in tehnologija.",
    "Oddaja je odprta do petka, 4. oktobra, oddaje pa zbiramo preko spodnjega obrazca, število mest je omejeno.",
    "V primeru vprašanj nam piši na: bdz@bestljubljana.si."
  ];

  return (
    <>
      <Hero
        title="Oddaj svoj POSTER - Poster minute 2024"
        texts={textParagraphs}
        buttonText="Oddaj poster"
      />      
    </>
  );
}

  
