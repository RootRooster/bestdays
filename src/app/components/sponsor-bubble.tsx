import Image from "next/image";
export default function Bubble({
  name,
  imageUrl,
  size
}: {
  name: string;
  imageUrl: string;
  size: string;
}) {
  return (
    <>
      <div className="sponsor flex items-center justify-center flex-col">
        <div
          className={`bg-white items-center flex overflow-hidden m-5 rounded-full h-56 w-56 md:h-${size} md:w-${size}`}
        >
          <Image src={imageUrl} alt={name} height={500} width={500} className="object-contain" />
        </div>
      </div>
    </>
  );
}
