"use client";

import Image from "next/image";
import Lenovo from "@/public/logo/Lenovo.png";
import Vodafone from "@/public/logo/Vodafone.png";
import Sap from "@/public/logo/Sap.png";
import Workwave from "@/public/logo/workwave.png";
import Honeywell from "@/public/logo/Honeywell.png";
import RoadnetTech from "@/public/logo/roadnettech.png";
import Fujitsu from "@/public/logo/Fujitsu.png";

const clientLogos = [
  { id: "lenovo", name: "Lenovo", Logo: Lenovo },
  { id: "vodafone", name: "Vodafone", Logo: Vodafone },
  { id: "sap", name: "SAP", Logo: Sap },
  { id: "workwave", name: "WorkWave", Logo: Workwave },
  { id: "honeywell", name: "Honeywell", Logo: Honeywell },
  { id: "roadnet", name: "Roadnet Technologies", Logo: RoadnetTech },
  { id: "fujitsu", name: "Fujitsu", Logo: Fujitsu },
] satisfies Array<{ id: string; name: string; Logo: any }>;

function LogoItem({ id }: { id: string }) {
  const logo = clientLogos.find((l) => l.id === id);
  if (!logo) return null;

  return (
    <div className="flex shrink-0 items-center justify-center px-8 md:px-12">
      <Image
        src={logo.Logo}
        alt={`${logo.name} logo`}
        width={160}
        height={70}
        className="h-10 w-auto max-w-[160] object-contain transition-all hover:opacity-100 hover:grayscale-0 md:h-14"
      />
    </div>
  );
}

export function ClientLogosSection() {
  const tripled = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="overflow-hidden bg-white py-12 lg:py-16">
      <div className="mb-12 text-center lg:mb-16 flex flex-col items-center">
        <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
          Our Strategic Partnership Alliances
        </h2>
        <p className="text-xs sm:text-sm max-w-5xl">
          Strategic alliances and partnerships are important drivers for our sustainable growth. We have always been committed to creating a harmonious
          environment for win-win results, which has, in turn, helped build IT solutions to meet customers' requirements quickly and reliably.
          We maintain close relationships with renowned global companies.
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-linear-to-r from-white to-transparent lg:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-linear-to-l from-white to-transparent lg:w-24" />

        <div
          className="flex animate-marquee items-center"
          aria-hidden="true"
        >
          {tripled.map((logo, i) => (
            <LogoItem key={`${logo.id}-${i}`} id={logo.id} />
          ))}
        </div>
      </div>
    </section>
  );
}