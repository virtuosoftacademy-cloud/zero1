
import { ServiceSectionCard } from "./ServiceSectionCard3";
import { EnterpriseSolutions } from "@/app/_constant";

export function EnterpriseSolutionsSection() {
  return (
    <ServiceSectionCard
      sectionTitle="Enterprise Solutions"
      sectionSubtitle="The operational engine of the business covering ERP and Governance."
      services={EnterpriseSolutions}
      imageSrc="images/sservices.png"
      imageAlt="3D Orange/Copper Cubes"
      bgClassName="bg-surface-brand"
    />
  );
}
