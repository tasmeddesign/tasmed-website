"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Stethoscope,
  Baby,
  Leaf,
  Eye,
  Brain,
  HeartPulse,
  Pill,
  Bone,
  FlaskConical,
  Venus,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   Division cards data (UI layer — links to data/divisions.ts slugs)
───────────────────────────────────────────────────────── */
interface DivisionCard {
  slug: string;
  icon: LucideIcon;
  name: string;
  description: string;
  productCount: number;
}

const DIVISIONS: DivisionCard[] = [
  {
    slug: "neurology",
    icon: Brain,
    name: "Neurology",
    description: "Targeted neuro formulations supporting cognitive function and nervous system health.",
    productCount: 8,
  },
  {
    slug: "cardiology",
    icon: HeartPulse,
    name: "Cardiology",
    description: "Cardio-protective products developed to maintain a healthy heart and circulation.",
    productCount: 8,
  },
  {
    slug: "dermatology",
    icon: Stethoscope,
    name: "Dermatology",
    description: "Advanced skincare formulations addressing a broad spectrum of dermal conditions.",
    productCount: 8,
  },
  {
    slug: "gastroenterology",
    icon: FlaskConical,
    name: "Gastroenterology",
    description: "Sustained medicines for treatment of renal disorders, hyperacidity and reflux.",
    productCount: 8,
  },
  {
    slug: "anti-diabetic",
    icon: Pill,
    name: "Anti Diabetic",
    description: "Medicines to stabilize and control blood glucose levels effectively.",
    productCount: 8,
  },
  {
    slug: "orthopaedic",
    icon: Bone,
    name: "Orthopaedic",
    description: "A dedicated unit for bone care and musculoskeletal health.",
    productCount: 8,
  },
  {
    slug: "gynaecology",
    icon: Venus,
    name: "Gynaecology",
    description: "Medical care for women during pregnancy, childbirth and postpartum days.",
    productCount: 8,
  },
  {
    slug: "urology",
    icon: FlaskConical,
    name: "Urology",
    description: "Formulations exceeding industry benchmarks for urological health.",
    productCount: 8,
  },
  {
    slug: "pediatrics",
    icon: Baby,
    name: "Pediatrics",
    description: "Gentle, precision-dosed therapeutics designed for the unique needs of children.",
    productCount: 8,
  },
  {
    slug: "nutraceuticals",
    icon: Leaf,
    name: "Nutraceuticals",
    description: "Science-backed nutritional supplements to support everyday wellness.",
    productCount: 8,
  },
  {
    slug: "ophthalmology",
    icon: Eye,
    name: "Ophthalmology",
    description: "Ophthalmic solutions engineered for superior eye health and visual comfort.",
    productCount: 8,
  },
];

/* ─────────────────────────────────────────────────────────
   Main Section
───────────────────────────────────────────────────────── */
export default function Divisions() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  return (
    <section id="divisions" className="w-full bg-white py-24">
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

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {DIVISIONS.map((division) => (
            <DivisionCard
              key={division.slug}
              division={division}
              hovered={hoveredSlug === division.slug}
              onMouseEnter={() => setHoveredSlug(division.slug)}
              onMouseLeave={() => setHoveredSlug(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Division Card
───────────────────────────────────────────────────────── */
interface DivisionCardProps {
  division: DivisionCard;
  hovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function DivisionCard({
  division,
  hovered,
  onMouseEnter,
  onMouseLeave,
}: DivisionCardProps) {
  const Icon = division.icon;

  return (
    <Link
      href={`/divisions/${division.slug}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={[
        "group relative flex flex-col rounded-2xl border p-7 overflow-hidden",
        "transition-all duration-300 ease-in-out",
        "shadow-[0_2px_12px_rgba(0,0,0,0.05)]",
        hovered
          ? "border-[#F26522]/50 shadow-[0_10px_36px_rgba(242,101,34,0.12)] -translate-y-1 bg-white"
          : "border-gray-100 bg-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.07)]",
      ].join(" ")}
    >
      {/* Top accent — slides in on hover */}
      <span
        className={[
          "absolute top-0 left-0 h-[3px] bg-[#F26522] rounded-t-2xl",
          "transition-all duration-300 ease-in-out",
          hovered ? "w-full" : "w-0",
        ].join(" ")}
      />

      {/* Icon */}
      <div
        className={[
          "w-[50px] h-[50px] rounded-[14px] flex items-center justify-center mb-5 flex-shrink-0",
          "transition-colors duration-300",
          hovered ? "bg-[#F26522]/14" : "bg-[#F26522]/8",
        ].join(" ")}
      >
        <Icon
          size={22}
          className={[
            "transition-colors duration-300",
            hovered ? "text-[#F26522]" : "text-[#F26522]/65",
          ].join(" ")}
          aria-hidden
        />
      </div>

      {/* Name */}
      <h3 className="font-barlow font-bold text-[18px] text-[#1B2B4B] tracking-tight leading-tight mb-2">
        {division.name}
      </h3>

      {/* Description */}
      <p className="font-inter text-[13px] leading-[1.7] text-gray-400 flex-1">
        {division.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-100">
        <span className="font-inter text-[11.5px] text-gray-400">
          <span className="font-semibold text-[#1B2B4B]">{division.productCount}</span> products
        </span>
        <span
          className={[
            "inline-flex items-center gap-1 font-inter text-[11px] font-semibold tracking-[0.12em] uppercase text-[#F26522]",
            "transition-all duration-200",
            hovered ? "gap-2" : "gap-1",
          ].join(" ")}
        >
          Explore
          <ArrowRight size={11} />
        </span>
      </div>
    </Link>
  );
}
