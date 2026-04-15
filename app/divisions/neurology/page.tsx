"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { Search, X, ArrowLeft, ArrowRight, Brain } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   Product Data — Tasmed Neurology Division
   Reference: tasmedlab.com/expertise/neurology/
───────────────────────────────────────────────────────── */
interface Product {
  id: string;
  name: string;
  composition: string;
  category: "Tablet" | "Capsule";
  description: string;
}

const PRODUCTS: Product[] = [
  {
    id: "n1",
    name: "Govert Plus",
    composition: "Cinnarizine + Dimenhydrinate",
    category: "Tablet",
    description:
      "Combination antihistamine for vertigo, dizziness and motion sickness management.",
  },
  {
    id: "n2",
    name: "Gapitas M100",
    composition: "Gabapentin + Methylcobalamin",
    category: "Tablet",
    description:
      "Neuropathic pain relief combined with nerve regeneration support.",
  },
  {
    id: "n3",
    name: "Venew OD",
    composition: "Desvenlafaxine Extended Release",
    category: "Tablet",
    description:
      "SNRI for major depressive disorder with once-daily extended-release formulation.",
  },
  {
    id: "n4",
    name: "Etipro",
    composition: "Etizolam + Propranolol",
    category: "Tablet",
    description:
      "Thienodiazepine and beta-blocker combination for anxiety with somatic symptoms.",
  },
  {
    id: "n5",
    name: "VAP CR",
    composition: "Sodium Valproate Controlled Release",
    category: "Tablet",
    description:
      "Mood stabiliser and antiepileptic for epilepsy and bipolar disorder.",
  },
  {
    id: "n6",
    name: "Fraxidep",
    composition: "Flupentixol + Melitracen",
    category: "Tablet",
    description:
      "Antidepressant combination for mild-to-moderate depression with anxiety.",
  },
  {
    id: "n7",
    name: "ZedeP",
    composition: "Fluoxetine 20 mg",
    category: "Capsule",
    description:
      "Selective serotonin reuptake inhibitor for depression, OCD and panic disorder.",
  },
  {
    id: "n8",
    name: "Clotas Range",
    composition: "Clonazepam Variants",
    category: "Tablet",
    description:
      "Benzodiazepine range for epilepsy, panic disorder and acute anxiety relief.",
  },
  {
    id: "n9",
    name: "Lamrest",
    composition: "Melatonin 3 mg / 5 mg",
    category: "Tablet",
    description:
      "Endogenous sleep hormone for insomnia, jet lag and circadian rhythm disorders.",
  },
  {
    id: "n10",
    name: "Anxilor",
    composition: "Lorazepam 1 mg",
    category: "Tablet",
    description:
      "Fast-acting benzodiazepine for short-term anxiety and pre-operative sedation.",
  },
];

const CATEGORIES = ["All", "Tablet", "Capsule"] as const;

