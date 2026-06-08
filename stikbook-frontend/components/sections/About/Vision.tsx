"use client";

import ColorChangeCards from "@/components/ui/color-change-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faUsers,
  faBolt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

interface VisionMissionProps {
  isDark?: boolean;
}

const profile = {
  avatarUrl: "https://avatars.githubusercontent.com/u/199367026?s=280&v=4",
  avatarText: "JD",
  fullName: "John Doe",
  place: "San Francisco, USA",
  about:
    "Software Engineer at 21st, building clean UI systems and experimenting with new dev tools.",
};

export default function VisionMissionSection({
  isDark = false,
}: VisionMissionProps) {
  return (
    <section className="section-soft flex items-center justify-center px-6 py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="chip mb-4 mx-auto w-fit">Our Purpose</div>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold">
            Vision &amp; Mission
          </h2>
        </div>

        <ColorChangeCards />

        {/* Core Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: faShieldHalved,
              title: "Safety First",
              subtitle: "AI-moderated content",
              color: "text-teal-600 dark:text-teal-300",
              delay: "0.1s",
            },
            {
              icon: faUsers,
              title: "Inclusivity",
              subtitle: "Every voice matters",
              color: "text-indigo-600 dark:text-indigo-300",
              delay: "0.2s",
            },
            {
              icon: faBolt,
              title: "Innovation",
              subtitle: "Constantly evolving",
              color: "text-blue-600 dark:text-blue-300",
              delay: "0.3s",
            },
            {
              icon: faHeart,
              title: "Community",
              subtitle: "Built together",
              color: "text-purple-600 dark:text-purple-300",
              delay: "0.4s",
            },
          ].map((value, index) => (
            <div
              key={index}
              className=" glass-sm p-5 text-center hover-lift"
              style={{
                transitionDelay: value.delay,
                background: "var(--card-bg)",
                backdropFilter: "blur(12px) saturate(1.3)",
                border: "1px solid var(--card-border)",
                borderRadius: "16px",
              }}
            >
              <div className={`flex justify-center mb-3 ${value.color}`}>
                <FontAwesomeIcon icon={value.icon} size="lg" />
              </div>
              <div className="font-syne font-bold text-sm">{value.title}</div>
              <div className="text-xs opacity-60 mt-1">{value.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
