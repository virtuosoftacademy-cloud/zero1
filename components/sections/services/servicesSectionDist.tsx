
'use client'

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Service {
  label: string
  description?: string
  icon?:string
}

interface Category {
  id: string
  title: string
  subtitle: string          // short tagline above title
  bgColor: string           // e.g. "bg-[#0E3782]" or "bg-gradient-to-br from-blue-950 to-indigo-950"
  textColor: string         // e.g. "text-white"
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
    // accentImage,
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
            className=
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
          >
            {services.map((service, index) => (
              <div
                key={`${service.label}-${index}`}
                className="flex items-center flex-col"
              >
                <div>
                <Image src={service.icon??"Image"} alt="" fill loading={"lazy"}/>
                </div>
                <div className="space-y-4 text-white">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {service.label}
                  </h3>

                  {service.description && (
                    <p className="text-sm md:text-base leading-relaxed opacity-85" dangerouslySetInnerHTML={{ __html: service.description }}/>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div >
  )
}