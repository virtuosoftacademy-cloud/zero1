import Image from "next/image";
import { ServiceSectionCard } from "./ServiceSectionCard2";
import { cloudAi } from "@/app/_constant";

export function CloudAISection() {

  return (
    <ServiceSectionCard
      sectionTitle="Intelligent Cloud & AI"
      sectionSubtitle="Future-proofing business through automation and data."
      services={cloudAi}
      imageSrc="images/cubesblackservices.png"
      imageAlt="3D Orange/Copper Cubes"
      bgClassName="text-background bg-surface-dark-secondary"
    />
  );
}
