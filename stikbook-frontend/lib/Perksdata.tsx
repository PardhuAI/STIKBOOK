import { ReactNode } from "react";

export interface Perk {
  id: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  icon: ReactNode;
}

export const perks: Perk[] = [
  {
    id: "remote",
    title: "Work your way",
    description:
      "Remote or in-person — we optimize for output, not hours. Work where you're most focused and creative.",
    iconBg: "rgba(99, 193, 116, 0.12)",
    iconColor: "#297c3b",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2c2.5 3 2.5 17 0 20M12 2c-2.5 3-2.5 17 0 20" />
      </svg>
    ),
  },
  {
    id: "impact",
    title: "Build what matters",
    description:
      "Every feature you ship impacts real users. No vanity work — only meaningful problems worth solving.",
    iconBg: "rgba(59, 130, 246, 0.1)",
    iconColor: "#1d4ed8",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: "growth",
    title: "Fast growth curve",
    description:
      "Learn faster than anywhere else. Take ownership early, make decisions, and grow with the product.",
    iconBg: "rgba(168, 85, 247, 0.1)",
    iconColor: "#9333ea",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path d="M3 17l6-6 4 4 7-7" />
        <path d="M14 7h6v6" />
      </svg>
    ),
  },
  {
    id: "creative",
    title: "Creative freedom",
    description:
      "We trust ideas over hierarchy. If it improves the product — you can build it.",
    iconBg: "rgba(245, 158, 11, 0.1)",
    iconColor: "#d97706",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path d="M12 3l1.5 3L17 7l-3.5 1L12 11l-1.5-3L7 7l3.5-1L12 3z" />
        <path d="M5 17l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
      </svg>
    ),
  },
  {
    id: "learn",
    title: "Learn & evolve",
    description:
      "Access tools, mentorship, and resources to continuously level up your skills and thinking.",
    iconBg: "rgba(244, 63, 94, 0.1)",
    iconColor: "#e11d48",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
      </svg>
    ),
  },
  {
    id: "team",
    title: "Small team, big impact",
    description:
      "No layers, no bureaucracy. Every voice matters and every contribution moves the company forward.",
    iconBg: "rgba(16, 185, 129, 0.1)",
    iconColor: "#3B6D11",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3B6D11"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a7 7 0 0113 0" />
        <path d="M4 16a4 4 0 016 0" />
        <path d="M20 16a4 4 0 00-6 0" />
      </svg>
    ),
  },
];
