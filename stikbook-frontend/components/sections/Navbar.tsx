"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Profile Types", href: "/profile-types" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

function Logo() {
  return (
    <Link
      href="/"
      aria-label="Stikbook home"
      className="group relative flex items-center gap-2.5"
    >
      {/* Outer breathing halo (warm gold, soft) */}
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 pointer-events-none"
        style={{
          width: "180%",
          height: "260%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(229, 184, 92, 0.55), transparent 70%)",
          filter: "blur(8px)",
          animation: "logo-breathe 3.2s ease-in-out infinite",
        }}
      />

      {/* Mid conic ring (sharper gold) */}
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 pointer-events-none"
        style={{
          width: "120%",
          height: "180%",
          transform: "translate(-50%, -50%)",
          background:
            "conic-gradient(from 180deg, #FFE89A, #E5B85C, #B8860B, #FFE89A)",
          filter: "blur(10px)",
          opacity: 0.55,
        }}
      />

      {/* Inner highlight right behind the icon */}
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 pointer-events-none"
        style={{
          width: "70px",
          height: "70px",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255, 244, 194, 0.45), transparent 65%)",
        }}
      />

      <img
        src="/assets/favicon.png"
        alt="Stikbook"
        className="relative h-8 w-8 object-contain"
      />

      <span
        className="font-syne font-bold text-[1.2rem] leading-none tracking-tight bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #B8860B 0%, #E5B85C 45%, #FFE89A 100%)",
        }}
      >
        stikbook
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <style jsx global>{`
        @keyframes logo-breathe {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50%      { opacity: 1;   transform: translate(-50%, -50%) scale(1.1); }
        }
      `}</style>

      <header className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-4">
        <div className="max-w-[640px] mx-auto">
          <div
            className="grid grid-cols-[1fr_auto_1fr] items-center h-[64px] rounded-full px-4 sm:px-5 backdrop-blur-xl"
            style={{
              background: "color-mix(in srgb, var(--bg1) 75%, transparent)",
              border: "1px solid var(--card-border)",
              boxShadow:
                "0 10px 40px -10px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            {/* Left cell — intentionally empty */}
            <div />

            {/* Center — clean logo with golden glow */}
            <div className="flex items-center justify-center">
              <Logo />
            </div>

            {/* Right — hamburger */}
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
                aria-expanded={open}
                className="flex flex-col gap-[5px] p-2 -mr-2"
              >
                <span
                  className="block w-6 h-[2px] transition-all duration-200"
                  style={{
                    background: "var(--text-color)",
                    transform: open
                      ? "translateY(7px) rotate(45deg)"
                      : "none",
                  }}
                />
                <span
                  className="block w-6 h-[2px] transition-opacity duration-200"
                  style={{
                    background: "var(--text-color)",
                    opacity: open ? 0 : 1,
                  }}
                />
                <span
                  className="block w-6 h-[2px] transition-all duration-200"
                  style={{
                    background: "var(--text-color)",
                    transform: open
                      ? "translateY(-7px) rotate(-45deg)"
                      : "none",
                  }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Drawer */}
        {open && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 -z-10"
              style={{ background: "rgba(0,0,0,0.25)" }}
              onClick={() => setOpen(false)}
            />

            <div
              className="max-w-[640px] mx-auto mt-2 rounded-3xl backdrop-blur-xl overflow-hidden"
              style={{
                background:
                  "color-mix(in srgb, var(--bg1) 92%, transparent)",
                border: "1px solid var(--card-border)",
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.18)",
              }}
            >
              <div className="flex flex-col p-3 gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="px-4 py-3 rounded-2xl text-[0.92rem] font-medium transition-colors"
                      style={{
                        color: isActive ? "var(--green)" : "var(--text-color)",
                        background: isActive
                          ? "rgba(99, 193, 116, 0.08)"
                          : "transparent",
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="/download"
                  onClick={() => setOpen(false)}
                  className="mt-2 text-center px-4 py-3 rounded-full font-semibold text-white text-[0.92rem]"
                  style={{
                    background: "var(--text-gradient)",
                    boxShadow: "0 6px 24px rgba(99, 193, 116, 0.35)",
                  }}
                >
                  Download
                </Link>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
