"use client";

import { useState, useRef } from "react";

/* ─────────────────────────────────────────────────────────
   PRESENCE LIST
   Add or remove state IDs here to update the map.
   Every other behaviour (colour, tooltip, count) follows automatically.
───────────────────────────────────────────────────────── */
export const PRESENCE_IDS = new Set([
  "jammu-kashmir",
  "punjab",
  "rajasthan",
  "gujarat",
  "haryana",
  "chandigarh",
  "uttar-pradesh",
  "delhi",
  "himachal-pradesh",
  "madhya-pradesh",
  "maharashtra",
  "karnataka",
  "telangana",
  "andhra-pradesh",
  "tamil-nadu",
  "odisha",
  "bihar",
  "jharkhand",
  "west-bengal",
  "assam",
]);

/* ─────────────────────────────────────────────────────────
   STATE PATH DATA
   SVG paths in viewBox "40 0 960 1120".
   Coordinates derived from India's geographic bounding box
   (lon 68–98 E, lat 7.8–37.5 N) with a simple linear projection.
───────────────────────────────────────────────────────── */
interface StateData {
  id: string;
  name: string;
  d: string;
}

const STATES: StateData[] = [
  /* ── North ── */
  {
    id: "jammu-kashmir",
    name: "Jammu & Kashmir",
    d: "M 188,132 L 262,48 L 342,12 L 452,12 L 498,56 L 514,118 L 482,162 L 418,182 L 322,194 L 242,184 L 172,160 L 164,104 Z",
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    d: "M 288,180 L 418,164 L 470,194 L 452,248 L 402,268 L 324,260 L 272,240 Z",
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    d: "M 410,180 L 520,180 L 558,224 L 532,288 L 464,304 L 394,284 L 370,248 Z",
  },
  {
    id: "punjab",
    name: "Punjab",
    d: "M 172,160 L 290,157 L 300,218 L 280,270 L 210,282 L 152,262 L 146,212 Z",
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    d: "M 278,228 L 302,218 L 315,238 L 294,254 L 272,244 Z",
  },
  {
    id: "haryana",
    name: "Haryana",
    d: "M 260,255 L 392,234 L 420,275 L 412,352 L 350,372 L 270,360 L 237,310 Z",
  },
  {
    id: "delhi",
    name: "Delhi",
    d: "M 328,305 L 370,291 L 385,318 L 362,340 L 320,332 Z",
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    d: "M 310,322 L 468,310 L 588,304 L 635,338 L 620,458 L 560,512 L 430,525 L 318,498 L 280,422 Z",
  },
  /* ── West ── */
  {
    id: "rajasthan",
    name: "Rajasthan",
    d: "M 112,274 L 270,255 L 328,282 L 370,328 L 390,430 L 358,525 L 264,570 L 140,564 L 80,494 L 77,380 L 97,302 Z",
  },
  {
    id: "gujarat",
    name: "Gujarat",
    d: "M 77,460 L 188,422 L 282,430 L 320,470 L 304,560 L 268,624 L 174,654 L 90,630 L 54,578 L 50,510 Z",
  },
  /* ── Central ── */
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    d: "M 224,488 L 378,468 L 528,468 L 605,494 L 618,564 L 582,635 L 472,660 L 340,664 L 220,628 L 192,558 Z",
  },
  {
    id: "chhattisgarh",
    name: "Chhattisgarh",
    d: "M 575,505 L 662,485 L 696,532 L 679,616 L 628,664 L 558,675 L 520,625 L 512,550 Z",
  },
  /* ── East ── */
  {
    id: "bihar",
    name: "Bihar",
    d: "M 588,308 L 698,288 L 733,324 L 718,415 L 658,448 L 578,433 L 550,388 Z",
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    d: "M 558,440 L 658,420 L 715,458 L 698,548 L 638,584 L 558,568 L 520,525 Z",
  },
  {
    id: "west-bengal",
    name: "West Bengal",
    d: "M 672,282 L 768,262 L 794,308 L 784,425 L 752,525 L 712,568 L 672,525 L 658,445 L 678,395 L 682,335 Z",
  },
  {
    id: "odisha",
    name: "Odisha",
    d: "M 568,555 L 672,532 L 728,555 L 744,615 L 718,692 L 658,725 L 582,708 L 546,652 Z",
  },
  /* ── South ── */
  {
    id: "maharashtra",
    name: "Maharashtra",
    d: "M 188,595 L 340,585 L 490,595 L 558,628 L 543,728 L 488,795 L 368,825 L 248,818 L 182,758 L 164,678 Z",
  },
  {
    id: "goa",
    name: "Goa",
    d: "M 180,735 L 218,725 L 230,752 L 210,768 L 176,757 Z",
  },
  {
    id: "telangana",
    name: "Telangana",
    d: "M 390,652 L 532,625 L 578,675 L 562,772 L 470,802 L 372,785 L 340,728 Z",
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    d: "M 430,775 L 572,745 L 648,775 L 638,862 L 578,922 L 468,935 L 382,895 L 357,828 Z",
  },
  {
    id: "karnataka",
    name: "Karnataka",
    d: "M 190,735 L 370,748 L 460,775 L 450,868 L 418,935 L 330,978 L 240,972 L 184,922 L 164,848 Z",
  },
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    d: "M 332,922 L 468,910 L 558,935 L 543,1018 L 478,1068 L 372,1055 L 312,998 Z",
  },
  {
    id: "kerala",
    name: "Kerala",
    d: "M 188,878 L 310,908 L 338,972 L 308,1065 L 248,1088 L 192,1038 L 172,968 Z",
  },
  /* ── Northeast ── */
  {
    id: "sikkim",
    name: "Sikkim",
    d: "M 727,257 L 743,247 L 758,272 L 738,287 L 720,277 Z",
  },
  {
    id: "assam",
    name: "Assam",
    d: "M 690,255 L 832,228 L 862,263 L 822,315 L 730,328 L 688,288 Z",
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    d: "M 802,168 L 932,143 L 950,188 L 912,243 L 822,263 L 768,210 Z",
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    d: "M 708,318 L 797,308 L 814,338 L 773,368 L 718,358 Z",
  },
  {
    id: "nagaland",
    name: "Nagaland",
    d: "M 840,268 L 888,258 L 903,293 L 868,323 L 830,310 Z",
  },
  {
    id: "manipur",
    name: "Manipur",
    d: "M 857,318 L 903,308 L 922,343 L 898,378 L 858,365 Z",
  },
  {
    id: "mizoram",
    name: "Mizoram",
    d: "M 825,365 L 868,355 L 882,390 L 848,425 L 812,412 Z",
  },
  {
    id: "tripura",
    name: "Tripura",
    d: "M 788,355 L 828,345 L 834,378 L 803,408 L 773,393 Z",
  },
];

