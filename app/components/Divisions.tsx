import {
  Stethoscope,
  Baby,
  Leaf,
  Eye,
  Brain,
  HeartPulse,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Division {
  icon: LucideIcon;
  name: string;
  description: string;
}

const divisions: Division[] = [
  {
    icon: Stethoscope,
    name: "Dermatology",
    description:
      "Advanced skincare formulations addressing a broad spectrum of dermal conditions.",
  },
  {
    icon: Baby,
    name: "Pediatrics",
    description:
      "Gentle, precision-dosed therapeutics designed for the unique needs of children.",
  },
  {
    icon: Leaf,
    name: "Nutraceuticals",
    description:
      "Science-backed nutritional supplements to support everyday wellness and vitality.",
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    description:
      "Ophthalmic solutions engineered for superior eye health and visual comfort.",
  },
  {
    icon: Brain,
    name: "Neurology",
    description:
      "Targeted neuro formulations supporting cognitive function and nervous system health.",
  },
  {
    icon: HeartPulse,
    name: "Cardiology",
    description:
      "Cardio-protective products developed to maintain a healthy heart and circulation.",
  },
];

export default function Divisions() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Section label */}
          <span className="inline-flex items-center gap-2 font-inter text-[10.5px] font-semibold tracking-[0.22em] text-[#F26522] uppercase mb-4">
            <span className="w-5 h-px bg-[#F26522]" />
            What We Offer
            <span className="w-5 h-px bg-[#F26522]" />
          </span>
          <h2 className="font-barlow font-black text-[40px] lg:text-[52px] leading-[1.05] tracking-tight text-[#1B2B4B] mb-4">
            Our Divisions
          </h2>
          <p className="font-inter text-[15px] text-gray-400/90 max-w-[460px] leading-relaxed">
            Specialized therapeutic verticals delivering targeted pharmaceutical
            solutions across every stage of life.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((division) => (
            <DivisionCard key={division.name} division={division} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DivisionCard({ division }: { division: Division }) {
  const Icon = division.icon;

  return (
    <div className="group relative bg-white rounded-xl border border-gray-100 p-8 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden">
      {/* Subtle hover accent line */}
      <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#F26522] to-[#F26522]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Icon container */}
      <div className="w-[52px] h-[52px] rounded-[14px] bg-[#F26522]/8 flex items-center justify-center mb-6 group-hover:bg-[#F26522]/14 transition-colors duration-300">
        <Icon
          size={24}
          className="text-[#F26522] stroke-[1.6]"
          aria-hidden="true"
        />
      </div>

      {/* Text */}
      <h3 className="font-barlow font-bold text-[19px] text-[#1B2B4B] mb-2.5 tracking-tight">
        {division.name}
      </h3>
      <p className="font-inter text-[13.5px] leading-[1.7] text-gray-400/90">
        {division.description}
      </p>
    </div>
  );
}
