import React from "react";

interface SidebarItem {
  title: string;
  items: string[];
}

type Props = {
  sidebarItems: SidebarItem[];
};

const WindowSidebar = ({ sidebarItems }: Props) => {
  return (
    <>
      <aside className="w-[180px] border-r border-[#b3c7db] bg-[#f3f6fa] overflow-auto">
        {sidebarItems.map((section, i) => (
          <div key={i} className="px-3 py-2">
            <h3 className="text-[12px] font-bold text-[#436a95] mb-1">
              {section.title}
            </h3>
            <ul className="pl-2 space-y-1">
              {section.items.map((item, j) => (
                <li
                  key={j}
                  className="text-[13px] text-[#2b4c6f] hover:bg-[#dce7f3] cursor-pointer rounded-sm px-1"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    </>
  );
};

export default WindowSidebar;
