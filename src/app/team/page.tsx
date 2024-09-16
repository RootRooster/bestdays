import Card from "../components/team-card";
import Image from "next/image";

export default function Page() {
  const teamMembers = [
    { name: "Zara Bunc", role: "Lead Organizer", image: "Zara.jpg" },
    { name: "Neža Bajec", role: "Event Coordinator", image: "Neža.jpg" },
    {
      name: "Špela Blaznik",
      role: "Marketing Specialist",
      image: "Špela.jpg",
    },
    { name: "Lara Likar", role: "Logistics Manager", image: "Lara.jpg" },
    { name: "Tinkara Korošec", role: "Design Lead", image: "Tinkara.jpg" },
    { name: "Neja Brumec", role: "Volunteer Coordinator", image: "Neja.jpg" },
    {
      name: "Karin Kunstelj",
      role: "Sponsorship Manager",
      image: "Karin.jpg",
    },
    {
      name: "Lucija Kovaček",
      role: "Social Media Manager",
      image: "Lucija.jpg",
    },
    { name: "Manca Simončič", role: "Content Creator", image: "Manca.jpg" },
    { name: "Nik Cadez", role: "Special Projects Lead", image: "Nik.jpg" },
    {
      name: "Deni Krasna",
      role: "Professional paraglider",
      image: "Deni.jpg",
    },
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
