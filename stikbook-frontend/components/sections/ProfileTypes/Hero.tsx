"use client";

import Image from "next/image";

export default function ProfileHero() {
  return (
    <section className="reveal relative w-full min-h-[90vh] md:min-h-screen flex flex-col md:flex-row items-center justify-end overflow-hidden bg-[var(--bg1)] pt-[80px] md:pt-0">
      
      {/* Left Side Image for Desktop / Top Image for Mobile */}
      <div className="w-full md:w-[58%] h-[350px] md:h-full relative md:absolute md:top-0 md:left-0 z-10 overflow-hidden">
        <Image
          src="/assets/profile-hero.jpg"
          alt="Woman working on Stikbook profile"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-cover object-center md:object-[35%_center]"
        />
        {/* Desktop Gradient Overlay - fades image on its right edge */}
        <div 
          className="absolute inset-0 z-20 hidden md:block" 
          style={{
            background: 'linear-gradient(to right, transparent 50%, var(--bg1) 98%)'
          }}
        />
        {/* Mobile Gradient Overlay - fades image on its bottom edge */}
        <div 
          className="absolute inset-0 z-20 md:hidden" 
          style={{
            background: 'linear-gradient(to bottom, transparent 65%, var(--bg1) 100%)'
          }}
        />
      </div>

      {/* Right Side Content Container */}
      <div className="w-full md:w-[42%] z-20 px-6 py-12 md:py-24 md:pr-16 lg:pr-24 flex flex-col justify-center items-start text-left">
        <h1 className="text-4xl md:text-[3.5rem] font-bold leading-[1.1] mb-6 font-heading text-[var(--text-color)] tracking-tight">
          Your Profile, <br />
          <span style={{ color: "var(--text-gradient)" }}>Your Identity</span>
        </h1>
        
        <p className="text-[0.95rem] md:text-lg leading-[1.7] text-slate-700 dark:text-white/70 mb-8 max-w-[460px]">
          Creators. Businesses. One powerful identity platform. <br />
          A space to showcase who you are, what you do, and everything you're building — seamlessly connected.
        </p>
        
        <a
          href="#profile-types"
          className="font-syne px-8 py-3.5 rounded-full text-white inline-block hover:scale-105 transition-transform font-medium"
          style={{
            background: "var(--text-gradient)",
            boxShadow: "0 6px 30px rgba(99, 255, 141, 0.35)",
          }}
        >
          Explore Profiles
        </a>
      </div>
    </section>
  );
}
