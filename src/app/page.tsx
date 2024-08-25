import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="w-[95%] max-w-lg pt-20">
        <h1 className="text-7xl font-bold uppercase">
          <b className="text-8xl inline">BEST </b>dnevi znanosti
        </h1>
        <Image className="w-[95%] max-w-lg" src="/image1.png" alt="Some image" height={500} width={400} />
        <p className="text-lg pr-7">
          Strokovno-izobraževalni dogodek, namenjen študentom Fakultete za
          kemijo in kemijsko tehnologijo ter Fakultete za računalništvo in
          informatiko.
        </p>
        <div className="flex columns-2 justify-center mt-[9%]">
          <div className="w-full flex justify-center">
            <a className="bg-sky-300 font-bold p-5 px-20 rounded-full text-blue-950" href="">PRIJAVI SE</a>
          </div>
          <div className="w-full justify-center flex">
            <a className="border font-bold border-blue-950 p-5 px-16 rounded-full text-blue-950" href="">PREBERI VEČ</a>
          </div>
        </div>
      </div>
    </main>
  );
}
