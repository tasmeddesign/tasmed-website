import Link from "next/link";
import { divisions } from "@/app/data/divisions";
import type { Division } from "@/app/data/divisions";

/* ─────────────────────────────────────────────────────────
   Reusable card — used here, on /divisions, and on [slug]
───────────────────────────────────────────────────────── */
export function DivisionCard({
  division,
  linked = false,
}: {
  division: Division;
  linked?: boolean;
}) {
  const Icon = division.icon;

  const inner = (
    <div className="group relative bg-white rounded-xl border border-gray-100 p-8 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden h-full">
      {/* Hover accent line */}
      <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand to-brand/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Icon */}
      <div className="w-[52px] h-[52px] rounded-[14px] bg-brand/[0.08] flex items-center justify-center mb-6 group-hover:bg-brand/[0.14] transition-colors duration-300">
        <Icon size={24} className="text-brand stroke-[1.6]" aria-hidden="true" />
      </div>

      {/* Text */}
      <h3 className="font-barlow font-bold text-[19px] text-navy mb-2.5 tracking-tight">
        {division.name}
      </h3>
      <p className="font-inter text-[13.5px] leading-[1.7] text-gray-400/90">
        {division.description}
      </p>
    </div>
  );

  if (linked) {
    return (
      <Link href={`/divisions/${division.slug}`} className="block h-full">
        {inner}
      </Link>
    );
  }

  return inner;
}

/* ─────────────────────────────────────────────────────────
   Full-page section — used on /divisions
───────────────────────────────────────────────────────── */
export default function DivisionsSection() {
  return (
    <section id="divisions" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 font-inter text-[10.5px] font-semibold tracking-[0.22em] text-brand uppercase mb-4">
            <span className="w-5 h-px bg-brand" />
            What We Offer
            <span className="w-5 h-px bg-brand" />
          </span>
          <h2 className="font-barlow font-black text-[40px] lg:text-[52px] leading-[1.05] tracking-tight text-navy mb-4">
            Our Divisions
          </h2>
          <p className="font-inter text-[15px] text-gray-400/90 max-w-[460px] leading-relaxed">
            Specialised therapeutic verticals delivering targeted pharmaceutical
            solutions across every stage of life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {divisions.map((division) => (
            <DivisionCard key={division.slug} division={division} linked />
          ))}
        </div>
      </div>
    </section>
  );
}
