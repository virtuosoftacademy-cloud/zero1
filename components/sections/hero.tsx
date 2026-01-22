"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

/* ================= Particle Network Animation ================= */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const particleCount = 60;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }
    particlesRef.current = particles;

    const connectionDistance = 150;
    const orangeColors = ["#eb6535", "#ce4912", "#ff7849"];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (const particle of particles) {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = orangeColors[Math.floor(Math.random() * orangeColors.length)];
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(235, 101, 53, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ background: "transparent" }}
    />
  );
}

/* ================= Hero Section ================= */
export function HeroSection() {
  return (
    <section className="relative min-h-[600px] overflow-hidden bg-surface-dark pt-20 lg:min-h-[700px]">
      {/* Particle Network Animation */}
      <div className="absolute inset-0">
        <ParticleNetwork />
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="text-center">
          {/* Subtitle */}
          <p className="mb-4 text-lg font-medium italic text-text-on-dark sm:text-xl lg:text-2xl">
            50 Years Of Stability.
          </p>
          
          {/* Main Headline */}
          <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-text-on-dark sm:text-4xl md:text-5xl lg:text-6xl">
            Built For The{" "}
            <span className="bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent">
              Next Digital Frontier.
            </span>
          </h1>
          
          {/* Description */}
          <p className="mx-auto mb-8 max-w-2xl text-sm text-text-muted-on-dark sm:text-base lg:text-lg">
            From Qatar&apos;s industrial roots to the future of AI-driven enterprise. Scale your operations with an integrated ecosystem of distribution, ERP expertise, and custom software engineering.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              variant="outline"
              className="h-11 rounded border-primary bg-transparent px-6 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/contact">Book A Strategy Session</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded border-primary bg-transparent px-6 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="/services">Explore The Service Spectrum</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
