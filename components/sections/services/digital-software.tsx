import Image from "next/image";
import { ServiceSectionCard } from "./ServiceSectionCard1";
import { digitalServices } from "@/app/_constant";

export function DigitalSoftwareSection() {
  
  return (
    <ServiceSectionCard
        sectionTitle="Digital & Software Engineering"
        sectionSubtitle="Building the digital backbone of modern enterprises."
        services={digitalServices}
        imageSrc="images/wservices.png"
        imageAlt="3D Orange/Copper Cubes"
        bgClassName="bg-surface-brand"
      />
  );
}
