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
import { MdOutlineRocketLaunch } from "react-icons/md";

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
    title: "Archive Projects",
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

export const DesktopMyComputerProgramData = {
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
          items: ["React.js", "Next.js", "CSS", "Tailwind CSS", "React Query"],
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
};

export const DesktopMyRecycleBinProgramData = {
  id: "recycleBin",
  sidebarItems: [
    {
      title: "Projects",
      items: [
        {
          title: "My first HTML webpage",
          link: "https://shiva1507.github.io/HtmlSite.github.io/",
          icon: <MdOutlineRocketLaunch />,
        },
        {
          title: "Initial Website in CSS",
          link: "https://shiva1507.github.io/ResumeDesign.github.io/",
          icon: <MdOutlineRocketLaunch />,
        },
        {
          title: "My Intro to CSS Animations",
          link: "https://scriptorshiva.github.io/EV/",
          icon: <MdOutlineRocketLaunch />,
        },
        {
          title: "Music Player",
          link: "https://scriptorshiva.github.io/Melody_Player/",
          icon: <MdOutlineRocketLaunch />,
        },
        {
          title: "Live Weather App",
          link: "https://scriptorshiva.github.io/Live_Weather/",
          icon: <MdOutlineRocketLaunch />,
        },
        {
          title: "Animation Project",
          link: "https://github.com/scriptorShiva/Capture_Moments",
          icon: <FaGithub />,
        },
        {
          title: "Realtime Chat System",
          link: "https://github.com/scriptorShiva/Instant_Talk",
          icon: <FaGithub />,
        },
        {
          title: "Order System (backend)",
          link: "https://github.com/scriptorShiva/OrderHouse_backend",
          icon: <FaGithub />,
        },
      ],
    },
  ],
  content: [
    {
      name: "My first HTML webpage",
      subTitle: "Only HTML",
      createdAt: "12/2020",
      link: "https://shiva1507.github.io/HtmlSite.github.io/",
      about:
        "Hey! This is what I have built first time as a website. At that time I barely introduced with HTML only.. So, I can remember I wateched tutorial from mySirG YT channel and after learning some tags I just want to apply it. At that time we mostly introduced with C ,C++ which you know how it feels to code on TurboC. Its intresting to see first time of coding usecase in visual way.",
    },
    {
      name: "Initial Website in CSS",
      subTitle: "HTML | CSS",
      createdAt: "03/2021",
      link: "https://shiva1507.github.io/ResumeDesign.github.io/",
      about:
        "This One I created after I bought one course from udemy by instructor Angelena Yu. I was very excited it was just awesome to see the magic of css and how it can be used to create a website. I was very happy to see the changes I made in the design and how it looks like. It was really really fun to create something from scratch.",
    },
    {
      name: "My Intro to CSS Animations",
      subTitle: "HTML | CSS Animations",
      createdAt: "10/2022",
      link: "https://scriptorshiva.github.io/EV/",
      about:
        "After I build somepages from scratch I was very much interested in CSS animations mostly because I got introduced with DevEd YT channel.. It was really really fun to create something which moves on the page. Also, I am a kind of person who loves drawing and art stuff.By learning from his channel about SVG animations I just applied to so many things and I really enjoyed it.",
    },
    {
      name: "Music Player",
      subTitle: "ReactJS",
      createdAt: "03/2023",
      link: "https://scriptorshiva.github.io/Melody_Player/",
      about:
        "Created a music player with different song tracks that helps you to light your mood while coding. In this project I learned about ReactJS and how to use it. I also learned about useState, useEffect, useRef, and props.",
    },
    {
      name: "Live Weather App",
      subTitle: "NodeJS, PUG (Template Engine)",
      createdAt: "04/2023",
      link: "https://scriptorshiva.github.io/Live_Weather/",
      about:
        "After I learned about frontend I got introduced with backend concepts like NodeJS and PUG. I created a weather app that shows the live weather of any city. At that time I was not aware with we can connect frontend to backend. So, from any blog or tutorial I just built entire weather app in nodejs with the help of template engines like PUG.",
    },
    {
      name: "Animation Project",
      subTitle: "GSAP Library",
      createdAt: "05/2023",
      link: "https://github.com/scriptorShiva/Capture_Moments",
      about:
        "An animated nice looking photography website template designed to showcase the art of visual apealing through seamless animations. As I already discussed I am a big fan of animations so I just tried to build a complete website from GSAP Animation library",
    },
    {
      name: "Realtime Chat System",
      subTitle: "Nodejs | Socket.io",
      createdAt: "08/2023",
      link: "https://github.com/scriptorShiva/Instant_Talk",
      about:
        "This is a basic website for creating a real-time chat system. It enables multiple users to communicate with each other in real time without storing their messages. Fun fact I don't know how to use Database at that time. So, just used Nodejs and Socket.io for that. haha",
    },
    {
      name: "Order System (frontend)",
      subTitle: "ReactJS",
      createdAt: "08/2023",
      link: "https://github.com/scriptorShiva/OrderHouse_frontend",
      about:
        "Here, I have built the frontend of an order system with ReactJS. Here, I use micro frontend architecture. Built with resuable components and also State management. How to pass props between components. How to use context api as global store to avoid prop drillings etc.",
    },
    {
      name: "Order System (backend)",
      subTitle: "NodeJS",
      createdAt: "08/2023",
      link: "https://github.com/scriptorShiva/OrderHouse_backend",
      about:
        "By this time I will know how to use Database. I get my first job as a developer and I was really excited to learn more. So, I built an order system with NodeJS. Utilize some concepts like JWT, Validations using JOI libarary, ORM and many more.",
    },
  ],
};

