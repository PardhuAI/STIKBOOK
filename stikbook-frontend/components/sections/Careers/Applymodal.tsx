"use client";

import { useState } from "react";

interface ApplyModalProps {
  role: string;
  onClose: () => void;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid var(--card-border)",
  background: "var(--card-bg)",
  color: "var(--text-color)",
  fontSize: "0.95rem",
};

export default function ApplyModal({ role, onClose }: ApplyModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [cover, setCover] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    if (!name.trim()) return "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email address.";
    if (phone && !/^[0-9+\-\s]{7,15}$/.test(phone))
      return "Please enter a valid phone number.";
    if (!resume) return "Please upload your resume.";
    if (resume.type !== "application/pdf") return "Only PDF files are allowed.";
    if (resume.size > 5 * 1024 * 1024) return "Resume must be less than 5MB.";
    return null;
  };

  const handleSubmit = async () => {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("linkedin", linkedin);
    formData.append("portfolio", portfolio);
    formData.append("coverLetter", cover);
    formData.append("role", role);
    formData.append("resume", resume!);

    try {
      const res = await fetch("/api/apply", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        throw new Error(data.error || "Submission failed");
      }
    } catch (e: unknown) {
      setError(
        e instanceof Error
          ? e.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(4px)",
        overflowY: "auto",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          maxWidth: 560,
          width: "100%",
          margin: "60px auto",
          background: "var(--bg1)",
          border: "1px solid var(--card-border)",
          borderRadius: 20,
          padding: 40,
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 20,
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "var(--text-color)",
          }}
        >
          ×
        </button>

        <h2
          className="font-syne"
          style={{ fontSize: "1.5rem", marginBottom: 4 }}
        >
          Apply Now
        </h2>
        <p style={{ color: "var(--green)", fontWeight: 600, marginBottom: 24 }}>
          {role}
        </p>

        {!success ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Fields */}
            {[
              {
                label: "Full Name *",
                id: "name",
                type: "text",
                placeholder: "Jane Smith",
                value: name,
                onChange: setName,
              },
              {
                label: "Email Address *",
                id: "email",
                type: "email",
                placeholder: "jane@example.com",
                value: email,
                onChange: setEmail,
              },
              {
                label: "Phone Number",
                id: "phone",
                type: "tel",
                placeholder: "+91 98765 43210",
                value: phone,
                onChange: setPhone,
              },
              {
                label: "LinkedIn Profile URL",
                id: "linkedin",
                type: "url",
                placeholder: "https://linkedin.com/in/yourname",
                value: linkedin,
                onChange: setLinkedin,
              },
              {
                label: "Portfolio / GitHub URL",
                id: "portfolio",
                type: "url",
                placeholder: "https://github.com/yourname",
                value: portfolio,
                onChange: setPortfolio,
              },
            ].map((f) => (
              <div key={f.id}>
                <label
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={f.value}
                  onChange={(e) => f.onChange(e.target.value)}
                  style={inputStyle}
                />
              </div>
            ))}

            {/* Cover Letter */}
            <div>
              <label
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  display: "block",
                  marginBottom: 6,
                }}
              >
                Cover Letter / Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us why you're a great fit..."
                value={cover}
                onChange={(e) => setCover(e.target.value)}
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>

            {/* Resume */}
            <div>
              <label
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  display: "block",
                  marginBottom: 6,
                }}
              >
                Resume (PDF only, max 5MB) *
              </label>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setResume(e.target.files?.[0] ?? null)}
                style={{ ...inputStyle, fontSize: "0.9rem" }}
              />
            </div>

            {/* Error */}
            {error && (
              <div
                style={{
                  color: "#dc2626",
                  fontSize: "0.85rem",
                  padding: "10px 14px",
                  background: "rgba(220,38,38,0.08)",
                  borderRadius: 8,
                }}
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                marginTop: 8,
                padding: 14,
                borderRadius: 12,
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                fontFamily: "Syne, sans-serif",
                fontSize: "1rem",
                fontWeight: 600,
                color: "#fff",
                background: "var(--text-gradient)",
                boxShadow: "0 6px 24px rgba(99,193,116,0.3)",
                opacity: loading ? 0.7 : 1,
                transition: "opacity 0.2s",
              }}
            >
              {loading ? "Submitting…" : "Submit Application →"}
            </button>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: 20 }}>
            <div style={{ fontSize: "2rem", marginBottom: 8 }}>🎉</div>
            <h3 className="font-syne" style={{ marginBottom: 6 }}>
              Application Submitted!
            </h3>
            <p style={{ opacity: 0.7, fontSize: "0.9rem" }}>
              We&apos;ll review your profile and be in touch. Check your inbox
              for a confirmation email.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
