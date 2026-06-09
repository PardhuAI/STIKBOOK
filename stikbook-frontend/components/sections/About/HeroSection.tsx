"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface HeroSectionProps {
  ctaUrl?: string;
  storyUrl?: string;
}

export default function HeroSection({
  ctaUrl = "/download/",
  storyUrl = "#working",
}: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-white pt-24 pb-16">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/about-hero-new.jpg"
          alt="Stikbook User Journey"
          className="w-full h-full object-cover object-bottom md:object-right"
        />
        {/* Responsive Gradient Overlay for Text Readability */}
        {/* On mobile: white gradient from bottom to top. On desktop: white gradient from left to right */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent md:bg-gradient-to-r md:from-white md:via-white/90 md:to-transparent/20"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col justify-end md:justify-center h-full">
        <div
          ref={revealRef}
          className="reveal w-full max-w-2xl text-center md:text-left mt-auto md:mt-0"
          style={{ transitionDelay: "0.1s" }}
        >
          {/* Chips Container */}
          <div className="flex justify-center md:justify-start gap-3 flex-wrap mb-6">
            <Chip icon={<SmileFaceIcon />} label="Social Platform" />
            <Chip icon={<LockIcon />} label="AI-Powered Safety" />
            <Chip icon={<StarIcon />} label="Hidden Talent" />
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-6xl font-syne font-bold leading-tight mb-6 text-slate-900">
            Where <span style={{ color: "var(--text-gradient)" }}>Talent</span>
            <br className="hidden md:block" /> Finds Its Stage
          </h1>

          {/* Description */}
          <p className="text-[1rem] md:text-lg text-slate-800 font-medium max-w-xl mb-8 leading-relaxed mx-auto md:mx-0">
            Stikbook is more than a social platform — it's a safe, AI-curated
            space where individuals shine, businesses grow, and hidden talent
            finally gets the spotlight it deserves.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href={ctaUrl}
              className="font-heading flex items-center justify-center px-8 py-3.5 rounded-full text-white hover:scale-105 transition-transform shadow-[0_8px_20px_rgba(99,193,116,0.3)]"
              style={{
                background: "var(--text-gradient)",
              }}
            >
              Get the App
            </Link>
            <Link
              href={storyUrl}
              className="px-8 py-3.5 rounded-full font-semibold bg-white/70 backdrop-blur-md border border-[var(--card-border)] hover:bg-white transition-all shadow-sm text-slate-800"
            >
              Our Story ↓
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Chip Component
function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/80 backdrop-blur-md border border-[var(--card-border)] text-slate-700 shadow-sm">
      <span className="text-[var(--green)]">{icon}</span>
      {label}
    </span>
  );
}

// Icon Components
function SmileFaceIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
