/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", "class"],
  theme: {
    extend: {
      colors: {
        ink: "var(--c-ink)",
        "ink-muted": "var(--c-ink-muted)",
        "ink-faint": "var(--c-ink-faint)",
        cream: "var(--c-cream)",
        "cream-deep": "var(--c-cream-deep)",
        coral: "#FF6B4A",
        "coral-light": "var(--c-trust-light)",
        pink: "#E84B6B",
        teal: "#2BA5B8",
        "teal-light": "var(--c-teal-light)",
        gold: "#FFD93D",
        "gold-light": "var(--c-accent-light)",
        "danger-soft": "var(--c-danger-soft)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      borderRadius: {
        "2xl": "14px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};
