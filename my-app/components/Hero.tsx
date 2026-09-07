import { INK, DoubleChevron, SketchArrow } from "./shared";
import "./Hero.css";

const BAND_PATH = "M 445 0 L 590 222 L 533 352";
const SEPARATOR_Y = 352;

const TOP_RUN = { ux: 0.5468, uy: 0.8371, sx: 445, sy: 0, rotate: 56.9 };
const TOP_CHEVRONS = [26, 62, 98, 134, 170, 206, 242];
const BOT_RUN = { ux: -0.3988, uy: 0.9171, sx: 590, sy: 222, rotate: -66.5 };
const BOT_CHEVRONS = [26, 62, 98, 134];

const BURST: {
  dx: number;
  dy: number;
  r0: number;
  r: number;
  bend: number;
}[] = [
    { dx: -0.78, dy: -0.62, r0: 34, r: 105, bend: -3 },
    { dx: -0.43, dy: -0.9, r0: 34, r: 82, bend: 2.5 },
    { dx: 0.82, dy: -0.57, r0: 34, r: 112, bend: -2 },
    { dx: 1.0, dy: 0.02, r0: 42, r: 100, bend: 3 },
    { dx: -0.85, dy: 0.52, r0: 34, r: 100, bend: -2.5 },
    { dx: 0.82, dy: 0.57, r0: 34, r: 84, bend: 2 },
  ];
const BURST_CX = 207;
const BURST_CY = 83;

export function WireframeHero() {
  return (
    <svg
      viewBox="0 0 1008 406"
      className="hero-svg"
      role="img"
      aria-label="Wireframe schematic: chevron divider, starburst of arrows around the word test, Malayalam question text, and keyword labels with arrows"
    >
      {/* faint full-width divider under the hero (band crosses over it) */}
      <line
        x1={0}
        y1={SEPARATOR_Y}
        x2={1008}
        y2={SEPARATOR_Y}
        stroke="#c9c9d6"
        strokeWidth={2}
      />

      {/* ---- central chevron band (decreased width, no small arrows) ---- */}
      <path d={BAND_PATH} fill="none" stroke={INK} strokeWidth={6} strokeLinejoin="miter" />
      <path d={BAND_PATH} fill="none" stroke="#ffffff" strokeWidth={2} strokeLinejoin="miter" />

      {/* Left Image Placeholder (Exactly matching the bent arrow path) */}
      <polygon points="0,0 442,0 587,222 530,352 0,352" fill="#f1f2f6" stroke="#c9cad6" strokeWidth={2} strokeDasharray="8 8" />
      <text x={240} y={176} textAnchor="middle" fontSize={22} fontWeight={600} fill={INK} opacity={0.5} style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Left Image
      </text>

      {/* Right Image Placeholder (Exactly matching the bent arrow path) */}
      <polygon points="448,0 1008,0 1008,352 536,352 593,222" fill="#f1f2f6" stroke="#c9cad6" strokeWidth={2} strokeDasharray="8 8" />
      <text x={760} y={176} textAnchor="middle" fontSize={22} fontWeight={600} fill={INK} opacity={0.5} style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Right Image
      </text>
    </svg>
  );
}
