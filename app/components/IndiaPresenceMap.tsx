"use client";

import { useState, useRef, memo } from "react";

/* ═══════════════════════════════════════════════════════════
   HOW THIS MAP WORKS
   ══════════════════════════════════════════════════════════
   1. INDIA_POLYGON  — a ~70-point boundary polygon that traces
      India's outline inside a "0 0 460 540" SVG viewBox.

   2. insideIndia()  — classic ray-casting point-in-polygon test.
      Returns true when a coordinate falls inside the polygon.

   3. DOTS           — computed ONCE at module load (not on every
      render). A 10 px grid is scanned across India's bounding box;
      every point that passes insideIndia() becomes a dot.
      Result: ~850 dots that together form the India silhouette.

   4. LOCATIONS      — the only array you edit to add / remove
      brand markers. Each entry has an (x, y) in the same
      viewBox coordinate space.

   Coordinate formula:
      x = (longitude − 67) × 14
      y = (38.5 − latitude) × 15.5

   Example — Bengaluru (77.6 °E, 13 °N):
      x = (77.6 − 67) × 14  =  148
      y = (38.5 − 13)  × 15.5 =  395
   ═══════════════════════════════════════════════════════════ */

/* ───────────────────────────────────────────────────────────
   1. INDIA BOUNDARY POLYGON
   ~70 points — enough resolution for a clean 10 px dot grid.
   ViewBox coordinate system: "0 0 460 540"
─────────────────────────────────────────────────────────── */
const INDIA_POLYGON: [number, number][] = [
  // ── Northwest / J&K ──
  [95, 100], [90, 72], [98, 44], [112, 24], [130, 12],
  [148,   8], [168,  8],
  // ── Himalayan arc (east) ──
  [186, 22], [200, 36], [214, 50],
  [222, 70], [225, 100], [228, 136], [244, 158], [262, 178],
  // ── Bihar / WB flat northern edge ──
  [302, 178],
  // ── Siliguri corridor (narrow chicken neck) ──
  [314, 172], [334, 162], [348, 162],
  // ── Northeast (Assam / Arunachal wide blob) ──
  [368, 158], [422, 154], [424, 162],
  [424, 200], [424, 232],
  // ── NE south / Nagaland / Mizoram ──
  [408, 248], [390, 258], [370, 260], [352, 255],
  // ── WB / Bangladesh coast ──
  [338, 260], [318, 265], [302, 268], [286, 276], [274, 284],
  // ── East coast: Odisha → AP → TN ──
  [262, 295], [252, 310], [242, 330],
  [232, 358], [220, 390], [210, 420],
  [200, 445], [192, 456], [188, 468], [184, 478],
  // ── Southern tip ──
  [170, 484], [158, 488], [144, 488],
  [132, 486], [120, 480], [108, 468], [102, 455],
  // ── West coast: Kerala → Karnataka → Goa → Maharashtra ──
  [ 98, 438], [ 94, 418], [ 88, 395],
  [ 82, 368], [ 78, 342], [ 76, 318],
  [ 80, 298], [ 78, 282], [ 72, 272],
  [ 64, 266], [ 54, 264], [ 44, 260],
  [ 38, 258], [ 32, 250], [ 26, 244],
  // ── Gujarat / Saurashtra / Kutch ──
  [ 22, 234], [ 18, 225], [ 16, 215],
  [ 20, 208], [ 28, 208], [ 36, 210],
  [ 48, 214], [ 60, 214], [ 70, 212],
  // ── Rajasthan back to start ──
  [ 74, 196], [ 76, 178], [ 78, 162],
  [ 82, 148], [ 86, 132], [ 90, 116], [ 93, 102],
];

