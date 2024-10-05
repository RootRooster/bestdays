import Card from "../components/team-card";

export default function Page() {
  const teamMembers = [
    { name: "Zara Bunc", role: "Glavna organizatorka", image: "Zara.jpg" },
    { name: "Neža Bajec", role: "Program", image: "Neža.jpg" },
    {
      name: "Špela Blaznik",
      role: "Stiki s podjetji",
      image: "Špela.jpg",
    },
    { name: "Lara Likar", role: "Stiki z udeleženci", image: "Lara.jpg" },
    { name: "Tinkara Korošec", role: "Ekipa za program", image: "Tinkara.jpg" },
    { name: "Neja Brumec", role: "Ekipa za program", image: "Neja.jpg" },
    {
      name: "Karin Kunstelj",
      role: "Ekipa za program",
      image: "Karin.jpg",
    },
    {
      name: "Lucija Kovaček",
      role: "Ekipa za PR",
      image: "Lucija.jpg",
    },
    {
      name: "Deni Krašna",
      role: "Ekipa za PR",
      image: "Deni.jpg",
    },

    { name: "Manca Simončič", role: "Logistika", image: "Manca.jpg" },
    { name: "Nik Čadež", role: "IT", image: "Nik.jpg" },
  ];
  return (
    <>
      <div className="flex justify-center flex-col">
        <div className="my-20 mx-20 md:mx-32">
          <h2 className="text-base uppercase">Organizacijska ekipa</h2>
          <h1 className="md:text-7xl text-5xl font-bold uppercase">
            Ekipa BEST dnevov znanosti 2024
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 justify-items-center mb-52 mx-20 md:mx-32">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
