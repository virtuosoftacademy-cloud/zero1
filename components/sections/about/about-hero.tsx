"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";

const scrollToTeam = () => {
  window.scrollTo({ top: 2400, behavior: "smooth" });
};

export function AboutHero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden -mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero.png"
          alt="Modern architecture"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for background color effect */}
        <div className="absolute inset-0 bg-[#3a2419] opacity-65 pointer-events-none" />

      </div>

      {/* Content */}
      <div className="relative z-10 flex text-left items-center min-h-[500px] md:min-h-[600px]">
        {/* Full width with generous horizontal padding */}
        <div className="w-full px-10 lg:px-28 py-20 mt-10">
          {/* Text container */}
          <div className="text-text-on-dark/90 space-y-6 leading-relaxed max-w-full">
            {/* Label - Match paragraph font size and weight */}
            <h2 className="text-base leading-relaxed TEXT-WHITE uppercase pb-2">
              About us
            </h2>

            {/* Paragraphs */}
            <p className="text-base leading-relaxed text-white max-w-full">
              Zero One Telecommunications & Electronics is an innovative information technology solutions & services provider and a leading Distributor based in Doha, Qatar with the ability to offer a complete range of professional services & support across 12 industries and 11 lines of businesses delivering complete solutions, not just applications. It was founded by Al-Wataniya International Holdings as part of the group of companies, who have over 50 years of presence in the Qatar through various business interests including FMCG, Retail, Logistics and Real Estate etc. We have the capability to integrate software and hardware to provide our clients with truly custom designed solutions for their business needs. ZeroOne helps customers establish best practices in business development and process management.
            </p>
            <p className="text-base leading-relaxed text-white max-w-full">
              ZeroOne’s service offerings include ERP implementation & Consulting, Distribution, IT Infrastructure Services, Software localization & IT Outsourcing. The industries ZeroOne serves include Automotive, Cement, Consumer Products, Engineering, Construction & Operations, Industrial Machinery & Components, Oil & Gas, Public Sector, Retail, Telecommunications, Transportation & Logistics and Wholesale Distribution.
            </p>

            {/* CTA Button */}
            <Button
              className="bg-black hover:bg-gray-800 text-white py-5 font-bold"
              size={"lg"}
              onClick={scrollToTeam}
            >
              <Dot />
              Meet The Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
