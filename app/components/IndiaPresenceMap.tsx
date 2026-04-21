"use client";

import { useState, useRef } from "react";

/* ─────────────────────────────────────────────────────────
   PRESENCE LOCATIONS — the only place you ever need to edit
   ─────────────────────────────────────────────────────────
   Add a location:    append { id, name, x, y }
   Remove a location: delete the line
   Move a marker:     adjust x / y

   Coordinate formula (SVG viewBox "0 0 460 540"):
     x = (longitude − 67) × 14
     y = (38.5 − latitude) × 15.5

   Example — Bengaluru (77.6 °E, 13 °N):
     x = (77.6 − 67) × 14 = 148
     y = (38.5 − 13) × 15.5 = 395
───────────────────────────────────────────────────────── */
interface Location {
  id: string;
  name: string;
  x: number;
  y: number;
}

const LOCATIONS: Location[] = [
  { id: "jk", name: "Jammu & Kashmir",  x: 109, y:  70 },
  { id: "hp", name: "Himachal Pradesh", x: 148, y: 112 },
  { id: "pb", name: "Punjab",           x: 111, y: 107 },
  { id: "ch", name: "Chandigarh",       x: 136, y: 120 },
  { id: "hr", name: "Haryana",          x: 122, y: 146 },
  { id: "dl", name: "New Delhi",        x: 143, y: 154 },
  { id: "uk", name: "Uttarakhand",      x: 155, y: 127 },
  { id: "up", name: "Uttar Pradesh",    x: 196, y: 179 },
  { id: "rj", name: "Rajasthan",        x: 124, y: 175 },
  { id: "gj", name: "Gujarat",          x:  82, y: 238 },
  { id: "mp", name: "Madhya Pradesh",   x: 169, y: 235 },
  { id: "br", name: "Bihar",            x: 254, y: 201 },
  { id: "jh", name: "Jharkhand",        x: 258, y: 233 },
  { id: "wb", name: "West Bengal",      x: 301, y: 248 },
  { id: "or", name: "Odisha",           x: 263, y: 282 },
  { id: "mh", name: "Maharashtra",      x: 156, y: 270 },
  { id: "tg", name: "Telangana",        x: 162, y: 325 },
  { id: "ap", name: "Andhra Pradesh",   x: 190, y: 342 },
  { id: "ka", name: "Karnataka",        x: 148, y: 390 },
  { id: "tn", name: "Tamil Nadu",       x: 185, y: 393 },
  { id: "as", name: "Assam",            x: 364, y: 190 },
];

/* ─────────────────────────────────────────────────────────
   INDIA SILHOUETTE
   One smooth simplified outline — no state divisions.
   Coordinate system matches the LOCATIONS formula above.
───────────────────────────────────────────────────────── */
const INDIA_PATH =
  "M 95,100 " +
  "C 95,58 115,12 148,8 " +           // J&K northern arc
  "C 168,5 195,34 220,50 " +          // Himalayan arc (east)
  "C 228,70 230,136 262,178 " +       // Nepal border going SE
  "L 302,178 " +                       // Bihar / WB flat north
  "C 312,170 336,162 348,162 " +      // Siliguri corridor (narrow)
  "C 368,160 422,156 424,162 " +      // NE — Arunachal wide
  "L 424,232 " +                       // NE south boundary
  "C 402,258 370,260 350,254 " +      // Nagaland / Mizoram curve
  "C 328,262 302,268 274,284 " +      // WB / Bangladesh coast
  "C 248,304 220,354 190,456 " +      // Long east coast (AP → TN)
  "C 184,472 162,488 144,488 " +      // Southern tip
  "C 130,488 114,473 102,462 " +      // Kerala south
  "C 97,412 84,322 80,298 " +         // Kerala / Karnataka coast
  "C 74,278 60,272 46,264 " +         // Konkan / Goa coast
  "C 38,260 26,248 22,234 " +         // Gujarat / Saurashtra
  "C 16,222 26,210 46,214 " +         // Kutch / Gujarat west
  "C 58,216 70,212 76,178 " +         // Gujarat north
  "C 82,148 88,128 90,108 " +         // Rajasthan
  "Z";

/* ─────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────── */
export default function IndiaPresenceMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive]   = useState<Location | null>(null);
  const [cursor, setCursor]   = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    setCursor({ x: e.clientX - left, y: e.clientY - top });
  }

  // Clamp tooltip so it never overflows the container
  function tooltipLeft(raw: number, containerW: number) {
    return Math.max(60, Math.min(raw, containerW - 60));
  }

  return (
    <div className="w-full flex flex-col items-center gap-10">

      {/* ── Map ── */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[380px] mx-auto select-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setActive(null)}
      >
        <svg
          viewBox="0 0 460 540"
          className="w-full h-auto"
          aria-label="India map showing Tasmed presence locations"
        >
          <defs>
            {/* Dot-grid fill — gives the "light abstract" texture */}
            <pattern
              id="presence-dots"
              x="0" y="0"
              width="8" height="8"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1.5" cy="1.5" r="0.85" fill="#C5CBDB" />
            </pattern>

            {/* Soft drop-shadow for the silhouette */}
            <filter id="map-shadow" x="-8%" y="-8%" width="116%" height="116%">
              <feDropShadow
                dx="0" dy="4"
                stdDeviation="6"
                floodColor="#1B2B4B"
                floodOpacity="0.06"
              />
            </filter>
          </defs>

          {/* India silhouette */}
          <path
            d={INDIA_PATH}
            fill="url(#presence-dots)"
            stroke="#B8BFD0"
            strokeWidth="0.7"
            strokeLinejoin="round"
            filter="url(#map-shadow)"
          />

          {/* Presence markers */}
          {LOCATIONS.map((loc) => {
            const isActive = active?.id === loc.id;
            return (
              <g
                key={loc.id}
                onMouseEnter={() => setActive(loc)}
                onMouseLeave={() => setActive(null)}
                style={{ cursor: "default" }}
                aria-label={loc.name}
              >
                {/* Halo ring — only while hovered */}
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r={isActive ? 13 : 0}
                  fill="#F26522"
                  fillOpacity={0.14}
                  style={{ transition: "r 0.2s ease" }}
                />

                {/* Outer dot */}
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r={isActive ? 6 : 4.5}
                  fill="#F26522"
                  fillOpacity={isActive ? 1 : 0.75}
                  style={{ transition: "r 0.15s ease, fill-opacity 0.15s ease" }}
                />

                {/* White centre pip */}
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r={isActive ? 2 : 1.5}
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
              left: tooltipLeft(
                cursor.x,
                containerRef.current?.offsetWidth ?? 380
              ),
              top: cursor.y - 46,
              transform: "translateX(-50%)",
            }}
          >
            {active.name}
            {/* Small caret */}
            <span
              className="absolute left-1/2 -translate-x-1/2 -bottom-[5px]
                         border-l-[5px] border-r-[5px] border-t-[5px]
                         border-l-transparent border-r-transparent border-t-navy"
            />
          </div>
        )}
      </div>

      {/* ── Legend + stat ── */}
      <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
        <div className="flex items-center gap-2">
          <span className="w-[10px] h-[10px] rounded-full bg-brand/70 flex-shrink-0" />
          <span className="font-inter text-[12px] text-navy/55 tracking-wide">
            Tasmed Presence
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
