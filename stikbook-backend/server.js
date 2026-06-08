require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Store resume in memory (max 5MB)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") cb(null, true);
    else cb(new Error("Only PDF files are allowed"));
  },
});

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

    // --- Email 1: Notify your team ---
    await transporter.sendMail({
      from: `"Stikbook Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      subject: `New Application: ${role} — ${name}`,
      html: `
        <h2>New Job Application</h2>
        <table>
          <tr><td><b>Role</b></td><td>${role}</td></tr>
          <tr><td><b>Name</b></td><td>${name}</td></tr>
          <tr><td><b>Email</b></td><td>${email}</td></tr>
          <tr><td><b>Phone</b></td><td>${phone || "—"}</td></tr>
          <tr><td><b>LinkedIn</b></td><td>${linkedin || "—"}</td></tr>
          <tr><td><b>Portfolio</b></td><td>${portfolio || "—"}</td></tr>
        </table>
        <h3>Cover Letter</h3>
        <p>${coverLetter || "Not provided"}</p>
      `,
      attachments: [
        {
          filename: resume.originalname,
          content: resume.buffer,
          contentType: "application/pdf",
        },
      ],
    });

    console.log("Sending to:", process.env.NOTIFY_EMAIL);

    // --- Email 2: Confirmation to candidate ---
    await transporter.sendMail({
      from: `"Stikbook Careers" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your application — ${role}`,
      html: `
        <h2>Hi ${name},</h2>
        <p>Thanks for applying for the <b>${role}</b> position at Stikbook!</p>
        <p>We've received your application and resume. Our team will review it and reach out if there's a good fit.</p>
        <br/>
        <p>— The Stikbook Team</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Something went wrong" });
  }
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running on port ${process.env.PORT || 3001}`);
});
