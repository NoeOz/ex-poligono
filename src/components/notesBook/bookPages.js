export default function BookPages({ children }) {
  return (
    <div className="flex flex-col w-full sm:w-full md:w-full lg:w-[80%] h-5/6 lg:ml-5 md:items-center lg:self-center max-h-screen overflow-y-auto grow">
      {children}
    </div>
  );
}
