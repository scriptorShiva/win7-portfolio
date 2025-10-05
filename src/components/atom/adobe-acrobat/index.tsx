"use client";
import React from "react";
import { Rnd } from "react-rnd";
import { Minus, Square, X } from "lucide-react";
import Image from "next/image";
import {
  FaFolderOpen,
  FaPrint,
  FaSearchPlus,
  FaSearchMinus,
  FaHandPaper,
} from "react-icons/fa";
import { set } from "react-hook-form";

const AdobeAcrobat = () => {
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [isMaximized, setIsMaximized] = React.useState(false);
  const [isClosed, setIsClosed] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 300, y: 50 });
  const [size, setSize] = React.useState({ width: 700, height: 500 });

  if (isClosed) return null;

  return (
    <Rnd
      default={{ x: 100, y: 100, width: 900, height: 600 }}
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
      className="border border-[#7f9db9] shadow-md"
    >
      <div className="flex flex-col w-full h-full">
        {/* Title Bar */}
        <div className="flex items-center justify-between bg-[#d4d0c8] border-b border-gray-500 h-6 px-1 py-5 text-xs">
          <div className="flex items-center w-full bg-gradient-to-r from-[#888888] via-[#9b9b9b] to-[#bfbfbf] justify-between">
            <div className="flex items-center">
              <Image
                src="/icons/acrobat-logo.png"
                alt="taskbar-icon"
                width={20}
                height={20}
              />
              <span className="font-sans"> Adobe Reader</span>
            </div>

            <div className="flex items-center">
              <button
                onClick={() => {
                  setIsMinimized(true);
                  setIsClosed(true);
                }}
                className="w-7 h-6 bg-[#c0c0c0] hover:bg-[#dcdcdc] border border-gray-600 flex items-center justify-center"
              >
                <Minus size={10} />
              </button>
              <button
                onClick={() => {
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
                className="w-7 h-6 bg-[#c0c0c0] hover:bg-[#dcdcdc] border border-gray-600 flex items-center justify-center"
              >
                <Square size={10} />
              </button>
              <button
                onClick={() => setIsClosed(true)}
                className="w-7 h-6 bg-[#d9534f] hover:bg-[#c9302c] border border-gray-700 flex items-center justify-center"
              >
                <X size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="flex items-center gap-3 px-3 h-6 text-[13px] bg-[#d4d0c8] border-b border-gray-400">
          {["File", "Edit", "View", "Document", "Tools", "Window", "Help"].map(
            (item) => (
              <span
                key={item}
                className="hover:bg-[#d4d0c8] text-gray-600 hover:text-white px-1 rounded-sm cursor-default"
              >
                {item}
              </span>
            )
          )}
        </div>

        {/* Toolbar Row (single row like in image) */}
        <div className="flex items-center px-2 h-8 bg-[#d4d0c8] border-b border-gray-400 text-xs gap-1">
          {/* Placeholder buttons */}
          <button className="w-7 h-7  flex items-center justify-center hover:bg-[#e0e0e0]">
            <FaFolderOpen size={18} className="text-[#888888]" />
          </button>
          <button className="w-7 h-7  flex items-center justify-center hover:bg-[#e0e0e0]">
            <FaPrint size={18} className="text-[#888888]" />
          </button>
          <div className="border-l border-gray-600 h-5 mx-2" />
          <button className="w-7 h-7  flex items-center justify-center hover:bg-[#e0e0e0]">
            <FaHandPaper size={18} className="text-[#888888]" />
          </button>
          <button className="w-7 h-7  flex items-center justify-center hover:bg-[#e0e0e0]">
            <FaSearchMinus size={18} className="text-[#888888]" />
          </button>
          <button className="w-7 h-7  flex items-center justify-center hover:bg-[#e0e0e0]">
            <FaSearchPlus size={18} className="text-[#888888]" />
          </button>

          {/* Zoom dropdown */}
          <div className="ml-3">
            <select className="bg-[#d4d0c8] border border-l-gray-600 border-t-[2px] border-l-[2px] border-t-gray-600 border-r-gray-500 border-b-gray-500 text-gray-600 text-xs px-1 py-0.5 h-6 shadow-inner focus:outline-none">
              <option>100%</option>
              <option>75%</option>
              <option>50%</option>
            </select>
          </div>

          {/* Yahoo Search Bar */}
          <div className="ml-auto flex items-center border border-gray-500 bg-white h-6 px-1 text-gray-700">
            <input
              type="text"
              placeholder="Search Web"
              className="text-xs outline-none w-28"
            />
            <span className="text-red-600 text-sm font-bold ml-1">Y!</span>
          </div>
        </div>

        {/* Document Area */}
        <div className="flex-1 bg-[#bdbdbd] flex items-center justify-center">
          <div className="bg-white w-[80%] h-[80%] shadow-md flex flex-col items-center justify-center border border-gray-400">
            <p className="text-gray-600 text-sm">
              Adobe Reader 7.0 Mock PDF Area
            </p>
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between text-xs bg-[#d4d0c8] border-t border-gray-400 px-3 h-6">
          <span>Page 1 of 10</span>
          <span>100%</span>
        </div>
      </div>
    </Rnd>
  );
};

export default AdobeAcrobat;
