"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

/* ─────────────────────────────────────────────────────────
   Fade-in on scroll — wraps any section content
───────────────────────────────────────────────────────── */
function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Shared: small orange section label
───────────────────────────────────────────────────────── */
function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-inter text-[10.5px] font-semibold tracking-[0.28em] text-brand uppercase mb-5">
      {text}
    </p>
  );
}

/* ─────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroV2 />
      <CompanyPositioning />
      <KeyStats />
      <DivisionsSection />
      <ManufacturingTeaser />
      <OurPresence />
      <JourneyTimeline />
      <CareersPreview />
      <SiteFooter />
    </main>
  );
}

/* ─────────────────────────────────────────────────────────
   Section 1 — Hero
───────────────────────────────────────────────────────── */
function HeroV2() {
  return (
    <section className="relative w-full min-h-[calc(100vh-72px)] flex flex-col items-center justify-center bg-white overflow-hidden px-6 py-20 md:py-28">
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-[680px] mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 border border-gray-200 rounded-full px-5 py-[9px] mb-10 shadow-[0_1px_4px_rgba(0,0,0,0.05)]">
          <span className="w-[7px] h-[7px] rounded-full bg-brand flex-shrink-0" />
          <span className="font-inter text-[10.5px] font-semibold tracking-[0.22em] text-navy uppercase">
            Premium Care Since 1994
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-barlow font-black tracking-tight leading-[1.02] mb-8">
          <span
            className="block text-navy whitespace-nowrap"
            style={{ fontSize: "clamp(32px, 5.5vw, 92px)" }}
          >
            Committed Towards
          </span>
          <span
            className="block text-brand whitespace-nowrap"
            style={{ fontSize: "clamp(32px, 5.5vw, 92px)" }}
          >
            Healthier Life.
          </span>
        </h1>

        {/* Subheading */}
        <p className="font-inter text-[15px] leading-[1.8] text-[#999999] max-w-[460px] mb-12">
          Tasmed is a fast evolving pharmaceuticals company in India. We apply
          research, technology and science to innovate and develop high quality
          medicines to treat chronic ailments.
        </p>

        {/* CTA */}
        <button className="font-inter text-[11.5px] font-bold tracking-[0.25em] uppercase text-white bg-navy px-12 py-[15px] rounded-[8px] hover:bg-brand transition-colors duration-300 shadow-sm">
          Know More
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-inter text-[11px] tracking-[0.12em] text-[#999999] uppercase">
          Scroll to explore
        </span>
        <div className="w-px h-[52px] bg-gradient-to-b from-gray-300 to-transparent animate-scrollPulse origin-top" />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Section 2 — Company Positioning
───────────────────────────────────────────────────────── */
function CompanyPositioning() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <FadeIn className="max-w-[800px] mx-auto text-center">
        <SectionLabel text="Who We Are" />
        <h2
          className="font-barlow font-black text-navy leading-tight mb-8"
          style={{ fontSize: "clamp(28px, 3.8vw, 52px)" }}
        >
          Innovation &amp; Ethics at the Core
        </h2>
        <p className="font-inter text-[15.5px] leading-[1.85] text-gray-400 max-w-[640px] mx-auto">
          Tasmed is a fast evolving pharmaceuticals company in India. We apply
          research, technology and science to innovate and develop high quality
          medicines to treat chronic ailments in our 2 GMP certified &amp;
          Schedule-M complied manufacturing units. We are passionate about
          innovating better health with patients as our priority.
        </p>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Section 3 — Key Stats
───────────────────────────────────────────────────────── */
const STATS = [
  { value: "25+", label: "Years of Experience" },
  { value: "280+", label: "Products" },
  { value: "600+", label: "Employees" },
  { value: "980+", label: "Stockists" },
];

function KeyStats() {
  return (
    <section className="bg-[#F9FAFB] py-20 px-6">
      <FadeIn className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={[
                "flex flex-col items-center text-center py-12 px-6",
                i % 2 === 1 ? "border-l border-gray-200" : "",
                i >= 2 ? "border-t md:border-t-0 border-gray-200" : "",
                i > 0 && i % 2 === 0 ? "md:border-l md:border-gray-200" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span
                className="font-barlow font-black text-navy leading-none mb-2"
                style={{ fontSize: "clamp(36px, 4vw, 60px)" }}
              >
                {s.value}
              </span>
              <span className="font-inter text-[12.5px] tracking-wide text-gray-400 uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Section 4 — Divisions
───────────────────────────────────────────────────────── */
const DIVISIONS = [
  {
    name: "Neurology",
    description: "Treating ailments related to anxiety, depression and OCD",
  },
  {
    name: "Gastroenterology",
    description:
      "Sustained medicines for treatment of renal disorders, hyperacidity and oesophagitis reflux",
  },
  {
    name: "Cardiology",
    description:
      "Medicines to cure hypertension, manage heart rhythms, and blood pressure",
  },
  {
    name: "Anti Diabetic",
    description: "Medicines to stabilize and control blood glucose levels",
  },
  {
    name: "Orthopaedic",
    description: "A dedicated unit for bone care",
  },
  {
    name: "Gynaecology",
    description:
      "Medical care for women during pregnancy, childbirth and postpartum days",
  },
  {
    name: "Urology",
    description: "Formulations exceeding industry benchmarks",
  },
  {
    name: "Dermatology",
    description:
      "A mix of chemical and natural formulations for healthier skin",
  },
];

function DivisionsSection() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <SectionLabel text="Our Divisions" />
          <h2
            className="font-barlow font-black text-navy leading-tight"
            style={{ fontSize: "clamp(28px, 3.8vw, 52px)" }}
          >
            Trusted Across Therapeutic Areas
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {DIVISIONS.map((div, i) => (
            <FadeIn key={div.name} delay={i * 55} className="h-full">
              <div className="group relative border border-gray-200 rounded-xl p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg cursor-default h-full overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand rounded-t-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <h3 className="font-barlow font-bold text-navy text-[17px]">
                  {div.name}
                </h3>
                <p className="font-inter text-[13.5px] leading-[1.7] text-gray-400">
                  {div.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="flex justify-center">
          <button className="font-inter text-[11.5px] font-bold tracking-[0.25em] uppercase text-white bg-navy px-10 py-[15px] rounded-[8px] hover:bg-brand transition-colors duration-300">
            Explore All Divisions
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Section 5 — Manufacturing Teaser
───────────────────────────────────────────────────────── */
function ManufacturingTeaser() {
  return (
    <section className="bg-navy py-24 md:py-32 px-6">
      <FadeIn className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div>
          <SectionLabel text="Manufacturing" />
          <h2
            className="font-barlow font-black text-white leading-tight mb-6"
            style={{ fontSize: "clamp(26px, 3.5vw, 46px)" }}
          >
            2 GMP Certified Manufacturing Units
          </h2>
          <p className="font-inter text-[15.5px] leading-[1.85] text-white/55 mb-10 max-w-[460px]">
            WHO GMP Certified and Schedule-M compliant facilities built to
            deliver quality at scale.
          </p>
          <button className="font-inter text-[11.5px] font-bold tracking-[0.25em] uppercase text-white bg-brand px-10 py-[15px] rounded-[8px] hover:bg-white hover:text-navy transition-colors duration-300">
            Learn More
          </button>
        </div>
        <div className="w-full aspect-[4/3] rounded-2xl bg-white/8 border border-white/12 flex items-center justify-center">
          <span className="font-inter text-[11px] tracking-[0.18em] text-white/25 uppercase">
            Manufacturing Image
          </span>
        </div>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Section 6 — Our Presence
───────────────────────────────────────────────────────── */
const STATES = [
  "J&K", "Punjab", "Rajasthan", "Gujarat", "Haryana",
  "Chandigarh", "UP", "New Delhi", "Himachal Pradesh",
  "Madhya Pradesh", "Maharashtra", "Karnataka", "Telangana",
  "Andhra Pradesh", "Tamil Nadu", "Odisha", "Bihar",
  "Jharkhand", "West Bengal", "Assam",
];

function OurPresence() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <FadeIn className="max-w-5xl mx-auto text-center">
        <SectionLabel text="Our Presence" />
        <h2
          className="font-barlow font-black text-navy leading-tight mb-14"
          style={{ fontSize: "clamp(28px, 3.8vw, 52px)" }}
        >
          Serving 20+ States Across India
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-14">
          {STATES.map((state) => (
            <div
              key={state}
              className="border border-gray-200 rounded-lg py-3 px-4 font-inter text-[13px] text-navy/75 hover:border-brand hover:text-brand transition-colors duration-200 cursor-default"
            >
              {state}
            </div>
          ))}
        </div>
        <button className="font-inter text-[11.5px] font-bold tracking-[0.25em] uppercase text-navy border-2 border-navy px-10 py-[14px] rounded-[8px] hover:bg-navy hover:text-white transition-colors duration-300">
          View Full Presence
        </button>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Section 7 — Journey Timeline
───────────────────────────────────────────────────────── */
const MILESTONES = [
  { year: "1994", description: "Founding Year" },
  { year: "2004", description: "Launched operations in 7 states" },
  { year: "2006", description: "First manufacturing unit established" },
  { year: "2008", description: "Entered gastro segment" },
  { year: "2013", description: "Began PAN India operations" },
  { year: "2018", description: "Entered gynaecology segment" },
  { year: "2019", description: "Entered cardiology" },
  { year: "2021", description: "Second manufacturing unit got WHO GMP Certification" },
  { year: "2022", description: "Launched new office at Ahmedabad" },
];

function JourneyTimeline() {
  return (
    <section className="bg-[#F9FAFB] py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16">
          <SectionLabel text="Our Journey" />
          <h2
            className="font-barlow font-black text-navy leading-tight"
            style={{ fontSize: "clamp(28px, 3.8vw, 52px)" }}
          >
            30 Years of Growth
          </h2>
        </FadeIn>

        {/* Desktop: horizontal scrollable */}
        <FadeIn className="hidden md:block overflow-x-auto pb-4">
          <div className="flex min-w-max px-4">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="flex flex-col items-center w-52 flex-shrink-0">
                <p className="font-barlow font-black text-brand text-xl mb-3">{m.year}</p>
                <div className="flex items-center w-full mb-4">
                  <div className={`h-px flex-1 bg-gray-300 ${i === 0 ? "opacity-0" : ""}`} />
                  <div className="w-3 h-3 rounded-full bg-brand border-2 border-[#F9FAFB] shadow-sm flex-shrink-0" />
                  <div className={`h-px flex-1 bg-gray-300 ${i === MILESTONES.length - 1 ? "opacity-0" : ""}`} />
                </div>
                <p className="font-inter text-[12.5px] text-navy/65 text-center px-4 leading-[1.65]">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Mobile: vertical */}
        <FadeIn className="md:hidden">
          {MILESTONES.map((m, i) => (
            <div key={m.year} className="flex gap-5">
              <div className="flex flex-col items-center pt-1">
                <div className="w-3 h-3 rounded-full bg-brand border-2 border-[#F9FAFB] shadow-sm flex-shrink-0" />
                {i < MILESTONES.length - 1 && (
                  <div className="w-px bg-gray-300 flex-1 mt-2" style={{ minHeight: "40px" }} />
                )}
              </div>
              <div className="pb-8">
                <p className="font-barlow font-black text-brand text-[18px] leading-none mb-1.5">{m.year}</p>
                <p className="font-inter text-[14px] text-navy/70 leading-[1.65]">{m.description}</p>
              </div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Section 8 — Careers Preview
───────────────────────────────────────────────────────── */
function CareersPreview() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <FadeIn className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="w-full aspect-[4/3] rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center">
          <span className="font-inter text-[11px] tracking-[0.18em] text-gray-400 uppercase">
            Team Image
          </span>
        </div>
        <div>
          <SectionLabel text="Careers" />
          <h2
            className="font-barlow font-black text-navy leading-tight mb-6"
            style={{ fontSize: "clamp(26px, 3.5vw, 46px)" }}
          >
            Life at Tasmed
          </h2>
          <p className="font-inter text-[15.5px] leading-[1.85] text-gray-400 mb-10 max-w-[420px]">
            We are passionate about innovating better health. Join a team that
            values hard work, quality, and growth.
          </p>
          <Link
            href="/career"
            className="inline-block font-inter text-[11.5px] font-bold tracking-[0.25em] uppercase text-white bg-navy px-10 py-[15px] rounded-[8px] hover:bg-brand transition-colors duration-300"
          >
            Join Our Team
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────
   Section 9 — Footer
───────────────────────────────────────────────────────── */
const FOOTER_LINKS = [
  "About Us", "Division", "Manufacturing", "Our Presence", "Career", "Contact",
];

function SiteFooter() {
  return (
    <footer className="bg-navy py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p
          className="font-barlow font-black text-white text-center mb-16 leading-tight"
          style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}
        >
          Committed to a Healthier India
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <p className="font-inter text-[10.5px] font-semibold tracking-[0.25em] text-brand uppercase mb-4">
              Chandigarh
            </p>
            <p className="font-inter text-[14px] leading-[1.85] text-white/50">
              507, Block-B, Elante Office Tower,<br />
              Plot 178-178A, Industrial Area, Phase-1,<br />
              Chandigarh 160002
            </p>
          </div>
          <div>
            <p className="font-inter text-[10.5px] font-semibold tracking-[0.25em] text-brand uppercase mb-4">
              Ahmedabad
            </p>
            <p className="font-inter text-[14px] leading-[1.85] text-white/50">
              D-904, 905, 906, &ldquo;The First&rdquo;,<br />
              Nr. Keshavbaug Party Plot, Vastrapur,<br />
              Ahmedabad 380015
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 mb-10">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link}
              href="#"
              className="font-inter text-[13px] text-white/45 hover:text-white transition-colors duration-200"
            >
              {link}
            </Link>
          ))}
        </div>

        <div className="flex justify-center gap-3 mb-14">
          <SocialBtn label="Facebook"><FacebookIcon /></SocialBtn>
          <SocialBtn label="Twitter"><TwitterIcon /></SocialBtn>
          <SocialBtn label="LinkedIn"><LinkedInIcon /></SocialBtn>
          <SocialBtn label="Instagram"><InstagramIcon /></SocialBtn>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-inter text-[12.5px] text-white/30">
            Copyright &copy; 2024 Tasmed
          </p>
          <div className="flex gap-6">
            <Link href="#" className="font-inter text-[12.5px] text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="font-inter text-[12.5px] text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <button
      aria-label={label}
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/45 hover:border-brand hover:text-brand transition-colors duration-200"
    >
      {children}
    </button>
  );
}

function FacebookIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
