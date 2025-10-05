import React from "react";

import { MdPlayArrow } from "react-icons/md";
import { HiSwitchVertical } from "react-icons/hi";
import { BiSolidDownArrow } from "react-icons/bi";
import { LiaSearchSolid } from "react-icons/lia";
import Image from "next/image";

const WinToolbar = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <div className="flex items-center gap-2 px-2 pb-2">
      <div className="flex items-center space-x-1">
        <button className="bg-gradient-to-b from-[#f2f8ff] to-[#c4d6ea] border border-[#7b98b6] rounded-sm p-[2px] hover:brightness-110">
          <Image
            src="/icons/left-arrow-continue.png"
            alt="Back"
            width={70}
            height={70}
            className="object-contain"
          />
        </button>
        <button className="bg-gradient-to-b from-[#f2f8ff] to-[#c4d6ea] border border-[#7b98b6] rounded-sm p-[2px] hover:brightness-110">
          <Image
            src="/icons/right-arrow-continue.png"
            alt="Forward"
            width={70}
            height={70}
          />
        </button>
      </div>

      {/* Address Bar */}
      <div className=" w-full bg-gradient-to-b from-[#fdfdfd] to-[#ebf1f9] border border-[#7a99b8] rounded-[2px] flex items-center justify-between px-2 py-[3px] shadow-inner">
        <div className="flex items-center space-x-2">
          <Image src={icon} alt="Recycle Bin" width={18} height={18} />
          <MdPlayArrow className="text-gray-700" />
          <span className="text-gray-800 text-[14px] font-medium">{title}</span>
        </div>

        <div className="flex items-center space-x-2">
          <BiSolidDownArrow size={10} className="text-gray-700" />
          <div className="h-5 w-[1.5px] bg-gray-400"></div>
          <div className="w-6 h-6 flex items-center justify-center rounded-sm cursor-pointer">
            <HiSwitchVertical size={20} className="text-sky-600" />
          </div>
        </div>
      </div>

      {/* Search Box */}
      <div className="w-full flex items-center justify-between border border-[#7a99b8] rounded-[2px] px-1 py-[2px] bg-gradient-to-b from-[#fefefe] to-[#e5edf8]">
        <input
          type="text"
          placeholder={"Search" + " " + title}
          className="outline-none h-6 text-[13px] bg-transparent placeholder:text-gray-500 px-1 placeholder:italic text-black"
        />
        <LiaSearchSolid className="font-bold text-sky-700" size={20} />
      </div>
    </div>
  );
};

export default WinToolbar;
