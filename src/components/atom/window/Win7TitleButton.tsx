import React from "react";

export default function Win7TitleButtons({
  onMinimize = () => {},
  onMaximize = () => {},
  onClose = () => {},
}) {
  return (
    <div className="win7-buttons" role="toolbar" aria-label="window controls">
      <button
        className="win-btn btn-min"
        onClick={onMinimize}
        aria-label="Minimize"
        title="Minimize"
      >
        <svg width="16" height="10" viewBox="0 0 24 24" aria-hidden="true">
          {/* white dash with black outline */}
          <rect
            x="5"
            y="11"
            width="20"
            height="6"
            rx="0.5"
            fill="#ffffff"
            stroke="#2b2b2b"
            strokeWidth="1"
          />
        </svg>
      </button>

      <button
        className="win-btn btn-max"
        onClick={onMaximize}
        aria-label="Maximize"
        title="Maximize"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
          {/* hollow white box with black border */}
          <rect
            x="5.5"
            y="5.5"
            width="13"
            height="13"
            fill="#ffffff"
            stroke="#2b2b2b"
            strokeWidth="0.9"
          />
          {/* thin inner highlight */}
          <rect
            x="6.5"
            y="6.5"
            width="11"
            height="11"
            fill="none"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="0.7"
          />
        </svg>
      </button>

      <button
        className="win-btn btn-close"
        onClick={onClose}
        aria-label="Close"
        title="Close"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
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

      <style jsx>{`
        .win7-buttons {
          display: flex;
          gap: 4px;
          align-items: center;
          padding: 8px 8px 8px 8px;
          user-select: none;
        }

        .win-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px; /* matches classic feel */
          height: 22px;
          padding: 0;
          border-radius: 3px;
          border: 1px solid #7b98b6; /* overall border color */
          background: linear-gradient(
            to bottom,
            #fefefe 0%,
            #eaf3ff 35%,
            #c5d9ee 100%
          );
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.92),
            /* glossy top */ inset 0 -1px 0 rgba(0, 0, 0, 0.18),
            /* inner lower shade */ 0 1px 0 rgba(0, 0, 0, 0.12); /* subtle drop */
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
          transition: all 140ms ease;
          line-height: 0;
        }

        .win-btn:active {
          transform: translateY(1px);
        }

        .win-btn:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(84, 140, 255, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.92),
            inset 0 -1px 0 rgba(0, 0, 0, 0.18);
        }

        /* Hover glow for minimize/maximize (soft blue) */
        .win-btn:not(.btn-close):hover {
          border-color: #5b85c2;
          background: linear-gradient(
            to bottom,
            #f7fbff 0%,
            #e7f2ff 35%,
            #c7ddf6 100%
          );
          box-shadow: 0 0 6px rgba(76, 136, 217, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.96),
            inset 0 -1px 0 rgba(0, 0, 0, 0.18);
        }

        /* Close button red style */
        .win-btn.btn-close {
          background: linear-gradient(
            to bottom,
            #ffdede 0%,
            #f5b5b5 40%,
            #e36b6b 100%
          );
          border: 1px solid #b23636;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.92),
            inset 0 -1px 0 rgba(0, 0, 0, 0.18), 0 1px 0 rgba(0, 0, 0, 0.12);
        }

        /* Close hover - warmer & brighter */
        .win-btn.btn-close:hover {
          background: linear-gradient(
            to bottom,
            #fff0f0 0%,
            #ffb0b0 40%,
            #ff7b7b 100%
          );
          border-color: #d34949;
          box-shadow: 0 0 8px rgba(255, 120, 120, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.96),
            inset 0 -1px 0 rgba(0, 0, 0, 0.18);
        }

        /* SVG sizing and crispness */
        .win-btn svg {
          display: block;
        }

        /* reduce anti-alias fuzz on small strokes */
        .win-btn svg path,
        .win-btn svg rect {
          shape-rendering: geometricPrecision;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
      `}</style>
    </div>
  );
}
