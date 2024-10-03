import Hero from "../components/hero";

export default function Page() {
  const textParagraphs = [
    "V torek, 22. oktobra, bo v sklopu dogodka BEST dnevi znanosti potekala predstavitev na plakatih ali Poster minute.",
    "Na plakatu lahko predstaviš svoje diplomsko, magistrsko, doktorsko ali drugo raziskovalno delo.",
    "Plakat bo razstavljen na dogodku in ga lahko prideš tudi predstavit. Objavljen pa bo tudi na spletni strani dogodka BEST dnevi znanosti.",
    "Oddaja je odprta za študente vseh fakultet, katerih raziskovalna dela se navezujejo na vsaj eno izmed sledečih področij: kemija, biokemija, računalništvo in tehnologija.",
    "Oddaja je odprta do petka, 4. oktobra, oddaje pa zbiramo preko spodnjega obrazca, število mest je omejeno.",
    "V primeru vprašanj nam piši na: bdz@bestljubljana.si.",
  ];

  return (
    <>
      <div className="justify-center flex min-h-[100vh]">
        <div className="justify-start w-[80%] md:w-[60%] mt-20 md:max-w-[50rem]">
          <h1 className="text-2xl md:text-4xl mb-12">
            Oddaj svoj POSTER - Poster minute 2024
          </h1>

          <div className="pt-6 pb-12">
            <p>
              V torek, 22. oktobra, bo v sklopu dogodka BEST dnevi znanosti
              potekala predstavitev na plakatih ali Poster minute.
            </p>

            <p className="mt-12">
              Na plakatu lahko predstaviš svoje diplomsko, magistrsko, doktorsko
              ali drugo raziskovalno delo.
            </p>

            <p className="mt-12">
              Plakat bo razstavljen na dogodku in ga lahko prideš tudi
              predstaviti. Objavljen pa bo tudi na spletni strani dogodka BEST
              dnevi znanosti.
            </p>

            <p className="mt-12">
              Oddaja je odprta za študente vseh fakultet, katerih raziskovalna
              dela se navezujejo na vsaj eno izmed sledečih področij: kemija,
              biokemija, računalništvo in tehnologija.
            </p>

            <p className="mt-12">
              Oddaja je odprta do petka, 4. oktobra, oddaje pa zbiramo preko
              spodnjega obrazca, število mest je omejeno.
            </p>

            <p className="mt-12">
              V primeru vprašanj nam piši na: bdz@bestljubljana.si
            </p>
          </div>
          <div
            className={`flex columns-2 duration-300 justify-start mt-12 md:mt-20`}
          >
            <a
              className={`transition ease-in-out delay-150 hover:scale-110 hover:-translate-y-1 bg-best-blue-100 shadow-md hover:shadow-xl font-bold p-5 md:px-20 text-xl md:text-base px-32 rounded-full text-best-blue-900`}
              href="https://forms.gle/Dm2HiuRQs7YRjd1a7"
            >
              ODDAJ POSTER
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
