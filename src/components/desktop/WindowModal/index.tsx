import WindowContent from "@/components/atom/window/WindowContent";
import WindowSidebar from "@/components/atom/window/WindowSidebar";
import Window from "@/components/atom/window/Window";
import MyComputerSidebar from "../Programs/my-computer/MyComputerSidebar";
import MyComputerContent from "../Programs/my-computer/MyComputerContent";
import React from "react";
import { DesktopProgramType } from "@/types";
import {
  DesktopMyComputerProgramData,
  DesktopMyRecycleBinProgramData,
} from "@/constants/desktop";
import MyBinContent from "../Programs/recycle-bin/MyBinContent";

interface WindowProps {
  programInfo: DesktopProgramType;
}

const WindowModal = ({ programInfo }: WindowProps) => {
  let SidebarComponent = null;
  let ContentComponent = null;

  switch (programInfo.id) {
    case "myPc":
      SidebarComponent = (
        <MyComputerSidebar
          sidebarItems={DesktopMyComputerProgramData!.sidebarItems ?? []}
        />
      );
      ContentComponent = (
        <MyComputerContent files={DesktopMyComputerProgramData!.content} />
      );
      break;

    case "recycleBin":
      SidebarComponent = (
        <MyComputerSidebar
          sidebarItems={DesktopMyRecycleBinProgramData!.sidebarItems ?? []}
        />
      );
      ContentComponent = (
        <MyBinContent files={DesktopMyRecycleBinProgramData!.content ?? []} />
      );
      break;

    default:
      break;
  }

  return (
    <Window
      program={programInfo}
      Sidebar={SidebarComponent}
      Content={ContentComponent}
    />
  );
};

export default WindowModal;
