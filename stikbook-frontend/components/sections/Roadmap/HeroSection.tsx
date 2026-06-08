"use client";

import Image from "next/image";

export default function ProfileHero() {
  return (
    <section className="reveal flex items-center justify-center px-6 py-24 relative overflow-hidden">
      <div className="text-center max-w-6xl mx-auto px-6">
        <div className="chip mb-4">Coming Soon</div>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 text-center font-heading">
          <span className="inline-block whitespace-nowrap">Earn Rewards.</span>
          <br />
          <span
            className="inline-block whitespace-nowrap"
            style={{ color: "var(--text-gradient)" }}
          >
            Unlock Deals.
          </span>
        </h1>

        <p className="text-[0.95rem] leading-[1.7] max-w-2xl mb-8 mx-auto">
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

      <div className="hidden md:flex justify-center items-center w-full lg:w-[40%]">
        <Image
          src="/assets/roadmap/stikcoin.png"
          alt="Profile"
          width={600}
          height={600}
          className="w-[55%] animate-coin"
        />
      </div>
    </section>
  );
}
