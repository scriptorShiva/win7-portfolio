import React from "react";

const BinCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-white border border-transparent hover:bg-gradient-to-b hover:from-[#d8e6f4] hover:via-[#bcd2ec] hover:to-[#bcd2ec] hover:border-gray-300 rounded p-2 hover:shadow-md transition-all duration-200 cursor-pointer flex items-start space-x-3">
        {children}
      </div>
    </>
  );
};

export default BinCard;
