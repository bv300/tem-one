import { INK } from "./shared";
import "./Hero.css";

const BAND_PATH = "M 445 0 L 590 222 L 533 352";
const SEPARATOR_Y = 352;

export function WireframeHero() {
  return (
    <svg
      viewBox="0 0 1008 406"
      className="hero-svg"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Hero banner with two images split by a diagonal line"
    >
      <defs>
        <clipPath id="left-clip">
          <polygon points="0,0 442,0 587,222 530,352 0,352" />
        </clipPath>
        <clipPath id="right-clip">
          <polygon points="448,0 1008,0 1008,352 536,352 593,222" />
        </clipPath>
      </defs>

      {/* faint full-width divider under the hero */}
      <line
        x1={0}
        y1={SEPARATOR_Y}
        x2={1008}
        y2={SEPARATOR_Y}
        stroke="#EF8354"
        strokeWidth={2}
      />

      {/* Left Image */}
      <image
        href="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
        x="0"
        y="0"
        width="600"
        height="352"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#left-clip)"
      />

      {/* Right Image */}
      <image
        href="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
        x="400"
        y="0"
        width="608"
        height="352"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#right-clip)"
      />

      {/* central chevron band */}
      <path
        className="hero-band"
        d={BAND_PATH}
        fill="none"
        stroke={INK}
        strokeWidth={6}
        strokeLinejoin="miter"
      />
      <path
        className="hero-band hero-band-highlight"
        d={BAND_PATH}
        fill="none"
        stroke="#F7F9FC"
        strokeWidth={2}
        strokeLinejoin="miter"
      />
    </svg>
  );
}
