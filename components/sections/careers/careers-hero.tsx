import Image from "next/image";

export function CareersHero() {
  return (
    <section className="relative h-[280] md:h-[320] overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          {/* Add webm version if you have it for better compatibility/performance */}
          {/* <source src="/videos/hero-bg.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>

        {/* Optional: subtle overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-text-on-dark tracking-wide">
          <span className="">CAREERS AT</span>{" "}
          <span className="font-bold">ZERO ONE</span>
        </h1>
      </div>
    </section>
  );
}
