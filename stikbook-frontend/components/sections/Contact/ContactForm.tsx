"use client";

import { useState, useRef } from "react";

const reasons = [
  { value: "Investing", label: "I'm interested in investing" },
  { value: "Career", label: "I'm looking for career" },
  { value: "Advertise", label: "I want to advertise my business" },
  { value: "Bug Report", label: "I want to report a bug" },
  { value: "Other", label: "Other" },
];

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

type Errors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
};

interface ContactFormProps {
  onSuccess: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [purpose, setPurpose] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  function validate(): boolean {
    const newErrors: Errors = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!isValidEmail(email.trim()))
      newErrors.email = "Enter a valid email address";
    if (!message.trim()) newErrors.message = "Please write a message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const payload = new URLSearchParams({
      purpose,
      "first-name": firstName.trim(),
      "last-name": lastName.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    setSending(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxbl6UgpZSctX8dOjYLAo-Khj08FVUaDVuzY0RK4PdWlaLzzOSN2RYNbCPKFMx5Q9KP/exec",
        { method: "POST", mode: "no-cors", body: payload },
      );
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setPurpose("");
      setErrors({});
      onSuccess();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const inputBase =
    "w-full border rounded-xl px-3.5 py-2.5 text-[0.88rem] text-slate-900 dark:text-white placeholder-slate-400/60 dark:placeholder-white/30 outline-none transition-all focus:border-indigo-400/60 focus:ring-[3px] focus:ring-indigo-300/30 focus:bg-white/55 dark:focus:bg-white/10";

  const inputStyle = {
    backgroundColor: "var(--card-bg)",
    borderColor: "var(--card-border)",
  };

  return (
    <div className="bg-white/45 dark:bg-black/25 backdrop-blur-2xl border border-white/60 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
      <form onSubmit={handleSubmit} noValidate>
        {/* Reason chips */}
        <p className="font-syne font-bold text-[1rem] tracking-wide mb-5">
          Reason for Contact
        </p>
        <div
          className="flex flex-wrap gap-2.5 mb-7"
          role="radiogroup"
          aria-label="Reason for contact"
        >
          {reasons.map((r) => (
            <label
              key={r.value}
              className={`reason-chip relative inline-flex items-center text-[0.82rem] font-medium px-4 py-2 rounded-full border cursor-pointer select-none transition-all ${
                purpose === r.value
                  ? "chip-selected"
                  : "hover:bg-white/55 hover:border-white/75"
              }`}
              style={
                purpose === r.value
                  ? {
                      background: "var(--text-gradient)",
                      borderColor: "transparent",
                      color: "#fff",
                    }
                  : {
                      backgroundColor: "var(--card-bg)",
                      borderColor: "var(--card-border)",
                    }
              }
            >
              <input
                type="radio"
                name="purpose"
                value={r.value}
                className="absolute opacity-0 w-0 h-0"
                checked={purpose === r.value}
                onChange={() => setPurpose(r.value)}
              />
              {r.label}
            </label>
          ))}
        </div>

        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="first-name"
              className="text-[0.78rem] font-medium text-slate-700 dark:text-white/70 tracking-wide"
            >
              First Name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setErrors((p) => ({ ...p, firstName: undefined }));
              }}
              className={`${inputBase} ${errors.firstName ? "input-error" : ""}`}
              style={inputStyle}
            />
            {errors.firstName && (
              <span className="field-error show flex items-center gap-1.5 text-[0.71rem] text-red-600 dark:text-red-400 mt-0.5">
                <ErrorIcon /> {errors.firstName}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="last-name"
              className="text-[0.78rem] font-medium text-slate-700 dark:text-white/70 tracking-wide"
            >
              Last Name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setErrors((p) => ({ ...p, lastName: undefined }));
              }}
              className={`${inputBase} ${errors.lastName ? "input-error" : ""}`}
              style={inputStyle}
            />
            {errors.lastName && (
              <span className="flex items-center gap-1.5 text-[0.71rem] text-red-600 dark:text-red-400 mt-0.5">
                <ErrorIcon /> {errors.lastName}
              </span>
            )}
          </div>
        </div>

        {/* Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-[0.78rem] font-medium text-slate-700 dark:text-white/70 tracking-wide"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((p) => ({ ...p, email: undefined }));
              }}
              className={`${inputBase} ${errors.email ? "input-error" : ""}`}
              style={inputStyle}
            />
            {errors.email && (
              <span className="flex items-center gap-1.5 text-[0.71rem] text-red-600 dark:text-red-400 mt-0.5">
                <ErrorIcon /> {errors.email}
              </span>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1 mb-6">
          <label
            htmlFor="message"
            className="text-[0.78rem] font-medium text-slate-700 dark:text-white/70 tracking-wide"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us how we can help..."
            rows={4}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setErrors((p) => ({ ...p, message: undefined }));
            }}
            className={`${inputBase} ${errors.message ? "input-error" : ""}`}
            style={inputStyle}
          />
          {errors.message && (
            <span className="flex items-center gap-1.5 text-[0.71rem] text-red-600 dark:text-red-400 mt-0.5">
              <ErrorIcon /> {errors.message}
            </span>
          )}
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 text-white font-syne font-semibold px-8 py-2 rounded-full transition-all hover:opacity-[0.88] hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed"
            style={{
              background: "var(--text-gradient)",
              boxShadow: "0 6px 30px rgba(99, 255, 141, 0.35)",
            }}
          >
            {sending ? (
              "Sending…"
            ) : (
              <>
                Send Message
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12,5 19,12 12,19" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

function ErrorIcon() {
  return (
    <svg className="w-3 h-3 shrink-0 fill-current" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  );
}
