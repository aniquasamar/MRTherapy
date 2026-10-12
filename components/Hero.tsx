import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-18 bg-offwhite border-b border-secondary/10 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center min-h-[500px] sm:min-h-[580px] lg:min-h-[640px]">
        
        {/* Left Side: Full Bleed Image pinned flush to the left screen edge */}
        <div className="w-full lg:w-[42%] h-[350px] sm:h-[450px] lg:h-full relative min-h-[400px] lg:min-h-[640px]">
          <Image
            src="/home.jpg" // Swappable with any photo from public/
            alt="Therapy space in Santa Monica"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Right Side: Copy & Content Container */}
        <div className="w-full lg:w-[58%] px-6 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 flex flex-col justify-center space-y-6">
          
          {/* SEO Tagline */}
          <p className="text-[12px] font-semibold uppercase tracking-[0.25em] text-accent">
            ONLINE & IN-PERSON THERAPY IN SANTA MONICA & ACROSS CA
          </p>

          {/* H1 Headline with Cursive Accent Font for "thrive" */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-darktext leading-[1.25]">
            Rebuild your foundation on solid ground and finally begin to{" "}
            <span className="font-cursive text-4xl sm:text-5xl lg:text-6xl text-primary italic font-light tracking-wide">
              thrive
            </span>
            .
          </h1>

          {/* Subtext */}
          <p className="max-w-xl text-darktext/80 text-sm sm:text-base leading-relaxed font-light">
            Grounded, evidence-based psychotherapy for high-achieving adults, professionals, and creatives navigating anxiety, trauma, and burnout in Santa Monica, California.
          </p>

          {/* Call To Action Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="#contact"
              className="inline-block px-8 py-3 rounded-[100px] bg-primary text-white text-xs uppercase tracking-[0.2em] font-medium shadow-sm hover:bg-primary/90 transition-all"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}