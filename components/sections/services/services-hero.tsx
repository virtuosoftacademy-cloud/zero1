import Image from "next/image";

export function ServicesHero() {
  return (
    <section className="bg-background py-24 md:py-32 relative overflow-hidden">
     
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 italic">
          The Complete Service Spectrum.
        </h1>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Unify your operations with a single strategic partner. From global hardware distribution to custom AI and
          ERP implementation, we provide the end-to-end capabilities required to scale modern enterprises.
        </p>
      </div>
    </section>
  );
}
