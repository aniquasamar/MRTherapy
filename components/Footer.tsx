import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Upper Footer Section - Accent Color */}
      <div className="bg-accent text-offwhite py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          {/* Grid 1: Branding, Paragraph & Copyright */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-4xl font-serif text-white font-medium tracking-tight">
                MRTherapy
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-offwhite/80 font-light">
                DR. MAYA REYNOLDS, PSYD
              </p>
            </div>

            <p className="text-xs text-offwhite/80 leading-relaxed font-light max-w-sm">
              We want to make getting started simple. You’re welcome to come into our office in Santa Monica or schedule virtual appointments from anywhere in California—whatever works best for you.
            </p>

            <p className="text-[12px] text-offwhite/60 font-light pt-2">
              © 2026 Dr. Maya Reynolds, PsyD. All rights reserved.
            </p>
          </div>

          {/* Grid 2: Navigation */}
          <div className="space-y-4 md:pl-30">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              NAVIGATE
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-offwhite/90">
              <li>
                <Link href="#about" className="hover:text-white transition-colors block">
                  About Dr. Reynolds
                </Link>
              </li>
              <li>
                <Link href="#specialties" className="hover:text-white transition-colors block">
                  Areas of Expertise
                </Link>
              </li>
              <li>
                <Link href="#methods" className="hover:text-white transition-colors block">
                  Specialities
                </Link>
              </li>
              <li>
                <Link href="#office" className="hover:text-white transition-colors block">
                  Our Office Space
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors block">
                  Contact & Scheduling
                </Link>
              </li>
            </ul>
          </div>

          {/* Grid 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              CONTACT
            </h4>
            <div className="text-xs font-light space-y-2 text-offwhite/90 leading-relaxed">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90301</p>
              <p className="pt-1">
                <a href="mailto:contact@drmayareynolds.com" className="hover:underline">
                  contact@drmayareynolds.com
                </a>
              </p>
              <p>
                <a href="tel:3105550199" className="hover:underline">
                  (310) 555-0199
                </a>
              </p>
              <p className="pt-2 text-[11px] italic text-offwhite/75">
                Serving Santa Monica, Venice, Pacific Palisades, & Greater Los Angeles.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Footer Section - Primary Color */}
      <div className="bg-darktext text-offwhite/90 py-5 px-6 sm:px-8 lg:px-12 text-xs font-light border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-[11px] tracking-wider uppercase">
            <Link href="#" className="hover:text-white hover:underline transition-all">
              Terms
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white hover:underline transition-all">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-white hover:underline transition-all">
              Disclaimer
            </Link>
          </div>
          <p className="text-[12px] text-offwhite/70">
            Psychotherapy & Telehealth Services Across California
          </p>
        </div>
      </div>
    </footer>
  );
}