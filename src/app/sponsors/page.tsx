import Image from "next/image";
import Bubble from "../components/sponsor-bubble";
export default function Page() {
  const goldSponsors = [
    { name: "IJS", url: "/logos/ijs.jpg" },
    { name: "IXTLAN", url: "/logos/ixtlan.png" },
    { name: "KRKA", url: "/logos/krka.png" },
  ];
  const silverSponsors = [
    { name: "LEK", url: "/logos/lek.png" },
    { name: "METRONIK", url: "/logos/metronik.svg" },
    { name: "NIB", url: "/logos/nib.png" },
  ];
  const bronzeSponsors = [
    { name: "NOVARIS", url: "/logos/novaris.png" },
    { name: "PIPISTREL", url: "/logos/pipistrel.png" },
  ];
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <h1 className="md:text-7xl text-5xl text-center font-bold uppercase mt-32">zlati sponzorji</h1>
        <div className="w-full mb-52 mt-20 md:flex md:flex-row justify-between lg:px-32">
          {goldSponsors.map((sponsor) => (
            <Bubble
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.url}
              size="52"
            />
          ))}
        </div>
        <h1 className="md:text-7xl text-5xl text-center font-bold uppercase">srebrni sponzorji</h1>
        <div className="w-full mb-52 mt-20 md:flex md:flex-row justify-between lg:px-64">
          {silverSponsors.map((sponsor) => (
            <Bubble
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.url}
              size="32"
            />
          ))}
        </div>
        <h1 className="md:text-7xl text-5xl text-center font-bold uppercase">bronasti sponzorji</h1>
        <div className="w-full mb-52 mt-20 md:flex md:flex-row justify-between lg:px-96">
          {bronzeSponsors.map((sponsor) => (
            <Bubble
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.url}
              size="20"
            />
          ))}
        </div>
      </div>
    </>
  );
}
