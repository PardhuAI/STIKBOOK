"use client";

import { useEffect, useState } from "react";

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
    <section className="h-screen w-full relative flex items-center overflow-hidden bg-[var(--bg1)]">
      
      {/* Background Image - Whole Page */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero-image.png" 
          alt="Man with headphones using Stikbook" 
          className="w-full h-full object-cover translate-x-[5%] md:translate-x-[8%] lg:translate-x-[12%]"
        />
      </div>

      {/* Solid to transparent gradient overlay. 
          This is crucial: It stays 100% solid until 25% to completely hide 
          the hard left edge of the translated image, then fades beautifully. */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          background: 'linear-gradient(to right, var(--bg1) 0%, var(--bg1) 25%, transparent 75%)'
        }}
      ></div>
      
      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full px-6 relative z-20">
        <div className="max-w-[550px]">
          
          <h1 className="font-syne text-[3rem] md:text-[4rem] font-bold leading-[1.1] mb-6 text-[var(--text-color)] tracking-tight">
            Unifying <br />
            <span style={{ color: "var(--green)" }}>{text}</span><span className="text-[var(--text-color)] animate-pulse">|</span><br />
            In One Platform.
          </h1>

          <p className="text-lg md:text-xl text-[var(--text-color)] opacity-70 mb-10 leading-relaxed font-medium">
            Stikbook unites social media, e-commerce, and child safety — all
            powered by AI that keeps your world clean.
          </p>

          <a href="/download" className="inline-block bg-[var(--green)] hover:scale-105 transition-transform text-white px-10 py-4 rounded-full font-semibold text-lg shadow-[0_8px_20px_rgba(99,193,116,0.3)]">
            Get Started
          </a>

          {/* 3 Icons Row */}
          <div className="flex items-start gap-10 mt-16 pt-2">
            
            <div className="flex flex-col items-center gap-3">
              <div className="text-[var(--green)]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6M6 20V10a6 6 0 0 1 12 0v10M6 20h12"/></svg>
              </div>
              <span className="text-sm font-semibold text-center text-[var(--text-color)] leading-tight opacity-80">
                Social<br/>Media
              </span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="text-[var(--green)]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </div>
              <span className="text-sm font-semibold text-center text-[var(--text-color)] leading-tight opacity-80">
                E-Commerce<br/>Built-in
              </span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="text-[var(--green)]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <span className="text-sm font-semibold text-center text-[var(--text-color)] leading-tight opacity-80">
                AI Content<br/>Safety
              </span>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
