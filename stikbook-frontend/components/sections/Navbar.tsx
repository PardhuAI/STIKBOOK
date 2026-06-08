"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type NavItem = { label: string; href: string };

const LEFT_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Profile Types", href: "/profile-types" },
];

const RIGHT_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const ALL_ITEMS: NavItem[] = [...LEFT_ITEMS, ...RIGHT_ITEMS];

function NavLink({ href, label }: NavItem) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className="relative px-3.5 py-2 text-[0.82rem] font-medium tracking-wide uppercase transition-colors duration-200"
      style={{ color: "var(--text-color)" }}
    >
      <span
        className="relative z-10 transition-colors duration-200"
        style={{ color: isActive ? "var(--green)" : "var(--text-color)" }}
      >
        {label}
      </span>
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className="absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] rounded-full"
          style={{ background: "var(--text-gradient)" }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

function Logo() {
  return (
    <Link
      href="/"
      aria-label="Stikbook home"
      className="group relative flex items-center gap-2.5 px-3 py-1.5 rounded-full"
      style={{
        background:
          "linear-gradient(135deg, rgba(99,193,116,0.10), rgba(99,193,116,0.02))",
        border: "1px solid rgba(99,193,116,0.25)",
        boxShadow:
          "0 0 0 1px rgba(99,193,116,0.05), 0 8px 24px -8px rgba(99,193,116,0.45)",
      }}
    >
      {/* Pulsing glow ring */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 50%, rgba(99,193,116,0.35), transparent 70%)",
          opacity: 0.6,
          animation: "logo-pulse 3.2s ease-in-out infinite",
        }}
      />

      {/* Icon with gradient ring */}
      <span className="relative flex items-center justify-center">
        <span
          aria-hidden
          className="absolute -inset-1 rounded-full"
          style={{
            background:
              "conic-gradient(from 180deg, #63c174, #297c3b, #86efac, #63c174)",
            filter: "blur(4px)",
            opacity: 0.55,
          }}
        />
        <span
          className="relative flex items-center justify-center h-9 w-9 rounded-full"
          style={{ background: "var(--bg1)" }}
        >
          <img
            src="/assets/favicon.png"
            alt="Stikbook"
            className="h-7 w-7 object-contain relative z-10"
          />
        </span>
      </span>

      {/* Wordmark */}
      <span
        className="font-syne font-bold text-[1.15rem] leading-none tracking-tight bg-clip-text text-transparent"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #297c3b 0%, #63c174 50%, #86efac 100%)",
        }}
      >
        stikbook
      </span>

      {/* Accent dot */}
      <span
        aria-hidden
        className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full"
        style={{
          background: "#63c174",
          boxShadow: "0 0 8px rgba(99,193,116,0.9)",
          animation: "logo-dot 2s ease-in-out infinite",
        }}
      />
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Inject keyframes for logo animations */}
      <style jsx global>{`
        @keyframes logo-pulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.04); }
        }
        @keyframes logo-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(0.85); }
        }
      `}</style>

      <header className="fixed top-0 left-0 right-0 z-50">
        <div
          className="absolute inset-0 -z-10 backdrop-blur-xl"
          style={{
            background: "color-mix(in srgb, var(--bg1) 75%, transparent)",
            borderBottom: "1px solid var(--card-border)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center h-[72px] gap-3">
            {/* Left sections */}
            <nav className="hidden md:flex items-center justify-end gap-1">
              {LEFT_ITEMS.map((item) => (
                <NavLink key={item.href} {...item} />
              ))}
            </nav>

            {/* Center logo */}
            <div className="flex items-center justify-center">
              <Logo />
            </div>

            {/* Right sections + Download */}
            <div className="hidden md:flex items-center justify-start gap-3">
              <nav className="flex items-center gap-1">
                {RIGHT_ITEMS.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
              </nav>
              <Link
                href="/download"
                className="ml-1 px-4 py-2 rounded-full font-semibold text-white text-[0.82rem] tracking-wide transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  background: "var(--text-gradient)",
                  boxShadow: "0 6px 24px rgba(99, 193, 116, 0.35)",
                }}
              >
                Download
              </Link>
            </div>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="md:hidden justify-self-end flex flex-col gap-[5px] p-2 -mr-2"
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

        {/* Mobile drawer */}
        {open && (
          <div
            className="md:hidden absolute left-0 right-0 top-[72px] backdrop-blur-xl"
            style={{
              background: "color-mix(in srgb, var(--bg1) 92%, transparent)",
              borderBottom: "1px solid var(--card-border)",
            }}
          >
            <div className="flex flex-col p-4 gap-1">
              {ALL_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 rounded-xl text-sm font-medium transition-colors"
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
                className="mt-2 text-center px-4 py-3 rounded-full font-semibold text-white text-sm"
                style={{
                  background: "var(--text-gradient)",
                  boxShadow: "0 6px 24px rgba(99, 193, 116, 0.35)",
                }}
              >
                Download
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
