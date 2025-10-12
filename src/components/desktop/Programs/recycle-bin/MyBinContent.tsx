import BinCard from "@/components/atom/bin-card";
import ConfirmationPopup from "@/components/atom/confirmation-popup";
import React from "react";
import Image from "next/image";

interface fileType {
  name: string;
  subTitle: string;
  createdAt: string;
  link: string;
  about?: string;
  icon?: React.ReactNode;
  iconSrc?: string;
}

interface props {
  files: fileType[];
}

const MyBinContent = ({ files }: props) => {
  const [selectedFile, setSelectedFile] = React.useState<fileType | null>(null);
  const [, setConfirmationPopupClose] = React.useState<boolean>(false);

  // const isLinkContainGitHub = (link: string) => {
  //   return link.includes("https://github.com/");
  // };
  return (
    <>
      <div className="grid gap-4">
        {files && files.length > 0
          ? files.map((file, index) => (
              <div
                key={index}
                onDoubleClick={(e) => {
                  e.preventDefault();
                  setSelectedFile(file);
                }}
              >
                <BinCard key={index}>
                  <div>
                    <Image
                      src={file.iconSrc!}
                      alt={file.name}
                      width={40}
                      height={40}
                      className="text-[#0077b6]"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-sm font-medium  text-gray-800">
                      {file.name}
                    </div>
                    <div className="text-xs text-gray-500">{file.subTitle}</div>
                    <div className="text-xs text-gray-400">
                      {file.createdAt}
                    </div>
                  </div>
                </BinCard>
              </div>
            ))
          : ""}
      </div>

      {selectedFile && (
        <ConfirmationPopup
          title={selectedFile.name}
          onClose={() => setSelectedFile(null)}
        >
          <div className="flex gap-4 px-4 py-2 ">
            <Image
              src={"/icons/recycle-bin.png"}
              alt={selectedFile.name}
              width={40}
              height={40}
              className="w-12 h-12 rounded-md border border-gray-200"
            />
            <div className="text-sm font-medium text-gray-700">
              Are you sure you want to find more information on the next page?
            </div>
          </div>
          <div>
            <div className="flex gap-4 pl-4 items-center">
              <div>
                <Image
                  src={selectedFile.iconSrc!}
                  alt={selectedFile.name}
                  width={400}
                  height={400}
                  className="text-[#0077b6]"
                />
              </div>

              <div className="flex flex-col justify-start space-y-1 overflow-hidden">
                <div className="text-sm font-[400] text-gray-700">
                  {selectedFile.about}
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {selectedFile.subTitle}
                </div>
                <div className="text-xs text-gray-400">
                  {selectedFile.createdAt}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4 px-4 pb-2">
              <button
                className="bg-gradient-to-b from-[#f2f8ff] to-[#c4d6ea] border border-[#7b98b6] rounded-sm p-[4px] hover:brightness-110 text-gray-700 text-sm hover:border-[#358be6] hover:border-[2px]"
                onClick={() => {
                  // open the link in a new tab
                  window.open(selectedFile.link, "_blank");
                  setConfirmationPopupClose(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </ConfirmationPopup>
      )}
    </>
  );
};

export default MyBinContent;
