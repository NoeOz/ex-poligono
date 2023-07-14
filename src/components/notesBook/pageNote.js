import { loadNotes } from "@/api/api";
import { transformRoman } from "@/utilities/utils";

export default async function PageNote({ idPage, number }) {
  const noteInfo = await loadNotes.getNoteById(idPage);

  function Title() {
    return Object.values(noteInfo).map(
      (itemNote) =>
        itemNote.type === "heading_1" && (
          <div className="sticky top-0 bg-slate-50" key={itemNote.id}>
            <p className="font-number text-center text-xl text-slate-900">
              {transformRoman(number)}
            </p>
            <p className="font-title text-center text-2xl text-slate-800">
              {itemNote.heading_1.rich_text[0].plain_text}
            </p>
          </div>
        )
    );
  }

  function Parags() {
    return Object.values(noteInfo).map(
      (itemNote) =>
        itemNote.type === "paragraph" && (
          <div key={itemNote.id} className="my-2 text-justify">
            <p className="text-slate-950 font-para text-justify">
              {itemNote.paragraph.rich_text[0]?.plain_text}
            </p>
          </div>
        )
    );
  }

  return (
    <div
      id={idPage}
      className={"flex flex-col w-full sm:w-full md:w-[80%] lg:w-[60%] h-auto p-5 my-5 rounded lg:self-center bg-slate-50"}
    >
      <Title />
      <div className="my-3 border-t-[1px] border-slate-400" />
      <Parags />
    </div>
  );
}
