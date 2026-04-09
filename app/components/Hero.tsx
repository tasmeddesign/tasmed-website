export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background Grid Texture */}
      <GridBackground />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto w-full pt-4 pb-28">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200/90 rounded-full px-5 py-[9px] mb-10 shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
          <span className="w-[7px] h-[7px] rounded-full bg-[#F26522] flex-shrink-0" />
          <span className="font-inter text-[10.5px] font-semibold tracking-[0.22em] text-[#1B2B4B] uppercase">
            Premium Care Since 1994
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-barlow font-black leading-[1.0] mb-8 tracking-tight">
          <span
            className="block text-[#1B2B4B]"
            style={{ fontSize: "clamp(48px, 6.8vw, 96px)" }}
          >
            Committed Towards
          </span>
          <span
            className="block text-[#F26522]"
            style={{ fontSize: "clamp(48px, 6.8vw, 96px)" }}
          >
            Healthier Life.
          </span>
        </h1>

        {/* Description */}
        <p className="font-inter text-[15.5px] leading-[1.75] text-gray-400/90 max-w-[430px] mb-12">
          Tasmed leverages advanced molecular diagnostics and world-class
          manufacturing to redefine patient care across Himachal Pradesh and
          beyond.
        </p>

        {/* CTA Button */}
        <button className="font-inter text-[11.5px] font-bold tracking-[0.25em] text-white bg-[#1B2B4B] px-12 py-[15px] rounded-[8px] hover:bg-[#F26522] transition-colors duration-300 uppercase shadow-sm">
          Know More
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="font-inter text-[11px] tracking-wide text-gray-400/70">
          Scroll to explore
        </span>
        <div className="w-px h-[52px] bg-gradient-to-b from-gray-300 to-transparent animate-scrollPulse origin-top" />
      </div>
    </section>
  );
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Vertical column lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            to right,
            transparent,
            transparent calc(100% / 12 - 1px),
            rgba(0, 0, 0, 0.032) calc(100% / 12 - 1px),
            rgba(0, 0, 0, 0.032) calc(100% / 12)
          )`,
        }}
      />
      {/* Horizontal row lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            to bottom,
            transparent,
            transparent calc(100% / 8 - 1px),
            rgba(0, 0, 0, 0.022) calc(100% / 8 - 1px),
            rgba(0, 0, 0, 0.022) calc(100% / 8)
          )`,
        }}
      />
      {/* Soft radial vignette to keep center clean */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(255,255,255,0.85) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
