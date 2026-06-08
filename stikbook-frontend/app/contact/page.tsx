"use client";

import ContactForm from "@/components/sections/Contact/ContactForm";
import SuccessOverlay from "@/components/sections/Contact/SuccessOverlay";
import { useState, useEffect, useRef } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Reveal animation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    function check() {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.add("visible");
      }
    }

    window.addEventListener("scroll", check);
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  const socialLinkClass =
    "inline-flex items-center justify-center w-10 h-10 rounded-full border text-slate-900 dark:text-white/90 no-underline transition-all hover:bg-white/65 hover:border-white/80 hover:-translate-y-0.5 hover:shadow-md";

  return (
    <>
      <SuccessOverlay
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
      />

      <section
        ref={sectionRef}
        className="reveal section-white relative z-[2] min-h-screen flex items-center justify-center pt-[110px] pb-16 px-6"
      >
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-8 md:gap-12 items-start">
          {/* Left column */}
          <div>
            <p className="chip mb-4">Contact Us</p>

            <h1 className="text-4xl font-heading md:text-6xl font-semibold leading-tight mb-6">
              Get in{" "}
              <span style={{ color: "var(--text-gradient)" }}>Touch</span>
            </h1>

            <p className="text-[0.95rem] leading-[1.7] text-slate-700 dark:text-white/70 max-w-[340px] mb-8">
              Have a question or feedback? We&apos;d love to hear from you.
            </p>

            <a
              href="mailto:info@stikbook.com"
              className="inline-flex items-center gap-2 text-white font-syne font-semibold px-8 py-3.5 rounded-full no-underline transition-all hover:opacity-[0.88] hover:-translate-y-px"
              style={{
                background: "var(--text-gradient)",
                boxShadow: "0 6px 30px rgba(99, 255, 141, 0.35)",
              }}
            >
              <svg
                className="w-4 h-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <polyline points="2,4 12,13 22,4" />
              </svg>
              Shoot us an Email
            </a>

            <div
              className="w-12 h-0.5 rounded my-8 opacity-60"
              style={{ backgroundColor: "var(--text-gradient)" }}
            />

            <p className="text-[0.72rem] font-semibold tracking-[0.08em] uppercase mb-3">
              Follow us
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/stikbook"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className={socialLinkClass}
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com/stikbook"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className={socialLinkClass}
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/stikbook"
                target="_blank"
                rel="noopener"
                aria-label="Twitter / X"
                className={socialLinkClass}
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                }}
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Right column — form */}
          <ContactForm onSuccess={() => setShowSuccess(true)} />
        </div>
      </section>
    </>
  );
}
