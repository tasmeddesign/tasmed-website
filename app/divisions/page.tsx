import Navbar from "@/app/components/Navbar";
import DivisionsSection from "@/app/components/Divisions";

export const metadata = {
  title: "Divisions | Tasmed",
  description:
    "Explore Tasmed's specialized therapeutic divisions delivering quality pharmaceutical solutions.",
};

export default function DivisionsPage() {
  return (
    <main>
      <Navbar />

      {/* Page hero */}
      <section className="bg-white pt-20 pb-8 px-6 text-center">
        <p className="font-inter text-[10.5px] font-semibold tracking-[0.28em] text-brand uppercase mb-5">
          What We Offer
        </p>
        <h1
          className="font-barlow font-black text-navy leading-tight"
          style={{ fontSize: "clamp(32px, 4.5vw, 64px)" }}
        >
          Our Divisions
        </h1>
        <p className="font-inter text-[15.5px] leading-[1.85] text-gray-400 max-w-[520px] mx-auto mt-6">
          Eight specialized therapeutic verticals — each backed by rigorous
          research and GMP-certified manufacturing.
        </p>
      </section>

      {/* Grid of all divisions (with links to individual pages) */}
      <DivisionsSection />
    </main>
  );
}
