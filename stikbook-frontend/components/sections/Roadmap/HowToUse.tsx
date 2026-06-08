"use client";

import { useState, useEffect } from "react";
import { TypingText } from "@/components/common/TypingText";
import InteractiveSelector from "@/components/ui/interactive-selector";

export default function HowToUseSection() {
  const [startTyping, setStartTyping] = useState(false);

  const options = [
    {
      title: "Earn Stikcoins",
      description: "Post, engage, and log in daily to earn automatically.",
      image: "/assets/roadmap/step1.png",
      icon: "1",
    },
    {
      title: "Browse Stikdeals",
      description: "Discover exclusive deals from verified businesses.",
      image: "/assets/roadmap/step2.png",
      icon: "2",
    },
    {
      title: "Redeem Coupons",
      description: "Use your Stikcoins to unlock exclusive offers.",
      image: "/assets/roadmap/step3.png",
      icon: "3",
    },
    {
      title: "Save Real Money",
      description: "Use coupons online or in-store for real savings.",
      image: "/assets/roadmap/step4.png",
      icon: "4",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="how-to-use" className="relative z-10 py-16 px-6 section-soft">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 reveal">
          <span className="chip mb-4">4 Easy Steps</span>

          <h2 className="font-heading text-4xl md:text-5xl mb-3">
            How We <span style={{ color: "var(--text-gradient)" }}>Work</span>
          </h2>

          {/* ✨ Typing Description */}
          <div className="text-sm md:text-base max-w-xl mx-auto mt-4 min-h-[40px]">
            <TypingText
              text="Follow these simple steps to start earning, exploring, and unlocking rewards effortlessly."
              active={startTyping}
            />
          </div>
        </div>
      </div>

      <InteractiveSelector options={options} autoPlayInterval={3000} />
    </section>
  );
}
