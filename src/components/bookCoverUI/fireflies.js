import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/all";
import { useEffect, useRef } from "react";

export default function Fireflies() {
  const isBrowser = () => typeof window === 'object';

  gsap.registerPlugin(MotionPathPlugin);
  const bottleRef = useRef();
  let total = 80;
  let w = 900;
  let h = 900;

  useEffect(() => {
    generateFireflies();
    return () => {};
  });

  function generateFireflies() {
    if (isBrowser()) {
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

  window.addEventListener("resize", resize);

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
  }

  return (
    <div ref={bottleRef} className="flex h-5/6 w-5/6 absolute z-[21]"></div>
  );
}
