"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navSections?: {
    title: string;
    links: FooterLink[];
  }[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = "YourBrand",
  brandDescription = "Your description here",
  socialLinks = [],
  navSections = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className,
}: FooterProps) => {
  console.log(navSections);
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="border-t bg-background relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-10">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center justify-center">
              <div className="space-y-2 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-heading text-foreground text-3xl font-semibold">
                    {brandName}
                  </span>
                </div>
                <p className="font-heading text-muted-foreground font-semibold text-center w-full max-w-sm sm:w-96 px-4 sm:px-0">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="flex mb-8 mt-3 gap-4">
                  {socialLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-6 h-6 hover:scale-110 duration-300">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </Link>
                  ))}
                </div>
              )}

              <div className="w-full flex justify-center">
                <div className="grid grid-cols-3 gap-8 mt-10 w-full max-w-4xl justify-items-center mx-auto">
                  {navSections.map((section) => (
                    <div
                      key={section.title}
                      className="flex flex-col items-center md:items-start text-center md:text-left"
                    >
                      <h4 className="font-semibold mb-3 text-foreground">
                        {section.title}
                      </h4>

                      <ul className="space-y-2">
                        {section.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-center px-4 md:px-0">
            <p className="text-base text-muted-foreground text-center md:text-left">
              ©️ 2025 Stikbook Inc. All rights reserved.
            </p>
          </div>
        </div>

        {/* Large background text - FIXED */}
        <div
          className="gradient-text absolute left-1/2 -translate-x-1/2 bottom-20 md:bottom-32 pointer-events-none select-none text-center px-4"
          style={{
            fontSize: "clamp(3rem, 12vw, 10rem)",
            maxWidth: "95vw",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            filter: "blur(0.3px)",
            zIndex: 0,
          }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Bottom logo */}
        <div className="absolute duration-400 bottom-24 md:bottom-20 left-1/2 flex items-center justify-center p-3 -translate-x-1/2 z-10">
          <div className="w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 flex items-center justify-center">
            <img
              src="/assets/favicon.png"
              alt="Stikbook"
              className="w-15 h-15"
            />
          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-1 bg-gradient-to-r from-transparent via-border to-transparent w-full left-1/2 -translate-x-1/2"></div>

        {/* Bottom shadow */}
        <div className="bg-gradient-to-t from-background via-background/80 blur-[1em] to-background/40 absolute bottom-28 w-full h-24"></div>
      </footer>
    </section>
  );
};
