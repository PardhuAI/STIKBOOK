"use client";

interface SuccessOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessOverlay({ open, onClose }: SuccessOverlayProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{
        background: "rgba(10, 10, 30, 0.5)",
        backdropFilter: "blur(8px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="card-pop bg-white/45 dark:bg-black/25 backdrop-blur-2xl border border-white/60 dark:border-white/10 rounded-[28px] p-10 text-center max-w-sm w-[90%] shadow-2xl">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <lottie-player
          src="/assets/lottie/contact/customer_care.json"
          background="transparent"
          speed="1"
          style={
            { width: 190, height: 190, margin: "0 auto" } as React.CSSProperties
          }
          autoplay
        />
        <p
          className="font-syne text-2xl font-semibold mt-2 mb-2"
          style={{ color: "var(--text-gradient)" }}
        >
          Thanks for reaching out!
        </p>
        <p className="text-sm leading-relaxed mb-6">
          Your message has been received. Our friendly team will be in touch
          with you soon.
        </p>
        <button
          onClick={onClose}
          className="text-white font-syne font-bold text-sm px-7 py-2.5 rounded-full border-none cursor-pointer transition-all hover:opacity-85 hover:-translate-y-px shadow-lg"
          style={{
            background: "var(--text-gradient)",
            boxShadow: "0 6px 30px rgba(99, 255, 141, 0.35)",
          }}
        >
          Got it!
        </button>
      </div>
    </div>
  );
}

// Extend JSX for lottie-player web component
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lottie-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        background?: string;
        speed?: string;
        autoplay?: boolean | string;
        loop?: boolean | string;
      };
    }
  }
}
