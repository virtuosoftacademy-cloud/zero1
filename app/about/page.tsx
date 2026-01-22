import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutHero } from "@/components/sections/about/about-hero";
import { AboutValues } from "@/components/sections/about/about-values";
import { AboutMission } from "@/components/sections/about/about-mission";
import { AboutFounder } from "@/components/sections/about/about-founder";
import { AboutTeam } from "@/components/sections/about/about-team";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <AboutValues />
      <AboutMission />
      <AboutFounder />
      <AboutTeam />
      <Footer />
    </main>
  );
}
