/* ================= Our Mission Section ================= */

import Image from "next/image";

export function AboutMission() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle diagonal texture overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-clarity.png"
          alt="Business professional"
          fill
          className="object-cover"
          priority={true}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Heading with underline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
          <span className="">Our Mission</span>
        </h2>

        {/* Description */}
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-bold">
          To provide world-class technology ecosystems that drive operational efficiency and
          maximize ROI for our clients and stakeholders.
        </p>
      </div>
    </section>
  );
}
