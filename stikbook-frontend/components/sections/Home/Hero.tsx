"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const phrases = ["Social Media", "E-Commerce", "Child Safety"];
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!deleting && text === phrases[i]) {
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && text === "") {
      timeout = setTimeout(() => {
        setDeleting(false);
        setI((prev) => (prev + 1) % phrases.length);
      }, 500);
    } else {
      const delay = deleting ? 40 : 80;
      timeout = setTimeout(() => {
        const word = phrases[i];
        setText(word.substring(0, text.length + (deleting ? -1 : 1)));
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, i]);

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
          
          <h1 className="font-syne text-[3rem] md:text-[4rem] font-bold leading-[1.1] mb-6 tracking-tight">
            Unifying <br />
            <span style={{ color: "var(--green)" }}>{text}</span><span className="text-slate-800 dark:text-slate-200 animate-pulse">|</span><br />
            In One Platform.
          </h1>

          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 opacity-90 mb-10 leading-relaxed font-medium">
            Stikbook unites social media, e-commerce, and child safety — all
            powered by AI that keeps your world clean.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a href="/download" className="inline-block bg-[var(--green)] hover:scale-105 transition-transform text-white px-10 py-4 rounded-full font-semibold text-lg shadow-[0_8px_20px_rgba(99,193,116,0.3)] whitespace-nowrap">
              Download the App
            </a>
            
            {/* Desktop-to-Mobile Bridge (QR Placeholder) */}
            <div className="hidden md:flex items-center gap-3 bg-white/60 backdrop-blur-sm p-2 pr-4 rounded-xl border border-[var(--card-border)] shadow-sm">
              <div className="bg-white p-1 rounded-lg">
                <img 
                  src="/assets/stikbook-qr.png" 
                  alt="Download Stikbook App QR" 
                  className="w-10 h-10 object-contain rounded-md" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[0.7rem] uppercase tracking-wider font-bold text-[var(--green)]">Scan to</span>
                <span className="text-sm font-semibold text-slate-800 leading-tight">Download</span>
              </div>
            </div>
          </div>



        </div>
      </div>

    </section>
  );
}
