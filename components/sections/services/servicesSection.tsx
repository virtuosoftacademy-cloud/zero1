
'use client'

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Service {
  label: string
  description?: string
}

interface Category {
  id: string
  title: string
  subtitle: string          // short tagline above title
  bgColor: string           // e.g. "bg-[#0E3782]" or "bg-gradient-to-br from-blue-950 to-indigo-950"
  textColor: string         // e.g. "text-white"
  bgImage?: string          // subtle background texture/image
  //   accentImage?: string      
  gridClasses?: string      // custom grid column/row span classes
  services: Service[]
}

interface ServicesSectionProps {
  category: Category
  className?: string
}

export default function ServicesSection({
  category,
  className,
}: ServicesSectionProps) {
  const {
    title,
    subtitle,
    bgColor,
    textColor,
    bgImage,
    // accentImage,
    gridClasses = "",
    services,
  } = category

  return (
    <div className={cn("relative", className)}>
      <section
        className={cn(
          "bg-cover bg-center",
          bgColor,
          textColor
        )}
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Background image (subtle overlay) */}
        {/* {bgImage && (
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        )} */}

        {/* Decorative accent image */}
        {/* {accentImage && (
          <img
            src={accentImage}
            alt="accentImage"
            className="absolute -top-16 -right-16 w-64 md:w-80 lg:w-[360] hidden lg:block object-contain opacity-70 pointer-events-none z-10"
            aria-hidden="true"
          />
        )} */}

        <div className="relative z-10 px-6 md:px-10 lg:px-24 py-20">
          {/* Header */}
          <div className="max-w-4xl pb-2 md:pb-8 space-y-3">
            <h2 className="text-2xl sm:text-5xl md:text-3xl lg:text-4xl font-extrabold leading-tight mt-2">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-white md:text-lg tracking-wide">
              {subtitle}
            </p>
          </div>

          {/* Services cards grid */}
          <div
            className={cn(
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
              gridClasses
            )}
          >
            {services.map((service, index) => (
              <Card
                key={`${service.label}-${index}`}
                className={cn(
                  "bg-transparent border-0",
                )}
              >
                <div className="relative z-10 space-y-4 text-white">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {service.label}
                  </h3>

                  {service.description && (
                    <p className="text-sm md:text-base leading-relaxed opacity-85">
                      {service.description}
                    </p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div >
  )
}