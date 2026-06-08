"use client";

import { useEffect, useState } from "react";
import TiltImage from "./Tiltimage";

export default function Hero() {
  const phrases = ["Social Media", "E-Commerce", "Child Safety"];
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const interval = setTimeout(
      () => {
        const word = phrases[i];
        setText(word.substring(0, j));

        if (!deleting && j === word.length) {
          setDeleting(true);
        } else if (deleting && j === 0) {
          setDeleting(false);
          setI((prev) => (prev + 1) % phrases.length);
        }

        setJ((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 60 : 100,
    );

    return () => clearTimeout(interval);
  }, [j, deleting, i]);

  return (
    <section className="min-h-screen section-white flex items-center px-6 py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left relative z-20">
          <div className="flex gap-3 flex-wrap mb-6">
            <span className="font-body chip">AI-Powered Content Safety</span>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Unifying
            <br />
            <span style={{ color: "var(--text-gradient)" }}>{text}</span>
            <br />
            In One Platform.
          </h1>

          <p className="text-[0.95rem] max-w-lg mb-8 leading-relaxed">
            Stikbook unites social media, e-commerce, and child safety — all
            powered by AI that keeps your world clean.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/download"
              className="px-8 py-3.5 rounded-full font-semibold text-white"
              style={{
                background: "var(--text-gradient)",
                boxShadow: "0 6px 30px rgba(99,255,141,0.35)",
              }}
            >
              Download Now
            </a>

            <a
              href="#features"
              className="px-8 py-3.5 rounded-full font-semibold glass-sm relative z-20"
            >
              Discover Features ↓
            </a>
          </div>
        </div>

        <TiltImage />
      </div>
    </section>
  );
}
