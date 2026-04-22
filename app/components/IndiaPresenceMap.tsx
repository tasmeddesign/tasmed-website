"use client";

import { useState, useRef } from "react";

/* ═══════════════════════════════════════════════════════════
   HOW THIS MAP WORKS
   ════════════════════════════════════════════════════════

   SILHOUETTE
   ──────────
   INDIA_PTS is a polygon tracing India's outer boundary
   (clockwise from the SW Pakistan border corner).
   Coordinate formula: x = (lon − 67) × 14, y = (38.5 − lat) × 15.5
   ViewBox: "0 0 460 540"

   The polygon is converted to an SVG <path> used as a <clipPath>.

   DOT PATTERN
   ───────────
   A single SVG <pattern> element defines a hexagonal (staggered-row)
   dot tile:
     · Tile size: 11 × 19.05 px
     · Three circle positions per tile form a repeating hex grid:
         (5.5, 4.76)  — row 1 centre
         (0,  14.29)  — row 2 left edge
         (11, 14.29)  — row 2 right edge
     · Dot radius: 1.5 px   |   spacing: ~11 px horiz, ~9.5 px vert

   The hex pattern is applied to a full-viewBox <rect> that is then
   clipped to the India silhouette. No JS loop, no square grid.

   TO CONTROL DOT DENSITY
   ── Increase the tile width/height (e.g. 14 / 24.25) → fewer dots
   ── Decrease (e.g. 9 / 15.59) → more dots

   MARKERS
   ───────
   MARKERS array — 7 intentionally placed pins, one per major region.
   Each entry: { id, label, x, y } where x/y are viewBox coordinates.
   ► To add a marker: append a new object to MARKERS.
   ► To move a marker: change x / y (use the formula above).
   ► To remove: delete its line.
   Everything else (hover, tooltip) updates automatically.
═══════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────────────
   INDIA BOUNDARY POLYGON
   Clockwise from SW Pakistan border.
   formula: x = (lon − 67) × 14,  y = (38.5 − lat) × 15.5
────────────────────────────────────────────────────────── */
const INDIA_PTS: [number, number][] = [
  // Pakistan–Rajasthan western border (going north)
  [17, 224], [20, 193], [68, 148], [90, 112], [88, 88],
  // J&K LoC → LAC with China
  [76, 60], [118, 46], [152, 46], [168, 60], [168, 100],
  // Himachal Pradesh, Uttarakhand
  [156, 116], [180, 130],
  // Nepal border heading east
  [182, 148], [210, 156], [252, 162], [292, 172], [300, 178],
  // Siliguri corridor north into Northeast
  [306, 178],
  // Northeast clockwise: Bhutan border → Arunachal → Myanmar → Bangladesh
  [322, 176], [350, 166], [390, 146], [426, 142],
  [428, 168], [408, 192], [386, 214], [368, 236],
  [356, 246], [346, 238], [340, 248],
  [328, 240], [316, 216], [306, 210], [302, 194],
  // WB / Bangladesh border → east coast going south
  [300, 262], [284, 278],
  [270, 290], [258, 308], [244, 324], [228, 336],
  [210, 352], [194, 366], [184, 386], [182, 400],
  [176, 416], [162, 440], [150, 460],
  // Kanyakumari tip
  [144, 478], [138, 474],
  // West coast: Kerala → Goa → Maharashtra
  [124, 455], [116, 434], [112, 412],
  [106, 390], [100, 366], [94, 340],
  [90, 316], [84, 292], [80, 268],
  // Gujarat: Gulf of Khambhat → Kathiawar peninsula → Kutch
  [76, 252], [80, 244],
  [68, 258], [50, 268], [34, 258], [22, 248],
  // Kutch / Rann → Pakistan border close
  [20, 238], [24, 228], [17, 220],
];

