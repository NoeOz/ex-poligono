import { loadNotes } from "@/api/api";

export default async function PageNote({ idPage, number }) {
  const noteInfo = await loadNotes.getNoteById(idPage);

  function transformRoman() {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const simbols = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let romanNum = "";
    for (var i = 0; i < values.length; i++) {
      while (number >= values[i]) {
        romanNum += simbols[i];
        number -= values[i];
      }
    }
    return romanNum;
  }

  function Title() {
    return Object.values(noteInfo).map(
      (itemNote) =>
        itemNote.type === "heading_1" && (
          <div key={itemNote.id}>
            <p className="font-number text-center text-xl text-slate-900">
              {transformRoman()}
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
          <div key={itemNote.id} className="my-2">
            <p className="text-slate-950 font-para">
              {itemNote.paragraph.rich_text[0]?.plain_text}
            </p>
          </div>
        )
    );
  }

  return (
    <div
      id={idPage}
      className={"w-4/6 h-auto p-5 self-center rounded my-5 bg-slate-50"}
    >
      <Title />
      <div className="my-3 border-t-[1px] border-slate-400" />
      <Parags />
    </div>
  );
}
