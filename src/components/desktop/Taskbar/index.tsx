"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import StartMenu from "../StartMenu";
import { FaCircleInfo } from "react-icons/fa6";
import BaloonNotification from "@/components/atom/baloon-notification";

const TaskBar = () => {
  const [isStartHovered, setIsStartHovered] = useState(false);
  const [isStartClicked, setIsStartClicked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const getStartIcon = () => {
    if (isStartClicked) return "/icons/win-start-shine.png"; // active/clicked state
    if (isStartHovered) return "/icons/win-start-shine.png"; // hover state
    return "/icons/win-start.png"; // default
  };

  const Icons = [
    {
      src: getStartIcon(),
      w: 42,
      h: 42,
      onMouseEnter: () => setIsStartHovered(true),
      onMouseLeave: () => setIsStartHovered(false),
      onClick: () => setIsStartClicked((prev) => !prev),
    },
    { src: "/icons/explorer.png", w: 40, h: 40 },
    { src: "/icons/file-manager.png", w: 34, h: 34 },
    { src: "/icons/video-player.png", w: 40, h: 40 },
  ];

  // use effect
  // Show notification after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000); // auto-hide after 5s
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section
        className="w-full h-12 pl-2 z-50 border-t border-gray-800 shadow-inner grid grid-cols-[auto_1fr_auto]"
        style={{
          background: `linear-gradient(
      to right, 
      #8194AA 0%, 
      #A7C0DC 40%, 
      #7190B0 80%, 
      #4B637A 100%
    )`,
        }}
      >
        {/* Left Items */}
        <div className="flex items-center space-x-8">
          {Icons.map((icon, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center group"
              onMouseEnter={icon.onMouseEnter}
              onMouseLeave={icon.onMouseLeave}
              onClick={icon.onClick}
            >
              <Image
                src={icon.src}
                alt="taskbar-icon"
                width={icon.w}
                height={icon.h}
                className="object-contain"
              />

              {/* Left border */}
              <div className="absolute left-[-6px] top-2 bottom-2 w-[1.5px] bg-gray-600/60 scale-y-0 group-hover:scale-y-100 transition-transform duration-200" />

              {/* Right border */}
              <div className="absolute right-[-6px] top-2 bottom-2 w-[1.5px] bg-gray-600/60 scale-y-0 group-hover:scale-y-100 transition-transform duration-200" />
            </div>
          ))}
        </div>

        {/* Center Spacer */}
        <div></div>

        {/* Right Items */}
        <div className="flex space-x-2">
          <div className="flex items-center justify-center h-full w-full">
            <div className="flex items-center justify-center space-x-2">
              <div className="relative">
                {/* Balloon Notification Popup */}
                {showNotification && (
                  <div className="fixed bottom-16 right-25 w-72 bg-white border border-gray-400 rounded shadow-lg text-black text-sm animate-slide-in z-50">
                    <BaloonNotification
                      heading="Hi there! 👋 I am Shiva Pal."
                      message="I am a software developer. This is my portfolio website, still a work in progress... and has some bugs. I will keep updating it over time. It's a fun project, so I tried to give it a Win7 vibe. Enjoy!"
                      iconSrc="/icons/hello.png"
                    />
                  </div>
                )}
              </div>
              <Image
                src="/icons/battery.png"
                alt="taskbar-icon"
                width={20}
                height={20}
                className="object-contain border"
              />
              <Image
                src="/icons/volume.png"
                alt="taskbar-icon"
                width={20}
                height={20}
                className="object-contain"
              />
              {/* Notification Icon */}
              <FaCircleInfo
                onClick={() => setShowNotification(!showNotification)}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center text-[15px] text-white">
              <span>
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <span>
                {new Date().toLocaleDateString([], {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
          <div
            className="ml-2 w-[40px] h-full border-l border-gray-600 
             bg-gradient-to-b from-gray-600 via-gray-500 to-gray-400 
             hover:from-gray-500 hover:via-gray-400 hover:to-gray-300 
             cursor-pointer"
          ></div>
        </div>
      </section>

      {/* render startMenu on click on start */}
      {isStartClicked && <StartMenu />}
    </>
  );
};

export default TaskBar;
