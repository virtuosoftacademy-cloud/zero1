import Image from "next/image";
import { UsersIcon } from "@/components/icons";

const stats = [
  { value: "20+", label: "Years in business" },
  { value: "30", label: "Top specialists" },
  { value: "250+", label: "Completed projects" },
  { value: "18", label: "Industry awards" },
];

export function Milestones() {
  return (
    <section className="relative min-h-[400px] lg:min-h-[450px] overflow-hidden">
      {/* Background image - positioned on right */}
      <div className="absolute inset-0">
        <Image
          src="/images/businessman.jpg"
          alt="Business professional"
          fill
          className="object-cover object-right"
          priority
        />
        {/* Gradient overlay for text readability on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="max-w-xl">
          <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-3 leading-tight">
            Our Milestones : Pioneering the Future of Digital Excellence
          </h2>
          <p className="text-muted-foreground text-sm mb-10 max-w-lg leading-relaxed">
            At Zero One, we empower those with the vision to challenge convention, leveraging our complete
            solution methodology to transform ambitious digital concepts into mission-critical realities.
          </p>

          {/* Stats grid - 2x2 */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-primary flex-shrink-0">
                  <UsersIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-foreground leading-none">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
