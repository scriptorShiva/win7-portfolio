"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

/**
    This file defines a React context-based system to manage multiple “windows” (like apps on your desktop).
    It lets you:
    Open new windows (each with its own content)
    Close, minimize, and restore them
    Bring them to the front
    Remember open windows even after page reload (via localStorage)
    Render window content dynamically anywhere in your app using portals
    Essentially — this is a global window management system for React apps.
    Track all open “apps/windows”
        - Manage focus (which one is on top)
        - Control size, position, and visibility
        - Persist state (remember open windows)
        - React alone doesn’t handle that automatically — so we create our own WindowProvider and useWindowManager() hook to do it.
 */

// what kind of data we will store and share
type WindowStateType = {
  id: string;
  title: string;
  icon?: string;
  content: ReactNode;
  zIndex: number;
  minimized: boolean;
  maximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
};

// This defines all the actions and data available globally. Any component can call these to manipulate windows.
interface WindowContextType {
  openWindow: (
    id: string,
    title: string,
    content: ReactNode,
    icon?: string
  ) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  bringToFront: (id: string) => void;
  updateWindowState: (
    id: string,
    position: { x: number; y: number },
    size: { width: number; height: number },
    maximize?: boolean
  ) => void;
  windows: WindowStateType[];
}

// create a context and Hook
// WindowContext stores the state of all windows.
const WindowContext = createContext<WindowContextType | null>(null);

//useWindowManager() is a helper hook so you can easily access the context from anywhere.
export const useWindowManager = () => {
  const ctx = useContext(WindowContext);
  if (!ctx) {
    throw new Error("useWindowManager must be used within a WindowProvider");
  }
  return ctx;
};

/*
Now in any component we can access it using 
const { openWindow, closeWindow } = useWindowManager();
openWindow("notes", "Notes", <NotesApp />);
*/

// This provider wraps your entire app and keeps a list of all open windows. When you add, remove, or change windows, it updates React state.
export const WindowProvider = ({ children }: { children: ReactNode }) => {
  const [windows, setWindows] = useState<WindowStateType[]>([]);
  /*
    usage of provider
    <WindowProvider>
        <Desktop />
    </WindowProvider>
    */

  // Localstorage (Load saved windows when app starts)
  /*
        - When app loads it checks localstorage for any previous open windows
        - It restores position , size etc
        - It sets content: null because you can't store React component in storage.
    */

  useEffect(() => {
    const savedTabs = localStorage.getItem("open_windows");
    if (savedTabs) {
      const parsedTabs = JSON.parse(savedTabs);
      setWindows(parsedTabs.map((w: any) => ({ ...w, content: null })));
    }
  }, []);

  // Save whenever window changes : So, everytime you open/close a window, it updates the localStorage.
  // So after reload you windows comes back in same state
  useEffect(() => {
    // removing content data on store to localstorage as we don't store component in ls
    const dataToSave = windows.map(({ content, ...rest }) => rest);
    localStorage.setItem("open_windows", JSON.stringify(dataToSave));
  }, [windows]);

  // Window management function
  // Bring to front : Find the highest z-index and puts this window above it.
  // So, when you click a window , it moves top of visually
  const bringToFront = (id: string) => {
    // id : id of windows whose we have to bring to the front.
    setWindows((prev) => {
      // The extra 1000 ensures that if the array is empty, it defaults to at least 1000. If current zIndexes are [1000, 1005, 1003], the new zIndex will be 1005.
      const maxZIdx = Math.max(...prev.map((w) => w.zIndex), 1000);
      // loop through all the windows. If id = "window2", and maxZIdx = 1005, then window2’s new zIndex becomes 1006.
      return prev.map((w) => (w.id === id ? { ...w, zIndex: maxZIdx + 1 } : w));
    });
  };

  // Open Window
  // When you call openWindow(): If it already exists → restore it. Otherwise, create a new one with default size/position.
  const openWindow = (
    id: string,
    title: string,
    content: ReactNode,
    icon?: string
  ) => {
    setWindows((prev) => {
      const isExistsWithId = prev.find((w) => w.id === id);
      const maxZ = Math.max(...prev.map((w) => w.zIndex), 1000);
      if (isExistsWithId) {
        // already open - > just restore and bring to front
        return prev.map((w) =>
          w.id === id
            ? { ...w, minimized: false, zIndex: maxZ + 1, content }
            : w
        );
      }

      // new window
      return [
        ...prev,
        {
          id,
          title,
          content,
          zIndex: maxZ + 1,
          minimized: false,
          maximized: false,
          icon,
          position: { x: 200, y: 100 },
          size: {
            width: 700,
            height: 500,
          },
        },
      ];
    });
  };

  // Close Window -- Removes that window from the list
  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  // Minimize  -- Set the windows to hidden
  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, minimized: true } : { ...w, minimized: false }
      )
    );
  };

  // Restore -Brings it back and makes it topmost.
  const restoreWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, minimized: false } : w))
    );
    bringToFront(id);
  };

  // If you later add draggable/resizable UI, this lets you update its coordinates and dimensions in state
  const updateWindowState = (
    id: string,
    position: { x: number; y: number },
    size: { width: number; height: number },
    maximized?: boolean // optional
  ) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? {
              ...w,
              position,
              size,
              ...(maximized !== undefined ? { maximized } : {}),
            }
          : w
      )
    );
  };

  // Rendering the windows
  /*
    Here’s the important part:
    It loops through all windows in state.
    For each one that’s not minimized, it renders the content.
    It uses createPortal() → this means the window’s content is rendered directly in the document body, not nested inside the rest of your app.
    ➜ This is crucial for “floating windows” or modals.
        So even if your app has deeply nested layouts, your window can float above everything.
  */

  return (
    <WindowContext.Provider
      value={{
        openWindow,
        closeWindow,
        minimizeWindow,
        restoreWindow,
        bringToFront,
        updateWindowState,
        windows,
      }}
    >
      {children} {/* Render all open + visible windows */}
      {windows.map(
        (win) =>
          !win.minimized &&
          createPortal(
            <div
              key={win.id}
              className="window-layer"
              style={{
                position: "fixed",
                top: win.position.y,
                left: win.position.x,
                width: win.size.width,
                height: win.size.height,
                zIndex: win.zIndex,
                pointerEvents: "auto",
              }}
              onMouseDown={() => bringToFront(win.id)} // ensures clicking brings to top
            >
              {win.content}
            </div>,
            document.body
          )
      )}
    </WindowContext.Provider>
  );
};

/*
Concept	Purpose
WindowContext	Holds global state for all windows
useWindowManager()	Custom hook to access and control windows
WindowProvider	Wraps app, renders all window components
localStorage	Saves window positions & states between reloads
zIndex logic	Manages which window is “on top”
createPortal	Renders windows as floating layers above the main UI
*/

/*
Usage 
WRAP
<WindowProvider>
  <Desktop />
</WindowProvider>


HOW TO USE
const { openWindow } = useWindowManager();

<button onClick={() => openWindow("notes", "Notes", <NotesApp />)}>
  Open Notes
</button>


WE CAN CONNECT WITH TASKBAR
Taskbar already shows all windows (both minimized and visible).
When a user clicks a minimized one, you just do:
onClick={() => {
  if (win.minimized) restoreWindow(win.id);
  else bringToFront(win.id);
}}
That’s all — it pops back up in exactly the same state (because you saved position and size)
*/
export default WindowContext;
