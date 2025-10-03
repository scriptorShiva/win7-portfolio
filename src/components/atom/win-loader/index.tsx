"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WindowsBoot() {
  const [stage, setStage] = useState<"text" | "dots" | "merge" | "logo">(
    "text"
  );
  const [finished, setFinished] = useState(false);
  const router = useRouter();

  const colors = [
    { class: "bg-blue-500", glow: "0 0 40px rgba(0, 0, 255, 1)" },
    { class: "bg-red-500", glow: "0 0 40px rgba(255, 0, 0, 1)" },
    { class: "bg-green-500", glow: "0 0 40px rgba(0, 255, 0, 1)" },
    { class: "bg-yellow-400", glow: "0 0 40px rgba(255, 255, 0, 1)" },
  ];

  // Create parametric points for ∞-like path
  const a = 50; // horizontal scale
  const b = 25; // vertical scale
  const steps = 100;

  const pathPoints = Array.from({ length: steps }, (_, idx) => {
    const t = (idx / steps) * 2 * Math.PI;
    return { x: a * Math.sin(t), y: b * Math.sin(t) * Math.cos(t) };
  });

  const totalSteps = pathPoints.length;
  const mergeDuration = 0.8;

  const mergePositions = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setStage("dots"), 1000));
    timers.push(setTimeout(() => setStage("logo"), 6500));

    return () => timers.forEach(clearTimeout);
  }, []);

  // after everything done redirect to new page
  useEffect(() => {
    if (finished) {
      const timer = setTimeout(() => {
        router.push("/boot-loading-welcome");
      }, 1600); // 1.6 seconds
      return () => clearTimeout(timer);
    }
  }, [finished, router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black relative overflow-hidden">
      {/* Text Stage */}

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0.7, 1] }}
        transition={{ duration: 2 }}
        className="absolute top-2/3 text-2xl font-light tracking-wide text-white drop-shadow-[0_0_20px_rgba(0,150,255,0.8)]"
      >
        Starting Windows
      </motion.h1>

      {/* Dots / Merge Stage */}
      {(stage === "dots" || stage === "merge") && (
        <motion.div
          className="relative w-32 h-32"
          animate={stage === "dots" ? { rotate: [0, 360] } : { rotate: 0 }}
          transition={{
            repeat: 0,
            duration: 2.5,
            ease: "linear",
          }}
        >
          {colors.map((c, i) => (
            <motion.div
              key={i}
              className={`absolute ${c.class} rounded-full`}
              style={{
                width: 20,
                height: 20,
                top: "50%",
                left: "50%",
                boxShadow: c.glow,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={
                stage === "dots"
                  ? {
                      scale: [0, 0.8, 1], // appear → follow path → merge
                      opacity: [0, 1, 1],
                      x: [
                        ...pathPoints.map(
                          (_, idx) => pathPoints[(idx + i * 25) % totalSteps].x
                        ),
                        mergePositions[i].x, // final merge
                      ],
                      y: [
                        ...pathPoints.map(
                          (_, idx) => pathPoints[(idx + i * 25) % totalSteps].y
                        ),
                        mergePositions[i].y, // final merge
                      ],
                      transition: {
                        duration: 2.5,
                        ease: "linear",
                      },
                    }
                  : {
                      x: mergePositions[i].x,
                      y: mergePositions[i].y,
                      scale: 1.3,
                      transition: {
                        duration: 0.8,
                        ease: "easeInOut",
                      },
                    }
              }
              transition={{
                duration: 2.5 + mergeDuration, // path + merge
                times: [...pathPoints.map((_, idx) => idx / totalSteps), 1],
                ease: "linear",
              }}
              onAnimationComplete={() => {
                // When all dots finish, trigger merge/logo stage
                if (i === colors.length - 1) setStage("logo");
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Logo Stage */}
      {stage === "logo" && (
        <motion.div
          className="relative w-32 h-32 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Background glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-transparent"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }} // dim → bright → dim
            transition={{ duration: 1.5, ease: "easeInOut" }}
            onAnimationComplete={() => {
              setFinished(true);
            }}
          />

          {/* The logo stays stable */}
          <Image
            src="/icons/win-shining-logo.png"
            alt="Windows Logo"
            className="relative w-full h-full"
            width={200}
            height={200}
          />
        </motion.div>
      )}

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute bottom-8 text-s text-gray-400"
      >
        © Microsoft Corporation
      </motion.p>

      {/* After animation ends */}
      {finished && (
        <motion.div
          className="absolute inset-0 bg-black z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
}
