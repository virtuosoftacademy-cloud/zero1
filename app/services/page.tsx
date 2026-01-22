import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicesHero } from "@/components/sections/services/services-hero";
import { DigitalSoftwareSection } from "@/components/sections/services/digital-software";
import { CloudAISection } from "@/components/sections/services/cloud-ai";
import { EnterpriseSolutionsSection } from "@/components/sections/services/enterprise-solutions";
import { DistributionSupplySection } from "@/components/sections/services/distribution-supply";
import { GrowthEnablementSection } from "@/components/sections/services/growth-enablement";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesHero />
      <DigitalSoftwareSection />
      <CloudAISection />
      <EnterpriseSolutionsSection />
      <DistributionSupplySection />
      <GrowthEnablementSection />
      <Footer />
    </main>
  );
}
