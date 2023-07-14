"use client";
import { gsap } from "gsap";
import Fireflies from "./bookCoverUI/fireflies";
import { useEffect } from "react";

export default function BookCover({ children }) {
  useEffect(() => {
    initialCover();
    return () => {};
  }, []);

  function initialCover() {
    gsap.to(".sub", { filter: "blur(0px)", delay: 0.5 });

    setTimeout(() => {
      gsap.fromTo(
        ".cover",
        {
          backgroundColor: "#020617",
        },
        {
          backgroundImage: "linear-gradient(to right, #020617, rgba(1,1,1,.2))",
          autoAlpha: 0,
        }
      );
    }, 5000);

    setTimeout(() => {
      gsap.to(".pages", { filter: "blur(0px)" });
    }, 5400);
  }

  return (
    <div>
      <div className="cover flex flex-col h-full w-full overflow-hidden absolute z-20 bg-slate-950 justify-center items-center">
        <Fireflies />
        <p className="sub font-title text-4xl sm:text-4xl md:text-6xl lg:text-8xl text-slate-50 blur-sm">
          Ex Poligono
        </p>
        <p className="sub font-title mt-8 text-md sm:text-md md:text-lg lg:text-xl text-slate-50 blur-sm">
          [Entre ... muchos lados]
        </p>
      </div>
      <div className="pages blur-xl">{children}</div>
    </div>
  );
}
