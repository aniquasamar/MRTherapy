import Image from "next/image";

export default function Welcome() {
  return (
    <section className="bg-warmbg/90 border-b border-secondary/10 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        
        {/* Left Side: Headline and Two-Column Paragraph Layout */}
        <div className="w-full lg:w-[60%] px-6 sm:px-12 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col justify-center space-y-10">
          
          {/* Main Large Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-darktext font-normal leading-tight max-w-2xl">
            You’re holding onto hope that life can be better than it is right now.
          </h2>

          {/* Two Paragraph Columns Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-darktext/80 leading-relaxed font-light">
            
            {/* Column 1 */}
            <div className="space-y-3">
              <p className="text-[12px] uppercase tracking-widest font-semibold text-accent leading-normal">
                AT DR. MAYA REYNOLDS THERAPY, WE WANT TO MAKE THAT HOPE A REALITY.
              </p>
              <p>
                Whether you’re an adult seeking personal growth, looking to work through your trauma, an overthinking professional struggling with burnout, or someone navigating lingering stress, I provide a compassionate and safe space to help you navigate all of life’s ups and downs.
              </p>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <p>
                First and foremost, I believe what you’re going through is real, valid, and worthy of support. My practice offers clients in the Santa Monica area and across California an environment to discover a deeper sense of self in the midst of their struggles.
              </p>
              <p>
                As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
              </p>
            </div>
          </div>
        </div>
        {/* Right Side: Full Bleed Image pinned flush to the right screen edge */}
        <div className="w-full lg:w-[40%] min-h-[350px] sm:min-h-[450px] lg:min-h-full relative">
          <Image
            src="/welcome.jpg"
            alt="Beach and ocean therapeutic atmosphere"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}