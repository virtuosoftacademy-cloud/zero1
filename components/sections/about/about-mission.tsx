/* ================= Our Mission Section ================= */

import Collaborative from "@/public/icons/collaborative.png"
import Proactive from "@/public/icons/proactive.png"
import Unwavering from "@/public/icons/unwavering.png"
import Image from "next/image";

const values = [
  {
    icon: Unwavering,
    title: "Unwavering Integrity",
    description:
      "Trust is our currency. We uphold the highest ethical standards in every transaction, building deep, long-term partnerships rooted in transparency and customer-centric focus."
  },
  {
    icon: Proactive,
    title: "Proactive Innovation",
    description:
      "We don't wait for change; we engineer it. By fostering a culture of initiative, we continuously deploy next-generation solutions that keep our clients ahead of the market curve."
  },
  {
    icon: Collaborative,
    title: "Collaborative Excellence",
    description:
      "Success is a team sport. We believe in the power of shared knowledge and high-performance collaboration to deliver mission-critical results that no single individual could achieve alone."
  }
];

export function AboutMission() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-clarity.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="space-y-8 md:space-y-12">
        {/* Vision */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-6">
            Our <span className="font-bold">Vision</span>
          </h2>

          <p className="text-foreground/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
            To serve as the <span className="font-bold">definitive leader </span>
            in technology, distribution and valuable quality services across the
            <span className="font-bold"> MENA region</span>.
          </p>
        </div>

        {/* Mission */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-6">
            Our <span className="font-bold">Mission</span>
          </h2>

          <p className="text-foreground/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-medium">
            To provide{" "}
            <span className="font-bold">world-class technology ecosystems</span>{" "}
            that drive operational efficiency and maximize ROI for our clients
            and stakeholders.
          </p>
        </div>

        {/* Values */}
        <div className="w-full px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground text-center mb-8 lg:mb-10">
            Our <span className="font-bold">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 w-full">
            {values.map((value, index) => (
              <div
                key={index}
                className="
                  bg-secondary
                  rounded-2xl   /* ✅ 16px radius */
                  p-6 lg:p-8
                  shadow-2xl
                "
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
      </div>
    </section>
  );
}
