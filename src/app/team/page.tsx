import Card from "../components/team-card";

export default function Page() {
  const teamMembers = [
    {
      name: "Zara Bunc",
      role: "Glavna organizatorka",
      image: "Zara.jpg",
      link: "https://www.linkedin.com/in/zara-bunc-46602129b",
    },
    {
      name: "Neža Bajec",
      role: "Program",
      image: "Neža.jpg",
      link: "https://www.linkedin.com/in/neža-bajec-207407275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Špela Blaznik",
      role: "Stiki s podjetji",
      image: "Špela.jpg",
      link: "www.linkedin.com/in/špela-blaznik-925b94278 ",
    },
    {
      name: "Lara Likar",
      role: "Stiki z udeleženci",
      image: "Lara.jpg",
      link: "https://www.linkedin.com/in/lara-likar-ba2285304/",
    },
    {
      name: "Tinkara Korošec",
      role: "Ekipa za program",
      image: "Tinkara.jpg",
      link: "https://www.linkedin.com/in/tinkara-korošec-035a71261/",
    },
    {
      name: "Neja Brumec",
      role: "Ekipa za program",
      image: "Neja.jpg",
      link: "",
    },
    {
      name: "Karin Kunstelj",
      role: "Ekipa za program",
      image: "Karin.jpg",
      link: "https://www.linkedin.com/in/karin-kunstelj-4b005b2b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS0%2Bza4dTTcaek3dAv%2F4X1A%3D%3D",
    },
    {
      name: "Lucija Kovaček",
      role: "Ekipa za PR",
      image: "Lucija.jpg",
      link: "www.linkedin.com/in/lucija-kovaček-552975323",
    },
    {
      name: "Deni Krašna",
      role: "Ekipa za PR",
      image: "Deni.jpg",
      link: "https://www.linkedin.com/in/deni-krasna-796b2a300/?trk=people-guest_people_search-card&originalSubdomain=si",
    },
    { name: "Manca Simončič", role: "Logistika", image: "Manca.jpg", link: "" },
    { name: "Nik Čadež", role: "IT", image: "Nik.jpg", link: "https://www.linkedin.com/in/nik-%C4%8Dade%C5%BE-2068861b4/" },
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
              link={member.link}
            />
          ))}
        </div>
        <div className="m-3 mb-20 justify-center flex">
          <div className="rounded-2xl bg-gradient-to-r from-best-blue-100 to-best-blue-900 md:w-[50vw]">
            <div className="justify-center title text-sm my-5 mx-3 md:mx-10">
              BEST LJUBLJANA
            </div>
            <div className="justify-center flex md:my-10">
              <div className="hero text-xl font-bold text-center md:text-4xl md:w-[70%] justify-center">
                Začni svoja najboljša študentska leta v društvu BEST Ljubljana
              </div>
            </div>
            <div className="flex my-5 justify-center">
              <div className="button bg-black rounded-full text-center w-52 p-3 mb-4 hover:animate-spin transition animate-bounce">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfwvSfqM0WlfA4zWXTKv2_2HVroYr9hPaHIAUrl1V18Xw-heA/viewform">
                  PRIDRUŽI SE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
