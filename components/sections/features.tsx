import type { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRightIcon, GlobeIcon, CpuIcon } from "@/components/icons";

/* ================= Features Section ================= */

/* Feature card data */
const features = [
  {
    id: "scale",
    icon: "arrow-up-right",
    title: "Scale Without Limits",
    description:
      "Powered by an extensive reseller network, we empower brands to penetrate the MENA region rapidly. We don't just distribute products; we multiply your market reach and maximize business value.",
  },
  {
    id: "integrate",
    icon: "globe",
    title: "Integrate Every Layer",
    description:
      "Stop managing fragmented vendors. From physical hardware logistics to cloud architecture, we deliver the complete operational ecosystem, providing solutions, not just applications.",
  },
  {
    id: "automate",
    icon: "cpu",
    title: "Automate With Confidence",
    description:
      "Home to the region's highest-performing engineering teams. We specialize in complex ERP implementations and custom AI agents that drive efficiency where it matters most.",
  },
];

/* ================= Feature Icon Components ================= */

/* Icon mapping */
const iconComponents: Record<string, FC> = {
  "arrow-up-right": ArrowUpRightIcon,
  globe: GlobeIcon,
  cpu: CpuIcon,
};

/* ================= Feature Card Component ================= */
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const IconComponent = iconComponents[icon];

  return (
    <Card className="border border-border bg-card shadow-none">
      <CardContent className="p-6 lg:p-8">
        {/* Icon */}
        <div className="mb-4 text-foreground">
          <IconComponent />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-lg font-semibold text-foreground lg:text-xl">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

export function FeaturesSection() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="mb-2 text-2xl font-medium text-foreground sm:text-3xl lg:text-4xl">
            Built for clarity.
          </h2>
          <p className="text-2xl font-bold italic text-primary sm:text-3xl lg:text-4xl">
            Designed for action.
          </p>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Everything you need to integrate, automate, and scale.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
