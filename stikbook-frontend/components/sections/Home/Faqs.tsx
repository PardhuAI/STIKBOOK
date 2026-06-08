"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Stikbook?",
    a: "Stikbook is a social app built for your city. It lets you share posts and short videos, chat with people nearby, follow local creators, and discover what’s happening around you. With features like StikCoins and StikDeals, you can also earn rewards and unlock real-world offers while staying connected to your local community.",
  },
  {
    q: "Is the app free to use?",
    a: "Yes, Stikbook is completely free to download and use. You can post, watch content, chat, and explore your city without any cost.",
  },
  {
    q: "What is a Business Account?",
    a: "A Business Account is designed for brands, shops, and creators who want to promote their services. It gives you access to tools like promotions, deals (StikDeals), analytics, and better reach to local customers.",
  },
  {
    q: "What are StikCoins?",
    a: "StikCoins are in-app rewards that you can earn by being actively interacting with Stikbook. They can be used for unlocking deals, promotions, or special features within the app.",
  },
  {
    q: "How do I earn StikCoins?",
    a: "You can earn StikCoins by engaging on the platform—daily login, posting content and completing activities on Stikbook",
  },
  {
    q: "Do I get free coins when I sign up?",
    a: "Yes, new users will receive free StikCoins as a welcome bonus when they sign up. Additional rewards may also be given during special events or promotions.",
  },
  {
    q: "What is StikDeals?",
    a: "StikDeals are exclusive offers created by local businesses. These deals can include discounts, special combos, or rewards that users can unlock using StikCoins.",
  },
  {
    q: "How does a customer redeem a deal?",
    a: "To redeem a deal, simply unlock it using your StikCoins and show the deal to the business (in-store or online, depending on the offer). The business will verify and apply the discount or benefit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-white py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center reveal mb-12">
          <span className="chip mx-auto mb-6 w-fit">Got Questions?</span>

          <h2 className="font-heading text-4xl md:text-5xl">
            Frequently{" "}
            <span style={{ color: "var(--text-gradient)" }}>Asked</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-4 md:sticky top-24">
            <h3 className="text-2xl font-semibold">
              Everything you need to know
            </h3>
            <p className="text-[0.95rem] leading-relaxed">
              Got questions about Stikbook? We've got answers. Learn how it
              works, how we keep you safe, and how you can get the most out of
              your experience.
            </p>
            <div className="mt-[20%] flex justify-center">
              <img
                src="/assets/home/faq.png"
                alt="question"
                className="w-[80%] h-[80%] question-float"
              />
            </div>
          </div>

          {/* FAQ LIST */}
          <div className="space-y-4">
            {faqs.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={i}
                  className={`faq-item rounded-2xl overflow-hidden ${
                    isOpen ? "open" : ""
                  }`}
                  style={{
                    background: "var(--card-bg)",
                    border: "1px solid var(--card-border)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="font-semibold text-base">{item.q}</span>

                    <svg
                      className={`faq-chevron w-5 h-5 opacity-60 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* CONTENT */}
                  <div
                    className={`faq-content px-6 text-sm opacity-75 leading-relaxed transition-all duration-300 ${
                      isOpen
                        ? "max-h-[300px] pb-5 pt-1"
                        : "max-h-0 overflow-hidden"
                    }`}
                  >
                    {item.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
