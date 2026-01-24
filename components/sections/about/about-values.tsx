"use client";
import Collaborative from "@/public/icons/collaborative.png"
import Proactive from "@/public/icons/proactive.png"
import Unwavering from "@/public/icons/unwavering.png"
import Image from "next/image";

/* Value Icons */

const values = [
  {
    icon: Unwavering,
    title: "Unwavering Integrity",
    description: "Trust is our currency. We uphold the highest ethical standards in every transaction, building deep, long-term partnerships rooted in transparency and customer-centric focus."
  },
  {
    icon: Proactive,
    title: "Proactive Innovation",
    description: "We don't wait for change; we engineer it. By fostering a culture of initiative, we continuously deploy next-generation solutions that keep our clients ahead of the market curve."
  },
  {
    icon: Collaborative,
    title: "Collaborative Excellence",
    description: "Success is a team sport. We believe in the power of shared knowledge and high-performance collaboration to deliver mission-critical results that no single individual could achieve alone."
  }
];

export function AboutValues() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12 lg:mb-16">
          Our Values
        </h2>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-secondary/50 rounded-lg p-6 lg:p-8"
            >
              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={value.icon}
                  alt={value.title}
                  width={38}
                  height={38}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
