import Card from "../components/team-card";

export default function Page() {
  const teamMembers = [
    { name: "Zara Bunc", role: "Lead Organizer" },
    { name: "Neža Bajec", role: "Event Coordinator" },
    { name: "Špela Blaznik", role: "Marketing Specialist" },
    { name: "Lara Likar", role: "Logistics Manager" },
    { name: "Tinkara Korošec", role: "Design Lead" },
    { name: "Neja Brumec", role: "Volunteer Coordinator" },
    { name: "Karin Kunstelj", role: "Sponsorship Manager" },
    { name: "Lucija Kovaček", role: "Social Media Manager" },
    { name: "Manca Simončič", role: "Content Creator" },
    { name: "Nik?", role: "Special Projects Lead" },
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
            />
          ))}
        </div>
      </div>
    </>
  );
}
