"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
const scrollToTeam = () => {
    window.scrollTo({ top: 2400, behavior: "smooth" });
  };
export function AboutHero() {
  return (
    <section className="relative min-h-[500] md:min-h-[600] overflow-hidden -mt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero.png"
          alt="Modern architecture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex text-center sm:text-left items-center min-h-[500] md:min-h-[600]">
        <div className="max-w-7xl px-6 lg:px-22 xl:px-52 py-20 mt-10">
          <div className="max-w-3xl text-text-on-dark/80">
            {/* Label */}
            <h2 className=" text-lg tracking-[0.1] font-semibold uppercase pb-2">
              About us
            </h2>

            {/* Heading */}
            {/* <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-dark leading-snug mb-10">
              To Serve As The Definitive Leader In Technology Distribution And Digital Value Creation Across The MENA Region.
            </h1> */}
            <div className="text-xs md:text-sm pb-4 leading-5 space-y-3">
            <p>Zero One Telecommunications & Electronics is an innovative information technology solutions & services provider and a leading Distributor based in Doha, Qatar with the ability to offer a complete range of professional services & support across 12 industries and 11 lines of businesses delivering complete solutions, not just applications. It was founded by Al-Wataniya International Holdings as part of the group of companies, who have over 50 years of presence in the Qatar through various business interests including FMCG, Retail, Logistics and Real Estate etc. We have the capability to integrate software and hardware to provide our clients with truly custom designed solutions for their business needs. ZeroOne helps customers establish best practices in business development and process management.
            </p>
            <p>ZeroOne’s service offerings include ERP implementation & Consulting, Distribution, 
              IT Infrastructure Services, Software localization & IT Outsourcing. The industries ZeroOne serves include Automotive, Cement, Consumer Products, Engineering, Construction & Operations, Industrial Machinery & Components, Oil & Gas,
               Public Sector, Retail, Telecommunications, Transportation & Logistics and Wholesale Distribution.</p>
            </div>
            {/* CTA Button */}
            {/* <Link href="#team">
            </Link> */}
              <Button className="bg-surface-dark hover:bg-surface-dark/90 text-text-on-dark py-5 font-bold"
              size={'lg'}
          // aria-label="Scroll to bottom"
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
