"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface HeroSectionProps {
  ctaUrl?: string;
  storyUrl?: string;
}

export default function HeroSection({
  ctaUrl = "/download/",
  storyUrl = "#mission",
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
    <section className="flex flex-col section-white items-center justify-center text-center px-6 py-24 relative overflow-hidden section-white">
      <div
        ref={revealRef}
        className="mx-auto reveal relative z-10"
        style={{ transitionDelay: "0.1s" }}
      >
        {/* Chips Container */}
        <div className="flex justify-center gap-3 flex-wrap mb-8">
          <Chip icon={<SmileFaceIcon />} label="Social Platform" />
          <Chip icon={<LockIcon />} label="AI-Powered Safety" />
          <Chip icon={<StarIcon />} label="Hidden Talent" />
        </div>

        {/* Main Heading */}
        <h1 className="font-heading text-4xl font-syne md:text-6xl font-semibold leading-tight mb-6">
          Where <span style={{ color: "var(--text-gradient)" }}>Talent</span>
          <br />
          Finds Its Stage
        </h1>

        {/* Description */}
        <p className="text-[0.95rem] max-w-2xl mb-8 mx-auto leading-relaxed">
          Stikbook is more than a social platform — it's a safe, AI-curated
          space where individuals shine, businesses grow, and hidden talent
          finally gets the spotlight it deserves.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={ctaUrl}
            className="font-heading flex items-center justify-center px-7 py-3 rounded-full text-white"
            style={{
              background: "var(--text-gradient)",
              boxShadow: "0 6px 30px rgba(99, 255, 141, 0.35)",
            }}
          >
            Get the App
          </Link>
          <Link
            href={storyUrl}
            className="px-8 py-3.5 rounded-full font-semibold glass-sm hover:bg-white/20 transition-all duration-300"
          >
            Our Story ↓
          </Link>
        </div>
      </div>
    </section>
  );
}

// Chip Component
function Chip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="chip">
      {icon}
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
