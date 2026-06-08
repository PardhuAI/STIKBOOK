"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { label: "Home", href: "/" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Profile Types", href: "/profile-types" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

function NavHeader() {
  const pathname = usePathname();
  const isDownloadPage = pathname === "/download";

  const [hoverPosition, setHoverPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [activePosition, setActivePosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 p-1"
      style={{
        backgroundColor: "var(--bg1)",
        borderColor: "var(--card-border)",
      }}
      onMouseLeave={() => setHoverPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {TABS.map((tab, index) => (
        <Tab
          key={tab.href}
          href={tab.href}
          isActive={pathname === tab.href}
          setHoverPosition={setHoverPosition}
          setActivePosition={setActivePosition}
        >
          {tab.label}
        </Tab>
      ))}

      {/* Active cursor */}
      <Cursor
        position={{
          ...activePosition,
          opacity: isDownloadPage ? 0 : activePosition.opacity,
        }}
        zIndex={0}
        opacity={1}
      />

      {/* Hover cursor */}
      <Cursor position={hoverPosition} zIndex={1} opacity={0.5} />
    </ul>
  );
}

const Tab = ({
  children,
  href,
  isActive,
  setHoverPosition,
  setActivePosition,
}: {
  children: React.ReactNode;
  href: string;
  isActive: boolean;
  setHoverPosition: (pos: {
    left: number;
    width: number;
    opacity: number;
  }) => void;
  setActivePosition: (pos: {
    left: number;
    width: number;
    opacity: number;
  }) => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 🔥 Set active cursor based on route
  useEffect(() => {
    if (isActive && ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      setActivePosition({
        left: ref.current.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [isActive, setActivePosition]);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setHoverPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-2.5 md:text-sm"
      style={{
        color: isActive || isHovered ? "var(--bg1, #fff)" : "var(--text-color)",
        transition: "color 0.2s ease",
      }}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

const Cursor = ({
  position,
  zIndex,
  opacity,
}: {
  position: { left: number; width: number; opacity: number };
  zIndex: number;
  opacity: number;
}) => {
  return (
    <motion.li
      animate={position}
      style={{
        background: "var(--text-gradient)",
        position: "absolute",
        zIndex,
        opacity: position.opacity * opacity,
        top: "50%",
        translateY: "-50%",
      }}
      className="h-7 rounded-full md:h-10"
    />
  );
};

export default NavHeader;
