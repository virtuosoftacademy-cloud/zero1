"use client";

import Link from "next/link";
import Logo from "@/public/logo/Logo.png";
import Image from "next/image";

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Get Started", href: "/contact" },
];

const contactInfo = [
  { icon: 'icons/msg.svg', text: "mail@01telecom.qa" },
  { icon: 'icons/location.svg',text: "Mon – Fri: 10 am – 8 pm" },
  { icon: 'icons/phone.svg',text: "(974) 4033 9170" },
  { icon: 'icons/telephone.svg',text: "(974) 4033 9166" },
  { icon: 'icons/location.svg',text: "Zero One Telecommunication & Electronics Building No. 178, Gate No. 61, Street No. 2, Industrial Area.P.O.Box 490, Doha, Qatar." },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative">
      {/* Main footer with dark background and geometric pattern */}
      <div className="bg-surface-dark-secondary/80 relative px-16 lg:px-22 overflow-hidden">
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
            Your browser does not support the video.
          </video>

          {/* Optional: subtle overlay to improve text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
            {/* Logo and description */}
            <div>
              <Link href="/" className="inline-block mb-5">
                <Image
                  src={Logo}
                  alt="Zero1 Logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </Link>
              <p className="text-background text-sm md:text-lg leading-relaxed">
                From Qatar's industrial roots to the future of AI-driven enterprise.
                Scale your operations with an integrated ecosystem of distribution,
                ERP expertise, and custom software engineering.
              </p>
            </div>

            {/* Explore links */}
            <div>
              <h3 className="text-text-on-dark font-semibold text-lg mb-5">Explore</h3>
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-background text-sm hover:text-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-text-on-dark font-semibold text-lg mb-5">Contact</h3>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Image src={item.icon} alt={item.text} width={160} height={160} className="size-5 text-primary shrink-0" />
                    <span className="text-background text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Social icons */}
              {/* <div className="flex items-center gap-4 mt-6">
                <Link
                  href="#"
                  className="text-text-on-dark hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-text-on-dark hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-text-on-dark hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-20 right-8 text-text-on-dark hover:text-primary transition-colors z-20"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      {/* Copyright bar */}
      <div className="bg-primary py-3">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-primary-foreground text-sm text-center">
            © Zero One - 2025. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
