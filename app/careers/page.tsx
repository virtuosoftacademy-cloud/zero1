import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CareersHero } from "@/components/sections/careers/careers-hero";
import { CareersJobs } from "@/components/sections/careers/careers-jobs";

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CareersHero />
      <CareersJobs />
      <Footer />
    </main>
  );
}
