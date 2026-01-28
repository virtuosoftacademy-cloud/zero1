
import { ServiceSectionCard } from "./ServiceSectionCard2";
import { distribution } from "@/app/_constant";

export function DistributionSupplySection() {
  return (
    <ServiceSectionCard
      sectionTitle="Distribution & Supply Chain"
      sectionSubtitle="Moving the hardware that powers the software."
      services={distribution}
      imageSrc="images/wblackservices.png"
      imageAlt="3D Orange/Copper Cubes"
      bgClassName="text-background bg-surface-dark-secondary"
    />
  );
}
