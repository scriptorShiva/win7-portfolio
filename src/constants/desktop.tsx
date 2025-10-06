import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { TbMessageLanguage } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { RiClaudeFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";

export const DesktopPrograms = [
  {
    id: "myPc",
    src: "/icons/my-pc.png",
    w: 60,
    h: 60,
    title: "About me",
  },
  {
    id: "recycleBin",
    src: "/icons/recycle-bin.png",
    w: 60,
    h: 60,
    title: "Archive",
  },
  {
    id: "projects",
    src: "/icons/folder.png",
    w: 60,
    h: 60,
    title: "Projects",
  },
  {
    id: "resume",
    src: "/icons/document.png",
    w: 60,
    h: 60,
    title: "Resume",
  },
];

export const DesktopProgramData = [
  {
    id: "myPc",
    sidebarItems: [
      {
        title: "Social Links",
        items: [
          {
            title: "Github",
            link: "https://github.com/scriptorShiva",
            icon: <FaGithub />,
          },
          {
            title: "Linkedin",
            link: "https://www.linkedin.com/in/shiva-pal/",
            icon: <FaLinkedin />,
          },
          {
            title: "Medium",
            link: "https://medium.com/@shivapal108941",
            icon: <FaMedium />,
          },
        ],
      },
      {
        title: "Skills",
        items: [
          {
            title: "Languages",
            items: ["JS", "JAVA", "C", "Python", "SQL"],
            icon: <TbMessageLanguage />,
          },
          {
            title: "Frontend",
            items: [
              "React.js",
              "Next.js",
              "CSS",
              "Tailwind CSS",
              "React Query",
            ],
            icon: <FaReact />,
          },
          {
            title: "Backend",
            items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
            icon: <FaDatabase />,
          },
          {
            title: "Other",
            items: ["Git", "GitHub", "Linux", "Docker", "Basic AWS"],
            icon: <FaDocker />,
          },
        ],
      },
      {
        title: "Software",
        items: [
          {
            title: "VS Code",
            icon: <VscVscode />,
          },
          {
            title: "Postman",
            icon: <SiPostman />,
          },
          {
            title: "Github Copilot",
            icon: <RiClaudeFill />,
          },
          {
            title: "ChatGpt",
            icon: <RiClaudeFill />,
          },
          {
            title: "AWS",
            icon: <FaAws />,
          },
          {
            title: "Linux",
            icon: <FaLinux />,
          },
        ],
      },
    ],

    content: [
      {
        name: "about-me.txt",
        type: "Text Document",
        docType: "text",
        date: "20/08/2025",
        size: "4 KB",
        icon: "/icons/txt-file.png",
      },
    ],
  },

  {
    id: "recycleBin",
    sideBarItems: [
      {
        title: "Favorites",
        items: ["Desktop", "Downloads", "Recent Places"],
      },
      {
        title: "Libraries",
        items: ["Documents", "Music", "Pictures", "Videos"],
      },
      {
        title: "Computer",
        items: [],
      },
      {
        title: "Network",
        items: [],
      },
    ],
    content: [
      {
        name: "Project Files",
        type: "Folder",
        date: "02/10/2025",
        size: "-",
        docType: "text",
      },
      {
        name: "Old Backup",
        type: "Folder",
        date: "21/09/2025",
        size: "-",
        docType: "text",
      },
      {
        name: "notes.txt",
        type: "Text Document",
        date: "01/10/2025",
        size: "4 KB",
        docType: "text",
      },
      {
        name: "setup.exe",
        type: "Application",
        date: "20/09/2025",
        size: "15 MB",
        docType: "text",
      },
    ],
  },
  {
    id: "settings",
    sidebarItems: [],
    content: [
      {
        name: "Project Files",
        type: "folder",
        date: "02/10/2025",
        size: "-",
        docType: "text",
      },
      {
        name: "Old Backup",
        type: "folder",
        date: "21/09/2025",
        size: "-",
        docType: "text",
      },
      {
        name: "notes.txt",
        type: "text",
        date: "01/10/2025",
        size: "4 KB",
        docType: "text",
      },
      {
        name: "setup.exe",
        type: "application",
        date: "20/09/2025",
        size: "15 MB",
        docType: "text",
      },
    ],
  },
];

export const AboutMeNotepadContent = `My name is Shiva Pal, and my journey into the world of technology began three years ago when I started my first job as a web developer. Before that, I completed my Bachelor’s in Computer Applications, where I learned the fundamentals of computing and developed a deep curiosity about how technology has evolved over time. I’ve always loved understanding things from the ground up — exploring the “why” behind everything and diving into the history of how technology came to be what it is today.

   Over time, I’ve realized that learning comes from two sides — what we do for fun and what we do professionally. Both paths have their own lessons: one keeps us motivated, the other teaches us discipline and the art of creating for an audience. Outside of tech, I enjoy exploring creative hobbies. I love playing the bansuri (an Indian flute), learning new artistic skills, and experimenting with things like music, drawing and painting and lot more...
`;
