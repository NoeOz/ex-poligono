import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/all";
import { useEffect, useRef } from "react";

export default function Fireflies() {
  const bottleRef = useRef();
  gsap.registerPlugin(MotionPathPlugin);

  let total = 80;
  let w = 900;
  let h = 900;

  useEffect(() => {
    generateFireflies();
    return () => {};
  });

  function generateFireflies() {
    if (typeof window !== "undefined") {
      w = window?.innerWidth;
      h = window?.innerHeight;
    }

    for (var i = total; i--; ) {
      var Div = document.createElement("div");
      gsap.set(Div, {
        attr: { class: "dot" },
        x: R(w),
        y: R(h),
        opacity: 0,
      });
      bottleRef.current.appendChild(Div);
      animate(Div);
    }
  }

  function animate(elm) {
    gsap.to(elm, R(20) + 10, {
      motionPath: {
        path: [
          { x: R(w), y: R(h) },
          { x: R(w), y: R(h) },
        ],
      },
      opacity: R(1),
      scale: R(1) + 0.5,
      delay: R(2),
      onComplete: () => animate(elm),
    });
  }

  function R(max) {
    return Math.random() * max;
  }

  if (typeof window !== "undefined") {
    window.addEventListener("resize", resize);
  }

  function resize() {
    if (typeof window !== "undefined") {
      w = window?.innerWidth;
      h = window?.innerHeight;
    }
  }

  return (
    <div ref={bottleRef} className="flex h-5/6 w-5/6 absolute z-[21]"></div>
  );
}
