import type { ReactNode } from "react";
import "./shared.css";

export const INK = "#0B2545";

export function SketchArrow({
  x1,
  y1,
  x2,
  y2,
  width = 2.4,
  opacity = 1,
  bend = 0,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  width?: number;
  opacity?: number;
  bend?: number;
}) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const cx = mx + (-dy / len) * bend;
  const cy = my + (dx / len) * bend;
  const ang = Math.atan2(y2 - cy, x2 - cx);
  const h1 = 10.5; // head stroke, short side
  const h2 = 12.5; // head stroke, long side
  const s1 = 0.42; // spread, short side
  const s2 = 0.52; // spread, long side
  return (
    <g
      stroke={INK}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={opacity}
      fill="none"
    >
      <path d={`M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`} />
      <line
        x1={x2}
        y1={y2}
        x2={x2 + h1 * Math.cos(ang + Math.PI - s1)}
        y2={y2 + h1 * Math.sin(ang + Math.PI - s1)}
      />
      <line
        x1={x2}
        y1={y2}
        x2={x2 + h2 * Math.cos(ang + Math.PI + s2)}
        y2={y2 + h2 * Math.sin(ang + Math.PI + s2)}
      />
    </g>
  );
}

export function DoubleChevron({
  x,
  y,
  rotate,
  opacity = 1,
  scale = 1,
}: {
  x: number;
  y: number;
  rotate: number;
  opacity?: number;
  scale?: number;
}) {
  return (
    <g
      transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}
      fill="none"
      stroke={INK}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={opacity}
    >
      <path d="M 11 -13 L -9 0 L 11 13" />
      <path d="M -1 -13 L -21 0 L -1 13" />
    </g>
  );
}

export function WavyArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 46 16"
      className={`wavy-arrow ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8 Q 4 3 7 8 T 13 8 T 19 8 T 25 8 T 31 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M32 3 L40 8 L32 13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="section-title-wrapper">
      <WavyArrow className="section-title-icon" />
      <h2 className="section-title-text">{children}</h2>
    </div>
  );
}
