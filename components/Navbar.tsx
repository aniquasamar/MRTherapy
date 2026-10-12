"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="top-5 z-50 bg-offwhite/950 backdrop-blur-md border-b border-secondary/20 transition-all">
      <div className="max-w-30xl mx-auto px-6 sm:px-8 lg:px-25 flex items-center justify-between h-20">
        {/* Practice / Branding */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl sm:text-4xl font-serif tracking-tight text-primary font-large">
            MRTherapy
          </span>
          <span className="text-xs uppercase tracking-widest text-accent font-medium">
            • Santa Monica, CA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12 text-sm font-normal text-darktext/70">
          <Link href="#about" className="hover:text-accent transition-colors">
            ABOUT
          </Link>
          {/* SPECIALTIES Dropdown */}
          <div className="relative group">
            <Link href="#specialties" className="hover:text-accent transition-colors py-2 block">
              EXPERTISE
            </Link>
            {/* Dropdown Menu */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:flex flex-col bg-offwhite border border-secondary/20 rounded-md shadow-lg py-3 px-4 min-w-[220px] space-y-2.5 text-center transition-all animate-fadeIn">
              <Link href="#specialties" className="hover:text-accent transition-colors py-1 text-[11px] block text-darktext/90">
                TRAUMA & PTSD
              </Link>
              <Link href="#specialties" className="hover:text-accent transition-colors py-1 text-[11px] block text-darktext/90">
                ANXIETY & PANIC
              </Link>
              <Link href="#specialties" className="hover:text-accent transition-colors py-1 text-[11px] block text-darktext/90">
                BURNOUT & PERFECTIONISM
              </Link>
            </div>
          </div>

          {/* METHODS Dropdown */}
          <div className="relative group">
            <Link href="#methods" className="hover:text-accent transition-colors py-2 block">
              SPECIALITIES
            </Link>
            {/* Dropdown Menu */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:flex flex-col bg-offwhite border border-secondary/20 rounded-md shadow-lg py-3 px-4 min-w-[220px] space-y-2.5 text-center transition-all animate-fadeIn">
              <Link href="#methods" className="hover:text-accent transition-colors py-1 text-[11px] block text-darktext/90">
                EMDR THERAPY
              </Link>
              <Link href="#methods" className="hover:text-accent transition-colors py-1 text-[11px] block text-darktext/90">
                CBT THERAPY
              </Link>
              <Link href="#methods" className="hover:text-accent transition-colors py-1 text-[11px] block text-darktext/90">
                SOMATIC PRACTICES
              </Link>
              <Link href="#methods" className="hover:text-accent transition-colors py-1 text-[11px] block text-darktext/90">
                MINDFULNESS
              </Link>
            </div>
          </div>
          <Link href="#office" className="hover:text-accent transition-colors">
            OFFICE
          </Link>
          {/* Oval Pill Outline Contact Button */}
          <Link
            href="#contact"
            className="px-5 py-4 rounded-full border border-darktext/70 text-darktext hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 font-normal tracking-[0.25em] text-[11px] inline-block text-center leading-none"
          >
            CONTACT
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-darktext hover:text-primary focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-offwhite border-b border-secondary/20 px-6 pt-4 pb-6 space-y-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3 font-medium text-darktext/70">
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent transition-colors py-1"
            >
              ABOUT
            </Link>
            <Link
              href="#specialties"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent transition-colors py-1"
            >
              EXPERTISE
            </Link>
            <Link
              href="#methods"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent transition-colors py-1"
            >
              SPECIALITIES
            </Link>
            <Link
              href="#office"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent transition-colors py-1"
            >
              OFFICE
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent transition-colors py-1"
            >
              CONTACT
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}