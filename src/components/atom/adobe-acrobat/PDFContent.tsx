import React from "react";

const PDFContent = () => {
  return (
    <>
      <div className="flex-1 bg-[#bdbdbd] flex items-center justify-center">
        <div className="bg-white w-full h-full shadow-md border border-gray-400 overflow-hidden">
          <iframe
            src="/pdfs/my-resume.pdf#zoom=87" // make sure the file is in /public/pdfs/
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default PDFContent;
