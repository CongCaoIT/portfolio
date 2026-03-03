"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  animated?: boolean;
}

const sizeMap = {
  sm: {
    badge: "w-7 h-7 text-xs",
    name: "text-sm",
    title: "text-[9px]",
    gap: "gap-1.5",
    verticalGap: "gap-0.5",
  },
  md: {
    badge: "w-9 h-9 text-sm",
    name: "text-base",
    title: "text-[10px]",
    gap: "gap-2",
    verticalGap: "gap-1",
  },
  lg: {
    badge: "w-12 h-12 text-base",
    name: "text-xl",
    title: "text-xs",
    gap: "gap-3",
    verticalGap: "gap-1.5",
  },
};

export function Logo({
  variant = "horizontal",
  size = "md",
  className,
  onClick,
  animated = true,
}: LogoProps) {
  const s = sizeMap[size];

  const badge = (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-xl font-black tracking-tight shrink-0 select-none",
        s.badge
      )}
      style={{
        background: "linear-gradient(145deg, #0c4a6e 0%, #0369a1 30%, #0ea5e9 65%, #7dd3fc 100%)",
        boxShadow:
          "0 0 0 2px #38bdf880, 0 4px 24px #0ea5e9aa, 0 1px 6px #0284c7cc, inset 0 1px 0 rgba(255,255,255,0.15)",
      }}
    >
      {/* top-edge gloss line */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: "linear-gradient(180deg, rgba(255,255,255,0.30) 0%, transparent 50%)",
        }}
      />
      <span
        className="relative z-10 font-black text-white"
        style={{
          fontFamily: "'Cinzel Decorative', serif",
          letterSpacing: "0.04em",
          fontSize: "1.05em",
          paddingTop: "0.4em",
          textShadow:
            "0 1px 0 rgba(0,0,0,0.35), 0 0 8px rgba(255,255,255,0.9), 0 0 20px #ffffff, 0 0 36px #7dd3fccc",
        }}
      >
        TC
      </span>
    </div>
  );

  const textBlock =
    variant === "horizontal" ? (
      <div className="flex flex-col justify-center leading-none">
        <span
          className={cn("font-bold tracking-tight", s.name)}
          style={{
            background: "linear-gradient(135deg, #0284c7, #0ea5e9, #22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.02em",
          }}
        >
          CongCao
        </span>
        <span
          className={cn("font-semibold tracking-widest uppercase", s.title)}
          style={{ color: "var(--muted-foreground)" }}
        >
          Software Developer
        </span>
      </div>
    ) : (
      <div className={cn("flex flex-col items-center leading-none", s.verticalGap)}>
        <span
          className={cn("font-bold tracking-tight", s.name)}
          style={{
            background: "linear-gradient(135deg, #0284c7, #0ea5e9, #22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.02em",
          }}
        >
          CongCao
        </span>
        <span
          className={cn("font-semibold tracking-widest uppercase", s.title)}
          style={{ color: "var(--muted-foreground)" }}
        >
          Software Developer
        </span>
      </div>
    );

  const inner =
    variant === "horizontal" ? (
      <div className={cn("flex items-center", s.gap)}>
        {badge}
        {textBlock}
      </div>
    ) : (
      <div className={cn("flex flex-col items-center", s.gap)}>
        {badge}
        {textBlock}
      </div>
    );

  if (!animated) {
    return (
      <button
        onClick={onClick}
        className={cn("cursor-pointer focus:outline-none group", className)}
        aria-label="CongCao – Software Developer"
      >
        {inner}
      </button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cn("cursor-pointer focus:outline-none group", className)}
      aria-label="CongCao – Software Developer"
    >
      {inner}
    </motion.button>
  );
}
