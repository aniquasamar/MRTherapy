import Image from "next/image";

export default function HonorSection() {
  return (
    <section className="bg-warmbg border-b border-secondary/10 overflow-hidden">
      {/* Set explicit min-height on desktop so lg:h-full works reliably */}
      <div className="w-full flex flex-col lg:flex-row items-stretch min-h-[450px] lg:min-h-[550px]">
        
        {/* Left Side: Full-Bleed Image pinned flush to the left edge */}
        <div className="w-full lg:w-[50%] min-h-[350px] sm:min-h-[450px] lg:min-h-[550px] relative">
          <Image
            src="/CTA2.jpg" // Ensure case sensitivity matches your public folder
            alt="Family on beach reflection"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Right Side: Text Statement */}
        <div className="w-full lg:w-[50%] px-8 sm:px-12 lg:px-20 py-16 lg:py-24 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-darktext font-normal leading-tight max-w-lg">
            Honoring where you’ve been{" "}
            <span className="font-cursive text-4xl sm:text-5xl lg:text-6xl text-accent italic font-light">
              &amp;
            </span>{" "}
            helping shape where you’re headed.
          </h2>
        </div>

      </div>
    </section>
  );
}