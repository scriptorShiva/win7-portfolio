"use client";
import React from "react";
import Image from "next/image";
import PasswordTextBox from "./components/PasswordTextBox";

const LockScreenCard = () => {
  return (
    <>
      {/* profile picture */}
      <div
        className="w-38 h-38 rounded-[15%] p-[2px] 
                     bg-gradient-to-b from-white/70 via-gray-300/40 to-gray-400/30
                     flex items-center justify-center relative overflow-hidden shadow-[4px_4px_6px_rgba(0,0,0,0.2)]"
      >
        <div className="w-34 h-34 rounded-[10%] overflow-hidden border border-transparent shadow-inner">
          <Image
            src="/images/window-profile.jpg"
            alt="profile"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-6 leading-6">
        <h1 className="text-white text-[1.6rem] font-sans font-[300] drop-shadow-md">
          Shiva Pal
        </h1>
        <p className="text-white text-[1rem] font-sans font-[300] drop-shadow-md">
          Software Developer
        </p>
      </div>

      <div className="mt-2 leading-5">
        {/* Password text box client component */}
        <PasswordTextBox />

        {/* Bottom small hint */}
        <p className="text-white/50 text-sm mt-4">
          Hint - username in small-case{" "}
        </p>
      </div>
    </>
  );
};

export default LockScreenCard;
