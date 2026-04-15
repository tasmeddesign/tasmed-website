"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Search, X, SlidersHorizontal } from "lucide-react";
import type { DivisionData } from "../../../data/divisions";
import ProductCard from "../../components/ProductCard";

/* ─────────────────────────────────────────────────────────
   Division Products Page (client — search + filter)
───────────────────────────────────────────────────────── */
export default function DivisionProductsPage({
  division,
}: {
  division: DivisionData;
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(
      new Set(division.products.map((p) => p.category).filter(Boolean))
    ) as string[];
    return ["All", ...cats];
  }, [division]);

  const filtered = useMemo(
    () =>
      division.products.filter((p) => {
        const q = query.trim().toLowerCase();
        const matchSearch =
          !q ||
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.composition.toLowerCase().includes(q);
        const matchCat =
          activeCategory === "All" || p.category === activeCategory;
        return matchSearch && matchCat;
      }),
    [division.products, query, activeCategory]
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA]">

      {/* ── Breadcrumb ── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-11 flex items-center gap-2">
          <Link href="/" className="font-inter text-[11.5px] text-gray-400 hover:text-[#1B2B4B] transition-colors">Home</Link>
          <Chevron />
          <Link href="/#divisions" className="font-inter text-[11.5px] text-gray-400 hover:text-[#1B2B4B] transition-colors">Divisions</Link>
          <Chevron />
          <span className="font-inter text-[11.5px] text-[#1B2B4B] font-medium">{division.name}</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="relative bg-[#1B2B4B] overflow-hidden">
        {/* Background texture circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/[0.02] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#F26522]/5 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-14">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-inter text-[12px] font-medium text-white/35 hover:text-white/70 transition-colors mb-10 group"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to Home
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            {/* Left — text */}
            <div className="max-w-[620px]">
              <span className="inline-flex items-center gap-2 font-inter text-[10px] font-semibold tracking-[0.25em] text-[#F26522] uppercase mb-5">
                <span className="w-6 h-px bg-[#F26522]" />
                Tasmed — {division.name} Division
              </span>

              <h1 className="font-barlow font-black text-white leading-[0.98] tracking-tight mb-5"
                style={{ fontSize: "clamp(40px, 5vw, 68px)" }}>
                {division.name}
              </h1>

              <p className="font-inter text-[15px] leading-[1.85] text-white/50 max-w-[500px]">
                {division.fullDescription}
              </p>
            </div>

            {/* Right — stats */}
            <div className="flex gap-4 flex-shrink-0">
              <StatBox value={division.products.length.toString()} label="Products" />
              <StatBox value={`${categories.length - 1}`} label="Categories" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Sticky Search + Filter Bar ── */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-gray-100 shadow-[0_1px_12px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-start sm:items-center gap-3">

          {/* Search input */}
          <div className="relative w-full sm:w-[300px] flex-shrink-0">
            <Search size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder={`Search ${division.name} products…`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-8 py-2 font-inter text-[13px] text-[#1B2B4B] placeholder:text-gray-400 border border-gray-200 rounded-lg focus:outline-none focus:border-[#F26522] focus:ring-2 focus:ring-[#F26522]/15 transition-all bg-[#FAFAFA]"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={12} />
              </button>
            )}
          </div>

          {/* Divider */}
          <span className="hidden sm:block w-px h-6 bg-gray-200 flex-shrink-0" />

          {/* Filter icon */}
          <SlidersHorizontal size={14} className="hidden sm:block text-gray-400 flex-shrink-0" />

          {/* Category chips */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  "whitespace-nowrap font-inter text-[11px] font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-200 flex-shrink-0",
                  activeCategory === cat
                    ? "bg-[#1B2B4B] text-white border-[#1B2B4B] shadow-sm"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#1B2B4B]/40 hover:text-[#1B2B4B]",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

        {/* Result summary */}
        <div className="flex items-center justify-between mb-8">
          <p className="font-inter text-[13px] text-gray-400">
            {filtered.length === 0
              ? "No products match your filters"
              : <>
                  <span className="font-semibold text-[#1B2B4B]">{filtered.length}</span>
                  {" "}{filtered.length === 1 ? "product" : "products"}
                  {activeCategory !== "All" && <> · <span className="text-[#F26522]">{activeCategory}</span></>}
                  {query && <> · &ldquo;<span className="text-[#F26522]">{query}</span>&rdquo;</>}
                </>
            }
          </p>

          {(query || activeCategory !== "All") && (
            <button
              onClick={() => { setQuery(""); setActiveCategory("All"); }}
              className="font-inter text-[11.5px] font-semibold text-[#F26522] hover:underline underline-offset-2 flex items-center gap-1"
            >
              <X size={11} />
              Clear
            </button>
          )}
        </div>

        {/* Empty state */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-5">
              <Search size={22} className="text-gray-300" />
            </div>
            <p className="font-barlow font-bold text-[20px] text-[#1B2B4B] mb-2">No products found</p>
            <p className="font-inter text-[14px] text-gray-400 max-w-[300px]">
              Try a different keyword or remove the active category filter.
            </p>
            <button
              onClick={() => { setQuery(""); setActiveCategory("All"); }}
              className="mt-6 font-inter text-[12px] font-semibold tracking-[0.14em] uppercase text-white bg-[#F26522] px-6 py-2.5 rounded-lg hover:bg-[#1B2B4B] transition-colors duration-250"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                composition={product.composition}
                category={product.category}
              />
            ))}
          </div>
        )}
      </div>

      {/* ── Footer strip ── */}
      <div className="bg-white border-t border-gray-100 py-10 px-6 mt-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-barlow font-bold text-[16px] text-[#1B2B4B]">
              Explore other therapeutic divisions
            </p>
            <p className="font-inter text-[13px] text-gray-400 mt-0.5">
              Tasmed covers 11 specialised pharmaceutical verticals.
            </p>
          </div>
          <Link
            href="/#divisions"
            className="inline-flex items-center gap-2 font-inter text-[11.5px] font-semibold tracking-[0.15em] uppercase text-white bg-[#1B2B4B] px-7 py-3 rounded-xl hover:bg-[#F26522] transition-colors duration-250 flex-shrink-0"
          >
            All Divisions
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Small helpers ── */
function StatBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center w-[88px] h-[88px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <span className="font-barlow font-black text-[32px] text-white leading-none">{value}</span>
      <span className="font-inter text-[9.5px] tracking-[0.14em] text-white/40 uppercase mt-1">{label}</span>
    </div>
  );
}

function Chevron() {
  return <span className="text-gray-300 text-[11px] select-none">/</span>;
}
