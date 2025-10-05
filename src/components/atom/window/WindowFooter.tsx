import React from "react";

interface fileType {
  name: string;
  type: string;
  date: string;
  size: string;
  icon?: string;
}

interface props {
  files: fileType[];
}

const WindowFooter = ({ files }: props) => {
  return (
    <>
      <footer className="absolute bottom-0 left-0 right-0 h-[26px] bg-gradient-to-b from-[#e7f0fb] to-[#d3e3f7] border-t border-[#9ab8d8] flex items-center px-3 text-[13px] text-[#2b4c6f]">
        {files.length} items
      </footer>
    </>
  );
};

export default WindowFooter;
