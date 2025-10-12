"use client";
import React from "react";
import { Rnd } from "react-rnd";
import Image from "next/image";
import Win7TitleButton from "../window/Win7TitleButton";

type props = {
  contentData: string;
};

const Notepad = ({ contentData }: props) => {
  const [, setIsMinimized] = React.useState(false);
  const [isMaximized, setIsMaximized] = React.useState(false);
  const [isClosed, setIsClosed] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 200, y: 100 });
  const [size, setSize] = React.useState({ width: 600, height: 400 });
  const [content, setContent] = React.useState(contentData);

  if (isClosed) return null;

  return (
    <Rnd
      bounds="window"
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      size={isMaximized ? { width: "100%", height: "100%" } : size}
      position={isMaximized ? { x: 0, y: 0 } : position}
      minWidth={400}
      minHeight={300}
      onDragStop={(_e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(_e, _direction, ref, _delta, pos) => {
        setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
        setPosition(pos);
      }}
      className=" shadow-md bg-[#ece9d8] p-2 bg-gradient-to-b from-[#9bb7D3] via-[#acc5e0] to-[#b4cde6] border-b border-[#6c8eb6] rounded-t-[8px]"
    >
      <div className="flex flex-col w-full h-full">
        {/* Title Bar */}
        <div className="flex items-center justify-between bg-[#d4d0c8] border-b border-gray-500 h-6 text-xs">
          <div className="flex items-center justify-between w-full bg-gradient-to-b from-[#9bb7D3] via-[#acc5e0] to-[#b4cde6] border-b border-[#6c8eb6] rounded-t-[8px] text-gray-800 pl-2">
            <div className="flex gap-1">
              <span>
                <Image
                  src="/icons/notepad-icon.png"
                  alt="Notepad"
                  width={16}
                  height={16}
                />
              </span>
              <span className="font-sans">Untitled - Notepad</span>
            </div>
            <div className="flex items-center">
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
          </div>
        </div>

        {/* Menu Bar */}
        <div className="flex items-center gap-3 px-3 h-6 text-[13px] bg-gradient-to-b from-[#ffff] via-[#DAE0FI] to-[#E1E6F6]  border-b border-gray-400">
          {["File", "Edit", "Format", "View", "Help"].map((item) => (
            <span
              key={item}
              className="hover:bg-[#cce4f7] px-1 rounded-sm cursor-default text-gray-800"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Text Editing Area */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled
          className="flex-1 w-full h-full resize-none outline-none p-2 font-mono text-sm bg-white text-gray-700"
          spellCheck="false"
        />

        {/* Status Bar */}
        <div className="flex items-center justify-between text-xs bg-[#f1f1f1] border-t border-gray-400 px-3 h-6 text-gray-700">
          <span>Ln 1, Col 1</span>
          <span>Windows (CRLF) | UTF-8</span>
        </div>
      </div>
    </Rnd>
  );
};

export default Notepad;
