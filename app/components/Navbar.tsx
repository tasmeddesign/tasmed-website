import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { divisions } from "@/app/data/divisions";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Our Presence", href: "/presence" },
  { label: "Career", href: "/career" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/80">
      <nav className="max-w-[1440px] mx-auto px-8 xl:px-16 h-[72px] flex items-center justify-between gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 relative">
          <span className="font-barlow font-black text-[26px] leading-none tracking-tight text-brand">
            Tas
          </span>
          <span className="font-barlow font-black text-[26px] leading-none tracking-tight text-navy">
            &nbsp;med
          </span>
          <BirdIcon />
        </Link>

        {/* Centered Nav Links */}
        <ul className="hidden lg:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          {/* Divisions — dropdown */}
          <li className="relative group">
            <Link
              href="/divisions"
              className="flex items-center gap-1 font-inter text-[13.5px] font-medium text-navy/85 hover:text-brand transition-colors duration-200 whitespace-nowrap py-2"
            >
              Divisions
              <ChevronDown
                size={13}
                className="mt-px opacity-60 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-200"
              />
            </Link>

            {/*
              Invisible bridge fills the gap between the trigger and the panel
              so the hover state stays active while the cursor moves down.
            */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2
                            invisible opacity-0 translate-y-1
                            group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                            transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-white rounded-xl border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.10)] overflow-hidden py-2">
                {divisions.map((div) => (
                  <Link
                    key={div.slug}
                    href={`/divisions/${div.slug}`}
                    className="flex items-center gap-3 px-4 py-2.5 font-inter text-[13px] text-navy/75 hover:text-brand hover:bg-gray-50 transition-colors duration-150"
                  >
                    <div className="w-[28px] h-[28px] rounded-[8px] bg-brand/[0.07] flex items-center justify-center flex-shrink-0">
                      <div.icon size={14} className="text-brand stroke-[1.8]" aria-hidden="true" />
                    </div>
                    {div.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {/* Other links */}
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-inter text-[13.5px] font-medium text-navy/85 hover:text-brand transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icon Buttons */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <button
            aria-label="Search"
            className="w-[40px] h-[40px] rounded-full border border-gray-200 flex items-center justify-center text-navy/70 hover:border-brand hover:text-brand transition-all duration-200"
          >
            <SearchIcon />
          </button>
          <button
            aria-label="Contact"
            className="w-[40px] h-[40px] rounded-full border border-gray-200 flex items-center justify-center text-navy/70 hover:border-brand hover:text-brand transition-all duration-200"
          >
            <PhoneIcon />
          </button>
        </div>
      </nav>
    </header>
  );
}

function BirdIcon() {
  return (
    <svg
      className="absolute -top-[10px] -right-[18px]"
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 13 C5 9.5 8.5 6.5 12 5 C14 4.2 16.5 4.8 18 6.5"
        stroke="#F26522"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M11.5 5 C13.5 3.2 16 3.8 18 5.5 C17.5 7.5 15.5 8.5 13 8"
        stroke="#F26522"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.93 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
