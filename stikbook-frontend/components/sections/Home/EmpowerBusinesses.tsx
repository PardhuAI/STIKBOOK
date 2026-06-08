"use client";

import { TrendingUp, Store, Megaphone, BadgePercent } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  {
    icon: TrendingUp,
    title: "10x your organic reach",
    desc: "Our platform helps you break out of the local bubble. Reach thousands of potential customers across your city without spending a dime on ads.",
  },
  {
    icon: Store,
    title: "Setup shop in minutes",
    desc: "Turn your profile into a fully functional storefront. Upload products, manage inventory, and start accepting orders instantly with zero technical knowledge.",
  },
  {
    icon: Megaphone,
    title: "Run smart promotions",
    desc: "Launch targeted discounts and flash sales. Our AI automatically notifies users in your area who are most likely to buy your specific products.",
  },
  {
    icon: BadgePercent,
    title: "Pay 0% platform fees",
    desc: "Keep 100% of your earnings. We believe local businesses shouldn't be penalized for growing. We make money when you upgrade, not when you sell.",
  },
];

export default function EmpowerBusinesses() {
  return (
    <section className="relative w-full bg-white">
      
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row relative">
        
        {/* Left Content - Sticky Title Area */}
        <div className="w-full md:w-1/2 md:sticky md:top-0 h-auto md:h-screen flex items-center pt-20 md:pt-0">
          <div className="max-w-xl pr-0 md:pr-12">
            <h2 className="font-syne text-[3rem] md:text-[4rem] font-bold leading-[1.05] text-[#1A1A24] tracking-tight mb-6">
              Empowering India&apos;s<br/>local businesses
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-md">
              We provide the tools you need to digitize your store, reach a massive audience, and sell online effortlessly.
            </p>
          </div>
        </div>

        {/* Right Content - Naturally Scrolling Cards */}
        <div className="w-full md:w-1/2 flex flex-col py-12 md:py-[20vh] gap-[15vh]">
          {points.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col justify-center min-h-[50vh]"
              >
                {/* Visual Number Indicator */}
                <div className="mb-8 flex items-center gap-6">
                  <div 
                    className="w-14 h-14 flex items-center justify-center rounded-full text-[var(--text-color)] font-syne font-bold text-2xl shadow-sm"
                    style={{ background: "color-mix(in srgb, var(--bg1) 80%, var(--text-color))" }}
                  >
                    {i + 1}
                  </div>
                  <div className="h-[1px] flex-1" style={{ background: "color-mix(in srgb, var(--text-color) 15%, transparent)" }}></div>
                </div>

                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[rgba(99,193,116,0.15)] mb-8">
                  <Icon size={32} style={{ color: "var(--green)" }} />
                </div>

                <h4 className="font-syne text-3xl md:text-4xl font-bold text-[var(--text-color)] mb-4 tracking-tight">
                  {item.title}
                </h4>

                <p className="text-lg md:text-xl text-[var(--text-color)] opacity-70 leading-relaxed max-w-lg">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