/* ─────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────── */
export default function NeurologyPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.composition.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      const matchCat =
        activeCategory === "All" || p.category === activeCategory;
      return matchSearch && matchCat;
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-11 flex items-center gap-2 text-[11.5px] font-inter">
          <Link href="/" className="text-gray-400 hover:text-[#1B2B4B] transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <Link href="/#divisions" className="text-gray-400 hover:text-[#1B2B4B] transition-colors">Divisions</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#1B2B4B] font-semibold">Neurology</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="relative bg-[#1B2B4B] overflow-hidden">
        {/* Decorative rings */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5 -translate-x-[-20%] pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-white/5 -translate-x-[-10%] pointer-events-none" />
        <div className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-[#F26522]/8 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 md:py-20">
          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-inter text-[12px] font-medium text-white/35 hover:text-white/65 transition-colors mb-10 group"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Left */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-[#F26522]/15 flex items-center justify-center">
                  <Brain size={16} className="text-[#F26522]" />
                </div>
                <span className="font-inter text-[10.5px] font-semibold tracking-[0.25em] text-[#F26522] uppercase">
                  Tasmed — Neurology Division
                </span>
              </div>

              {/* Title */}
              <h1
                className="font-barlow font-black text-white leading-[0.96] tracking-tight mb-5"
                style={{ fontSize: "clamp(44px, 6vw, 72px)" }}
              >
                Neurology
              </h1>

              {/* Subtitle */}
              <p className="font-inter text-[15px] leading-[1.85] text-white/50 max-w-[480px]">
                Advanced formulations for neurological health — covering anxiety,
                depression, epilepsy, neuropathic pain, and sleep disorders.
              </p>
            </div>

            {/* Right — stat cards */}
            <div className="flex gap-3 flex-shrink-0">
              <div className="flex flex-col items-center justify-center w-[86px] h-[86px] rounded-2xl bg-white/5 border border-white/8">
                <span className="font-barlow font-black text-[30px] text-white leading-none">
                  {PRODUCTS.length}
                </span>
                <span className="font-inter text-[9px] tracking-[0.14em] text-white/35 uppercase mt-1">
                  Products
                </span>
              </div>
              <div className="flex flex-col items-center justify-center w-[86px] h-[86px] rounded-2xl bg-white/5 border border-white/8">
                <span className="font-barlow font-black text-[30px] text-white leading-none">2</span>
                <span className="font-inter text-[9px] tracking-[0.14em] text-white/35 uppercase mt-1">
                  Forms
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Search + Filter ── */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-[0_1px_10px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-start sm:items-center gap-3">

          {/* Search */}
          <div className="relative w-full sm:w-[280px] flex-shrink-0">
            <Search
              size={13}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search Neurology products…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 font-inter text-[13px] text-[#1B2B4B] placeholder:text-gray-400 border border-gray-200 rounded-lg bg-[#F8FAFC] focus:outline-none focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/15 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={12} />
              </button>
            )}
          </div>

          <span className="hidden sm:block h-5 w-px bg-gray-200" />

          {/* Category pills */}
          <div className="flex items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  "font-inter text-[11px] font-semibold px-4 py-1.5 rounded-full border transition-all duration-200",
                  activeCategory === cat
                    ? "bg-[#1B2B4B] text-white border-[#1B2B4B] shadow-sm"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#1B2B4B]/40 hover:text-[#1B2B4B]",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Result count */}
          {(query || activeCategory !== "All") && (
            <span className="ml-auto font-inter text-[12px] text-gray-400 flex items-center gap-2">
              <span className="font-semibold text-[#1B2B4B]">{filtered.length}</span> result{filtered.length !== 1 ? "s" : ""}
              <button
                onClick={() => { setQuery(""); setActiveCategory("All"); }}
                className="text-[#F26522] hover:underline underline-offset-2 flex items-center gap-1"
              >
                <X size={10} /> Clear
              </button>
            </span>
          )}
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center py-28 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-5">
              <Search size={22} className="text-gray-300" />
            </div>
            <p className="font-barlow font-bold text-[20px] text-[#1B2B4B] mb-2">
              No products found
            </p>
            <p className="font-inter text-[14px] text-gray-400 max-w-xs">
              Try a different search term or select a different category.
            </p>
            <button
              onClick={() => { setQuery(""); setActiveCategory("All"); }}
              className="mt-6 font-inter text-[12px] font-semibold tracking-[0.14em] uppercase text-white bg-[#F26522] px-6 py-2.5 rounded-lg hover:bg-[#1B2B4B] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <NeurologyProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* ── Footer strip ── */}
      <div className="bg-white border-t border-gray-100 py-10 px-6 mt-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-barlow font-bold text-[17px] text-[#1B2B4B]">
              Explore other therapeutic divisions
            </p>
            <p className="font-inter text-[13px] text-gray-400 mt-0.5">
              11 specialised pharmaceutical verticals across Tasmed.
            </p>
          </div>
          <Link
            href="/#divisions"
            className="inline-flex items-center gap-2 font-inter text-[11.5px] font-semibold tracking-[0.15em] uppercase text-white bg-[#1B2B4B] px-7 py-3 rounded-xl hover:bg-[#F26522] transition-colors flex-shrink-0"
          >
            All Divisions
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Neurology Product Card
───────────────────────────────────────────────────────── */
function NeurologyProductCard({ product }: { product: Product }) {
  const isTablet = product.category === "Tablet";

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col shadow-[0_2px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.11)] hover:-translate-y-1.5 transition-all duration-300 cursor-default">

      {/* Sliding top accent */}
      <span className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full bg-[#F26522] transition-all duration-350 rounded-t-2xl z-10" />

      {/* Image / icon area */}
      <div className="relative w-full h-[118px] overflow-hidden bg-gradient-to-br from-[#F8FAFC] to-[#EEF2F7] flex flex-col items-center justify-center gap-2">
        {/* Background blobs */}
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#F26522]/6 pointer-events-none" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-[#1B2B4B]/5 pointer-events-none" />

        {/* Icon circle */}
        <div className="relative z-10 w-12 h-12 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_4px_16px_rgba(242,101,34,0.15)] transition-all duration-300">
          {isTablet ? <TabletIcon /> : <CapsuleIcon />}
        </div>
        <span className="relative z-10 font-inter text-[8px] tracking-[0.2em] text-gray-300 uppercase">
          Product Image
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 flex-1">

        {/* Category badge */}
        <span
          className={[
            "self-start font-inter text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-[4px] rounded-full",
            isTablet
              ? "bg-[#1B2B4B]/8 text-[#1B2B4B]"
              : "bg-[#F26522]/10 text-[#F26522]",
          ].join(" ")}
        >
          {product.category}
        </span>

        {/* Brand name */}
        <h3 className="font-barlow font-black text-[18px] text-[#1B2B4B] leading-tight tracking-tight mt-0.5">
          {product.name}
        </h3>

        {/* Composition */}
        <p className="font-inter text-[11.5px] font-medium text-[#F26522]/80 leading-tight">
          {product.composition}
        </p>

        {/* Description */}
        <p className="font-inter text-[12.5px] leading-[1.7] text-gray-400 flex-1">
          {product.description}
        </p>
      </div>

      {/* CTA */}
      <div className="px-5 pb-5 pt-1">
        <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-inter text-[11px] font-semibold tracking-[0.14em] uppercase border border-gray-200 text-[#1B2B4B] group-hover:bg-[#F26522] group-hover:border-[#F26522] group-hover:text-white transition-all duration-250">
          View Details
          <ArrowRight
            size={11}
            className="group-hover:translate-x-0.5 transition-transform duration-200"
          />
        </button>
      </div>
    </div>
  );
}

/* ── Icon helpers ── */
function TabletIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B2B4B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <line x1="3.6" y1="9" x2="20.4" y2="9" />
    </svg>
  );
}

function CapsuleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  );
}
