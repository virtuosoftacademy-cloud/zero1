import Image from "next/image";
import { title } from "process";

export function DigitalSoftwareSection() {
  const dititalServices = [
    {
      title: "Custom Software Development",
      description:
        "Purpose-built software solutions designed around your business workflows, delivering scalability, reliability, and long-term competitive advantage.",
    },{
      title: "App Development (Mobile & Web)",
      description:
        "High-performance web and mobile applications engineered for usability, security, and seamless user experiences across platforms.",
    },
    {
      title: "App Modernization",
      description:
        "Upgrading legacy applications through refactoring, re-architecture, and technology upgrades to improve performance, security, and maintainability.",
    },
    {
      title: "Database Migration",
      description:
    "Secure and structured migration of data across platforms, ensuring data integrity, minimal downtime, and improved performance at scale."
    },
    {
      title: "Third-Party Integrations",
      description:
    "Seamless integration of external systems, APIs, and platforms to unify data, automate processes, and extend application capabilities."
    }
  ];
  return (
    <section className="bg-surface-brand py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12">
          {/* Left Content */}

          <div>
            {/* Section Header */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-text-on-brand mb-2">
                Digital & Software Engineering
              </h2>
              <p className="text-text-on-brand/90 text-sm md:text-base">
                Building the digital backbone of modern enterprises.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10 mb-10">
              {dititalServices.map((service) => (
                <div key={service.title}>
                  <h3 className="text-text-on-brand font-semibold text-base mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-on-brand/85 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>


          {/* Right - 3D Abstract Image */}
          <div className="hidden lg:block relative w-[320px] h-[380px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imageservice5-3xjeG1N7BhXWUdjoDvgQxjGgvczYKu.png"
              alt="3D Orange/Copper Cubes"
              fill
              className="object-contain object-right-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
