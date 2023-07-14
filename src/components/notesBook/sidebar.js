"use client";
import { useState } from "react";

export default function SideBar({ children }) {
  const [active, setActive] = useState(false);

  return active === false ? (
    <div
      onClick={() => setActive(true)}
      className="h-[50px] w-[50px] absolute z-20 bottom-7 left-5 rounded-full bg-slate-900"
    ></div>
  ) : (
    <nav className="w-[45%] h-full sm:w-[45%] md:w-[45%] lg:w-[20%] bg-slate-900 sm:bg-slate-900 md:bg-slate-900 lg:bg-transparent z-20 absolute sm:top-0 sm:left-0 md:top-0 md:left-0 sm:absolute md:absolute lg:relative lg:self-center lg:h-5/6 max-h-screen overflow-y-auto flex flex-col grow">
      <div
        onClick={() => setActive(false)}
        className="sticky top-0 font-sans h-[25px] w-[25px] rounded-full m-3 self-end bg-slate-700"
      >
        <p className="font-sans">X</p>
      </div>
      {children}
    </nav>
  );
}
