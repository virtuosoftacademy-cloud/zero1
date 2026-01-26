"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";



/* ================= Hero Section ================= */
export function HeroSection() {
  return (
    <section className="relative min-h-[670] overflow-hidden bg-surface-dark pt-25 md:pt-40 lg:pt-30 md:h-screen lg:h-screen">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          {/* Add webm version if you have it for better compatibility/performance */}
          {/* <source src="/videos/hero-bg.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>

        {/* Optional: subtle overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Content */}
      <div className="relative text-center z-10 m-auto max-w-7xl px-4 py-16  sm:py-24 lg:px-8 lg:py-32">
          <p className="mb-4 text-lg font-bold text-text-on-dark sm:text-xl lg:text-2xl">
            50 Years Of Stability.
          </p>

          <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-text-on-dark sm:text-4xl md:text-5xl lg:text-[60px]">
            Built For The{" "}
            <span className="bg-linear-to-r from-primary-dark to-primary bg-clip-text text-transparent">
              Next Digital Frontier.
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-4xl text-sm text-text-muted-on-dark sm:text-base lg:text-lg">
            From Qatar's industrial roots to the future of AI-driven enterprise. Scale your operations with an integrated ecosystem of distribution, ERP expertise, and custom software engineering.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              className="h-11 px-6 text-sm font-bold text-primary bg-background hover:text-primary-foreground"
            >
              <Link href="/contact">Book A Strategy Session</Link>
            </Button>
            <Button
              asChild
              className="h-11 px-6 text-sm font-bold text-primary bg-background hover:text-primary-foreground"
            >
              <Link href="/services">Explore The Service Spectrum</Link>
            </Button>
          </div>
        </div>
    </section>
  );
}