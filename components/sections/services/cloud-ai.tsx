import Image from "next/image";

export function CloudAISection() {
  return (
    <section className="bg-surface-dark-secondary text-background py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="max-w-3xl">
            {/* Section Header */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Intelligent Cloud & AI
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Harnessing the power of Cloud AI and Data.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* Cloud Engineering */}
              <div>
                <h3 className="font-semibold text-base mb-3">
                  Cloud Engineering
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Design, deploy, and manage scalable cloud infrastructure tailored to your operational needs, with a focus on security, cost optimization, and performance.
                </p>
              </div>

              {/* Artificial Intelligence */}
              <div>
                <h3 className="font-semibold text-base mb-3">
                  Artificial Intelligence
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  From predictive analytics to intelligent automation, we build AI solutions that transform raw data into strategic business outcomes.
                </p>
              </div>
            </div>

            {/* Data Services */}
            <div>
              <h3 className="font-semibold text-base mb-3">
                Data Services
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                End-to-end data management including warehousing, ETL pipelines, and real-time analytics dashboards built for enterprise-grade reliability.
              </p>
            </div>
          </div>

          {/* Right Side - 3D Image */}
          <div className="hidden lg:flex items-center justify-end">
            <div className="relative w-[300] h-[350] xl:w-[350] xl:h-[400]">
              <Image
                src="/images/3d-chrome-cubes-light.png"
                alt="3D Chrome Cubes"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
