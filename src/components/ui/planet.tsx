"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface PlanetProps {
  size?: number;
  position?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  type?: "earth" | "mars" | "gas-giant";
  glow?: boolean;
}

export function Planet({
  size = 300,
  position = { top: "-5%", right: "-5%" },
  type = "earth",
  glow = true,
}: PlanetProps) {
  const planetRef = useRef<HTMLDivElement>(null);

  // Get planet colors based on type
  const getPlanetColors = () => {
    switch (type) {
      case "mars":
        return {
          main: "#d85a40",
          shadow: "#a34332",
          highlight: "#f8c3b0",
          detail: "#dc8874",
        };
      case "gas-giant":
        return {
          main: "#e9c46a",
          shadow: "#c9a648",
          highlight: "#f8e4b2",
          detail: "#e5d396",
        };
      default:
        return {
          main: "#3f77b1",
          shadow: "#2e5a87",
          highlight: "#8bbae8",
          detail: "#5c94cc",
        };
    }
  };

  const colors = getPlanetColors();

  return (
    <motion.div
      ref={planetRef}
      className="absolute z-0 rounded-full overflow-hidden"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...position,
        boxShadow: glow
          ? "0 0 60px 5px hsla(var(--planet-glow) / 0.3)"
          : "none",
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 200,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      }}
    >
      <div
        className="w-full h-full rounded-full relative overflow-hidden"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${colors.highlight} 0%, ${colors.main} 30%, ${colors.shadow} 100%)`,
        }}
      >
        {/* Surface details */}
        {type === "earth" && (
          <>
            <div
              className="absolute"
              style={{
                width: "60%",
                height: "20%",
                top: "20%",
                left: "30%",
                background: colors.detail,
                borderRadius: "50%",
                transform: "rotate(20deg)",
                opacity: 0.6,
              }}
            />
            <div
              className="absolute"
              style={{
                width: "40%",
                height: "15%",
                top: "55%",
                left: "10%",
                background: colors.detail,
                borderRadius: "50%",
                transform: "rotate(-15deg)",
                opacity: 0.7,
              }}
            />
          </>
        )}

        {type === "mars" && (
          <>
            <div
              className="absolute rounded-full"
              style={{
                width: "15%",
                height: "15%",
                top: "30%",
                left: "40%",
                background: colors.shadow,
                opacity: 0.8,
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                width: "10%",
                height: "10%",
                top: "60%",
                left: "65%",
                background: colors.shadow,
                opacity: 0.8,
              }}
            />
          </>
        )}

        {type === "gas-giant" &&
          [...Array(4)].map((_, i) => (
            <div
              // Using i+100 to avoid using just index as key
              key={`gas-band-${i+100}`}
              className="absolute"
              style={{
                width: "120%",
                height: `${8 + i * 4}%`,
                top: `${20 + i * 15}%`,
                left: "-10%",
                background: i % 2 === 0 ? colors.shadow : colors.detail,
                borderRadius: "50%",
                opacity: 0.4,
              }}
            />
          ))
        }

        {/* Shadow overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(45deg, rgba(0,0,0,0.6) 0%, transparent 50%)",
          }}
        />
      </div>
    </motion.div>
  );
}
