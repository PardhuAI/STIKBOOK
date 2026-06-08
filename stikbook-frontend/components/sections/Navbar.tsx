"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavHeader from "../ui/nav-header";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md">
      <div className="relative flex items-center justify-between px-6 h-[70px]">
        <Link href="/" className="z-10">
          <img src="/assets/favicon.png" className="h-10" />
        </Link>

        <nav className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2">
          <NavHeader />
        </nav>

        <Link
          href="/download"
          className="hidden md:block px-5 py-2 rounded-full font-semibold text-white"
          style={{
            background: "var(--text-gradient)",
            boxShadow: "0 6px 30px rgba(99, 255, 141, 0.35)",
          }}
        >
          Download
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] cursor-pointer"
        >
          <span className="w-6 h-[3px] bg-black dark:bg-white"></span>
          <span className="w-6 h-[3px] bg-black dark:bg-white"></span>
          <span className="w-6 h-[3px] bg-black dark:bg-white"></span>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col gap-5 p-5 bg-white/95 dark:bg-black/95 backdrop-blur-md">
          <Link href="/">Home</Link>
          <Link href="/roadmap">Roadmap</Link>
          <Link href="/profile_type">Profile Types</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/download">Download</Link>
        </div>
      )}
    </header>
  );
}
