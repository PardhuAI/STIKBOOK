// components/sections/BuiltForIndia.tsx

"use client";

import { Globe, Wifi, Languages, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Local-First Experience",
    desc: "Designed for Indian users, trends, and digital behavior — not adapted later.",
    icon: Globe,
    gradient: "from-blue-50 to-blue-50/30",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    accent: "border-blue-200 group-hover:border-blue-300",
  },
  {
    title: "Optimized for Low Data",
    desc: "Smooth experience even on slower networks and budget devices.",
    icon: Wifi,
    gradient: "from-purple-50 to-purple-50/30",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    accent: "border-purple-200 group-hover:border-purple-300",
  },
  {
    title: "Multi-language Ready",
    desc: "Built to support India's diverse languages and regional communities.",
    icon: Languages,
    gradient: "from-orange-50 to-orange-50/30",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    accent: "border-orange-200 group-hover:border-orange-300",
  },
  {
    title: "Culture-aware Safety",
    desc: "AI moderation aligned with Indian values for a safer platform.",
    icon: ShieldCheck,
    gradient: "from-green-50 to-green-50/30",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    accent: "border-green-200 group-hover:border-green-300",
  },
];

export default function BuiltForIndia() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-white to-gray-50/50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-50/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-blue-50 border border-green-100/50 mb-6">
            <span className="text-xl">🇮🇳</span>
            <span className="text-sm font-medium text-gray-700">
              Made in India
            </span>
          </div>

          <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
            Built for India,
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              from the ground up
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Stikbook isn't a global template — it's crafted specifically for how
            India connects, shops, and shares.
          </p>
        </div>

        {/* Grid with enhanced cards */}
        <div className="gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default ${item.accent}`}
              >
                {/* Card background */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Subtle accent line on top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${item.iconColor.replace("text-", "bg-")}`}
                />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 flex items-center justify-center rounded-xl ${item.iconBg} mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      className={`${item.iconColor}`}
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom accent dot */}
                <div
                  className={`absolute bottom-4 right-4 w-2 h-2 rounded-full ${item.iconColor.replace("text-", "bg-")} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            );
          })}
        </div>

        {/* Optional: Stats or CTA section below */}
        <div className="mt-20 pt-12 border-t border-gray-200/50">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-green-600">10M+</p>
              <p className="text-sm text-gray-600">Active users</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600">8</p>
              <p className="text-sm text-gray-600">Languages supported</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-purple-600">2G+</p>
              <p className="text-sm text-gray-600">Network compatible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
