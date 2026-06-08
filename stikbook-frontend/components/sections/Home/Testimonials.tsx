"use client";

import CircularTestimonials from "@/components/ui/circular-testimonials";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: `I’ve been posting regularly here and the engagement feels more genuine compared to other apps. Also really like the editing tools.`,
    name: "Aarav Sharma",
    designation: "Content Creator",
    rating: 5,
    src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    quote: `The UI feels really premium. I’ve used a lot of apps like this but this one feels more calm and less chaotic.`,
    name: "Sofia Williams",
    designation: "Entrepreneur",
    rating: 5,
    src: "https://plus.unsplash.com/premium_photo-1661505298334-5f8df0ad75b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwYnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    quote: `Tried posting for my business and got decent reach even without ads. That’s honestly impressive.`,
    name: "Rohan Kulkarni",
    designation: "Startup Founder",
    rating: 4,
    src: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
  },
  {
    quote:
      "Quiks are fun. Way better than I expected. Also the rewards system is a nice touch.",
    name: "Nina Patel",
    designation: "Fashion Creator",
    rating: 5,
    src: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
  },
  {
    quote: `Uploading photos is smooth and quality doesn’t get ruined like other apps. Big win.`,
    name: "Kevin Brooks",
    designation: "Photographer",
    rating: 4.5,
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    quote:
      "Feels safer than most social apps tbh. I like the privacy controls a lot.",
    name: "Priya Sharma",
    designation: "College Student",
    rating: 5,
    src: "https://images.unsplash.com/photo-1607189200597-4d0923ef98c6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww",
  },
  {
    quote:
      "Simple, clean, no unnecessary clutter. Just scroll, post, and chill. That’s all I need.",
    name: "Daniel Reed",
    designation: "Casual User",
    rating: 5,
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww",
  },
  {
    quote:
      "Finally a place where smaller creators can actually get noticed. Loving the vibe so far.",
    name: "Meera Iyer",
    designation: "Artist",
    rating: 4.5,
    src: "https://images.unsplash.com/photo-1599746146388-a7ec2004b67a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function Testimonials() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <section className="py-16 px-6 section-soft relative">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center reveal mb-12">
          <span className="chip mx-auto mb-6 w-fit">Community Love</span>

          <h2 className="font-heading text-4xl md:text-5xl">
            What People Are{" "}
            <span style={{ color: "var(--text-gradient)" }}>Saying</span>
          </h2>
        </div>

        <div className="flex justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "var(--foreground)",
              designation: "var(--muted-foreground)",
              testimony: "var(--foreground)",
              arrowBackground: "rgba(20,20,20,0.9)",
              arrowForeground: "#ffffff",
              arrowHoverBackground: "var(--text-gradient)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
