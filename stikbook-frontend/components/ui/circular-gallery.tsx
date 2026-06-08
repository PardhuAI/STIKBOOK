"use client";

import React, { useState, useEffect, useRef, HTMLAttributes } from "react";

const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(" ");
};

export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by: string;
  };
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  (
    { items, className, radius = 600, autoRotateSpeed = 0.02, ...props },
    ref,
  ) => {
    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);

    // Auto rotation
    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling && activeIndex === null) {
          setRotation((prev) => prev + autoRotateSpeed);
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current = requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [activeIndex, isScrolling, autoRotateSpeed]);

    useEffect(() => {
      const handleClickOutside = () => {
        if (isTouchDevice) {
          setActiveIndex(null);
        }
      };

      window.addEventListener("click", handleClickOutside);

      return () => {
        window.removeEventListener("click", handleClickOutside);
      };
    }, []);

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full h-full flex items-center justify-center",
          className,
        )}
        style={{ perspective: "2000px" }}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;

            return (
              <div
                key={item.photo.url}
                className="absolute w-[280px] h-[380px]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: "50%",
                  top: "50%",
                  marginLeft: "-140px",
                  marginTop: "-190px",
                }}
                onClick={() => {
                  if (isTouchDevice) {
                    setActiveIndex(i);
                  }
                }}
                onMouseEnter={() => {
                  if (!isTouchDevice) {
                    setActiveIndex(i);
                  }
                }}
                onMouseLeave={() => {
                  if (!isTouchDevice) {
                    setActiveIndex(null); // resume rotation
                  }
                }}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-lg">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute text-center bottom-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h2 className="font-heading text-lg font-semibold">
                      {item.common}
                    </h2>
                    <p className="font-body text-xs opacity-80">
                      {item.binomial}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);

CircularGallery.displayName = "CircularGallery";

export { CircularGallery };
