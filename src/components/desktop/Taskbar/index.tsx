import React from "react";
import Image from "next/image";

const TaskBar = () => {
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
          {[
            { src: "/icons/win-start.png", w: 42, h: 42 },
            { src: "/icons/explorer.png", w: 40, h: 40 },
            { src: "/icons/file-manager.png", w: 34, h: 34 },
            { src: "/icons/video-player.png", w: 40, h: 40 },
          ].map((icon, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center group"
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
    </>
  );
};

export default TaskBar;
