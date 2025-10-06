import WindowContent from "@/components/atom/window/WindowContent";
import WindowSidebar from "@/components/atom/window/WindowSidebar";
import Window from "@/components/atom/window/Window";
import MyComputerSidebar from "../Programs/my-computer/MyComputerSidebar";
import MyComputerContent from "../Programs/my-computer/MyComputerContent";
import React from "react";
import { DesktopProgramType } from "@/types";
import { DesktopProgramData } from "@/constants/desktop";

interface WindowProps {
  programInfo: DesktopProgramType;
}

const WindowModal = ({ programInfo }: WindowProps) => {
  const programData = DesktopProgramData.find((p) => p.id === programInfo.id);
  let SidebarComponent = null;
  let ContentComponent = null;

  switch (programInfo.id) {
    case "myPc":
      SidebarComponent = (
        <MyComputerSidebar sidebarItems={programData!.sidebarItems ?? []} />
      );
      ContentComponent = <MyComputerContent files={programData!.content} />;
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
