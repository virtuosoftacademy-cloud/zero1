"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Dot } from "lucide-react";

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
        <div className="max-w-7xl px-6 lg:px-22 xl:px-52 py-20">
          <div className="max-w-3xl">
            {/* Label */}
            <p className="text-text-on-dark/80 text-xs tracking-[0.2em] font-semibold uppercase mb-6">
              OUR VISION
            </p>

            {/* Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-on-dark leading-snug mb-10">
              To Serve As The Definitive Leader In Technology Distribution And Digital Value Creation Across The MENA Region.
            </h1>

            {/* CTA Button */}
            <Link href="#team">
              <Button className="bg-surface-dark hover:bg-surface-dark/90 text-text-on-dark px-6 py-3 font-bold">
                <Dot/>
                 Meet The Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
