"use client";

/* ================= Our Values Section ================= */

/* Value Icons */
function IntegrityIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
      <path d="M12 24C12 24 16 20 24 20C32 20 36 24 36 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 28C8 28 8 20 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M40 28C40 28 40 20 32 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="16" cy="32" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 32H28" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function InnovationIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
      <circle cx="24" cy="20" r="10" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 30V36H28V30" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 34H28" stroke="currentColor" strokeWidth="2"/>
      <path d="M24 10V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M32 12L35 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 12L13 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="24" cy="20" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M24 16V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function CollaborationIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-primary">
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
      <circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 24C16 24 12 28 12 32H20C20 28 16 24 16 24Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M32 24C32 24 28 28 28 32H36C36 28 32 24 32 24Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 36H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M24 32V40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

const values = [
  {
    icon: IntegrityIcon,
    title: "Unwavering Integrity",
    description: "Trust is our currency. We uphold the highest ethical standards in every transaction, building deep, long-term partnerships rooted in transparency and customer-centric focus."
  },
  {
    icon: InnovationIcon,
    title: "Proactive Innovation",
    description: "We don't wait for change; we engineer it. By fostering a culture of initiative, we continuously deploy next-generation solutions that keep our clients ahead of the market curve."
  },
  {
    icon: CollaborationIcon,
    title: "Collaborative Excellence",
    description: "Success is a team sport. We believe in the power of shared knowledge and high-performance collaboration to deliver mission-critical results that no single individual could achieve alone."
  }
];

export function AboutValues() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-12 lg:mb-16">
          Our Values
        </h2>
        
        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-secondary/50 rounded-lg p-6 lg:p-8"
            >
              {/* Icon */}
              <div className="mb-6">
                <value.icon />
              </div>
              
              {/* Title */}
              <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
