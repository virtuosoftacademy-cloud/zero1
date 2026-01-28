import Image from "next/image";
import { ServiceSectionCard } from "./ServiceSectionCard2";
import { growthAndEnablement } from "@/app/_constant";

export function GrowthEnablementSection() {
  return (
    <ServiceSectionCard
      sectionTitle="Enterprise Solutions"
      sectionSubtitle="The operational engine of the business covering ERP and Governance."
      services={growthAndEnablement}
      imageSrc="images/cubesservices.png"
      imageAlt="3D Orange/Copper Cubes"
      bgClassName="bg-surface-brand"
    />
  );
}