/* ─────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────── */
export default function IndiaMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<StateData | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const presentCount = PRESENCE_IDS.size;

  return (
    <div className="w-full flex flex-col items-center gap-10">
      {/* Map */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[420px] mx-auto select-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHovered(null)}
      >
        <svg
          viewBox="40 0 960 1120"
          className="w-full h-auto"
          aria-label="Map of India showing Tasmed's presence"
        >
          {STATES.map((state) => {
            const present = PRESENCE_IDS.has(state.id);
            const active = hovered?.id === state.id;

            return (
              <path
                key={state.id}
                d={state.d}
                fill={present ? "#F26522" : "#DDE1EC"}
                fillOpacity={present ? (active ? 1 : 0.58) : 1}
                stroke="white"
                strokeWidth={1.2}
                strokeLinejoin="round"
                onMouseEnter={() => setHovered(state)}
                onMouseLeave={() => setHovered(null)}
                style={{ transition: "fill-opacity 0.18s ease" }}
                className={present ? "cursor-pointer" : "cursor-default"}
              />
            );
          })}
        </svg>

        {/* Tooltip */}
        {hovered && (
          <div
            className="pointer-events-none absolute z-20 flex items-center gap-2 bg-navy text-white
                       font-inter text-[11px] font-semibold tracking-[0.06em] px-3 py-1.5
                       rounded-lg shadow-lg whitespace-nowrap"
            style={{
              left: cursor.x,
              top: cursor.y - 44,
              transform: "translateX(-50%)",
            }}
          >
            {PRESENCE_IDS.has(hovered.id) && (
              <span className="w-[6px] h-[6px] rounded-full bg-brand flex-shrink-0" />
            )}
            {hovered.name}
          </div>
        )}
      </div>

      {/* Legend + stat row */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-sm bg-brand/60 flex-shrink-0" />
          <span className="font-inter text-[12px] text-navy/60">Tasmed Present</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="w-3 h-3 rounded-sm bg-[#DDE1EC] flex-shrink-0" />
          <span className="font-inter text-[12px] text-navy/60">Not Yet Present</span>
        </div>
        <div className="h-4 w-px bg-gray-200 hidden sm:block" />
        <span className="font-inter text-[12px] text-navy/60">
          <span className="font-barlow font-black text-navy text-[16px] mr-1">{presentCount}</span>
          States &amp; UTs
        </span>
      </div>
    </div>
  );
}
