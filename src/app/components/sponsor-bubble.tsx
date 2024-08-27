import Image from "next/image";
export default function Bubble({
  name,
  imageUrl,
  size,
}: {
  name: string;
  imageUrl: string;
  size: string;
}) {
  return (
    <>
      <div className="sponsor flex items-center justify-center flex-col mt-20">
        <div
          className={`img bg-white w-${size} h-${size} items-center flex rounded-full overflow-hidden`}
        >
          <Image src={imageUrl} alt={name} height={500} width={500} />
        </div>
        <div className="text-4xl">{name}</div>
      </div>
    </>
  );
}
