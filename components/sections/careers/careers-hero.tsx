import Image from "next/image";

export function CareersHero() {
  return (
    <section className="relative h-[280px] md:h-[320px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/careers-hero-bg.jpg"
        alt="Careers at Zero One"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-surface-dark/40" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-text-on-dark tracking-wide">
          <span className="italic">CAREERS AT</span>{" "}
          <span className="font-bold">ZERO ONE</span>
        </h1>
      </div>
    </section>
  );
}
