import React from "react";
import Image from "next/image";

interface props {
  heading: string;
  message: string;
  iconSrc: string;
}

const BaloonNotification = ({ heading, message, iconSrc }: props) => {
  return (
    <>
      {/* Arrow */}
      <div className="absolute bottom-[-8px] right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />

      <div className="p-3">
        <div className="flex items-center space-x-2">
          <Image src={iconSrc} alt="icon" width={35} height={35} />
          <strong>{heading}</strong>
        </div>
        <p className="mt-1 text-xs">
          <em>{message}</em>
        </p>
      </div>
    </>
  );
};

export default BaloonNotification;
