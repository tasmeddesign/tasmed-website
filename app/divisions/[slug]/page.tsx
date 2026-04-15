"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Search, X } from "lucide-react";
import Navbar from "../../components/Navbar";
import { getDivision, type Product } from "../../../data/divisions";

/* ─────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────── */
export default function DivisionPage({
  params,
}: {
  params: { slug: string };
}) {
  const division = getDivision(params.slug);
  if (!division) notFound();

  const categories = useMemo(() => {
    const cats = Array.from(
      new Set(division.products.map((p) => p.category).filter(Boolean))
    ) as string[];
    return ["All", ...cats];
  }, [division]);

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return division.products.filter((p) => {
      const matchesSearch =
        query.trim() === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [division.products, query, activeCategory]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#F9FAFB] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3.5 flex items-center gap-2">
          <Link
            href="/"
            className="font-inter text-[12px] text-gray-400 hover:text-[#1B2B4B] transition-colors"
          >
            Home
          </Link>
          <span className="text-gray-300 text-[12px]">/</span>
          <Link
            href="/#divisions"
            className="font-inter text-[12px] text-gray-400 hover:text-[#1B2B4B] transition-colors"
          >
            Divisions
          </Link>
          <span className="text-gray-300 text-[12px]">/</span>
          <span className="font-inter text-[12px] text-[#1B2B4B] font-medium">
            {division.name}
          </span>
        </div>
      </div>

      {/* ── Division Hero ── */}
      <div className="bg-[#1B2B4B] py-16 md:py-20 px-6">
        <div className="max-w-7xl mx-auto lg:px-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-inter text-[12px] text-white/40 hover:text-white/70 transition-colors mb-8"
          >
            <ArrowLeft size={13} />
            Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              {/* Label */}
              <span className="inline-flex items-center gap-2 font-inter text-[10.5px] font-semibold tracking-[0.22em] text-[#F26522] uppercase mb-4">
                <span className="w-5 h-px bg-[#F26522]" />
                Tasmed Division
              </span>

              {/* Name */}
              <h1 className="font-barlow font-black text-white text-[40px] md:text-[56px] leading-[1.02] tracking-tight mb-4">
                {division.name}
              </h1>

              {/* Description */}
              <p className="font-inter text-[15px] leading-[1.8] text-white/55 max-w-[560px]">
                {division.fullDescription}
              </p>
            </div>

            {/* Product count badge */}
            <div className="flex-shrink-0">
              <div className="inline-flex flex-col items-center justify-center w-[100px] h-[100px] rounded-2xl border border-white/10 bg-white/5">
                <span className="font-barlow font-black text-[36px] text-white leading-none">
                  {division.products.length}
                </span>
                <span className="font-inter text-[10px] tracking-[0.15em] text-white/40 uppercase mt-1">
                  Products
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Search + Filter Bar ── */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-[360px]">
            <Search
              size={14}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 font-inter text-[13px] text-[#1B2B4B] border border-gray-200 rounded-lg outline-none focus:border-[#F26522] focus:ring-1 focus:ring-[#F26522]/20 transition-all placeholder:text-gray-400"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Category filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={[
                  "whitespace-nowrap font-inter text-[11.5px] font-medium px-3.5 py-2 rounded-full border transition-all duration-200",
                  activeCategory === cat
                    ? "bg-[#1B2B4B] text-white border-[#1B2B4B]"
                    : "bg-white text-gray-500 border-gray-200 hover:border-[#1B2B4B]/30 hover:text-[#1B2B4B]",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        {/* Result count */}
        <p className="font-inter text-[13px] text-gray-400 mb-8">
          Showing{" "}
          <span className="text-[#1B2B4B] font-semibold">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "product" : "products"}
          {activeCategory !== "All" && (
            <> in <span className="text-[#F26522]">{activeCategory}</span></>
          )}
          {query && (
            <> for &ldquo;<span className="text-[#F26522]">{query}</span>&rdquo;</>
          )}
        </p>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
              <Search size={24} className="text-gray-300" />
            </div>
            <p className="font-barlow font-bold text-[18px] text-[#1B2B4B] mb-2">
              No products found
            </p>
            <p className="font-inter text-[14px] text-gray-400">
              Try a different search term or category.
            </p>
            <button
              onClick={() => { setQuery(""); setActiveCategory("All"); }}
              className="mt-5 font-inter text-[12px] font-semibold text-[#F26522] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* ── Footer strip ── */}
      <div className="border-t border-gray-100 bg-[#F9FAFB] py-10 px-6 mt-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[13px] text-gray-400">
            Looking for a different therapeutic area?
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-inter text-[12px] font-semibold tracking-[0.14em] uppercase text-white bg-[#1B2B4B] px-6 py-3 rounded-lg hover:bg-[#F26522] transition-colors duration-250"
          >
            View All Divisions
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Product Card
───────────────────────────────────────────────────────── */
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 flex flex-col">

      {/* Top accent */}
      <span className="absolute top-0 left-0 w-full h-[3px] bg-[#F26522] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />

      {/* Image placeholder */}
      <div className="w-full h-[120px] bg-gradient-to-br from-[#F9FAFB] to-[#F1F5F9] flex flex-col items-center justify-center gap-2 border-b border-gray-100">
        {/* Pill icon */}
        <div className="w-10 h-10 rounded-full bg-[#F26522]/10 flex items-center justify-center">
          <PillIcon />
        </div>
        <span className="font-inter text-[9px] tracking-[0.16em] text-gray-300 uppercase">
          Product Image
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Category badge */}
        {product.category && (
          <span className="self-start font-inter text-[9.5px] font-semibold tracking-[0.16em] uppercase text-[#F26522] bg-[#F26522]/8 px-2.5 py-1 rounded-full">
            {product.category}
          </span>
        )}

        {/* Name */}
        <h3 className="font-barlow font-bold text-[15.5px] text-[#1B2B4B] leading-tight tracking-tight">
          {product.name}
        </h3>

        {/* Description */}
        <p className="font-inter text-[12.5px] leading-[1.65] text-gray-400 flex-1">
          {product.description}
        </p>

        {/* Composition */}
        <p className="font-inter text-[11px] text-gray-300 leading-snug border-t border-gray-100 pt-3">
          {product.composition}
        </p>
      </div>

      {/* CTA */}
      <div className="px-5 pb-5">
        <button className="w-full inline-flex items-center justify-center gap-2 font-inter text-[11.5px] font-semibold tracking-[0.14em] uppercase text-[#1B2B4B] border border-[#1B2B4B]/15 py-2.5 rounded-xl hover:bg-[#1B2B4B] hover:text-white hover:border-[#1B2B4B] transition-all duration-250 group-hover:bg-[#F26522] group-hover:border-[#F26522] group-hover:text-white">
          View Details
          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
}

function PillIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  );
}
