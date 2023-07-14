import BookPages from "./notesBook/bookPages";
import ListPages from "./notesBook/listPages";
import ListTitles from "./notesBook/listTitles";
import SideBar from "./notesBook/sidebar";

export default function ContentBook() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row lg:justify-between w-screen h-screen">
      <SideBar>
        <ListTitles />
      </SideBar>
      <BookPages>
        <ListPages />
      </BookPages>
    </div>
  );
}
