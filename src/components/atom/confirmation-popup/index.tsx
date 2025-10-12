"use client";
import React from "react";
import { Rnd } from "react-rnd";

type props = {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

const ConfirmationPopup = ({ title, onClose, children }: props) => {
  const [position, setPosition] = React.useState({ x: 500, y: 100 });

  return (
    <Rnd
      bounds="window"
      disableDragging={false}
      enableResizing={false}
      size={{ width: 550, height: 320 }}
      position={position}
      minWidth={400}
      minHeight={300}
      onDragStop={(_e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(_e, _direction, _ref, _delta, pos) => {
        setPosition(pos);
      }}
      className={`border border-[#7a99b8] rounded-t-[8px] shadow-lg bg-[#f3f6fa] flex flex-col transition-all h-full duration-100 ease-in-out 
      }`}
    >
      <section className=" window-header bg-gradient-to-b from-[#d8e6f4] via-[#bcd2ec] to-[#9ab8d8] border-b border-[#6c8eb6] rounded-t-[8px] flex flex-col p-1 ">
        <div className="flex justify-between">
          <span className="text-[14px] font-medium text-gray-700 pl-2">
            {title}
          </span>
          <div>
            <button
              className="bg-gradient-to-b bg-[#ffdede] via-[#f5b5b5] to-[#e36b6b]  border-[1px] border-[#b23636] rounded-sm p-[2px] hover:brightness-110"
              onClick={onClose}
              aria-label="Close"
              title="Close"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* black thicker stroke (back) */}
                <g strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 6 L18 18" stroke="#000" strokeWidth="3.2" />
                  <path d="M18 6 L6 18" stroke="#000" strokeWidth="3.2" />
                  {/* white top stroke */}
                  <path d="M6 6 L18 18" stroke="#fff" strokeWidth="2" />
                  <path d="M18 6 L6 18" stroke="#fff" strokeWidth="2" />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* content */}
      <div>{children}</div>
    </Rnd>
  );
};

export default ConfirmationPopup;
