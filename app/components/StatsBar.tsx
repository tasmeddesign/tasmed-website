const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "500+", label: "Products" },
  { value: "10+", label: "Divisions" },
  { value: "Pan India", label: "Presence" },
];

export default function StatsBar() {
  return (
    <section className="w-full bg-[#F9FAFB] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2 relative"
            >
              {/* Divider between items on desktop */}
              {i > 0 && (
                <span className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-10 bg-gray-200" />
              )}
              <span className="font-barlow font-black text-[42px] leading-none text-[#1B2B4B] tracking-tight">
                {stat.value}
              </span>
              <span className="font-inter text-[13px] font-medium text-gray-400 tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
