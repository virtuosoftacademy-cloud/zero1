import Image from "next/image";
import {
  GearIcon,
  BuildingIcon,
  ShieldIcon,
  ExpandIcon,
} from "@/components/icons";

const features = [
  {
    icon: GearIcon,
    title: "Elite Technical Intelligence",
    description:
      "We assemble high-performing teams of gifted talents and expert consultants dedicated to delivering mission-critical projects. Our specialists provide the deep technical and functional intelligence required to navigate complex digital landscapes and ensure a sustainable competitive edge.",
  },
  {
    icon: BuildingIcon,
    title: "Five Decades of Strategic Excellence",
    description:
      "Backed by Al-Wataniya International Holdings, we converge a 50-year commercial legacy with next-generation digital intelligence. We leverage decades of deep-rooted expertise across 12 key industries to provide the stability and insight needed to realize ambitious business goals.",
  },
  {
    icon: ShieldIcon,
    title: "Uninterrupted Operational Resilience",
    description:
      "We safeguard your digital assets through multi-tiered maintenance packages and 24/7 managed services designed for maximum reliability. Our proactive approach to troubleshooting and system monitoring ensures continuous performance and operational trust across your entire infrastructure.",
  },
  {
    icon: ExpandIcon,
    title: "Maximizing ROI through Value Engineering",
    description:
      'Our "Complete Solution" methodology focuses on driving operational efficiency and maximizing return on investment. We deliver cost-effective digital strategies and scalable architectures, such as providing SaaS-grade data platforms at a fraction of traditional costs.',
  },
];

export function AboutContent() {
  return (
    <section className="bg-secondary py-16 lg:py-24 px-16 lg:px-22">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section title */}
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12 lg:mb-16">
          Why Partner with Qatar's Digital Leader?
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left side - Feature blocks in 2x2 grid */}
          <div className="lg:w-2/3 grid md:grid-cols-2 gap-x-12 gap-y-10">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="mb-3">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right side - Testimonial card */}
          <div className="lg:w-1/3 flex items-start justify-center lg:justify-end">
            <div className="bg-card rounded-lg p-6 shadow-sm max-w-[280px] border border-border">
              <div className="flex justify-center mb-5">
                <div className="relative w-24 h-24 rounded-full overflow-hidden">
                  <Image
                    src="/images/ceo-portrait.jpg"
                    alt="Yousef Al-Thani"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <blockquote className="text-center mb-5">
                <p className="text-muted-foreground text-sm italic leading-relaxed">
                  We didn't just upgrade our technology; we upgraded our
                  mindset. We moved from simply delivering hardware to
                  architecting the digital nervous systems that power
                  Qatar's largest enterprises.
                </p>
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-foreground">Yousef Al-Thani</p>
                <p className="text-primary text-sm">Co-founder, CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
