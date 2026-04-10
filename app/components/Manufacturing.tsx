import { BadgeCheck, FlaskConical, ShieldCheck, Zap } from "lucide-react";

const highlights = [
  {
    icon: BadgeCheck,
    title: "WHO-GMP Certified Facilities",
    detail: "Operating under globally recognised Good Manufacturing Practice standards.",
  },
  {
    icon: FlaskConical,
    title: "Advanced R&D Laboratories",
    detail: "In-house research infrastructure accelerating next-generation formulations.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Quality Control Systems",
    detail: "Multi-stage testing protocols ensuring every batch meets exacting standards.",
  },
  {
    icon: Zap,
    title: "High-Capacity Production",
    detail: "Scalable manufacturing lines built for consistent, large-volume output.",
  },
];

export default function Manufacturing() {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* ── LEFT: Text Content ── */}
          <div className="flex flex-col">
            {/* Section label */}
            <span className="inline-flex items-center gap-2 font-inter text-[10.5px] font-semibold tracking-[0.22em] text-[#F26522] uppercase mb-5">
              <span className="w-5 h-px bg-[#F26522]" />
              Our Infrastructure
            </span>

            {/* Heading */}
            <h2 className="font-barlow font-black text-[38px] lg:text-[50px] leading-[1.06] tracking-tight text-[#1B2B4B] mb-6">
              World-Class <br className="hidden sm:block" />
              Manufacturing
            </h2>

            {/* Body copy */}
            <p className="font-inter text-[15px] leading-[1.8] text-gray-400/90 max-w-[480px] mb-10">
              Our state-of-the-art production facilities combine rigorous
              compliance with cutting-edge technology, ensuring every product
              that leaves our plant upholds the highest standards of safety,
              purity, and efficacy.
            </p>

            {/* Bullet list */}
            <ul className="flex flex-col gap-5">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex items-start gap-4 group">
                    {/* Icon pill */}
                    <span className="flex-shrink-0 w-[42px] h-[42px] rounded-[12px] bg-[#F26522]/8 flex items-center justify-center mt-0.5 group-hover:bg-[#F26522]/15 transition-colors duration-200">
                      <Icon size={19} className="text-[#F26522] stroke-[1.7]" aria-hidden="true" />
                    </span>
                    <span>
                      <p className="font-inter text-[14px] font-semibold text-[#1B2B4B] leading-snug mb-0.5">
                        {item.title}
                      </p>
                      <p className="font-inter text-[13px] text-gray-400/85 leading-relaxed">
                        {item.detail}
                      </p>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── RIGHT: Visual Panel ── */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[540px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(27,43,75,0.12)]">
            {/* Base gradient — simulates a clean lab/facility atmosphere */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #1B2B4B 0%, #243659 40%, #1a3a5c 70%, #0f2240 100%)",
              }}
            />

            {/* Ambient light blobs */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 65% 55% at 75% 25%, rgba(242,101,34,0.18) 0%, transparent 65%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 50% 40% at 20% 80%, rgba(255,255,255,0.06) 0%, transparent 60%)",
              }}
            />

            {/* Grid overlay — echoes the hero background texture */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(to right, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent calc(100%/8)),
                  repeating-linear-gradient(to bottom, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent calc(100%/6))
                `,
              }}
            />

            {/* Floating stat cards */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 gap-3">
              {/* Card row */}
              <div className="flex gap-3">
                <StatChip value="ISO 9001" label="Certified" />
                <StatChip value="WHO-GMP" label="Compliant" />
              </div>
              <div className="flex gap-3">
                <StatChip value="24 / 7" label="Production" wide />
                <StatChip value="Zero" label="Compromises" />
              </div>
            </div>

            {/* Top-left badge */}
            <div className="absolute top-7 left-7 flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F26522] shadow-[0_0_8px_rgba(242,101,34,0.8)]" />
              <span className="font-inter text-[11px] font-semibold text-white/90 tracking-[0.14em] uppercase">
                GMP Operations — Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatChip({
  value,
  label,
  wide = false,
}: {
  value: string;
  label: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`${
        wide ? "flex-[2]" : "flex-1"
      } bg-white/8 backdrop-blur-sm border border-white/12 rounded-xl px-4 py-3`}
    >
      <p className="font-barlow font-black text-[22px] leading-none text-white tracking-tight">
        {value}
      </p>
      <p className="font-inter text-[11px] text-white/50 mt-1 tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}
