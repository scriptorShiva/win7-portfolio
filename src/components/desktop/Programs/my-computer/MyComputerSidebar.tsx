import React, { useState } from "react";

export interface SidebarSubItem {
  title: string;
  link?: string;
  icon?: React.ReactNode;
  items?: string[]; // nested list
}

export interface SidebarSection {
  title: string;
  items: SidebarSubItem[];
}

interface Props {
  sidebarItems: SidebarSection[];
}

const MyComputerSidebar = ({ sidebarItems }: Props) => {
  // Track multiple open sections using a Set of indices
  const [openSections, setOpenSections] = useState<Set<number>>(new Set());

  const toggleSection = (index: number) => {
    setOpenSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index); // close section
      } else {
        newSet.add(index); // open section
      }
      return newSet;
    });
  };

  return (
    <aside className="w-[200px] border-r border-[#b3c7db] bg-[#f3f6fa] overflow-auto">
      {sidebarItems.map((section, i) => (
        <div key={i} className="px-3 py-2">
          {/* Section title clickable */}
          <div
            className="flex items-center justify-between cursor-pointer hover:bg-[#dce7f3] px-1 py-1 rounded-sm"
            onClick={() => toggleSection(i)}
          >
            <span className="text-[12px] font-bold text-[#436a95]">
              {section.title}
            </span>
            <span className="text-[#436a95]">
              {openSections.has(i) ? "▾" : "▸"}
            </span>
          </div>

          {/* Expand content if section is open */}
          {openSections.has(i) && (
            <ul className="mt-1 space-y-1 pl-2">
              {section.items.map((item, j) => (
                <li
                  key={j}
                  className="cursor-pointer rounded-sm px-1 hover:bg-[#dce7f3]"
                >
                  {/* Title row */}
                  <div className="flex items-center gap-2 text-[13px] text-[#2b4c6f]">
                    {item.icon && <span className="text-lg">{item.icon}</span>}
                    {item.link ? (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.link}
                        className="underline"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <span>{item.title}</span>
                    )}
                  </div>

                  {/* Nested items grid */}
                  {item.items && (
                    <ul className="grid grid-cols-2 gap-x-2 gap-y-1 mt-1 pl-5">
                      {item.items.map((subItem, k) => (
                        <li
                          key={k}
                          className="flex items-center text-[12px] text-[#3c5976]"
                        >
                          <span className="w-1.5 h-1.5 bg-[#3c5976] rounded-full mr-2"></span>
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </aside>
  );
};

export default MyComputerSidebar;
