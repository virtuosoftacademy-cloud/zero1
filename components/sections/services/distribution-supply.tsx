import Image from "next/image";

export function DistributionSupplySection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden text-background bg-surface-dark-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="text-card">
            {/* Section Header */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-card">
                Distribution & Supply Chain
              </h2>
              <p className="text-sm md:text-base text-secondary">
                Moving the hardware that powers the software.
              </p>
            </div>

            {/* Services Grid - 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {/* Master Distribution */}
              <div>
                <h3 className="font-semibold text-base mb-3">
                  Master Distribution
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A "<span className="font-semibold">Distributor of Choice</span>" for global tech brands, utilizing a vast reseller network to penetrate Retail and SMB markets.
                </p>
              </div>

              {/* Promoter Management */}
              <div>
                <h3 className="font-semibold text-base mb-3">
                  Promoter Management
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Deployed teams at key retail outlets to drive merchandising and direct sales.
                </p>
              </div>

              {/* VAN Network */}
              <div>
                <h3 className="font-semibold text-base mb-3">
                  VAN Network
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A dedicated fleet ensuring immediate stock availability for independent retail chains across Qatar.
                </p>
              </div>

              {/* Infrastructure Support */}
              <div>
                <h3 className="font-semibold text-base mb-3">
                  Infrastructure Support
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ensure system longevity with multi-tier hardware maintenance packages ranging from basic to top-level support. We complement this with comprehensive outsourcing services, providing expert IT operation management and flexible staff augmentation to optimize your workforce efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Right - 3D Abstract Image */}
          <div className="hidden lg:block relative w-[300px] h-[380px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imageservice2-HsAFbJ855pufd9MHB2o0dcAUeAXMUH.png"
              alt="3D Chrome Abstract"
              fill
              className="object-contain object-right-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
