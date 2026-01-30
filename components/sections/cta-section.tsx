import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneIcon } from "@/components/icons";

export function CTASection() {
  return (
    <section className="bg-[#f5ebe4] relative min-h-[350] lg:min-h-[300]">
      <div className="grid lg:grid-cols-2">

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-28 py-16 lg:py-20">
          <div className="max-w-lg text-center">
            <h2 className="text-foreground text-lg lg:text-xl mb-8 leading-relaxed">
              <span className="font-bold">Future-proof your business</span>{" "}
              <span className="font-normal">through intelligent automation and AI.</span>{" "}
              <span className="font-semibold">Start</span>{" "}
              <span className="font-normal">your journey</span>{" "}
              <span className="font-bold">today!</span>
            </h2>

            <div className="flex items-center justify-center gap-3 text-foreground mb-8">
              <PhoneIcon className="w-5 h-5" />
              <span className="font-bold text-lg">(974) 4033 9170</span>
            </div>

            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-6 py-3 font-semibold">
              Book A Strategy Session
            </Button>
          </div>
        </div>
        {/* Background image */}
        <div className="relative h-full">
          <Image
            src="/images/cta-bg.png"
            alt="Business technology"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Light overlay for text readability */}
          <div className="absolute inset-y-0 left-0 w-2/2 bg-linear-to-r from-[#f5ebe4] to-transparent" />
        </div>
      </div>

    </section>
  );
}
