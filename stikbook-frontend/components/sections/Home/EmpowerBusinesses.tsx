// components/sections/EmpowerBusinesses.tsx

"use client";

import { TrendingUp, Store, Megaphone, BadgePercent } from "lucide-react";

const points = [
  {
    title: "Organic Reach First",
    desc: "Grow your audience without relying on paid ads.",
    icon: TrendingUp,
  },
  {
    title: "Built for Local Shops",
    desc: "Perfect for small businesses, startups, and creators across India.",
    icon: Store,
  },
  {
    title: "Promote with StikDeals",
    desc: "Turn engagement into real customers with exclusive deals.",
    icon: BadgePercent,
  },
  {
    title: "Content that Converts",
    desc: "Your posts don’t just get likes — they drive action.",
    icon: Megaphone,
  },
];

export default function EmpowerBusinesses() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block px-4 py-1 text-sm rounded-full bg-gray-200 text-gray-700 mb-4">
            🛍️ For Businesses
          </span>

          <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
            Empowering India’s
            <span className="text-green-600"> local businesses</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-md">
            Whether you're a small shop, a growing brand, or a creator —
            Stikbook helps you reach, engage, and convert without heavy ad
            spend.
          </p>

          {/* CTA */}
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition">
            Create Business Profile
          </button>
        </div>

        {/* Right Cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {points.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-100 mb-3">
                  <Icon size={20} className="text-green-600" />
                </div>

                <h4 className="font-semibold text-gray-900">{item.title}</h4>

                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
