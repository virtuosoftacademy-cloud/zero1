import Image from "next/image";

/* ================= Founder's Story Section ================= */

export function AboutFounder() {
  return (
    <section className="bg-[#f5ebe4] relative overflow-hidden">
     
        <div className="min-h-[400] lg:min-h-[500]">
          {/* Left Content */}
          <div className="pl-50 py-16 lg:py-24 flex flex-col justify-center">
            <div className="absolute inset-0 ">
              <Image
                src="/images/founder.png"
                alt="Khalid Al-Mansoori - Founder"
                fill
                className="object-center object-fill"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle blur/fade overlay on left edge */}
              <div className="absolute inset-0 left-0 bg-linear-to-r from-[#f5ebe4] via-[#f5ebe4] to-transparent" />
            </div>
            <div className="z-10 ">

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
          </div>

          {/* Right Image */}

        </div>

 
    </section>
  );
}
