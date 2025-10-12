"use client";
import React from "react";
import { Rnd } from "react-rnd";
import Image from "next/image";
import Win7TitleButton from "../window/Win7TitleButton";
import { PiMagnifyingGlassPlusBold } from "react-icons/pi";
import { LuExpand } from "react-icons/lu";
import { IoMdSkipForward } from "react-icons/io";
import { IoMdSkipBackward } from "react-icons/io";
import { RiArrowGoForwardFill } from "react-icons/ri";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { createPortal } from "react-dom";

type ImageViewerProps = {
  imagesToView: string[];
  onClose: () => void;
  githubRedirectUrl: string;
};

const ImageViewer = ({
  imagesToView,
  onClose,
  githubRedirectUrl,
}: ImageViewerProps) => {
  const [position, setPosition] = React.useState({ x: 200, y: 0 });
  const [size, setSize] = React.useState({ width: 750, height: 600 });
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [zoom, setZoom] = React.useState(1);
  const [rotation, setRotation] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [isMaximized, setIsMaximized] = React.useState(false);
  const [prevSize, setPrevSize] = React.useState(size);
  const [prevPosition, setPrevPosition] = React.useState(position);

  // useEffect
  React.useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imagesToView.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, imagesToView.length]);

  // Portal container
  const portalRoot = typeof document !== "undefined" ? document.body : null;
  if (!portalRoot) return null;

  return createPortal(
    <Rnd
      bounds="window"
      disableDragging={isMaximized}
      enableResizing={!isMaximized}
      size={size}
      position={position}
      minWidth={400}
      minHeight={300}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, direction, ref, delta, pos) => {
        setSize({ width: ref.offsetWidth, height: ref.offsetHeight });
        setPosition(pos);
      }}
      style={{
        display: isMinimized ? "none" : "block",
        zIndex: 1000,
      }}
      className=" shadow-md bg-[#ece9d8] p-2 bg-gradient-to-b from-[#9bb7D3] via-[#acc5e0] to-[#b4cde6] border-b border-[#6c8eb6] rounded-t-[8px] "
    >
      <div className="flex flex-col w-full h-full overflow-hidden">
        {/* Title Bar */}
        <div className="flex items-center justify-between bg-[#d4d0c8] border-b border-gray-500 h-6 text-xs">
          <div className="flex items-center justify-between w-full bg-gradient-to-b from-[#9bb7D3] via-[#acc5e0] to-[#b4cde6] border-b border-[#6c8eb6] rounded-t-[8px] text-gray-800 pl-2">
            <div className="flex gap-1">
              <span>
                <Image
                  src="/icons/img-viewer-icon.png"
                  alt="Notepad"
                  width={25}
                  height={25}
                />
              </span>
              <span className="font-sans text-[13px] text-shadow-2xs">
                Windows Photo Viewer
              </span>
            </div>
            <div className="flex items-center">
              <Win7TitleButton
                onMinimize={() => setIsMinimized(true)}
                onMaximize={() => {
                  if (!isMaximized) {
                    // Save current size & position before maximizing
                    setPrevSize(size);
                    setPrevPosition(position);

                    setIsMaximized(true);
                    setSize({
                      width: window.innerWidth,
                      height: window.innerHeight,
                    });
                    setPosition({ x: 0, y: 0 });
                  } else {
                    // Restore previous size and position
                    setIsMaximized(false);
                    setSize(prevSize);
                    setPosition(prevPosition);
                  }
                }}
                onClose={onClose}
              />
            </div>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="flex items-center gap-3 px-3 h-8 text-[13px] bg-gradient-to-b from-[#ffff] via-[#DAE0FI] to-[#E1E6F6]  border-b border-gray-400">
          {["File", "Edit", "Format", "View", "Help"].map((item) => (
            <span
              key={item}
              className="hover:bg-[#dce7f3] px-1 rounded-sm cursor-default text-gray-800"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden bg-white flex items-center justify-center p-2 rounded-md">
          {imagesToView ? (
            <Image
              src={imagesToView[currentImageIndex]}
              alt="Notepad"
              width={size.width}
              height={size.height}
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg)`,
                transition:
                  "transform 0.3s ease-in-out , opacity 0.3s ease-in-out",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          ) : (
            <div className="text-gray-600">No Image Found!</div>
          )}
        </div>

        {/* Bottom Toolbar */}
        <div className="flex items-center justify-center h-[100px] bg-gradient-to-t from-[#dae5f3] to-[#eef3fa] border-t border-[#b2c5dc]">
          <div className="w-full p-[100px]">
            <div className="flex items-center justify-between w-full mx-4 h-[52px] bg-gradient-to-b from-[#f8fbfe] to-[#dce7f5] border border-[#a5bcd7] rounded-full shadow-inner px-3 gap-3">
              <PiMagnifyingGlassPlusBold
                className="text-[#4a6ea9] text-xl cursor-pointer size-[30px] hover:scale-110 transition-transform duration-200"
                onClick={() => {
                  setZoom((prev) => Math.min(prev + 0.1, 3)); // Max 300%
                }}
              />
              <LuExpand
                className="text-[#4a6ea9] text-xl cursor-pointer size-[30px] hover:scale-110 transition-transform duration-200 "
                onClick={() => {
                  setZoom((prev) => Math.max(prev - 0.1, 0.1));
                }}
              />
              <IoMdSkipBackward
                className="text-[#4a6ea9] text-xl cursor-pointer size-[30px] hover:scale-110 transition-transform duration-200"
                onClick={() => {
                  if (currentImageIndex > 0) {
                    setCurrentImageIndex((prev) => prev - 1);
                  }
                }}
              />
              {/* Center circular play button */}
              <div>
                <div
                  className={`flex items-center justify-center rounded-full bg-gradient-to-b from-[#c7dbf5] to-[#6ea5e1] border border-[#4f76b5] shadow-[inset_0_1px_2px_#fff,0_0_4px_#7aa8e6] cursor-pointer`}
                  style={{
                    width: isPlaying ? "70px" : "58px",
                    height: isPlaying ? "70px" : "58px",
                  }}
                >
                  <Image
                    src="/icons/img-viewer-icon.png"
                    alt="Play"
                    width={isPlaying ? 50 : 40}
                    height={isPlaying ? 50 : 40}
                    onClick={() => setIsPlaying((prev) => !prev)}
                  />
                </div>
              </div>
              <IoMdSkipForward
                className="text-[#4a6ea9] text-xl cursor-pointer size-[30px] hover:scale-110 transition-transform duration-200"
                onClick={() => {
                  if (currentImageIndex < imagesToView.length - 1) {
                    setCurrentImageIndex(
                      (prev) => (prev + 1) % imagesToView.length
                    );
                  }
                }}
              />
              <RiArrowGoBackFill
                className="text-[#4a6ea9] text-xl cursor-pointer size-[30px] hover:scale-110 transition-transform duration-200"
                onClick={() => {
                  setRotation((prev) => prev - 90);
                }}
              />
              <RiArrowGoForwardFill
                className="text-[#4a6ea9] text-xl cursor-pointer size-[30px] hover:scale-110 transition-transform duration-200"
                onClick={() => setRotation((prev) => prev + 90)}
              />
              <div className="w-[2px] h-[25px] bg-[#4a6ea9]"></div>
              <div className="relative group">
                <FaGithub
                  className="text-[#58a6ff] bg-[#0d1117] rounded-full p-1 text-2xl cursor-pointer size-[34px] 
               shadow-md hover:shadow-[0_0_10px_#58a6ff] 
               hover:text-[#58a6ff] hover:bg-[#161b22]
               transition-all duration-300 ease-in-out"
                  onClick={() => window.open(githubRedirectUrl, "_blank")}
                />
                <span
                  className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 bg-[#161b22] text-[#c9d1d9]
                 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300
                 shadow-md border border-[#30363d]"
                >
                  View on GitHub
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Rnd>,
    portalRoot
  );
};

export default ImageViewer;
