'use client'
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicesHero } from "@/components/sections/services/services-hero";
import ServicesSection from "@/components/sections/services/servicesSection";
import { aiCategory, csCategory, dsCategory } from "../_constant";
import ServicesSectionDist from "@/components/sections/services/servicesSectionDist";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesHero />
     <ServicesSection id="ai" category={aiCategory} />
<ServicesSection id="cs" category={csCategory} />
<ServicesSectionDist id="dist" category={dsCategory} />

      <Footer />
    </main>
  );
}
