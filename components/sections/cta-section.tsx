import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneIcon } from "@/components/icons";

export function CTASection() {
  return (
    <section className="relative min-h-[350px] lg:min-h-[400px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-background.jpg"
          alt="Business technology"
          fill
          className="object-cover"
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-secondary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="max-w-md">
          <h2 className="text-foreground text-lg lg:text-xl mb-8 leading-relaxed">
            <span className="font-bold italic">Future-proof your business</span>{" "}
            <span className="font-normal">through intelligent automation and AI.</span>{" "}
            <span className="font-semibold underline">Start</span>{" "}
            <span className="font-normal">your journey</span>{" "}
            <span className="font-bold">today!</span>
          </h2>

          <div className="flex items-center gap-3 text-foreground mb-8">
            <PhoneIcon className="w-5 h-5" />
            <span className="font-bold text-lg">(+974) 40339170</span>
          </div>

          <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 rounded-md font-medium">
            Book A Strategy Session
          </Button>
        </div>
      </div>
    </section>
  );
}
