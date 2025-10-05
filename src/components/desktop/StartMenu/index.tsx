import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LiaSearchSolid } from "react-icons/lia";

const StartMenu = () => {
  const leftMenuItems = [
    { name: "Documents", src: "/images/docs.png" },
    { name: "Pictures", src: "/images/pictures.png" },
    { name: "Music", src: "/images/music.png" },
    { name: "Videos", src: "/images/videos.png" },
    { name: "Settings", src: "/images/settings.png" },
    { name: "Files", src: "/images/files.png" },
    { name: "Shutdown", src: "/images/shutdown.png" },
  ];

  const rightMenuItems = [
    "Recent File 1",
    "Recent File 2",
    "Recent File 3",
    "Project Folder",
    "Notes",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed bottom-12 w-[480px] h-[550px] bg-gradient-to-b from-gray-100 to-gray-300 
                 shadow-2xl border border-gray-400 rounded-t-lg z-40 overflow-auto"
    >
      <div
        className="w-full grid grid-cols-12 rounded-t-lg h-full"
        style={{
          background: `linear-gradient(
            to bottom, 
            #8194AA 0%, 
            #7190B0 20%, 
            #7190B0 40%, 
            #7190B0 80%, 
            #4B637A 100%
          )`,
        }}
      >
        {/* left section */}
        <div className="col-start-1 col-span-7 bg-white m-2 rounded-lg">
          <div className="grid grid-rows-[90%_10%] h-full">
            <div className="overflow-y-auto p-2">
              <ul>
                {leftMenuItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 p-2 rounded hover:bg-sky-100 cursor-pointer transition-colors duration-150"
                  >
                    <div className="w-6 h-6 relative">
                      <Image
                        src={item.src}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <span className="text-sm text-gray-800">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {/* Search Box Container */}
              <div className="bg-gradient-to-b from-[#f0f4fb] to-[#dce4f8] p-2 rounded-md shadow-inner">
                {/* Search Box */}
                <div className="w-full flex items-center justify-between border border-gray-400 rounded-md px-2 py-1 bg-gradient-to-b from-[#fefefe] to-[#e5edf8] shadow-inner hover:border-gray-500 focus-within:border-gray-500 transition-colors duration-150">
                  <input
                    type="text"
                    placeholder="Search programs and files"
                    className="flex-1 h-7 text-[13px] bg-transparent placeholder:text-gray-500 placeholder:italic outline-none px-2 focus:text-black focus:placeholder-gray-400"
                  />
                  <LiaSearchSolid
                    className="text-sky-600 hover:text-sky-700 transition-colors duration-150"
                    size={18}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="col-span-5 p-2">
          <section className="flex justify-center align-center">
            {/* profile picture */}
            <div
              className="w-18 h-18 rounded-[15%] p-[2px] 
                               bg-gradient-to-b from-white/70 via-gray-300/40 to-gray-400/30
                               flex items-center justify-center relative overflow-hidden shadow-[4px_4px_6px_rgba(0,0,0,0.2)]"
            >
              <div className="w-16 h-16 rounded-[10%] overflow-hidden border border-transparent shadow-inner">
                <Image
                  src="/images/window-profile.jpg"
                  alt="profile"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>
          </section>
          <div className="mt-4">
            <section className="w-full overflow-y-auto">
              <ul>
                {rightMenuItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-2 rounded cursor-pointer transition-colors duration-150 text-sm text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StartMenu;
