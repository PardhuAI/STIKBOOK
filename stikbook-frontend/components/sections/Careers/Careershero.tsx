"use client";

export default function CareersHero() {
  return (
    <section className="careers-hero reveal flex items-center justify-center px-6 py-24 relative overflow-hidden bg-white/10 dark:bg-black/10">
      <div className="text-center max-w-6xl mx-auto px-6">
        <div className="chip mb-6">We&apos;re hiring · Join the team</div>

        <h1 className="text-4xl font-syne md:text-6xl font-semibold leading-tight mb-6 text-center">
          Build the future
          <br />
          <span className="grad-text">with Stikbook.</span>
        </h1>

        <p className="animate-fade-up-3 text-[0.95rem] leading-[1.7] text-slate-700 dark:text-white/70 max-w-2xl mb-8 mx-auto">
          We&apos;re a small, ambitious team unifying social connection,
          commerce, and safety into one seamless platform. If you love hard
          problems and bold ideas — you belong here.
        </p>

        <div className="animate-fade-up-4 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#open-roles"
            className="px-8 py-3.5 rounded-full font-semibold text-white hero-cta-primary"
          >
            See Open Roles
          </a>
          <a
            href="/about/"
            className="px-8 py-3.5 rounded-full font-semibold glass-sm hover:bg-white/20 transition-all"
          >
            Learn About Us
          </a>
        </div>
      </div>
    </section>
  );
}
