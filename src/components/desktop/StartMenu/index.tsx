import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LiaSearchSolid } from "react-icons/lia";
import { socialMediaLink } from "@/constants/desktop";
import { DesktopPrograms } from "@/constants/desktop";

const StartMenu = () => {
  const leftMenuItems = [...DesktopPrograms];

  const rightMenuItems = socialMediaLink;

  return (
    <>
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
                          alt={item.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <span className="text-sm text-gray-800">
                        {item.title}
                      </span>
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
          <div className="col-span-5 p-2 flex flex-col h-full">
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
                      {
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex items-center gap-2 hover:underline">
                            <span>{item.icon}</span>
                            {item.title}
                          </div>
                        </a>
                      }
                    </li>
                  ))}
                </ul>
              </section>

              {/* Sticky Aero-style Shutdown Button */}
              {/* <div className="bottom-2 left-2 w-[calc(100%-0.9srem)]">
                <button
                  className="w-full relative px-4 py-2 flex items-center justify-center rounded-md bg-white/20 backdrop-blur-sm border border-white/30 text-gray-100 font-semibold shadow-sm hover:bg-white/30 hover:border-white/50 transition duration-200"
                  onClick={() => alert("Shutdown clicked!")}
                >
                  Shut down
                  <span className="ml-2 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[5px] border-l-gray-100" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default StartMenu;
