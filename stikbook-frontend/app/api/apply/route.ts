import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;

function escapeHtml(value: unknown): string {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeUrl(value: unknown): string {
  const str = String(value ?? "").trim();
  if (!str) return "—";
  try {
    const u = new URL(str);
    if (u.protocol === "http:" || u.protocol === "https:") {
      return escapeHtml(u.toString());
    }
  } catch {
    /* fall through */
  }
  return escapeHtml(str);
}

function asText(value: unknown): string {
  const str = String(value ?? "").trim();
  return str ? escapeHtml(str) : "—";
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const linkedin = String(form.get("linkedin") ?? "").trim();
    const portfolio = String(form.get("portfolio") ?? "").trim();
    const role = String(form.get("role") ?? "").trim();
    const coverLetter = String(form.get("coverLetter") ?? "").trim();
    const resume = form.get("resume");

    if (!name || !email || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    if (!(resume instanceof File)) {
      return NextResponse.json(
        { error: "Resume is required" },
        { status: 400 },
      );
    }

    if (resume.type !== "application/pdf") {
      return NextResponse.json(
        { error: "Only PDF files are allowed" },
        { status: 400 },
      );
    }

    if (resume.size > MAX_RESUME_BYTES) {
      return NextResponse.json(
        { error: "Resume must be less than 5MB" },
        { status: 400 },
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;
    const notifyEmail = process.env.NOTIFY_EMAIL;

    if (!gmailUser || !gmailPass || !notifyEmail) {
      console.error("Missing email env vars");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    await transporter.sendMail({
      from: `"Stikbook Careers" <${gmailUser}>`,
      to: notifyEmail,
      replyTo: email,
      subject: `New Application: ${role} — ${name}`,
      html: `
        <h2 style="font-family:Helvetica,Arial,sans-serif;color:#111">New Job Application</h2>
        <table style="border-collapse:collapse;font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#111">
          <tr><td style="padding:6px 12px;font-weight:600">Role</td><td style="padding:6px 12px">${asText(role)}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600">Name</td><td style="padding:6px 12px">${asText(name)}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600">Email</td><td style="padding:6px 12px">${asText(email)}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600">Phone</td><td style="padding:6px 12px">${asText(phone)}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600">LinkedIn</td><td style="padding:6px 12px">${sanitizeUrl(linkedin)}</td></tr>
          <tr><td style="padding:6px 12px;font-weight:600">Portfolio</td><td style="padding:6px 12px">${sanitizeUrl(portfolio)}</td></tr>
        </table>
        <h3 style="font-family:Helvetica,Arial,sans-serif;color:#111;margin-top:24px">Cover Letter</h3>
        <p style="font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#333;white-space:pre-wrap">${asText(coverLetter)}</p>
      `,
      attachments: [
        {
          filename: resume.name || "resume.pdf",
          content: resumeBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    await transporter.sendMail({
      from: `"Stikbook Careers" <${gmailUser}>`,
      to: email,
      subject: `We received your application — ${role}`,
      html: `
        <h2 style="font-family:Helvetica,Arial,sans-serif;color:#111">Hi ${escapeHtml(name)},</h2>
        <p style="font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#333">
          Thanks for applying for the <strong>${escapeHtml(role)}</strong> position at Stikbook!
        </p>
        <p style="font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#333">
          We've received your application and resume. Our team will review it and reach out if there's a good fit.
        </p>
        <p style="font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#333">— The Stikbook Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Something went wrong";
    console.error("[/api/apply]", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
