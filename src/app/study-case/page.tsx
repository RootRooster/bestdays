import Section from "../components/section";

export default function Page() {
  const textParagraphs = ""; 

  return (
    <div className="flex flex-col">
      <Section
        title="Spoprijamanje z odstopi v aseptičnem okolju"
        subtitle="LEK"
        text={textParagraphs}
        imageSrc="/book.png"
        imageAlt="book and chem"
      />
    </div>
  );
}
