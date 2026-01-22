import Image from "next/image";

export function EnterpriseSolutionsSection() {
  return (
    <section className="bg-surface-brand py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12">
          {/* Left Content */}
          <div>
            {/* Section Header */}
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-text-on-brand mb-2">
                Enterprise Solutions
              </h2>
              <p className="text-text-on-brand/90 text-sm md:text-base">
                The operational engine of the business covering <span className="font-semibold">ERP</span> and <span className="font-semibold">Governance</span>.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-10">
              {/* ERP Consulting */}
              <div>
                <h3 className="text-text-on-brand font-semibold text-base mb-3">
                  ERP Consulting & Implementation:
                </h3>
                <p className="text-text-on-brand/85 text-sm leading-relaxed max-w-2xl">
                  As Qatar's premier SAP partner, we manage end-to-end implementation, licensing, and customization for large enterprises. We extend this expertise to Odoo and Microsoft Dynamics 365, delivering full-cycle consulting that spans functional mapping, technical development, and seamless version upgrades to optimize your operational core.
                </p>
              </div>

              {/* IT Governance */}
              <div>
                <h3 className="text-text-on-brand font-semibold text-base mb-3">
                  IT Governance & Cybersecurity
                </h3>
                <p className="text-text-on-brand/85 text-sm leading-relaxed max-w-2xl">
                  We provide specialized OT security for Industrial Control Systems (ICS) and SCADA networks, tailored specifically for the Oil & Gas sector. Our comprehensive risk management approach includes VAPT and rigorous governance frameworks, designed to ensure full compliance with ISO 20000 and 27001 standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right - 3D Abstract Image */}
          <div className="hidden lg:block relative w-[300px] h-[280px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imageservice3-z435zt1xNhLqwbgF0iR6Sj8HIFJNb5.png"
              alt="3D Liquid Chrome"
              fill
              className="object-contain object-right-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
