"use client";

import type { FC } from "react";

/* ================= Client Logos Section with Infinite Marquee ================= */

/* Logo data for partner/client companies */
const clientLogos = [
  { name: "Lenovo", id: "lenovo" },
  { name: "Vodafone", id: "vodafone" },
  { name: "SAP", id: "sap" },
  { name: "WorkWave", id: "workwave" },
  { name: "Honeywell", id: "honeywell" },
  { name: "Roadnet Technologies", id: "roadnet" },
];

/* ================= Individual Logo Components ================= */
const LenovoLogo: FC = () => (
  <svg viewBox="0 0 120 30" className="h-6 w-auto sm:h-7 lg:h-8">
    <rect x="0" y="8" width="30" height="14" rx="2" fill="#E2231A" />
    <text x="5" y="19" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">
      Lenovo
    </text>
  </svg>
);

const VodafoneLogo: FC = () => (
  <div className="flex items-center gap-2">
    <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7">
      <circle cx="12" cy="12" r="12" fill="#E60000" />
      <path d="M12 6c-1.5 0-2.5 1-3 2.5-.5 1.5 0 3.5 1 5s2.5 3 2 4.5c2-1 3-2.5 3-4.5s-1-3.5-2-5c-.5-1-1-2.5-1-2.5z" fill="white" />
    </svg>
    <span className="text-base font-medium text-[#E60000] sm:text-lg">vodafone</span>
  </div>
);

const SAPLogo: FC = () => (
  <svg viewBox="0 0 80 40" className="h-8 w-auto sm:h-10">
    <rect width="80" height="40" fill="#008FD3" rx="4" />
    <text x="12" y="28" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">
      SAP
    </text>
  </svg>
);

const WorkWaveLogo: FC = () => (
  <div className="flex items-center gap-1">
    <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6">
      <path d="M2 12l4-4 4 4 4-4 4 4 4-4" stroke="#7AB800" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span className="text-sm font-semibold sm:text-base">
      <span className="text-[#7AB800]">W</span>
      <span className="text-gray-700">ORKWAVE</span>
    </span>
  </div>
);

const HoneywellLogo: FC = () => (
  <span className="text-lg font-bold tracking-tight text-[#E31937] sm:text-xl lg:text-2xl">
    Honeywell
  </span>
);

const RoadnetLogo: FC = () => (
  <div className="flex items-center gap-2 rounded border border-gray-300 px-3 py-1.5">
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-600">
      <circle cx="6" cy="12" r="3" fill="currentColor" />
      <circle cx="18" cy="12" r="3" fill="currentColor" />
      <circle cx="12" cy="6" r="3" fill="currentColor" />
      <circle cx="12" cy="18" r="3" fill="currentColor" />
      <line x1="6" y1="12" x2="12" y2="6" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="6" x2="18" y2="12" stroke="currentColor" strokeWidth="1" />
      <line x1="18" y1="12" x2="12" y2="18" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="18" x2="6" y2="12" stroke="currentColor" strokeWidth="1" />
    </svg>
    <div className="flex flex-col">
      <span className="text-xs font-semibold leading-tight text-gray-700">roadnet</span>
      <span className="text-[10px] leading-tight text-gray-500">technologies</span>
    </div>
  </div>
);

/* Logo component mapping */
const logoComponents: Record<string, FC> = {
  lenovo: LenovoLogo,
  vodafone: VodafoneLogo,
  sap: SAPLogo,
  workwave: WorkWaveLogo,
  honeywell: HoneywellLogo,
  roadnet: RoadnetLogo,
};

/* ================= Logo Item Component ================= */
function LogoItem({ id }: { id: string }) {
  const LogoComponent = logoComponents[id];
  if (!LogoComponent) return null;
  return (
    <div className="flex shrink-0 items-center justify-center px-8 md:px-12">
      <LogoComponent />
    </div>
  );
}

/* ================= Client Logos Section ================= */
export function ClientLogosSection() {
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="overflow-hidden bg-white py-12 lg:py-16">
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />
        
        <div className="flex animate-marquee items-center">
          {duplicatedLogos.map((logo, index) => (
            <LogoItem key={`${logo.id}-${index}`} id={logo.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
