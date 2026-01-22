"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Digital & Software Engineering",
    description: "Building the digital backbone of modern enterprises.",
    image: "/images/service-digital.jpg",
  },
  {
    title: "Intelligent Cloud & AI",
    description: "Future-proofing business through automation and data.",
    image: "/images/service-cloud.jpg",
  },
  {
    title: "Distribution & Supply Chain",
    description: "Moving the hardware that powers the software.",
    image: "/images/service-distribution.jpg",
  },
  {
    title: "Enterprise Solutions",
    description: "The operational engine of the business.",
    image: "/images/service-enterprise.jpg",
  },
  {
    title: "Growth & Enablement",
    description: "Tools to scale your brand and workforce.",
    image: "/images/service-growth.jpg",
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side - Main image and content */}
          <div className="lg:w-[55%]">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/services-main.jpg"
                alt="Digital technology visualization"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="mt-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Explore the Service Spectrum
              </h2>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-lg mb-6">
                We are Qatar's rare hybrid: a master distributor with the agility of a modern
                software house. From hardware logistics to Cloud ERP and AI, we help
                government and enterprise clients build resilient, future-ready operations.
              </p>
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 rounded-md font-medium">
                The Zero One Vision
              </Button>
            </div>
          </div>

          {/* Right side - Services list */}
          <div className="lg:w-[45%] flex flex-col gap-5">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="relative w-[88px] h-[88px] flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-primary font-semibold text-base lg:text-lg">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-snug">
                    {service.description}
                  </p>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary-dark text-primary-foreground text-xs px-4 py-1 h-7 w-fit rounded mt-1"
                  >
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
