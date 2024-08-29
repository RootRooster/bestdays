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
          diamantni sponzorji
        </h1>
        <div className="w-full mb-52 mt-20 md:flex md:flex-row justify-center lg:px-32">
          {goldSponsors.map((sponsor) => (
            <Bubble
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.url}
              size="96"
            />
          ))}
        </div>
        <h1 className="md:text-7xl text-5xl text-center font-bold uppercase">
          zlati sponzorji
        </h1>
        <div className="w-full mb-52 mt-20 md:flex md:flex-row justify-between xl:px-64">
          {silverSponsors.map((sponsor) => (
            <Bubble
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.url}
              size="72"
            />
          ))}
        </div>
        <h1 className="md:text-7xl text-5xl text-center font-bold uppercase">
          srebrni sponzorji
        </h1>
        <div className="w-full mb-52 mt-20 md:flex md:flex-row justify-between 2xl:px-96">
          {bronzeSponsors.map((sponsor) => (
            <Bubble
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.url}
              size="56"
            />
          ))}
        </div>
      </div>
    </>
  );
}
