"use client";
import { Footer } from "@/components/ui/modem-animated-footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail, NotepadTextDashed } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function FooterDemo() {
  const socialLinks = [
    {
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <FaFacebook className="w-6 h-6" />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
  ];

  const navSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Profile Types", href: "/profile-types" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "Coming Soon", href: "/roadmap#coming-soon" },
        { label: "Upcoming", href: "/roadmap#upcoming" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Use", href: "#" },
      ],
    },
  ];

  return (
    <Footer
      brandName="Stikbook"
      brandDescription="Unifying Social, Commerce, and Safety into One Seamless Platform"
      socialLinks={socialLinks}
      navSections={navSections}
    />
  );
}
