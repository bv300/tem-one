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

      {/* ---- central chevron band (thin black outline, white core) ---- */}
      <path d={BAND_PATH} fill="none" stroke={INK} strokeWidth={16} strokeLinejoin="miter" />
      <path d={BAND_PATH} fill="none" stroke="#ffffff" strokeWidth={12} strokeLinejoin="miter" />
      {TOP_CHEVRONS.map((t) => (
        <DoubleChevron
          key={`t-${t}`}
          x={TOP_RUN.sx + TOP_RUN.ux * t}
          y={TOP_RUN.sy + TOP_RUN.uy * t}
          rotate={TOP_RUN.rotate}
          scale={0.5}
        />
      ))}
      {BOT_CHEVRONS.map((t) => (
        <DoubleChevron
          key={`b-${t}`}
          x={BOT_RUN.sx + BOT_RUN.ux * t}
          y={BOT_RUN.sy + BOT_RUN.uy * t}
          rotate={BOT_RUN.rotate}
          scale={0.5}
        />
      ))}

      {/* Left Image Placeholder (Touching the arrow line) */}
      <rect x={120} y={60} width={320} height={220} rx={16} fill="#f1f2f6" stroke="#c9cad6" strokeWidth={2} strokeDasharray="8 8" />
      <text x={280} y={175} textAnchor="middle" fontSize={22} fontWeight={600} fill={INK} opacity={0.5} style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Image Option
      </text>

      {/* Right Image Placeholder (Touching the arrow line) */}
      <rect x={620} y={60} width={320} height={220} rx={16} fill="#f1f2f6" stroke="#c9cad6" strokeWidth={2} strokeDasharray="8 8" />
      <text x={780} y={175} textAnchor="middle" fontSize={22} fontWeight={600} fill={INK} opacity={0.5} style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Image Option
      </text>
    </svg>
  );
}
