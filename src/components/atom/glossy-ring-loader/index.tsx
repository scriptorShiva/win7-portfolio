"use client";

import { motion } from "framer-motion";

export default function GlossyRing({ size = 25, speed = 2 }) {
  return (
    <motion.div
      className="relative inline-block rounded-full"
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0) 40%), linear-gradient(to bottom, #67e8f9, #06b6d4, #0e7490)",
        boxShadow:
          "inset -6px -6px 12px rgba(0,0,0,0.35), inset 6px 6px 12px rgba(255,255,255,0.6)",
        WebkitMask: "radial-gradient(circle, transparent 53%, black 55%)",
        mask: "radial-gradient(circle, transparent 45%, black 55%)",
      }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: speed,
        ease: "linear",
      }}
    />
  );
}
