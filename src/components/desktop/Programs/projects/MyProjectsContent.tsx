import BinCard from "@/components/atom/bin-card";
import React from "react";
import Image from "next/image";
import ImageViewer from "@/components/atom/image-viewer";

interface fileType {
  name: string;
  subTitle: string;
  createdAt: string;
  type: string;
  link?: string;
  children?: fileType[];
  images?: string[];
}

interface props {
  files: fileType[];
}

const MyProjectsContent = ({ files }: props) => {
  const [openCurrentFolder, setOpenCurrentFolder] =
    React.useState<fileType | null>(null);
  const [openImageViewers, setOpenImageViewers] = React.useState<fileType[]>(
    []
  );

  const handleClick = (file: fileType) => {
    console.log(file);
    if (file.type === "folder") {
      setOpenCurrentFolder(file);
    }
    if (file.type === "file") {
      //setOpenImageViewer(file);
      // Open a new ImageViewer instance
      setOpenImageViewers((prev) => [...prev, file]);
    }
  };

  const handleCloseViewer = (fileToClose: fileType) => {
    setOpenImageViewers((prev) => prev.filter((file) => file !== fileToClose));
  };

  return (
    <>
      {openCurrentFolder ? (
        <div className="grid gap-4">
          {openCurrentFolder.children!.length > 0 &&
            openCurrentFolder.children!.map((file, index) => {
              return (
                <div key={index} onDoubleClick={() => handleClick(file)}>
                  <BinCard key={index}>
                    <div>
                      <Image
                        src="/icons/project-info.png"
                        alt={file.name}
                        width={52}
                        height={52}
                        className="text-[#0077b6]"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="text-sm font-medium  text-gray-800">
                        {file.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {file.subTitle}
                      </div>
                      <div className="text-xs text-gray-400">
                        {file.createdAt}
                      </div>
                    </div>
                  </BinCard>
                </div>
              );
            })}
        </div>
      ) : (
        <div className="grid gap-4">
          {files.length > 0 &&
            files.map((file, index) => {
              return (
                <div key={index} onDoubleClick={() => handleClick(file)}>
                  <BinCard key={index}>
                    <div>
                      <Image
                        src="/icons/directory.png"
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
                      <div className="text-xs text-gray-500">
                        {file.subTitle}
                      </div>
                      <div className="text-xs text-gray-400">
                        {file.createdAt}
                      </div>
                    </div>
                  </BinCard>
                </div>
              );
            })}
        </div>
      )}

      {/* open image viewer */}
      {/* Image Viewer Window */}
      {/* Render multiple ImageViewers */}
      {openImageViewers.map((file) => (
        <ImageViewer
          key={file.name + file.createdAt} // unique key
          imagesToView={file.images!}
          githubRedirectUrl={file.link!}
          onClose={() => handleCloseViewer(file)}
        />
      ))}
    </>
  );
};

export default MyProjectsContent;
