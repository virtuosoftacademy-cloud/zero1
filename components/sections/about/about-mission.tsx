/* ================= Our Mission Section ================= */

export function AboutMission() {
  return (
    <section className="bg-[#f5ebe4] py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle diagonal texture overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.02) 2px,
            rgba(0,0,0,0.02) 4px
          )`
        }}
      />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Heading with underline */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
          <span className="underline decoration-2 underline-offset-4">Our Mission</span>
        </h2>
        
        {/* Description */}
        <p className="text-foreground/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          To provide world-class technology ecosystems that drive operational efficiency and 
          maximize ROI for our clients and stakeholders.
        </p>
      </div>
    </section>
  );
}
