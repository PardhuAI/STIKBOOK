"use client";

import { useEffect } from "react";

export default function ThemeScript() {
  useEffect(() => {
    const applyThemeByTime = () => {
      const hour = new Date().getHours();
      const root = document.documentElement;

      if (hour >= 6 && hour < 18) {
        root.classList.remove("dark");
      } else {
        root.classList.add("dark");
      }
    };

    applyThemeByTime();
    const interval = setInterval(applyThemeByTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const root = document.documentElement;
              const saved = localStorage.getItem('theme');

              if (saved === 'dark') {
                root.classList.add('dark');
                return;
              }
              if (saved === 'light') {
                root.classList.remove('dark');
                return;
              }

              const hour = new Date().getHours();
              root.classList.toggle('dark', !(hour >= 6 && hour < 18));
            } catch (e) {}
          })();
        `,
      }}
    />
  );
}
