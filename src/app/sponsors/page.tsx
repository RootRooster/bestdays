import Bubble from "../components/sponsor-bubble";
export default function Page() {
  const goldSponsors = [{ name: "LEK", url: "/logos/lek.png" }];
  const silverSponsors = [
    { name: "KRKA", url: "/logos/krka.png" },
    { name: "NOVARIS", url: "/logos/novaris.svg" },
    { name: "PIPISTREL", url: "/logos/pipistrel.png" },
  ];
  const bronzeSponsors = [
    { name: "IJS", url: "/logos/ijs.jpg" },
    { name: "IXTLAN", url: "/logos/ixtlan.png" },
    { name: "METRONIK", url: "/logos/metronik.svg" },
    { name: "NIB", url: "/logos/nib.png" },
  ];
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <h1 className="md:text-7xl text-5xl text-center font-bold uppercase mt-32">
          diamantni sponzor
        </h1>
        <div className="w-full mb-52 mt-20 md:flex md:flex-row justify-center lg:px-32">
          {goldSponsors.map((sponsor) => (
            <Bubble
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.url}
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
              size="56"
              borderColor="border-slate-400"
            />
          ))}
        </div>
      </div>
    </>
  );
}
