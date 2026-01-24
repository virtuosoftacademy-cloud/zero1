// components/sections/ServiceGridSection.tsx
import Image from "next/image";
import type { FC } from "react";

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceGridSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  services: ServiceItem[];
  imageSrc?: string;           // optional 3D/hero image on the right
  imageAlt?: string;
  bgClassName?: string;        // allow different background per section
}

/**
 * Reusable section component for showing a list of services/features
 * with optional right-side 3D/visual image (desktop only)
 */
export const ServiceSectionCard: FC<ServiceGridSectionProps> = ({
  sectionTitle,
  sectionSubtitle,
  services,
  imageSrc,
  imageAlt = "Abstract 3D visualization",
  bgClassName = "bg-surface-brand",
}) => {
  return (
    <section className={`${bgClassName} py-16 md:py-20 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12">
          {/* Left - Content */}
          <div>
            {/* Header */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-text-on-brand mb-2">
                {sectionTitle}
              </h2>
              <p className="text-text-on-brand/90 text-sm md:text-base">
                {sectionSubtitle}
              </p>
            </div>

            {/* Services / Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10">
              {services.map((service) => (
                <div key={service.title}>
                  <h3 className="text-text-on-brand font-semibold text-base mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-on-brand/85 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Optional 3D / Abstract Image (lg screens only) */}
          {imageSrc && (
            <div className="hidden lg:block relative w-[320px] h-[480] -mt-20 sm:-mr-12 xl:-mr-40">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain object-top"
                priority={false}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};