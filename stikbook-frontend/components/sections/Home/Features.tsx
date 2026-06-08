"use client";

import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const featureData = [
  {
    title: "AI Content Safety",
    desc: "Post boldly — our AI keeps it clean, safe, and under control.",
    image: "/assets/home/features/ai.png",
  },
  {
    title: "Quiks — Short Videos",
    desc: "Create in seconds, trend in minutes, go viral every day.",
    image: "/assets/home/features/quiks.png",
  },
  {
    title: "Talent Discovery",
    desc: "Start unknown, get discovered — talent wins here.",
    image: "/assets/home/features/talent.png",
  },
  {
    title: "Business Promotions",
    desc: "Turn attention into action and growth that actually converts.",
    image: "/assets/home/features/business.png",
  },
  {
    title: "Community & Privacy",
    desc: "Your space, your rules — privacy and control built in.",
    image: "/assets/home/features/privacy.png",
  },
  {
    title: "StikCoins Rewards",
    desc: "Earn rewards for engagement and turn activity into value.",
    image: "/assets/home/features/coins.png",
  },
  {
    title: "Smart Recommendations",
    desc: "AI-powered feed that shows what you actually care about.",
    image: "/assets/home/features/recommendation.png",
  },
  {
    title: "Creator Tools",
    desc: "Edit, enhance, and publish content with powerful tools.",
    image: "/assets/home/features/creator.png",
  },
  {
    title: "Real-Time Messaging",
    desc: "Connect instantly — chats, replies, and reactions without delay.",
    image: "/assets/home/features/chat.png",
  },
  {
    title: "StikDeals Marketplace",
    desc: "Discover deals, sell products, and turn content into commerce.",
    image: "/assets/home/features/deals.png",
  },
];

export default function Features() {
  const [hydrated, setHydrated] = useState(false);
  const galleryItems: GalleryItem[] = featureData.map((f) => ({
    common: f.title,
    binomial: f.desc,
    photo: {
      url: f.image,
      text: f.title,
      by: "Stikbook",
    },
  }));

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <section id="features" className="section-soft py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center reveal">
          <span className="chip mx-auto mb-6 w-fit">What We Offer</span>

          <h2 className="font-heading text-4xl md:text-5xl">
            Everything you need,
            <br />
            <span style={{ color: "var(--text-gradient)" }}>in one place</span>
          </h2>
        </div>

        <div className="h-[500px] md:h-[600px] w-full flex items-center justify-center">
          <CircularGallery
            items={galleryItems}
            radius={500}
            autoRotateSpeed={0.25}
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-6">
          <FontAwesomeIcon
            icon={faArrowUp}
            className="text-lg opacity-70 animate-bounce"
          />
          <p className="text-xs md:text-sm opacity-60 tracking-wide">
            Tap / Hover to pause
          </p>
        </div>
      </div>
    </section>
  );
}
