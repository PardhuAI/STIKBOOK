"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// =========================================
// 1. DATA TYPES
// =========================================

export type ProfileType = "personal" | "business";

export interface ProfileData {
  id: ProfileType;
  label: string;
  title: string;
  gradient: string;
  description: string;
  image: string;
  bullets: string[];
}

// =========================================
// 2. DATA
// =========================================

const PROFILE_DATA: Record<ProfileType, ProfileData> = {
  personal: {
    id: "personal",
    label: "Personal",
    title: "Your Stage to ",
    gradient: "Shine",
    description:
      "Personal profiles are built for creators who want to show off their talent, grow a community, and earn rewards while doing what they love.",
    image:
      "https://images.unsplash.com/photo-1621184078811-1120e2f1fc9e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnRlbnQlMjBjcmVhdG9yfGVufDB8fDB8fHwy",
    bullets: [
      "Showcase your talent portfolio",
      "Post photos, videos & Quiks (Short Videos)",
      "Build a following of fans",
      "Earn Stikcoins for every post",
      "Access exclusive Stikdeals",
      "AI-powered content discovery",
      "Private messaging & collab tools",
      "Analytics on your content",
    ],
  },
  business: {
    id: "business",
    label: "Business",
    title: "Grow Your ",
    gradient: "Brand",
    description:
      "Business profiles connect brands with an engaged creator community. Post deals, run spotlights, and turn users into loyal customers.",
    image:
      "https://images.unsplash.com/photo-1762341114881-669da93fef88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace
    bullets: [
      "Professional storefront profile",
      "Reach verified talent creators",
      "Post exclusive Stikdeals coupons",
      "Advanced analytics dashboard",
      "Promoted posts and spotlights",
      "Verified business badge",
      "Customer engagement tools",
      "ROI tracking on campaigns",
    ],
  },
};

// =========================================
// 3. ANIMATIONS (UNCHANGED STYLE)
// =========================================

const ANIMATIONS: {
  container: Variants;
  item: Variants;
  image: Variants;
} = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  },

  item: {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
    exit: { opacity: 0, y: -10, filter: "blur(5px)" },
  },

  image: {
    initial: {
      opacity: 0,
      scale: 1.2,
      filter: "blur(10px)",
      y: 40,
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px)",
    },
  },
};

// =========================================
// 4. TOP SWITCHER (MOVED TO TOP)
// =========================================

const Switcher = ({
  activeId,
  onToggle,
}: {
  activeId: ProfileType;
  onToggle: (id: ProfileType) => void;
}) => {
  const options = Object.values(PROFILE_DATA);

  return (
    <div className="flex justify-center pointer-events-none">
      <motion.div
        layout
        className="glass-sm pointer-events-auto flex items-center gap-1 p-1.5 rounded-lg bg-white border border-black/10 shadow-sm"
      >
        {options.map((opt) => (
          <motion.button
            key={opt.id}
            onClick={() => onToggle(opt.id)}
            whileTap={{ scale: 0.96 }}
            className="relative w-28 h-10 rounded-lg flex items-center justify-center text-sm font-medium"
          >
            {activeId === opt.id && (
              <motion.div
                layoutId="switch-pill"
                className="absolute inset-0 rounded-lg"
                style={{ backgroundColor: "var(--text-gradient)" }}
                transition={{
                  type: "spring" as const,
                  stiffness: 220,
                  damping: 22,
                }}
              />
            )}

            <span
              className={`relative z-10 font-heading`}
              style={{ color: "var(--text-color)" }}
            >
              {opt.label.toLocaleUpperCase()}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

// =========================================
// 5. VISUAL (IMAGE)
// =========================================

const ProfileVisual = ({ data }: { data: ProfileData }) => (
  <motion.div layout="position" className="relative shrink-0">
    <div className="relative h-80 w-80 md:h-[450px] md:w-[450px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.img
          key={data.id}
          src={data.image}
          alt={data.title}
          variants={ANIMATIONS.image}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full h-full object-cover rounded-3xl overflow-hidden"
          draggable={false}
        />
      </AnimatePresence>
    </div>
  </motion.div>
);

// =========================================
// 6. CONTENT
// =========================================

const ProfileDetails = ({ data }: { data: ProfileData }) => {
  return (
    <motion.div
      variants={ANIMATIONS.container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col items-start text-left"
    >
      <motion.h2 variants={ANIMATIONS.item} className="chip mb-2">
        {data.label}
      </motion.h2>

      <motion.h1
        variants={ANIMATIONS.item}
        className="font-heading text-3xl md:text-4xl mt-4 mb-4"
      >
        {data.title}
        <span style={{ color: "var(--text-gradient)" }}>{data.gradient}</span>
      </motion.h1>

      <motion.p
        variants={ANIMATIONS.item}
        className=" mb-6 max-w-md leading-relaxed"
      >
        {data.description}
      </motion.p>

      {/* BULLETS */}
      <motion.ul variants={ANIMATIONS.item} className="space-y-3 mb-8">
        {data.bullets.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span className="tick"></span> {item}
          </li>
        ))}
      </motion.ul>

      {/* BUTTONS */}
      <motion.div variants={ANIMATIONS.item} className="flex gap-4">
        <a
          href="/download/"
          className="px-6 py-3 rounded-full text-white font-semibold"
          style={{
            background: "var(--text-gradient)",
            boxShadow: "0 6px 30px rgba(99, 255, 141, 0.35)",
          }}
        >
          Create {data.label} Profile →
        </a>
      </motion.div>
    </motion.div>
  );
};

// =========================================
// 7. MAIN COMPONENT
// =========================================

export default function ProfileShowcase() {
  const [active, setActive] = useState<ProfileType>("personal");

  const currentData = PROFILE_DATA[active];

  return (
    <div
      id="profile-types"
      className="relative min-h-screen w-full section-soft overflow-hidden flex flex-col items-center justify-center"
    >
      <Switcher activeId={active} onToggle={setActive} />
      <main className="relative z-10 w-full px-6 py-8 flex flex-col justify-center max-w-7xl mx-auto mt-4">
        <motion.div
          layout
          transition={{ type: "spring", bounce: 0, duration: 0.9 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 lg:gap-48 w-full"
        >
          {/* IMAGE */}
          <ProfileVisual data={currentData} />

          {/* CONTENT */}
          <motion.div layout="position" className="w-full max-w-md">
            <AnimatePresence mode="wait">
              <ProfileDetails key={active} data={currentData} />
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
