import ListPages from "@/components/listPages";
import ListTitles from "@/components/listTitles";

export default function Home() {
  return (
    <main className="flex flex-row h-screen bg-fixed">
      <div className="w-1/5 h-2/5 self-center p-5 px-12 max-h-screen overflow-y-auto flex flex-col flex-grow">
        <ListTitles />
      </div>
      <div className="w-4/5 h-5/6 m-2 max-h-screen overflow-y-auto flex flex-col flex-grow">
        <ListPages />
      </div>
    </main>
  );
}
