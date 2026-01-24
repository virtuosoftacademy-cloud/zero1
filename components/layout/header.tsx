"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/public/logo/Logo.png";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";

/* ================= Navigation Links Data ================= */
const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/about", label: "ABOUT" },
  { href: "/careers", label: "CAREERS" },
  { href: "/contact", label: "GET STARTED" },
];

/* ================= Zero1 Logo Component ================= */
function Zero1Logo() {
  return (
    <Link href="/" className="flex items-center">
      <span className="">
        <Image
          src={Logo}
          alt="Zero1 Logo"
          width={120}
          height={40}
          className="object-contain"
        />
        {/* zer<span className="text-primary uppercase">o1</span> */}
      </span>
    </Link>
  );
}

/* ================= Desktop Navigation ================= */
function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navLinks.map((link) => {
        const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm tracking-wide transition-colors ${isActive
                ? "text-primary underline underline-offset-8 font-semibold"
                : "text-text-on-dark hover:text-primary"
              }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

/* ================= Mobile Navigation ================= */
function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-text-on-dark hover:bg-white/10 lg:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full bg-surface-dark border-l-0 sm:max-w-sm"
      >
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex flex-col gap-6 pt-8">
          <Zero1Logo />
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium tracking-wide transition-colors ${isActive
                      ? "text-primary"
                      : "text-text-on-dark hover:text-primary"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-lg font-medium tracking-wide text-text-on-dark transition-colors hover:text-primary"
            >
              GET STARTED
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/* ================= Header Component ================= */
export function Header() {
  const pathname = usePathname();

  // Home and Careers pages have transparent/dark hero backgrounds
  // Other pages (Services, About, Contact) need the brown navigation bar
  const isTransparentNav = pathname === "/" || pathname === ("/careers");

  return (
    <header
      className={`${isTransparentNav ? "absolute" : "relative"} left-0 right-0 top-0 z-50`}
      style={{ backgroundColor: isTransparentNav ? "transparent" : "#2F140B" }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-22">
        <Zero1Logo />
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
