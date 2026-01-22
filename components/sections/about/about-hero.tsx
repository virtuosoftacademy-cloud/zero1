"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutHero() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero-bg.jpg"
          alt="Modern architecture"
          fill
          className="object-cover"
          priority
        />
        {/* Brown/Sepia Overlay */}
        <div className="absolute inset-0 bg-[#5a3a2a]/80" />
      </div>

      {/* Geometric Network Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="about-network"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="1.5" fill="#eb6535" opacity="0.6" />
            <circle cx="100" cy="50" r="1" fill="#eb6535" opacity="0.4" />
            <circle cx="180" cy="30" r="1.5" fill="#eb6535" opacity="0.5" />
            <circle cx="50" cy="150" r="1" fill="#eb6535" opacity="0.4" />
            <circle cx="150" cy="180" r="1.5" fill="#eb6535" opacity="0.6" />
            <line x1="10" y1="10" x2="100" y2="50" stroke="#eb6535" strokeWidth="0.5" opacity="0.3" />
            <line x1="100" y1="50" x2="180" y2="30" stroke="#eb6535" strokeWidth="0.5" opacity="0.3" />
            <line x1="10" y1="10" x2="50" y2="150" stroke="#eb6535" strokeWidth="0.5" opacity="0.3" />
            <line x1="50" y1="150" x2="150" y2="180" stroke="#eb6535" strokeWidth="0.5" opacity="0.3" />
            <line x1="100" y1="50" x2="150" y2="180" stroke="#eb6535" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#about-network)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[500px] md:min-h-[600px]">
        <div className="container mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-3xl">
            {/* Label */}
            <p className="text-text-on-dark/80 text-xs tracking-[0.2em] uppercase mb-6">
              OUR VISION
            </p>

            {/* Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium italic text-text-on-dark leading-snug mb-10">
              To Serve As The Definitive Leader In Technology Distribution And Digital Value Creation Across The MENA Region.
            </h1>

            {/* CTA Button */}
            <Link href="#team">
              <Button className="bg-surface-dark hover:bg-surface-dark/90 text-text-on-dark px-6 py-3 rounded-md font-medium">
                + Meet The Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
