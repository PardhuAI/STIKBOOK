"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faBrain,
  faScaleBalanced,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function AISection() {
  const [hydrated, setHydrated] = useState(false);

  const robotRef = useRef<HTMLImageElement | null>(null);
  const flyRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!flyRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(flyRef.current, {
      x: x * 300,
      y: y * 300,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    if (!flyRef.current) return;

    gsap.to(flyRef.current, {
      x: 0,
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
  };

  useGSAP(() => {
    if (!robotRef.current) return;

    // set initial transform (fixes many GSAP issues)
    gsap.to(robotRef.current, {
      y: "+=24", // 👈 relative movement (IMPORTANT)
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
    gsap.to(robotRef.current, {
      rotate: 1.5,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
    // FLOATING (increase visibility)
    gsap.to(robotRef.current, {
      y: 20,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // 3D ROTATION
    gsap.to(robotRef.current, {
      rotateY: 12,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(robotRef.current, {
      scale: 1.03,
      duration: 2.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  useEffect(() => {
    // load lottie player script once
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <section className="py-16 px-6 section-white">
      <div className="max-w-6xl mx-auto">
        <div className="reveal relative overflow-visible">
          <div className="grid md:grid-cols-2 gap-12 items-stretch relative z-10">
            {/* LEFT CONTENT */}
            <div>
              <span className="font-body chip inline-flex items-center gap-2 mb-6">
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
                AI Compliance Engine
              </span>

              <h2 className="font-heading text-4xl md:text-5xl mb-6">
                The Internet,
                <br />
                But{" "}
                <span style={{ color: "var(--text-gradient)" }}>Safer.</span>
              </h2>

              <p className="font-body text-[0.95rem] leading-relaxed mb-6">
                Our AI compliance layer works silently in the background —
                scanning every post, quik, and comment to ensure violent, adult,
                and harmful content never reaches our community. Stikbook is
                built for every age, every background.
              </p>

              {/* Trust Badges */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-[var(--green)]/10 px-3 py-1.5 rounded-full border border-[var(--green)]/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <span className="text-[0.75rem] font-bold text-[var(--green)] uppercase tracking-wider">End-to-End Encrypted</span>
                </div>
                <div className="flex items-center gap-2 bg-[var(--green)]/10 px-3 py-1.5 rounded-full border border-[var(--green)]/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  <span className="text-[0.75rem] font-bold text-[var(--green)] uppercase tracking-wider">COPPA Compliant</span>
                </div>
              </div>

              <div className="space-y-4">
                {/* ITEM 1 */}
                <div className="flex items-start gap-4 glass-sm p-4 hover-lift rounded-xl">
                  <div
                    className="icon-ring-sm pulse-ring text-teal-600 dark:text-teal-300"
                    style={{ borderColor: "rgba(14, 165, 164, 0.45)" }}
                  >
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="text-lg"
                      style={{ color: "var(--teal)" }}
                    />
                  </div>

                  <div>
                    <div className="font-heading font-semibold mb-1">
                      Real-time Content Scanning
                    </div>
                    <div className="font-body text-sm opacity-70">
                      Every upload is analyzed instantly before going live
                    </div>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="flex items-start gap-4 glass-sm p-4 hover-lift rounded-xl">
                  <div
                    className="icon-ring-sm pulse-ring text-indigo-600 dark:text-indigo-300"
                    style={{ borderColor: "rgba(99, 102, 241, 0.45)" }}
                  >
                    <FontAwesomeIcon
                      icon={faBrain}
                      className="text-lg"
                      style={{ color: "var(--indigo)" }}
                    />
                  </div>

                  <div>
                    <div className="font-heading font-semibold mb-1">
                      Contextual Understanding
                    </div>
                    <div className="font-body text-sm opacity-70">
                      AI understands nuance, not just keywords
                    </div>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className="flex items-start gap-4 glass-sm p-4 hover-lift rounded-xl">
                  <div
                    className="icon-ring-sm pulse-ring text-blue-600 dark:text-blue-300"
                    style={{ borderColor: "rgba(217, 119, 6, 0.45)" }}
                  >
                    <FontAwesomeIcon
                      icon={faScaleBalanced}
                      className="text-lg"
                      style={{ color: "var(--blue)" }}
                    />
                  </div>

                  <div>
                    <div className="font-heading font-semibold mb-1">
                      Fair Moderation
                    </div>
                    <div className="font-body text-sm opacity-70">
                      Transparent appeals &amp; human review for edge cases
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleLeave}
                className="relative flex justify-center items-center h-full"
              >
                <div ref={flyRef} className="relative">
                  <img
                    ref={robotRef}
                    src="/assets/home/robot.png"
                    alt="AI Robot"
                    className="robot w-[320px] md:w-[380px] relative z-10 will-change-transform"
                  />

                  <div className="thruster left" />
                  <div className="thruster right" />
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  className="text-lg opacity-70 animate-bounce"
                />
                <p className="text-xs md:text-sm opacity-60 tracking-wide">
                  Hey human, move your cursor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
