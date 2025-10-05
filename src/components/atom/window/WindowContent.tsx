import React from "react";
import Image from "next/image";

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

const WindowContent = ({ files }: props) => {
  return (
    <div>
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-gradient-to-b from-[#e4edf7] to-[#c9daef] border border-[#a5bdd8]">
          <tr className="text-[#2b4c6f]">
            <th className="py-1 px-2 font-semibold border-r border-[#a5bdd8]">
              Name
            </th>
            <th className="py-1 px-2 font-semibold border-r border-[#a5bdd8]">
              Date Modified
            </th>
            <th className="py-1 px-2 font-semibold border-r border-[#a5bdd8]">
              Type
            </th>
            <th className="py-1 px-2 font-semibold">Size</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr
              key={index}
              className="hover:bg-[#dce7f3] cursor-default text-[#2b4c6f] border-b border-[#d7e2ef]"
            >
              <td className="py-1 px-2 flex items-center gap-2">
                <Image
                  src={`/icons/folder.png`}
                  alt="icon"
                  width={16}
                  height={16}
                  className="inline-block"
                />
                {file.name}
              </td>
              <td className="py-1 px-2">{file.date}</td>
              <td className="py-1 px-2">{file.type}</td>
              <td className="py-1 px-2">{file.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WindowContent;
