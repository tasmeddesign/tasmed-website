import { ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   Category badge colour map
───────────────────────────────────────────────────────── */
const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Antidepressant:  { bg: "bg-violet-50",  text: "text-violet-600" },
  Anxiolytic:      { bg: "bg-blue-50",    text: "text-blue-600" },
  Neuropathic:     { bg: "bg-amber-50",   text: "text-amber-600" },
  Antiepileptic:   { bg: "bg-rose-50",    text: "text-rose-600" },
  Antipsychotic:   { bg: "bg-fuchsia-50", text: "text-fuchsia-600" },
  Sleep:           { bg: "bg-indigo-50",  text: "text-indigo-600" },
  Antihypertensive:{ bg: "bg-red-50",     text: "text-red-600" },
  Statin:          { bg: "bg-orange-50",  text: "text-orange-600" },
  "Beta-blocker":  { bg: "bg-pink-50",    text: "text-pink-600" },
  Antiplatelet:    { bg: "bg-rose-50",    text: "text-rose-600" },
  "ACE Inhibitor": { bg: "bg-teal-50",    text: "text-teal-600" },
  Corticosteroid:  { bg: "bg-yellow-50",  text: "text-yellow-700" },
  Antibiotic:      { bg: "bg-green-50",   text: "text-green-600" },
  Antifungal:      { bg: "bg-lime-50",    text: "text-lime-600" },
  PPI:             { bg: "bg-cyan-50",    text: "text-cyan-600" },
  Prokinetic:      { bg: "bg-sky-50",     text: "text-sky-600" },
  Supplement:      { bg: "bg-emerald-50", text: "text-emerald-600" },
  Hormone:         { bg: "bg-pink-50",    text: "text-pink-600" },
  NSAID:           { bg: "bg-orange-50",  text: "text-orange-600" },
  Glaucoma:        { bg: "bg-blue-50",    text: "text-blue-600" },
  Lubricant:       { bg: "bg-sky-50",     text: "text-sky-600" },
  Biguanide:       { bg: "bg-teal-50",    text: "text-teal-600" },
  Sulfonylurea:    { bg: "bg-amber-50",   text: "text-amber-600" },
  "SGLT2 Inhibitor":{ bg: "bg-indigo-50", text: "text-indigo-600" },
  "DPP-4 Inhibitor":{ bg: "bg-purple-50", text: "text-purple-600" },
};

function getCategoryStyle(category?: string) {
  if (!category) return { bg: "bg-gray-100", text: "text-gray-500" };
  return CATEGORY_COLORS[category] ?? { bg: "bg-[#F26522]/8", text: "text-[#F26522]" };
}

/* ─────────────────────────────────────────────────────────
   Props
───────────────────────────────────────────────────────── */
export interface ProductCardProps {
  name: string;
  description: string;
  composition: string;
  category?: string;
}

/* ─────────────────────────────────────────────────────────
   Component
───────────────────────────────────────────────────────── */
export default function ProductCard({
  name,
  description,
  composition,
  category,
}: ProductCardProps) {
  const { bg, text } = getCategoryStyle(category);

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] hover:-translate-y-1.5 transition-all duration-300">

      {/* Sliding top accent */}
      <span className="absolute top-0 left-0 h-[3px] w-0 bg-[#F26522] group-hover:w-full transition-all duration-300 rounded-t-2xl z-10" />

      {/* Image area */}
      <div className="relative w-full h-[120px] bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] flex flex-col items-center justify-center gap-2 overflow-hidden">
        {/* subtle background circles */}
        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[#F26522]/5" />
        <div className="absolute -bottom-3 -left-3 w-14 h-14 rounded-full bg-[#1B2B4B]/4" />
        {/* pill icon */}
        <div className="relative z-10 w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <PillIcon />
        </div>
        <span className="relative z-10 font-inter text-[8.5px] tracking-[0.18em] text-gray-300 uppercase">
          Product Image
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-2.5 flex-1">

        {/* Category badge */}
        {category && (
          <span className={`self-start font-inter text-[9.5px] font-semibold tracking-[0.15em] uppercase px-2.5 py-[5px] rounded-full ${bg} ${text}`}>
            {category}
          </span>
        )}

        {/* Product name */}
        <h3 className="font-barlow font-bold text-[15px] text-[#1B2B4B] leading-snug tracking-tight">
          {name}
        </h3>

        {/* Description */}
        <p className="font-inter text-[12.5px] leading-[1.7] text-gray-400 flex-1">
          {description}
        </p>

        {/* Divider */}
        <div className="border-t border-gray-100 pt-3 mt-1">
          <p className="font-inter text-[10.5px] text-gray-300 leading-snug">
            {composition}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-5">
        <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-inter text-[11px] font-semibold tracking-[0.14em] uppercase border border-gray-200 text-[#1B2B4B] group-hover:bg-[#F26522] group-hover:border-[#F26522] group-hover:text-white transition-all duration-250">
          View Details
          <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
}

function PillIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F26522"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  );
}
