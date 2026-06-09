"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Profiles", href: "/profile-types" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

function Logo() {
  return (
    <Link
      href="/"
      aria-label="Stikbook home"
      className="group flex items-center justify-center w-[40px] h-[40px] md:rounded-full md:w-[80px] md:h-[80px] shrink-0 md:bg-[var(--bg1)] md:border md:border-[var(--card-border)] md:shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
    >
      <img
        src="/assets/favicon.png"
        alt="Stikbook"
        className="h-full w-full md:h-16 md:w-16 object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </Link>
  );
}

function NavLink({ href, label }: NavItem) {
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className="relative px-2 py-2 text-xs md:text-sm font-medium transition-colors hover:text-[var(--green)] whitespace-nowrap"
      style={{ color: isActive ? "var(--green)" : "var(--text-color)" }}
    >
      <span className="relative z-10">{label}</span>
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className="absolute left-2 right-2 -bottom-0.5 h-[2px] rounded-full"
          style={{ background: "var(--text-gradient)" }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const leftItems = NAV_ITEMS.slice(0, 3);
  const rightItems = NAV_ITEMS.slice(3, 6);

  return (
    <header className="fixed top-0 md:top-6 inset-x-0 z-50 md:px-3">
      <div
        className="relative flex items-center justify-between md:justify-center gap-6 h-[64px] md:h-[52px] px-4 md:px-6 backdrop-blur-md w-full md:w-fit mx-auto md:rounded-full border-b md:border border-[var(--card-border)]"
        style={{
          background: "color-mix(in srgb, var(--bg1) 85%, transparent)",
          boxShadow:
            "0 10px 40px -10px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        {/* Mobile: Logo on the left, CTA + hamburger on the right */}
        <div className="flex md:hidden items-center justify-between w-full">
          <Logo />
          <div className="flex items-center gap-2">
            <Link
              href="/download"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-full font-semibold text-white text-xs"
              style={{
                background: "var(--text-gradient)",
                boxShadow: "0 4px 14px rgba(99, 193, 116, 0.35)",
              }}
            >
              Get App
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="flex flex-col gap-[5px] p-3 -mr-2"
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

        {/* Desktop: Left nav | center logo | right nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {leftItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        <div className="hidden md:flex items-center justify-center px-4">
          <Logo />
        </div>

        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {rightItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <>
          <div
            className="fixed inset-0 -z-10 md:hidden"
            style={{ background: "rgba(0,0,0,0.25)" }}
            onClick={() => setOpen(false)}
          />
          <div
            className="md:hidden mt-2 max-w-[1100px] mx-auto rounded-3xl backdrop-blur-md overflow-hidden"
            style={{
              background: "color-mix(in srgb, var(--bg1) 92%, transparent)",
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
                    className="px-4 py-3 rounded-2xl text-[0.95rem] font-medium transition-colors"
                    style={{
                      color: isActive
                        ? "var(--green)"
                        : "var(--text-color)",
                      background: isActive
                        ? "rgba(99, 193, 116, 0.08)"
                        : "transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
