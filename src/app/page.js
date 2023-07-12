import BookCover from "@/components/bookCover";
import ContentBook from "@/components/contentBook";

export default function Home() {
  return (
    <main className="content">
      <BookCover>
        <ContentBook />
      </BookCover>
    </main>
  );
}
