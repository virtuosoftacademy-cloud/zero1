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
    <>
      <section className="bg-[#f5ebe4] relative overflow-hidden">
        <div className="mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[400] lg:min-h-[500]">
            {/* Content */}

            <div className="z-10 relative ml-30 container mx-auto py-16 lg:py-20">
              <div className="">
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
        {/* Background image - positioned on right */}

            <div className="relative h-[300] lg:h-auto">
              <Image
                src="/images/businessman.png"
                alt="Khalid Al-Mansoori - Founder"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle blur/fade overlay on left edge */}
              <div className="absolute inset-y-0 left-0 w-2/2 bg-linear-to-r from-[#f5ebe4] to-transparent" />
            </div>


          </div>
        </div>
      </section>
      
    </>
  );
}
