import Image from "next/image";
import Bubble from "../components/sponsor-bubble";
export default function Page() {
  const goldSponsors = [
    { name: "Merkator1", url: "/Mercator.png" },
    { name: "Merkator2", url: "/Mercator.png" },
    { name: "Merkator3", url: "/Mercator.png" },
  ];
  const silverSponsors = [
    { name: "Merkator4", url: "/Mercator.png" },
    { name: "Merkator5", url: "/Mercator.png" },
    { name: "Merkator6", url: "/Mercator.png" },
    { name: "Merkator7", url: "/Mercator.png" },
  ];
  const bronzeSponsors = [
    { name: "Merkator6", url: "/Mercator.png" },
    { name: "Merkator1", url: "/Mercator.png" },
    { name: "Merkator3", url: "/Mercator.png" },
    { name: "Merkator2", url: "/Mercator.png" },
    { name: "Merkatori", url: "/Mercator.png" },
    { name: "Merkator7", url: "/Mercator.png" },
  ];
  return (
    <>
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-7xl text-center font-bold uppercase mt-32">zlati sponzorji</h1>
        <div className="w-full grid grid-cols-3 mb-52 mt-20">
          {goldSponsors.map((sponsor) => (
            <Bubble
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.url}
              size="52"
            />
          ))}
        </div>
        <h1 className="text-7xl text-center font-bold uppercase">srebrni sponzorji</h1>
        <div className="w-full grid grid-cols-3 mb-52 mt-20">
          {silverSponsors.map((sponsor) => (
            <Bubble
              key={sponsor.name}
              name={sponsor.name}
              imageUrl={sponsor.url}
              size="32"
            />
          ))}
        </div>
        <h1 className="text-7xl text-center font-bold uppercase">bronasti sponzorji</h1>
        <div className="w-full grid grid-cols-3 mt-20 mb-52">
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
