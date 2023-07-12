import { loadNotes } from "@/api/api";
import PageNote from "./pageNote";

export default async function ListPages({}) {
  const titles = await loadNotes.getlistTitles("ascending");

  return titles.map((title, index) => (
    <PageNote key={title.id} idPage={title.id} number={index + 1} />
  ));
}
