require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");

const app = express();

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return cb(null, true);
      }
      return cb(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") cb(null, true);
    else cb(new Error("Only PDF files are allowed"));
  },
});

function escapeHtml(value) {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeUrl(value) {
  const str = String(value || "").trim();
  if (!str) return "&mdash;";
  try {
    const u = new URL(str);
    if (u.protocol === "http:" || u.protocol === "https:") {
      return escapeHtml(u.toString());
    }
  } catch (_) {
    /* fall through */
  }
  return escapeHtml(str);
}

function asText(value) {
  const str = String(value || "").trim();
  return str ? escapeHtml(str) : "&mdash;";
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/apply", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, linkedin, portfolio, role, coverLetter } =
      req.body;
    const resume = req.file;

    if (!name || !email || !role || !resume) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    await transporter.sendMail({
      from: `"Stikbook Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL,
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
          filename: resume.originalname,
          content: resume.buffer,
          contentType: "application/pdf",
        },
      ],
    });

    console.log("Application sent to:", process.env.NOTIFY_EMAIL);

    await transporter.sendMail({
      from: `"Stikbook Careers" <${process.env.EMAIL_USER}>`,
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
        <p style="font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#333">&mdash; The Stikbook Team</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
