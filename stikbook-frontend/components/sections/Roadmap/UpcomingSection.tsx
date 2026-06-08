"use client";

import Image from "next/image";

export default function UpcomingSection() {
  return (
    <section id="upcoming" className="relative z-10 py-28 px-6 section-white ">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 reveal">
          <span className="chip mb-4">Upcoming</span>

          <h2 className="font-syne text-4xl md:text-5xl mb-3">
            The Next Phase of{" "}
            <span style={{ color: "var(--text-gradient)" }}>Stikbook</span>
          </h2>

          <p className="text-[0.95rem] max-w-2xl mx-auto leading-relaxed">
            Expanding beyond social — into specialized experiences for every
            user.
          </p>
        </div>

        <div className="relative">
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--text-gradient), transparent)",
            }}
          />
          <div className="relative mb-24 reveal">
            <div
              className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full z-10 shadow-[0_0_20px_rgba(99,255,141,0.8)]"
              style={{ backgroundColor: "var(--text-gradient)" }}
            />

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="pl-12 md:pl-0 md:text-right md:pr-16 text-left">
                <span className="chip mb-3">StikKids</span>

                <h3 className="font-heading text-3xl font-bold mb-3">
                  Safe Social for Young Creators
                </h3>

                <p className="text-[0.95rem] leading-relaxed">
                  A dedicated environment for younger audiences — designed to
                  encourage creativity while maintaining strict safety through
                  AI moderation and guided interactions.
                </p>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/assets/roadmap/stikkids.png"
                  alt="Stikcoins"
                  width={600}
                  height={600}
                  className="w-[65%] rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* StikShop */}
          <div className="relative reveal">
            <div
              className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full z-10 shadow-[0_0_20px_rgba(255,200,0,0.8)]"
              style={{ backgroundColor: "var(--gold)" }}
            />

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="flex justify-center md:order-1">
                <Image
                  src="/assets/roadmap/stikshop.png"
                  alt="Stikcoins"
                  width={600}
                  height={600}
                  className="w-[65%] rounded-xl"
                />
              </div>

              <div className="pl-12 md:pl-16 md:order-2 text-left">
                <span className="chip mb-3">StikShop</span>

                <h3 className="font-heading text-3xl font-bold mb-3">
                  Creator-Powered Commerce
                </h3>

                <p className="text-[0.95rem] leading-relaxed">
                  A seamless marketplace where creators and businesses turn
                  engagement into income — allowing users to shop directly
                  within the Stikbook ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
