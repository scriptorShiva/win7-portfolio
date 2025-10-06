import React, { useEffect } from "react";
import Image from "next/image";
import { Rnd } from "react-rnd";
import Win7TitleButton from "./Win7TitleButton";
import WinToolbar from "./WinToolbar";
import WindowSidebar from "./WindowSidebar";
import WindowContent from "./WindowContent";
import WindowFooter from "./WindowFooter";
import { DesktopProgramType } from "@/types";

interface WindowProps {
  program: DesktopProgramType;
  Sidebar?: React.ReactNode; // optional custom sidebar
  Content?: React.ReactNode; // optional custom main content
  Footer?: React.ReactNode;
}

const Window = ({ program, Sidebar, Content, Footer }: WindowProps) => {
  // states
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [isMaximized, setIsMaximized] = React.useState(false);
  const [isClosed, setIsClosed] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 200, y: 50 });
  const [size, setSize] = React.useState({ width: 700, height: 500 });

  // if closed return null
  if (isClosed) return null;

  return (
    <Rnd
      bounds="window"
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      size={isMaximized ? { width: "100%", height: "100%" } : size}
      position={isMaximized ? { x: 0, y: 0 } : position}
      minWidth={isMaximized ? "100%" : 800}
      minHeight={isMaximized ? "100%" : 600}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, position) => {
        setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
        setPosition(position);
      }}
      className={`border border-[#7a99b8] rounded-t-[8px] shadow-lg bg-[#f3f6fa] flex flex-col transition-all h-full duration-100 ease-in-out ${
        isMinimized ? "h-[40px] overflow-hidden" : ""
      }`}
      style={{ zIndex: 50 }}
    >
      <section className=" window-header bg-gradient-to-b from-[#d8e6f4] via-[#bcd2ec] to-[#9ab8d8] border-b border-[#6c8eb6] rounded-t-[8px] flex flex-col">
        {/* Window Control Buttons */}
        <div className="flex justify-end items-center gap-[2px] px-2 pt-2 pb-2 select-none">
          <Win7TitleButton
            onMinimize={() => {
              setIsMinimized(true);
              setIsClosed(true);
            }}
            onMaximize={() => {
              if (!isMaximized) {
                setIsMaximized(true);
                setPosition({ x: 0, y: 0 });
                setSize({
                  width: window.innerWidth,
                  height: window.innerHeight,
                });
              } else {
                setIsMaximized(false);
                setSize({ width: 700, height: 500 });
                setPosition({ x: 200, y: 100 });
              }
            }}
            onClose={() => setIsClosed(true)}
          />
        </div>

        {/* Toolbar Section */}
        <WinToolbar title={program.title} icon={program.src} />
      </section>

      {/* Body Section */}
      <div className="flex flex-1 bg-gradient-to-b from-[#f9fbfd] to-[#eaf2fa] overflow-auto h-full win-scrollbar">
        {/* Sidebar */}
        {Sidebar && Sidebar}

        {/* Content Area */}
        <main className="flex-1 bg-gradient-to-b from-[#fdfefe] to-[#eaf2fa] p-2 overflow-auto h-full win-scrollbar">
          {Content && Content}
        </main>
      </div>

      {/* Status Bar */}
      {Footer && Footer}
    </Rnd>
  );
};

export default Window;
