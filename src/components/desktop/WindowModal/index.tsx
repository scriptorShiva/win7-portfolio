import WindowContent from "@/components/atom/window/WindowContent";
import WindowSidebar from "@/components/atom/window/WindowSidebar";
import Window from "@/components/atom/window/Window";
import React from "react";
import { DesktopProgramDataType } from "@/types";

interface WindowProps {
  program: DesktopProgramDataType;
}

const WindowModal = ({ program }: WindowProps) => {
  return (
    <>
      <Window
        program={program}
        Sidebar={<WindowSidebar sidebarItems={program.sideBarItems} />}
        Content={<WindowContent files={program.contentData} />}
      />
    </>
  );
};

export default WindowModal;
