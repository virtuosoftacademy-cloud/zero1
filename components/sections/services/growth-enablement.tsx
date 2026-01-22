import Image from "next/image";

export function GrowthEnablementSection() {
  return (
    <section className="bg-surface-brand py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12">
          {/* Left Content */}
          <div>
            {/* Section Header */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-text-on-brand mb-2">
                Growth & Enablement
              </h2>
              <p className="text-text-on-brand/90 text-sm md:text-base">
                Tools to scale your brand and workforce.
              </p>
            </div>

            {/* Services Grid - 2 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-10">
              {/* Digital Marketing */}
              <div>
                <h3 className="text-text-on-brand font-semibold text-base mb-3">
                  Digital Marketing
                </h3>
                <p className="text-text-on-brand/85 text-sm leading-relaxed">
                  A 360-degree approach covering Content Creation, Ads Management, and Social Media strategies to accelerate brand growth.
                </p>
              </div>

              {/* Business Enablement */}
              <div>
                <h3 className="text-text-on-brand font-semibold text-base mb-3">
                  Business Enablement
                </h3>
                <p className="text-text-on-brand/85 text-sm leading-relaxed">
                  Streamlining Accounts, Finance, and HR processes.
                </p>
              </div>
            </div>

            {/* Resource Augmentation */}
            <div>
              <h3 className="text-text-on-brand font-semibold text-base mb-3">
                Resource Augmentation
              </h3>
              <p className="text-text-on-brand/85 text-sm leading-relaxed max-w-md">
                Providing on-site, off-shore, or hybrid talent to fill skill gaps without increasing overhead.
              </p>
            </div>
          </div>

          {/* Right - 3D Abstract Image */}
          <div className="hidden lg:block relative w-[320px] h-[380px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imageservice5-3xjeG1N7BhXWUdjoDvgQxjGgvczYKu.png"
              alt="3D Orange/Copper Cubes"
              fill
              className="object-contain object-right-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
