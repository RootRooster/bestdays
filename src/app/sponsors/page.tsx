import Bubble from "../components/sponsor-bubble";
export default function Page() {
  const goldSponsors = [
    { name: "LEK", url: "/logos/lek.png", linkurl: "/sponsors/lek" },
    { name: "PARK", url: "/logos/park.svg", linkurl: "/sponsors/park" },
    { name: "GENI", url: "/logos/lek.png", linkurl: "/sponsors/geni" },
    { name: "TECH", url: "/logos/tech.pdf", linkurl: "/sponsors/tech" },
  ]; 
  const silverSponsors = [
    { name: "KRKA", url: "/logos/krka.png", linkurl: "/sponsors/krka" },
    { name: "NOVARIS", url: "/logos/novaris.svg", linkurl: "/sponsors/novartis" },
    { name: "NFL", url: "/logos/nfl.png", linkurl: "/sponsors/nfl" },
    {
      name: "PIPISTREL",
      url: "/logos/pipistrel.png",
      linkurl: "/sponsors/pipistrel",
    },
  ];
  const bronzeSponsors = [
    { name: "IJS", url: "/logos/ijs.jpg", linkurl: "/sponsors/ijs" },
    { name: "IXTLAN", url: "/logos/ixtlan.png", linkurl: "" },
    { name: "METRONIK", url: "/logos/metronik.svg", linkurl: "/sponsors/metronik" },
    { name: "NIB", url: "/logos/nib.png", linkurl: "/sponsors/nib" },
  ];
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <h1 className="md:text-7xl text-5xl text-center font-bold uppercase mt-32">
          diamantni sponzor
        </h1>
        <div className="w-full mb-52 mt-20 md:grid md:grid-cols-3 justify-center lg:px-32">
          {goldSponsors.map((sponsor) => (
            <Bubble
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.url}
              linkUrl={sponsor.linkurl}
              size="96"
              borderColor="border-sky-400"
            />
          ))}
        </div>
        <h1 className="md:text-7xl text-5xl text-center font-bold uppercase">
          zlati sponzorji
        </h1>
        <div className="w-full mb-52 mt-20 grid grid-cols-1 md:grid-cols-3">
          {silverSponsors.map((sponsor) => (
            <Bubble
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.url}
              linkUrl={sponsor.linkurl}
              size="72"
              borderColor="border-yellow-500"
            />
          ))}
        </div>
        <h1 className="md:text-7xl text-5xl text-center font-bold uppercase">
          srebrni sponzorji
        </h1>
        <div className="w-full mb-52 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {bronzeSponsors.map((sponsor) => (
            <Bubble
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.url}
              linkUrl={sponsor.linkurl}
              size="56"
              borderColor="border-slate-400"
            />
          ))}
        </div>
      </div>
    </>
  );
}
