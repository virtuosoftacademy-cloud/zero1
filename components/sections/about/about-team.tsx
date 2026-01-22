import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/* ================= Meet Our Experts Section ================= */

const teamMembers = [
  { name: "Khalid Al-Mansoori", role: "Founder, Marketing director", image: "/images/team-member-1.jpg" },
  { name: "Khalid Al-Mansoori", role: "Founder, Marketing director", image: "/images/team-member-2.jpg" },
  { name: "Khalid Al-Mansoori", role: "Founder, Marketing director", image: "/images/team-member-3.jpg" },
  { name: "Khalid Al-Mansoori", role: "Founder, Marketing director", image: "/images/team-member-4.jpg" },
  { name: "Khalid Al-Mansoori", role: "Founder, Marketing director", image: "/images/team-member-5.jpg" },
  { name: "Khalid Al-Mansoori", role: "Founder, Marketing director", image: "/images/team-member-6.jpg" },
  { name: "Khalid Al-Mansoori", role: "Founder, Marketing director", image: "/images/team-member-7.jpg" },
  { name: "Khalid Al-Mansoori", role: "Founder, Marketing director", image: "/images/team-member-8.jpg" },
];

export function AboutTeam() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12 lg:mb-16">
          Meet our Experts
        </h2>
        
        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              {/* Circular Image */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
              
              {/* Name */}
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                {member.name}
              </h3>
              
              {/* Role */}
              <p className="text-primary text-xs md:text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
        
        {/* Hiring CTA */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
            We're hiring! Want to join the team?
          </h3>
          
          <Link href="/careers">
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-md font-medium">
              View Open Roles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
