import { loadNotes } from "@/api/api";
import Link from "next/link";

export default async function ListTitles() {
  const titles = await loadNotes.getlistTitles("ascending");

  return (
    <ul>
      {titles.map((title) => (
        <li
          key={title.id}
          className="py-3 text-sm text-slate-600 hover:text-lg hover:text-slate-50"
        >
          <Link href={`#${title.id}`}>{title.properties.Name.title[0].plain_text}</Link>
        </li>
      ))}
    </ul>
  );
}
