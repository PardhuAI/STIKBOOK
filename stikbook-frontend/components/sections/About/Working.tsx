"use client";

import { useState, useEffect } from "react";
import { TypingText } from "@/components/common/TypingText";
import InteractiveSelector from "@/components/ui/interactive-selector";

export default function WorkingSection() {
  const [startTyping, setStartTyping] = useState(false);

  const options = [
    {
      title: "Create Your Profile",
      description:
        "Sign up as a Personal or Business user. Personalize your space, set your niche, and get ready to connect with a community that actually cares about what you do.",
      image:
        "https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3JlYXRlJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      icon: "1",
    },
    {
      title: "Post, Share & Go Live",
      description:
        "Share posts and quiks. Our AI instantly checks your content so it's safe and ready for the world — no delays, no drama.",
      image:
        "https://images.unsplash.com/photo-1578417618193-3726d6f2fef6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "2",
    },
    {
      title: "Earn Stikcoins",
      description:
        "Every login, post, and quik earns you Stikcoins — our in-app currency. The more active you are, the more you earn. It pays to be creative.",
      image:
        "https://plus.unsplash.com/premium_photo-1679744145924-62f784910a58?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "3",
    },
    {
      title: "Unlock Stikdeals",
      description:
        "Redeem your Stikcoins for exclusive coupons from business partners — discounts that only Stikbook users can access. Real value, real savings.",
      image:
        "https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: "4",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="working" className="relative z-10 py-16 px-6 section-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 reveal">
          <span className="chip mb-4">The Journey</span>

          <h2 className="font-heading text-4xl md:text-5xl mb-3">
            How Stikbook{" "}
            <span style={{ color: "var(--text-gradient)" }}>Works</span>
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
