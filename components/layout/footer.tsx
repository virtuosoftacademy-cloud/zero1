"use client";

import Link from "next/link";
import {
  MailIcon,
  ClockIcon,
  PhoneIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/icons";

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Get Started", href: "/contact" },
];

const contactInfo = [
  { icon: MailIcon, text: "mail@01telecom.qa" },
  { icon: ClockIcon, text: "Mon – Fri: 10 am – 8 pm" },
  { icon: PhoneIcon, text: "(+974) 40339170" },
  { icon: MapPinIcon, text: "Doha, Qatar" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative">
      {/* Main footer with dark background and geometric pattern */}
      <div className="bg-surface-dark-secondary relative overflow-hidden">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="footerPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" className="fill-primary" />
                <line x1="0" y1="0" x2="10" y2="10" className="stroke-primary" strokeWidth="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footerPattern)" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Logo and description */}
            <div>
              <Link href="/" className="inline-block mb-5">
                <span className="text-3xl font-bold tracking-tight">
                  <span className="text-text-on-dark">zer</span>
                  <span className="text-primary">o</span>
                  <span className="text-primary">1</span>
                </span>
              </Link>
              <p className="text-text-muted-on-dark text-sm leading-relaxed max-w-xs">
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
                      className="text-text-muted-on-dark text-sm hover:text-text-on-dark transition-colors"
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
                    <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-text-muted-on-dark text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Social icons */}
              <div className="flex items-center gap-4 mt-6">
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
              </div>
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
