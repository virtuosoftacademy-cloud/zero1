"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Artificial Intelligence & Data Analytics",
    description: "Building the digital backbone of modern enterprises.",
    image: "/images/service-ai.png",
  },
  {
    title: "Intelligent Cloud & AI",
    description: "Advancing intelligent automation through enterprise data.",
    image: "/images/service-cs.png",
  },
  {
    title: "Cybersecurity & OT Security",
    description: "Safeguarding industrial environments through comprehensive OT security.",
    image: "/images/service-dist.png",
  },
  // {
  //   title: "Enterprise Solutions",
  //   description: "The operational engine of the business.",
  //   image: "/images/service-enterprise.jpg",
  // },
  // {
  //   title: "Growth & Enablement",
  //   description: "Tools to scale your brand and workforce.",
  //   image: "/images/service-growth.jpg",
  // },
];

export function ServicesPreview() {
  return (
    <section className="bg-background py-16 lg:py-24 px-16 lg:px-22">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side - Main image and content */}
          <div className="lg:w-[65%]">
            <div className="relative aspect-26/12 w-full overflow-hidden rounded-lg">
              <Image
                src="/images/services-main.png"
                alt="Digital technology visualization"
                fill
              />
            </div>
            
            <div className="mt-7">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Explore the Service Spectrum
              </h2>
              <p className="text-sm lg:text-sm leading-relaxed max-w-xl mb-3">
                We are Qatar's rare hybrid: a master distributor with the agility of a modern
                software house. From hardware logistics to Cloud ERP and AI, we help
                government and enterprise clients build resilient, future-ready operations.
              </p>
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 font-medium">
                The Zero One Vision
              </Button>
            </div>
          </div>

          {/* Right side - Services list */}
          <div className="lg:w-[45%] flex flex-col gap-5">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-5">
                <div className="relative w-[140] h-[140] shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-primary font-bold text-base lg:text-lg">
                    {service.title}
                  </h3>
                  <p className="sm:text-sm text-xs leading-snug">
                    {service.description}
                  </p>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary-dark text-primary-foreground text-xs px-4 py-1 h-7 w-fit mt-1"
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
