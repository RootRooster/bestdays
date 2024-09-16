import Image from 'next/image';
export default function Card({ role, name, image }: { role: string; name: string, image: string }) {
  return (
    <>
      <div className="scale-110 h-64 w-48 bg-best-blue-900 flex justify-center flex-col items-center rounded-2xl">
        <div className="bg-white h-48 w-44 rounded-lg overflow-hidden">
          <Image
            src={`/team/${image}`}
            height={500}
            width={500}
            alt="Team member photo"
          />
        </div>
        <div className="flex justify-center flex-col items-center">
          <h4 className="text-sm">{role}</h4>
          <h3 className="text-base uppercase">{name}</h3>
        </div>
      </div>
    </>
  );
}
