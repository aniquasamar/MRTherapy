import Image from "next/image";

export default function QuoteBanner() {
  return (
    <section className="relative w-full min-h-[450px] sm:min-h-[500px] lg:min-h-[550px] flex items-center justify-start overflow-hidden border-b border-secondary/10">
      {/* Background Image (Full-bleed across the entire screen) */}
      <Image
        src="/banner.jpg" // Place your full-bleed image in /public folder
        alt="Children playing on beach shore"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

      {/* Dark Overlay to ensure clean contrast & readability */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-20 w-full">
        <div className="max-w-3xl space-y-2">
          <p className="text-2xl sm:text-4xl lg:text-5xl font-serif text-white font-light leading-snug sm:leading-tight">
            You deserve a place where your story is heard, valued, and understood.{" "}
            <span className="italic font-serif">
              Nothing will be too heavy for us to carry together.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}