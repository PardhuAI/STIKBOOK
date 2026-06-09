"use client";

import Image from "next/image";

export default function ProfileHero() {
  return (
    <section className="reveal flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        
        {/* Left — Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="chip mb-4 md:w-fit">Coming Soon</div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 font-heading">
            <span className="inline-block whitespace-nowrap">Earn Rewards.</span>
            <br />
            <span
              className="inline-block whitespace-nowrap"
              style={{ color: "var(--text-gradient)" }}
            >
              Unlock Deals.
            </span>
          </h1>

          <p className="text-[0.95rem] leading-[1.7] max-w-xl mb-8">
            Turn your everyday activity into real rewards. Earn Stikcoins for
            posting, engaging, and staying active — then unlock exclusive deals,
            discounts, and perks from brands you actually care about.
          </p>

          <a
            href="#profile-types"
            className="font-syne px-7 py-3 rounded-full text-white inline-block"
            style={{
              background: "var(--text-gradient)",
              boxShadow: "0 6px 30px rgba(99, 255, 141, 0.35)",
            }}
          >
            Start Earning
          </a>
        </div>

        {/* Right — Transparent PNG merges natively with page */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/assets/roadmap/rewards-hero-transparent.png"
            alt="Earn Rewards and Unlock Deals with Stikcoins"
            width={600}
            height={600}
            className="w-full max-w-[500px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}
