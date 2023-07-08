import { loadNotes } from "@/api/api";

export default async function Home() {
  const titles = await loadNotes.listTitles();
  //const selectedNote = await  loadNotes.getNoteById("4733e1f5-0b3a-4cf7-b105-de96f777fa2f");

  //console.log("titles: ", titles);

  return (
    <main>
      <ul>
        {titles.map((title) => (
          <li key={title.id}>{title.properties.Name.title[0].plain_text}</li>
        ))}
      </ul>
    </main>
  );
}
