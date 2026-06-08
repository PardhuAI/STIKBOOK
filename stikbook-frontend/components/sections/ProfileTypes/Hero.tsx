"use client";

import Image from "next/image";

export default function ProfileHero() {
  return (
    <section className="reveal flex items-center justify-center px-6 py-24 relative overflow-hidden">
      <div className="text-center max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 text-center font-heading">
          <span className="inline-block whitespace-nowrap">Your Profile,</span>
          <br />
          <span
            className="inline-block whitespace-nowrap"
            style={{ color: "var(--text-gradient)" }}
          >
            Your Identity
          </span>
        </h1>

        <p className="text-[0.95rem] leading-[1.7] max-w-2xl mb-8 mx-auto">
          Creators. Businesses. One powerful identity platform.
          <br />A space to showcase who you are, what you do, and everything
          you're building — seamlessly connected.
        </p>

        <a
          href="#profile-types"
          className="font-syne px-7 py-3 rounded-full text-white inline-block"
          style={{
            background: "var(--text-gradient)",
            boxShadow: "0 6px 30px rgba(99, 255, 141, 0.35)",
          }}
        >
          Explore Profiles
        </a>
      </div>

      {/* Lottie Animation */}
      <div className="hidden md:flex justify-center items-center w-full lg:w-[40%]">
        <Image
          src="https://images.unsplash.com/photo-1553484771-047a44eee27a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
          width={600}
          height={600}
          className="w-[55%] animate-coin"
        />
      </div>
    </section>
  );
}
