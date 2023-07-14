import { loadNotes } from "@/api/api";
import { transformRoman } from "@/utilities/utils";
import Link from "next/link";

export default async function ListTitles() {
  const titles = await loadNotes.getlistTitles("ascending");

  return (
    <div className="flex flex-col w-full px-5">
      {titles.map((title, index) => (
        <Link
          key={title.id}
          className="font-para text-sm my-3 text-slate-400 hover:text-md sm:hover:text-md md:hover:text-md lg:hover:text-lg hover:text-slate-50"
          href={`#${title.id}`}
        >
          {`[${transformRoman(index + 1)}] ${
            title.properties.Name.title[0].plain_text
          }`}
        </Link>
      ))}
    </div>
  );
}
