"use client";

import React, { useEffect } from "react";
import Taskbar from "@/components/desktop/Taskbar";
import StartMenu from "@/components/desktop/StartMenu";
import { DesktopPrograms as DesktopProgramsList } from "@/constants/desktop";
import AdobeAcrobat from "@/components/atom/adobe-acrobat";
import WindowModal from "@/components/desktop/WindowModal";

type ProgramKey = "myPc" | "recycleBin" | "projects" | "resume";

const Desktop = () => {
  // states
  const [desktopPrograms, setDesktopPrograms] = React.useState<
    Record<ProgramKey, boolean>
  >({
    myPc: false,
    recycleBin: false,
    projects: false,
    resume: false,
  });

  // programs
  const handleProgramOnClick = (program: ProgramKey) => {
    setDesktopPrograms((prevPrograms) => ({
      ...prevPrograms,
      [program]: !prevPrograms[program],
    }));
  };

  // sideffects
  useEffect(() => {
    const audio = new Audio("/sounds/windows-startup.mp3");
    audio.play().catch((err) => {
      console.log("Autoplay prevented:", err);
    });
  }, []);

  return (
    <>
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
            {/* desktop screen programs */}
            <div className="flex flex-col p-2 gap-6">
              {DesktopProgramsList.map((icon, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center cursor-pointer select-none px-2 py-1 rounded-md"
                >
                  <div
                    className="flex flex-col items-center group-hover:bg-[rgba(0,120,215,0.3)] group-active:bg-[rgba(0,120,215,0.6)] rounded-md px-2 py-1 transition"
                    onClick={() => handleProgramOnClick(icon.id as ProgramKey)}
                  >
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

            {/* on start menu click what will happen */}
            <StartMenu />
          </div>

          {/* actions on click of desktop icons */}
          {/* Open windows */}
          {DesktopProgramsList.map((program) => {
            if (program.id === "resume") {
              return desktopPrograms[program.id as ProgramKey] ? (
                <AdobeAcrobat key={program.id} />
              ) : null;
            }

            return desktopPrograms[program.id as ProgramKey] ? (
              <WindowModal key={program.id} program={program} />
            ) : null;
          })}
        </div>

        {/* Taskbar stays at the bottom */}
        <Taskbar />
      </div>
    </>
  );
};

export default Desktop;