const INDIA_PATH = INDIA_PTS
  .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`)
  .join(" ") + "Z";

/* ──────────────────────────────────────────────────────────
   PRESENCE MARKERS  (7 key regions — intentional, not exhaustive)
   formula: x = (lon − 67) × 14,  y = (38.5 − lat) × 15.5
────────────────────────────────────────────────────────── */
interface Marker { id: string; label: string; x: number; y: number; }

const MARKERS: Marker[] = [
  { id: "north",  label: "North India",    x: 136, y: 118 }, // Chandigarh/Punjab/HP
  { id: "delhi",  label: "Delhi & UP",     x: 155, y: 157 }, // Delhi NCR
  { id: "raj",    label: "Rajasthan",      x:  92, y: 194 }, // Jaipur area
  { id: "guj",    label: "Gujarat",        x:  80, y: 240 }, // Ahmedabad
  { id: "mh",     label: "Maharashtra",    x: 128, y: 298 }, // Pune/Mumbai
  { id: "east",   label: "East India",     x: 258, y: 258 }, // Kolkata/WB/Bihar
  { id: "south",  label: "South India",    x: 148, y: 388 }, // Bengaluru
];

/* ──────────────────────────────────────────────────────────
   Component
────────────────────────────────────────────────────────── */
export default function IndiaPresenceMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Marker | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  function onMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    setCursor({ x: e.clientX - left, y: e.clientY - top });
  }

  const containerW = containerRef.current?.offsetWidth ?? 420;

  return (
    <div className="w-full flex flex-col items-center gap-10">

      {/* Map */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[420px] mx-auto select-none"
        onMouseMove={onMouseMove}
        onMouseLeave={() => setActive(null)}
      >
        <svg
          viewBox="0 0 460 540"
          className="w-full h-auto"
          aria-label="India dot map showing Tasmed presence"
        >
          <defs>
            {/* ── Hexagonal dot pattern ──────────────────────────────
                Tile: 11 × 19.05 px  |  3 dots per tile  |  hex grid
                Adjust width/height to change dot density.          */}
            <pattern
              id="hexdots"
              x="0" y="0"
              width="11" height="19.05"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="5.5"  cy="4.76"  r="1.5" fill="#BCC8D4" />
              <circle cx="0"    cy="14.29" r="1.5" fill="#BCC8D4" />
              <circle cx="11"   cy="14.29" r="1.5" fill="#BCC8D4" />
            </pattern>

            {/* ── India silhouette clip path ─────────────────────── */}
            <clipPath id="india-clip">
              <path d={INDIA_PATH} />
            </clipPath>
          </defs>

          {/* Dot field clipped to India shape */}
          <rect
            x="0" y="0" width="460" height="540"
            fill="url(#hexdots)"
            clipPath="url(#india-clip)"
          />

          {/* Silhouette outline — gives the edge a crisp definition */}
          <path
            d={INDIA_PATH}
            fill="none"
            stroke="#CDD5DE"
            strokeWidth="0.6"
            strokeLinejoin="round"
          />

          {/* ── Presence markers ─────────────────────────────────── */}
          {MARKERS.map((m) => {
            const hot = active?.id === m.id;
            return (
              <g
                key={m.id}
                onMouseEnter={() => setActive(m)}
                onMouseLeave={() => setActive(null)}
                style={{ cursor: "default" }}
              >
                {/* Expanding halo on hover */}
                <circle
                  cx={m.x} cy={m.y}
                  r={hot ? 16 : 0}
                  fill="#F26522"
                  fillOpacity={0.1}
                  style={{ transition: "r 0.24s ease" }}
                />
                {/* Soft ring */}
                <circle
                  cx={m.x} cy={m.y}
                  r={hot ? 9 : 0}
                  fill="#F26522"
                  fillOpacity={0.18}
                  style={{ transition: "r 0.2s ease" }}
                />
                {/* Main pin */}
                <circle
                  cx={m.x} cy={m.y}
                  r={hot ? 5.5 : 4}
                  fill="#F26522"
                  style={{ transition: "r 0.16s ease" }}
                />
                {/* White centre pip */}
                <circle
                  cx={m.x} cy={m.y}
                  r={hot ? 2.2 : 1.6}
                  fill="white"
                  style={{ transition: "r 0.16s ease" }}
                />
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        {active && (
          <div
            className="pointer-events-none absolute z-20
                       bg-navy text-white
                       font-inter text-[11px] font-semibold tracking-[0.05em]
                       px-3 py-[7px] rounded-lg shadow-lg whitespace-nowrap"
            style={{
              left: Math.max(60, Math.min(cursor.x, containerW - 60)),
              top:  cursor.y - 50,
              transform: "translateX(-50%)",
            }}
          >
            {active.label}
            <span
              className="absolute left-1/2 -translate-x-1/2 top-full
                         border-l-[5px] border-r-[5px] border-t-[5px]
                         border-l-transparent border-r-transparent border-t-navy"
            />
          </div>
        )}
      </div>

      {/* Stats row */}
      <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
        <div className="flex items-center gap-2">
          <span className="w-[9px] h-[9px] rounded-full bg-brand/80 flex-shrink-0" />
          <span className="font-inter text-[12px] text-navy/55 tracking-wide">
            Tasmed Present
          </span>
        </div>

        <span className="w-px h-4 bg-gray-200 hidden sm:block" />

        <span className="font-inter text-[12px] text-navy/55 tracking-wide">
          <span className="font-barlow font-black text-navy text-[17px] leading-none mr-1">
            20+
          </span>
          States Covered
        </span>

        <span className="w-px h-4 bg-gray-200 hidden sm:block" />

        <span className="font-inter text-[12px] text-navy/55 tracking-wide">
          <span className="font-barlow font-black text-navy text-[17px] leading-none mr-1">
            980+
          </span>
          Stockists
        </span>
      </div>

    </div>
  );
}
