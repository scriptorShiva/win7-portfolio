"use client";

import React, { useEffect } from "react";
import Taskbar from "@/components/desktop/Taskbar";

const Desktop = () => {
  useEffect(() => {
    const audio = new Audio("/sounds/windows-startup.mp3");
    audio.play().catch((err) => {
      console.log("Autoplay prevented:", err);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // full viewport height
      }}
    >
      {/* Main background fills remaining space above Taskbar */}
      <div
        style={{
          flex: 1, // take all available space
          backgroundImage: "url('/images/bg/windows-startup.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="grid grid-cols-[auto_1fr_auto]">
          <div className="flex flex-col p-2 gap-6">
            {[
              {
                src: "/icons/my-pc.png",
                w: 60,
                h: 60,
                title: "My Profile",
              },
              {
                src: "/icons/recycle-bin.png",
                w: 60,
                h: 60,
                title: "Recycle Bin",
              },
              {
                src: "/icons/folder.png",
                w: 60,
                h: 60,
                title: "Projects",
              },
              {
                src: "/icons/document.png",
                w: 60,
                h: 60,
                title: "Resume",
              },
            ].map((icon, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center cursor-pointer select-none px-2 py-1 rounded-md"
              >
                <div className="flex flex-col items-center group-hover:bg-[rgba(0,120,215,0.3)] group-active:bg-[rgba(0,120,215,0.6)] rounded-md px-2 py-1 transition">
                  <img
                    src={icon.src}
                    width={icon.w}
                    height={icon.h}
                    alt={icon.title}
                    className="mb-1"
                  />
                  <span
                    className="text-white text-sm text-center"
                    style={{
                      textShadow: "1px 1px 2px black", // Windows-style shadow
                      maxWidth: "80px", // prevents text overflow
                      wordBreak: "break-word",
                    }}
                  >
                    {icon.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Taskbar stays at the bottom */}
      <Taskbar />
    </div>
  );
};

export default Desktop;
