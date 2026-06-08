"use client";

import { useRef } from "react";

export default function TiltImage() {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 10;
    const rotateX = -((y - midY) / midY) * 10;

    ref.current.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;

    ref.current.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div className="hidden md:flex justify-end md:ml-[40%] items-end [perspective:1000px] w-full">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="transition-transform duration-300 ease-out will-change-transform ml-auto"
      >
        <img src="/assets/hero.png" className="w-[60%] block dark:hidden" />
        <img
          src="/assets/hero_dark.png"
          className="w-[55%] hidden dark:block"
        />
      </div>
    </div>
  );
}
