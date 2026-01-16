"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function SpatialBackdrop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax factor - ribbon moves at 5% of scroll speed
  const parallaxOffset = scrollY * 0.05;

  return (
    <div 
      className="fixed inset-0 z-[1] overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Ribbon layer with parallax */}
      <div
        className="absolute inset-0 w-full h-[130vh]"
        style={{
          transform: `translateY(${-parallaxOffset}px)`,
        }}
      >
        <Image
          src="/images/lytix ribbon 2.webp"
          alt=""
          fill
          className="object-cover opacity-[0.12] mix-blend-multiply"
          priority
          quality={75}
        />
      </div>

      {/* Ambient teal glow */}
      <div
        className="absolute top-0 right-0 w-[60%] h-[50%] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(31, 166, 163, 0.15) 0%, transparent 60%)",
          transform: `translateY(${-parallaxOffset * 1.2}px)`,
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
