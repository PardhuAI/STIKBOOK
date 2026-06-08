import Link from "next/link";
import { perks } from "@/lib/Perksdata";
import PerkCard from "./Perkcard";

export default function WhyStikbook() {
  return (
    <section className="section-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-3 mb-14">
          <span className="chip">Why Stikbook</span>

          <h2 className="font-heading text-4xl md:text-5xl">
            More than a job —{" "}
            <span className="grad-text">a mission you own.</span>
          </h2>

          <p className="max-w-2xl text-sm md:text-base opacity-80 leading-relaxed">
            We&apos;re building the future of local social + commerce. Join a
            team where your work directly shapes how millions connect, discover,
            and grow.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((perk) => (
            <PerkCard key={perk.id} {...perk} />
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <div className="relative overflow-hidden mt-16 rounded-2xl p-10 border border-[rgba(99,193,116,0.25)] bg-gradient-to-br from-[rgba(41,124,59,0.18)] to-[rgba(99,193,116,0.12)]">
          {/* dot overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none [background-image:radial-gradient(circle,#63c174_1px,transparent_1px)] [background-size:28px_28px]" />

          <h3 className="text-2xl md:text-4xl font-heading font-bold mb-4 relative">
            Don&apos;t see the right role?
          </h3>

          <p className="opacity-80 mb-6 relative max-w-xl mx-auto">
            We&apos;re always open to exceptional people. Send us your story and
            let&apos;s figure out where you fit.
          </p>

          <Link
            href="/contact/"
            className="inline-block px-8 py-3 rounded-full font-semibold text-white bg-[var(--text-gradient)] shadow-[0_8px_30px_rgba(99,193,116,0.35)] hover:scale-105 hover:shadow-[0_12px_40px_rgba(99,193,116,0.45)] transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
