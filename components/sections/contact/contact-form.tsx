"use client";

import React from "react"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

/* ================= Testimonials Data ================= */
const testimonials = [
  {
    quote:
      '"Zero One completely transformed the way we manage our enterprise infrastructure and supply chain. Their custom-designed solutions and ERP integration streamlined our most complex workflows and significantly enhanced our operational visibility. We highly recommend their services to any organization in the region looking for stability, innovation, and real results."',
    name: "Hassan Al-Jaber",
    role: "Chief Information Officer (CIO) – Industrial Logistics Sector",
    image: "/images/testimonial-hassan.jpg",
  },
];

export function ContactForm() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    workEmail: "",
    helpType: "",
    projectDescription: "",
    marketingConsent: false,
    smsConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section >
      {/* Main Form Section with Orange Background */}
      <div className="relative min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/contact-bg.jpg"
            alt="Team background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Testimonial */}
            <div className="text-primary-foreground">
              <h1 className="text-3xl lg:text-4xl font-bold italic mb-8 leading-tight">
                Turn complexity
                <br />
                into clarity.
              </h1>

              {/* Clutch Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#1b1b1b] rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">C</span>
                </div>
                <div>
                  <span className="font-bold">4.9</span>
                  <span className="text-primary-foreground/80"> / 5.0</span>
                  <p className="text-sm text-primary-foreground/80">
                    reviews on <span className="font-semibold">clutch.co</span>
                  </p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mb-6">
                <p className="text-sm lg:text-base leading-relaxed text-primary-foreground/90 mb-6">
                  {testimonials[currentTestimonial].quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-xs text-primary-foreground/80">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index % testimonials.length)}
                    className={`h-1 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "w-8 bg-foreground"
                        : "w-4 bg-primary-foreground/40"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Full Name & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-1 text-primary-foreground text-sm mb-2">
                      Full name <ChevronDown className="w-4 h-4" />
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-primary-foreground/50 pb-2 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-1 text-primary-foreground text-sm mb-2">
                      Phone number <ChevronDown className="w-4 h-4" />
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, phoneNumber: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-primary-foreground/50 pb-2 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground"
                    />
                  </div>
                </div>

                {/* Row 2: Work Email & Help Type */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-1 text-primary-foreground text-sm mb-2">
                      Work email <ChevronDown className="w-4 h-4" />
                    </label>
                    <input
                      type="email"
                      value={formData.workEmail}
                      onChange={(e) =>
                        setFormData({ ...formData, workEmail: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-primary-foreground/50 pb-2 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-1 text-primary-foreground text-sm mb-2">
                      How can we help you? <ChevronDown className="w-4 h-4" />
                    </label>
                    <select
                      value={formData.helpType}
                      onChange={(e) =>
                        setFormData({ ...formData, helpType: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-primary-foreground/50 pb-2 text-primary-foreground focus:outline-none focus:border-primary-foreground appearance-none"
                    >
                      <option value="" className="text-foreground"></option>
                      <option value="consultation" className="text-foreground">
                        Consultation
                      </option>
                      <option value="project" className="text-foreground">
                        New Project
                      </option>
                      <option value="support" className="text-foreground">
                        Support
                      </option>
                      <option value="other" className="text-foreground">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Project Description */}
                <div>
                  <label className="flex items-center gap-1 text-primary-foreground text-sm mb-2">
                    Describe your project <ChevronDown className="w-4 h-4" />
                  </label>
                  <textarea
                    value={formData.projectDescription}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectDescription: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full bg-transparent border-b border-primary-foreground/50 pb-2 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent px-8 py-3 rounded-md"
                >
                  Book free consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Consent Checkboxes Section */}
      <div className="bg-background py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Checkboxes */}
            <div className="space-y-4 mb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.marketingConsent}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      marketingConsent: e.target.checked,
                    })
                  }
                  className="mt-1 w-4 h-4 border-2 border-foreground rounded-none accent-primary"
                />
                <span className="text-sm text-foreground">
                  I agree to receive marketing information and updates via email.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.smsConsent}
                  onChange={(e) =>
                    setFormData({ ...formData, smsConsent: e.target.checked })
                  }
                  className="mt-1 w-4 h-4 border-2 border-foreground rounded-none accent-primary"
                />
                <span className="text-sm text-foreground">
                  I agree to receive SMS messages from Zero One. Reply
                  &apos;STOP&apos; to opt out anytime.
                </span>
              </label>
            </div>

            {/* Legal Text */}
            <p className="text-xs text-muted-foreground leading-relaxed">
              By &quot;Submitting&quot; this form, you are agreeing to Zero One&apos;s{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              . We will never sell, or trade your personal information, including
              phone numbers, with any third parties under any circumstances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
