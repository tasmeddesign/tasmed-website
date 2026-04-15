"use client";

import { useState } from "react";
import {
  Stethoscope,
  Baby,
  Leaf,
  Eye,
  Brain,
  HeartPulse,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────── */
interface Product {
  name: string;
  description: string;
}

interface Division {
  icon: LucideIcon;
  name: string;
  description: string;
  products: Product[];
}

const DIVISIONS: Division[] = [
  {
    icon: Brain,
    name: "Neurology",
    description:
      "Targeted neuro formulations supporting cognitive function and nervous system health.",
    products: [
      {
        name: "Clonazepam 0.5 mg",
        description: "Antiepileptic and anxiolytic for seizure management",
      },
      {
        name: "Escitalopram 10 mg",
        description: "SSRI for depression and generalised anxiety disorder",
      },
      {
        name: "Pregabalin 75 mg",
        description: "Neuropathic pain and partial-seizure adjunct therapy",
      },
      {
        name: "Sertraline 50 mg",
        description: "First-line treatment for OCD and panic disorders",
      },
    ],
  },
  {
    icon: HeartPulse,
    name: "Cardiology",
    description:
      "Cardio-protective products developed to maintain a healthy heart and circulation.",
    products: [
      {
        name: "Amlodipine 5 mg",
        description: "Calcium channel blocker for hypertension and angina",
      },
      {
        name: "Atorvastatin 20 mg",
        description: "HMG-CoA reductase inhibitor for LDL reduction",
      },
      {
        name: "Metoprolol 25 mg",
        description: "Selective beta-blocker for heart rate control",
      },
      {
        name: "Clopidogrel 75 mg",
        description: "Antiplatelet agent for coronary artery disease",
      },
    ],
  },
  {
    icon: Stethoscope,
    name: "Dermatology",
    description:
      "Advanced skincare formulations addressing a broad spectrum of dermal conditions.",
    products: [
      {
        name: "Mometasone 0.1% Cream",
        description: "Topical corticosteroid for eczema and psoriasis",
      },
      {
        name: "Clindamycin 1% Gel",
        description: "Topical antibiotic for acne vulgaris treatment",
      },
      {
        name: "Ketoconazole 2% Shampoo",
        description: "Antifungal for seborrhoeic dermatitis and dandruff",
      },
      {
        name: "Tacrolimus 0.03% Ointment",
        description: "Calcineurin inhibitor for atopic dermatitis",
      },
    ],
  },
  {
    icon: Baby,
    name: "Pediatrics",
    description:
      "Gentle, precision-dosed therapeutics designed for the unique needs of children.",
    products: [
      {
        name: "Amoxicillin 125 mg/5 ml",
        description: "Broad-spectrum antibiotic suspension for infections",
      },
      {
        name: "Paracetamol 120 mg/5 ml",
        description: "Antipyretic and analgesic drops for fever relief",
      },
      {
        name: "Zinc Sulphate 10 mg/5 ml",
        description: "Micronutrient syrup for diarrhoea management",
      },
      {
        name: "Montelukast 4 mg Granules",
        description: "Leukotriene receptor antagonist for paediatric asthma",
      },
    ],
  },
  {
    icon: Leaf,
    name: "Nutraceuticals",
    description:
      "Science-backed nutritional supplements to support everyday wellness and vitality.",
    products: [
      {
        name: "OmegaGuard Softgels",
        description: "Ultra-pure Omega-3 concentrate for cardiovascular health",
      },
      {
        name: "CalciMax D3 Tablets",
        description: "Calcium + Vitamin D3 for bone density maintenance",
      },
      {
        name: "MultiVit Forte",
        description: "Complete multivitamin complex for daily micronutrient needs",
      },
      {
        name: "Iron-Folic Syrup",
        description: "Iron + folic acid supplement for anaemia management",
      },
    ],
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    description:
      "Ophthalmic solutions engineered for superior eye health and visual comfort.",
    products: [
      {
        name: "Moxifloxacin 0.5% Eye Drops",
        description: "Broad-spectrum antibiotic for bacterial conjunctivitis",
      },
      {
        name: "Carboxymethylcellulose 0.5%",
        description: "Lubricant eye drops for dry eye syndrome relief",
      },
      {
        name: "Timolol 0.5% Eye Drops",
        description: "Beta-blocker for intraocular pressure reduction",
      },
      {
        name: "Prednisolone Acetate 1%",
        description: "Corticosteroid eye drops for ocular inflammation",
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────
   Main Section
───────────────────────────────────────────────────────── */
export default function Divisions() {
  // clicked = locked open; null = none locked
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // hovered = preview on hover
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isExpanded = (i: number) =>
    activeIndex === i || hoveredIndex === i;

  const handleClick = (i: number) =>
    setActiveIndex((prev) => (prev === i ? null : i));

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 font-inter text-[10.5px] font-semibold tracking-[0.22em] text-[#F26522] uppercase mb-4">
            <span className="w-5 h-px bg-[#F26522]" />
            What We Offer
            <span className="w-5 h-px bg-[#F26522]" />
          </span>
          <h2 className="font-barlow font-black text-[40px] lg:text-[52px] leading-[1.05] tracking-tight text-[#1B2B4B] mb-4">
            Our Divisions
          </h2>
          <p className="font-inter text-[15px] text-gray-400/90 max-w-[460px] leading-relaxed">
            Specialised therapeutic verticals delivering targeted pharmaceutical
            solutions across every stage of life.
          </p>
        </div>

        {/* ── Division Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DIVISIONS.map((division, i) => (
            <DivisionCard
              key={division.name}
              division={division}
              expanded={isExpanded(i)}
              active={activeIndex === i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleClick(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Division Card (expandable)
───────────────────────────────────────────────────────── */
interface DivisionCardProps {
  division: Division;
  expanded: boolean;
  active: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

function DivisionCard({
  division,
  expanded,
  active,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: DivisionCardProps) {
  const Icon = division.icon;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-expanded={expanded}
      className={[
        "relative rounded-2xl border p-7 cursor-pointer select-none",
        "transition-all duration-300 ease-in-out overflow-hidden",
        "shadow-[0_2px_12px_rgba(0,0,0,0.05)]",
        active
          ? "border-[#F26522] shadow-[0_8px_32px_rgba(242,101,34,0.15)] bg-white"
          : expanded
          ? "border-[#F26522]/40 shadow-[0_8px_24px_rgba(0,0,0,0.08)] bg-white"
          : "border-gray-100 bg-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.07)]",
      ].join(" ")}
    >
      {/* Top accent bar — slides in when expanded */}
      <span
        className={[
          "absolute top-0 left-0 h-[3px] bg-[#F26522] rounded-t-2xl",
          "transition-all duration-300 ease-in-out",
          expanded ? "w-full" : "w-0",
        ].join(" ")}
      />

      {/* ── Card Header ── */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div
            className={[
              "w-[48px] h-[48px] rounded-[14px] flex items-center justify-center flex-shrink-0",
              "transition-colors duration-300",
              expanded
                ? "bg-[#F26522]/12"
                : "bg-[#F26522]/7 group-hover:bg-[#F26522]/12",
            ].join(" ")}
          >
            <Icon
              size={22}
              className={[
                "transition-colors duration-300",
                expanded ? "text-[#F26522]" : "text-[#F26522]/70",
              ].join(" ")}
              aria-hidden
            />
          </div>

          {/* Name */}
          <h3 className="font-barlow font-bold text-[19px] text-[#1B2B4B] tracking-tight leading-tight">
            {division.name}
          </h3>
        </div>

        {/* Chevron indicator */}
        <ChevronDown
          size={16}
          className={[
            "text-gray-400 flex-shrink-0 mt-1 transition-transform duration-300",
            expanded ? "rotate-180 text-[#F26522]" : "",
          ].join(" ")}
        />
      </div>

      {/* Description */}
      <p className="font-inter text-[13.5px] leading-[1.7] text-gray-400 mb-0">
        {division.description}
      </p>

      {/* ── Product List — slides open ── */}
      <div
        className={[
          "grid grid-cols-1 gap-2 overflow-hidden transition-all duration-300 ease-in-out",
          expanded ? "max-h-[600px] opacity-100 mt-5 pt-5 border-t border-gray-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        {division.products.map((product) => (
          <ProductRow key={product.name} product={product} />
        ))}

        {/* See all link */}
        <button
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 font-inter text-[11px] font-semibold tracking-[0.14em] uppercase text-[#F26522] mt-2 hover:gap-3 transition-all duration-200 self-start"
        >
          View All Products
          <ArrowRight size={11} />
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Product Row — inside an expanded division card
───────────────────────────────────────────────────────── */
function ProductRow({ product }: { product: Product }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F9FAFB] hover:bg-[#F26522]/5 transition-colors duration-200 group/row">
      {/* Dot */}
      <span className="w-[6px] h-[6px] rounded-full bg-[#F26522]/40 group-hover/row:bg-[#F26522] flex-shrink-0 mt-[5px] transition-colors duration-200" />

      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="font-barlow font-bold text-[13.5px] text-[#1B2B4B] leading-tight">
          {product.name}
        </span>
        <span className="font-inter text-[12px] text-gray-400 leading-snug">
          {product.description}
        </span>
      </div>
    </div>
  );
}