/* ───────────────────────────────────────────────────────────
   2. POINT-IN-POLYGON  (ray-casting algorithm)
─────────────────────────────────────────────────────────── */
function insideIndia(px: number, py: number): boolean {
  let inside = false;
  const n = INDIA_POLYGON.length;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    const [xi, yi] = INDIA_POLYGON[i];
    const [xj, yj] = INDIA_POLYGON[j];
    if ((yi > py) !== (yj > py) &&
        px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

/* ───────────────────────────────────────────────────────────
   3. DOT GRID — pre-computed once at module load (never reruns)
   Spacing: 10 px  |  Dot radius: 3 px
─────────────────────────────────────────────────────────── */
const DOT_SPACING = 10;
const DOT_R       = 3;

const DOTS: [number, number][] = (() => {
  const pts: [number, number][] = [];
  for (let y = 10; y <= 496; y += DOT_SPACING) {
    for (let x = 14; x <= 430; x += DOT_SPACING) {
      if (insideIndia(x, y)) pts.push([x, y]);
    }
  }
  return pts;
})();

/* ───────────────────────────────────────────────────────────
   4. PRESENCE LOCATIONS
   ─────────────────────────────────────────────────────────
   ► To ADD a state:    append a new object.
   ► To REMOVE a state: delete its line.
   ► To MOVE a marker:  change x / y using the formula above.
   Everything else (tooltip, legend count, hover) updates
   automatically.
─────────────────────────────────────────────────────────── */
interface Location { id: string; name: string; x: number; y: number; }

const LOCATIONS: Location[] = [
  { id: "jk", name: "Jammu & Kashmir",  x: 109, y:  70 },
  { id: "hp", name: "Himachal Pradesh", x: 148, y: 112 },
  { id: "pb", name: "Punjab",           x: 111, y: 107 },
  { id: "ch", name: "Chandigarh",       x: 136, y: 120 },
  { id: "hr", name: "Haryana",          x: 122, y: 146 },
  { id: "dl", name: "New Delhi",        x: 143, y: 154 },
  { id: "uk", name: "Uttarakhand",      x: 156, y: 127 },
  { id: "up", name: "Uttar Pradesh",    x: 196, y: 179 },
  { id: "rj", name: "Rajasthan",        x: 124, y: 175 },
  { id: "gj", name: "Gujarat",          x:  82, y: 238 },
  { id: "mp", name: "Madhya Pradesh",   x: 169, y: 235 },
  { id: "br", name: "Bihar",            x: 254, y: 201 },
  { id: "jh", name: "Jharkhand",        x: 258, y: 234 },
  { id: "wb", name: "West Bengal",      x: 301, y: 248 },
  { id: "or", name: "Odisha",           x: 263, y: 283 },
  { id: "mh", name: "Maharashtra",      x: 156, y: 270 },
  { id: "tg", name: "Telangana",        x: 162, y: 325 },
  { id: "ap", name: "Andhra Pradesh",   x: 190, y: 342 },
  { id: "ka", name: "Karnataka",        x: 148, y: 390 },
  { id: "tn", name: "Tamil Nadu",       x: 185, y: 393 },
  { id: "as", name: "Assam",            x: 364, y: 190 },
];

/* ───────────────────────────────────────────────────────────
   Dot layer — memoised so it never re-renders on hover
─────────────────────────────────────────────────────────── */
const DotsLayer = memo(function DotsLayer() {
  return (
    <>
      {DOTS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={DOT_R} fill="#B8C4D8" />
      ))}
    </>
  );
});

/* ───────────────────────────────────────────────────────────
   Main component
─────────────────────────────────────────────────────────── */
export default function IndiaPresenceMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Location | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  function onMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    setCursor({ x: e.clientX - left, y: e.clientY - top });
  }

  const containerW = containerRef.current?.offsetWidth ?? 400;

  return (
    <div className="w-full flex flex-col items-center gap-10">

      {/* ── Map ── */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[400px] mx-auto select-none"
        onMouseMove={onMouseMove}
        onMouseLeave={() => setActive(null)}
      >
        <svg
          viewBox="0 0 460 540"
          className="w-full h-auto"
          aria-label="India dot map showing Tasmed presence locations"
        >
          {/* Dot silhouette — never re-renders */}
          <DotsLayer />

          {/* Presence markers — re-render only on hover */}
          {LOCATIONS.map((loc) => {
            const hot = active?.id === loc.id;
            return (
              <g
                key={loc.id}
                onMouseEnter={() => setActive(loc)}
                onMouseLeave={() => setActive(null)}
                style={{ cursor: "default" }}
              >
                {/* Expanding halo */}
                <circle
                  cx={loc.x} cy={loc.y}
                  r={hot ? 15 : 0}
                  fill="#F26522"
                  fillOpacity={0.14}
                  style={{ transition: "r 0.22s ease" }}
                />
                {/* Outer ring */}
                <circle
                  cx={loc.x} cy={loc.y}
                  r={hot ? 9 : 7}
                  fill="#F26522"
                  fillOpacity={hot ? 0.22 : 0}
                  style={{ transition: "r 0.18s ease, fill-opacity 0.18s ease" }}
                />
                {/* Main dot */}
                <circle
                  cx={loc.x} cy={loc.y}
                  r={hot ? 6 : 4.5}
                  fill="#F26522"
                  fillOpacity={hot ? 1 : 0.9}
                  style={{ transition: "r 0.15s ease" }}
                />
                {/* White centre pip */}
                <circle
                  cx={loc.x} cy={loc.y}
                  r={hot ? 2 : 1.5}
                  fill="white"
                  style={{ transition: "r 0.15s ease" }}
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
              left: Math.max(55, Math.min(cursor.x, containerW - 55)),
              top:  cursor.y - 46,
              transform: "translateX(-50%)",
            }}
          >
            {active.name}
            {/* Caret */}
            <span
              className="absolute left-1/2 -translate-x-1/2 top-full
                         border-l-[5px] border-r-[5px] border-t-[5px]
                         border-l-transparent border-r-transparent border-t-navy"
            />
          </div>
        )}
      </div>

      {/* ── Stats row ── */}
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
            {LOCATIONS.length}
          </span>
          Active Regions
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
