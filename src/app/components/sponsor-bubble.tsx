import Image from "next/image";
import Link from "next/link";
export default function Bubble({
  name,
  imageUrl,
  size,
  borderColor,
  linkUrl,
}: {
  name: string;
  imageUrl: string;
  size: string;
  borderColor: string;
  linkUrl?: string;
}) {
  return (
    <>
      {linkUrl ? (
        <Link href={linkUrl ? linkUrl : "#"}>

          <div className="sponsor relative flex items-center justify-center flex-col ">

            <div className={`rounded-full bg-best-blue-100 h-48 w-48 absolute animate-ping`}> </div>
            <div
              className={`transform duration-200 bg-white border-solid border-8 ${borderColor} items-center flex p-7 hover:scale-110 hover:-translate-y-5 overflow-hidden m-5 rounded-full h-72 w-72 md:h-${size} md:w-${size}`}
            >
              <Image
                src={imageUrl}
                alt={name}
                height={500}
                width={500}
                className="object-contain"
              />
            </div>
          </div>
        </Link>
      ) : (
        <div className="sponsor flex items-center justify-center flex-col">
          <div
            className={`bg-white border-solid border-8 ${borderColor} items-center flex p-7 overflow-hidden m-5 rounded-full h-72 w-72 md:h-${size} md:w-${size}`}
          >
            <Image
              src={imageUrl}
              alt={name}
              height={500}
              width={500}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
