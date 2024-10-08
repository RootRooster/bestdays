"use client";
import { useState } from "react";

function DayOne() {
  return (
    <>
      <div>
        <div className="text-4xl">
          <h1 className="font-bold uppercase">Konferenca</h1>
          <h1 className="">Osrednja stavba X, predavalnica A</h1>
        </div>
        <br />
        <p>10:00 Uvodni nagogor</p>
        <br />
        <h2 className="text-2xl">sklop Kemija in kemijsko inženirstvo</h2>
        <p>10:15 izr. prof. dr. Blaž Likozar (Kemijski inštitut)</p>
        <p>10:35 dr. Tomaž Gostič (NFL)</p>
        <p>10:55 doc. dr. Rok Ambrožič (FKKT)</p>
        <p>11:15 Srečko Zupančič in Lovro Klenovšek (Krka)</p>
        <p>11:35 prof. dr. Tomaž Zwitter (FMF)</p>
        <br />
        <p>12:00 - 13:00 odmor</p>
        <br />
        <h2 className="text-2xl">sklop Računalništvo in informatika</h2>
        <p>13:00 prof. dr. Marko Robnik Šikonja (FRI)</p>
        <p>13:20 prof. dr. Jaka Sodnik (FE)</p>
        <p>13:40 prof. dr. Ljupčo Todorovski (FMF)</p>
        <p>14:00 Tadej Magajna (Lek)</p>
        <p>14:20 Andrej P. Škraba (Astra AI) in Q&A</p>
        <br />
        <p>14:45 - 15:15 Poster Minute</p>
        <br />
        <h2 className="text-2xl">sklop Biokemija</h2>
        <p>15:15 doc. dr. Barbara Breznik (NIB)</p>
        <p>15:35 dr. Ajasja Ljubetič (Kemijski inštitut)</p>
        <p>15:55 asist. Martin Špendl (FRI)</p>
        <p>16:15 prof. dr. Uroš Petrovič (BF/IJS)</p>
        <p>16:35 izr. prof dr. Aleš Ručigaj (Novartis)</p>
        <br />
        <p>17:00 - 17:15 odmor</p>
        <br />
        <h2 className="text-2xl">17:15 okrogla miza - Bioinformatika</h2>
        <ul className="list-disc ml-5">
          <li>asist. Ana Halužan Vasle (FRI)</li>
          <li>doc. dr. Anže Županič (NIB)</li>
          <li>prof. dr. Sašo Džeroski (IJS)</li>
          <li>izr. prof. dr. Miha Moškon (FRI)</li>
        </ul>
        <br />
        <p className="font-bold text-xl">zaključna pogostitev</p>
      </div>
    </>
  );
}

function DayTwo() {
  return (
    <>
      <div>
        <div className="text-4xl">
          <h1 className="font-bold uppercase">Delavnice</h1>
          <h1>FKKT</h1>
        </div>
        <br />
        <p className="italic">seminarska soba 2036 (2b)</p>
        <br />
        <p>
          14.15 - 16.15 <span className="font-bold">Krka</span>
        </p>
        <p>
          16.30 - 18.30 <span className="font-bold">Novartis</span>
        </p>
        <br />
        <br />
        <p>seminarska soba 2072 (2b)</p>
        <br />
        <p>
          14.15 - 16.15 <span className="font-bold">Tehnološki park</span>
        </p>
        <p>
          16.30 - 18.30 <span className="font-bold">Pipistrel</span>
        </p>
        <br />
      </div>
    </>
  );
}

function DayThree() {
  return (
    <>
      <div>
        <div className="text-4xl">
          <h1 className="font-bold uppercase">CASE STUDY</h1>
          <h1>FKKT, predavalnica 4</h1>
        </div>
        <br />
        <p>15:00 - 15:30 Krajša predstavitev podjetja in problema</p>
        <p>15:30 - 17:30  Reševanje problema v skupinah</p>
        <p>17:30 - 18:30  Predstavitve rešitev študentov</p>
        <p>18:30 - 19:00  Razglasitev zmagovalcev in zaključek</p>
      </div>
    </>
  );
}

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const boxes = [
    { id: 1, content: DayOne(), date: "TOREK, 22. OKTOBER" },
    { id: 2, content: DayTwo(), date: "SREDA, 23. OKTOBER" },
    { id: 3, content: DayThree(), date: "ČETRTEK, 24. OKTOBER" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? boxes.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === boxes.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="flex flex-col items-center min-h-[100vh] pt-32">
      <div className="bg-best-blue-900 w-[80%] mb-20">
        <div className="m-3">
          {currentIndex != 0 ? <button onClick={handlePrev}>&lt;</button> : " "}{" "}
          <div className="font-bold uppercase inline">
            {boxes[currentIndex].date}{" "}
          </div>
          {currentIndex != boxes.length - 1 ? (
            <button onClick={handleNext}>&gt;</button>
          ) : (
            " "
          )}
        </div>
        <div className="m-5">{boxes[currentIndex].content}</div>
      </div>
    </div>
  );
}
