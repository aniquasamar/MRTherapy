import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section id="contact" className="bg-warmbg border-b border-secondary/10 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-stretch min-h-[500px] lg:min-h-[600px]">
        
        {/* Left Side: Full-Bleed Image taking entire vertical space with zero padding */}
        <div className="w-full lg:w-[40%] min-h-[350px] sm:min-h-[450px] lg:min-h-full relative">
          <Image
            src="/CTA.jpg" // Placeholder image (swap as needed)
            alt="Consultation scheduling atmosphere"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
        </div>

        {/* Center Content Column */}
        <div className="w-full lg:w-[60%] px-8 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-center space-y-6 text-center lg:text-left items-center lg:items-start">
          
          <div className="space-y-2">
            <p className="text-[12px] uppercase tracking-[0.25em] text-accent font-semibold">
              SCHEDULE AN APPOINTMENT
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-darktext font-normal leading-tight">
              Find a therapist who is the right fit for{" "}
              <span className="font-cursive text-6xl sm:text-6xl lg:text-6xl text-accent italic font-light tracking-wide">
                you
              </span>
              .
            </h2>
          </div>

          {/* Centered with mx-auto on mobile/tablet, left-aligned on lg screens */}
          <div className="space-y-4 text-darktext/80 text-sm sm:text-base leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
            <p>
              Coming to therapy is a courageous and meaningful decision. Connecting with a practitioner who combines practical tools, deep empathy, and evidence-based methods makes all the difference in your healing journey.
            </p>
            <p>
              Whether you choose to meet for in-person sessions at our quiet Santa Monica office or prefer the convenience and flexibility of secure virtual telehealth across California, I want to make getting started as simple and comfortable as possible.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="mailto:contact@drmayareynolds.com"
              className="inline-block text-[12px] tracking-[0.25em] uppercase text-darktext/90 hover:text-accent border-b border-darktext/40 hover:border-accent transition-all pb-1 font-medium"
            >
              BOOK YOUR CONSULTATION NOW
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}