"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface StarProps {
  size: number;
  top: string;
  left: string;
  duration: number;
  delay: number;
  opacity: number;
}

const Star = ({ size, top, left, duration, delay, opacity }: StarProps) => {
  return (
    <div
      className="star"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top,
        left,
        "--duration": `${duration}s`,
        "--delay": `${delay}s`,
        "--opacity": opacity,
      } as React.CSSProperties}
    />
  );
};

export function CosmicBackground() {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create stars randomly
    const createStars = () => {
      if (!starsRef.current) return;

      // Clear previous stars
      starsRef.current.innerHTML = "";

      const starCount = Math.floor(window.innerWidth / 3); // Responsive star count

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        const size = Math.random() * 2 + 1; // 1-3px
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const duration = Math.random() * 3 + 3; // 3-6s
        const delay = Math.random() * 5; // 0-5s
        const opacity = Math.random() * 0.8 + 0.2; // 0.2-1

        star.className = "star";
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = top;
        star.style.left = left;
        star.style.setProperty("--duration", `${duration}s`);
        star.style.setProperty("--delay", `${delay}s`);
        star.style.setProperty("--opacity", `${opacity}`);

        starsRef.current.appendChild(star);
      }
    };

    createStars();

    // Recreate stars on resize for responsiveness
    const handleResize = () => {
      createStars();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="cosmic-bg">
      <div ref={starsRef} className="stars-container absolute inset-0 overflow-hidden" />
      <div className="nebula-overlay absolute inset-0 opacity-30 bg-blend-screen"
           style={{
             backgroundImage: "radial-gradient(circle at 30% 50%, rgba(74, 109, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(138, 74, 255, 0.2) 0%, transparent 50%)"
           }}
      />
    </div>
  );
}
