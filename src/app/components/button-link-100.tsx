export default function BestButton({
  link,
  text,
  modifyTextStyle = "md:px-20 text-xl md:text-base md:px-32 px-20",
}: {
  link: string;
  text: string;
  modifyTextStyle?: string;
}) {
  return (
    <>
      <a
        className={`transition ease-in-out delay-150
                hover:scale-110 hover:-translate-y-1 
                bg-best-blue-100 shadow-md hover:shadow-xl text-center
                rounded-full text-best-blue-900
                font-bold p-5 ${modifyTextStyle}`}
        href={link}
      >
        {text}
      </a>
    </>
  );
}