export const DesktopProgramData = [
  {
    id: "projects",
    sidebarItems: [],
    content: [
      {
        title: "My first HTML webpage",
        subTitle: "Only HTML",
        createdAt: "12/2020",
        link: "https://shiva1507.github.io/HtmlSite.github.io/",
      },
      {
        name: "Initial Website in CSS",
        subTitle: "HTML|CSS",
        createdAt: "03/2021",
        link: "https://shiva1507.github.io/ResumeDesign.github.io/",
      },
      {
        name: "My Intro to CSS Animations",
        subTitle: "HTML|CSS Animations",
        createdAt: "10/2022",
        link: "https://scriptorshiva.github.io/EV/",
      },
      {
        name: "Music Player",
        subTitle: "ReactJS",
        date: "03/2023",
        link: "https://scriptorshiva.github.io/Melody_Player/",
      },
      {
        name: "Live Weather App",
        subTitle: "NodeJS, PUG (Template Engine)",
        date: "04/2023",
        link: "https://scriptorshiva.github.io/Live_Weather/",
      },
      {
        name: "Animation Project",
        subTitle: "GSAP Library",
        date: "05/2023",
        link: "https://github.com/scriptorShiva/Capture_Moments",
      },
      {
        name: "Realtime Chat System",
        subTitle: "Nodejs|Socket.io",
        date: "08/2023",
        link: "https://github.com/scriptorShiva/Instant_Talk",
      },
      {
        name: "Order System (frontend)",
        subTitle: "ReactJS",
        date: "08/2023",
        link: "https://github.com/scriptorShiva/OrderHouse_frontend",
      },
      {
        name: "Order System (backend)",
        subTitle: "NodeJS",
        date: "08/2023",
        link: "https://github.com/scriptorShiva/OrderHouse_backend",
      },
    ],
  },
];

export const AboutMeNotepadContent = `My name is Shiva Pal, and my journey into the world of technology began three years ago when I started my first job as a web developer. Before that, I completed my Bachelor’s in Computer Applications, where I learned the fundamentals of computing and developed a deep curiosity about how technology has evolved over time. I’ve always loved understanding things from the ground up — exploring the “why” behind everything and diving into the history of how technology came to be what it is today.

   Over time, I’ve realized that learning comes from two sides — what we do for fun and what we do professionally. Both paths have their own lessons: one keeps us motivated, the other teaches us discipline and the art of creating for an audience. Outside of tech, I enjoy exploring creative hobbies. I love playing the bansuri (an Indian flute), learning new artistic skills, and experimenting with things like music, drawing and painting and lot more...
`;
