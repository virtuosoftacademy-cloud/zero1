import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { TeamImageSection } from "@/components/sections/team-image";
import { ClientLogosSection } from "@/components/sections/client-logos";
import { FeaturesSection } from "@/components/sections/features";
import { ServicesPreview } from "@/components/sections/services-preview";
import { Milestones } from "@/components/sections/milestones";
import { AboutContent } from "@/components/sections/about-content";
import { CTASection } from "@/components/sections/cta-section";

/* ================= Home Page ================= */
export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ================= Header / Navigation ================= */}
      <Header />

      {/* ================= Hero Section ================= */}
      <HeroSection />

      {/* ================= Team Image Section ================= */}
      <TeamImageSection />

      {/* ================= Client Logos Section ================= */}
      <ClientLogosSection />

      {/* ================= Features Section ================= */}
      <FeaturesSection />

      {/* ================= Services Preview Section ================= */}
      <ServicesPreview />

      {/* ================= Milestones Section ================= */}
      <Milestones />

      {/* ================= About Content Section ================= */}
      <AboutContent />

      {/* ================= CTA Section ================= */}
      <CTASection />

      {/* ================= Footer ================= */}
      <Footer />
    </main>
  );
}
