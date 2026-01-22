import Image from "next/image";

/* ================= Founder's Story Section ================= */

export function AboutFounder() {
  return (
    <section className="bg-[#f5ebe4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
          {/* Left Content */}
          <div className="px-6 lg:px-12 py-16 lg:py-24 flex flex-col justify-center">
            <p className="text-foreground/70 text-sm mb-2">
              Founder's story
            </p>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Khalid Al-Mansoori
            </h2>
            
            <p className="text-foreground/80 text-sm md:text-base leading-relaxed max-w-lg">
              Khalid leads Zero One with a singular mission: to digitize Qatar's industrial backbone 
              without disrupting its legacy. With a dual background in Logistics Engineering and 
              Artificial Intelligence, he has spent the past 15 years bridging the gap between 
              physical supply chains and cloud infrastructure. He still insists on drinking traditional 
              Karak tea during every high-stakes code review.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="relative h-[300px] lg:h-auto">
            <Image
              src="/images/founder-portrait.jpg"
              alt="Khalid Al-Mansoori - Founder"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle blur/fade overlay on left edge */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f5ebe4] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
