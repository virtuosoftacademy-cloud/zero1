
'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"

interface Service {
  label: string
  description?: string
  icon: string
}

interface Category {
  id: string
  title: string
  subtitle: string
  bgColor: string
  textColor: string
  bgImage?: string
  services: Service[]
}

interface ServicesSectionProps {
  category: Category
  className?: string
}

export default function ServicesSectionDist({
  category,
  className,
}: ServicesSectionProps) {
  const {
    title,
    subtitle,
    bgColor,
    textColor,
    bgImage,
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

        <div className="relative z-10 px-6 md:px-10 lg:px-24 py-20">
          {/* Header */}
          <div className="max-w-5xl pb-2 md:pb-8 space-y-3">
            <h2 className="text-2xl lg:text-4xl font-extrabold leading-tight mt-2">
              {title}
            </h2>
            <div className="text-xs sm:text-sm text-white md:text-lg tracking-wide space-y-4" dangerouslySetInnerHTML={{__html:subtitle}}/>
          </div>

          <h4 className="text-2xl font-semibold">Channel Partner Offering</h4>
          {/* Services cards grid */}
          <div
            className=
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-3 md:mt-6"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="py-4 flex gap-x-5 lg:w-xl"
              >
                {/* Icon */}
                <div className="mb-6 size-20">
                  <Image
                    src={service.icon}
                    alt={service.label}
                    width={58}
                    height={58}
                  />
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg lg:text-xl font-bold mb-3">
                    {service.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-lg leading-relaxed" dangerouslySetInnerHTML={{__html:service.description}}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div >
  )
}