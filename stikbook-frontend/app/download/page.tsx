"use client";

import { motion } from "framer-motion";

export default function DownloadPage() {
  return (
    <>
      <div className="layer"></div>

      <section className="reveal section-white flex flex-col items-center justify-center px-6 py-24 mt-[5%] relative overflow-hidden">
        <div className="w-full max-w-6xl mx-auto flex items-center">
          {/* LEFT */}
          <div className="flex flex-col items-start max-lg:items-center max-lg:text-center">
            <div className="chip my-4">Available Now</div>

            <h1 className="text-4xl font-heading md:text-6xl font-semibold leading-tight mb-6">
              <span className="block">Download Stikbook</span>
              <span className="block text-[var(--text-gradient)]">Today</span>
            </h1>

            <p className="animate-fade-up-3 text-[0.95rem] leading-[1.7] text-slate-700 dark:text-white/70  mb-8">
              Join 50,000+ young creators already sharing, earning, and
              connecting on the world's
              <br /> safest social platform. Free to download. Safe by design.
            </p>

            <div className="animate-fade-up-4 flex flex-col sm:flex-row items-center gap-4 mb-9">
              <a
                href="https://play.google.com/store/apps/details?id=com.stikbookinc.stikbookv2.prod"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:-translate-y-0.5"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/stikbook/id6744709279"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:-translate-y-0.5"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
            </div>
          </div>

          <motion.div
            className="relative flex items-center justify-center"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Glow layer */}
            <motion.div
              className="w-[60%] h-[60%] blur-3xl opacity-30 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.25, 0.4, 0.25],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Image */}
            <motion.img
              src="/assets/download/download.png"
              alt="User using Stikbook app"
              className="w-[50%] h-[50%] max-w-md rounded-3xl shadow-2xl object-cover relative z-10"
              animate={{
                scale: [1, 1.12, 1],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformPerspective: 1000,
              }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
