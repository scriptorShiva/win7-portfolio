type SideBarSection = {
  title: string;
  items: string[];
};

type ContentItem = {
  name: string;
  type: string;
  date: string;
  size: string;
};

export type DesktopProgramDataType = {
  id: string;
  src: string;
  w: number;
  h: number;
  title: string;
  sideBarItems: SideBarSection[];
  contentData: ContentItem[];
};

export type DesktopProgramType = {
  id: string;
  src: string;
  w: number;
  h: number;
  title: string;
};
