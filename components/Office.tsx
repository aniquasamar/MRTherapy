import Image from "next/image";

export default function Office() {
  return (
    <section id="office" className="bg-offwhite border-b border-secondary/10 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-center min-h-[500px] lg:min-h-[640px]">
        
        {/* Left Side: Content & Paragraphs */}
        <div className="w-full lg:w-[45%] px-8 sm:px-12 lg:px-16 py-18 lg:py-20 flex flex-col justify-center space-y-6 text-left">
          
          <div className="space-y-2">
            <p className="text-[12px] uppercase tracking-[0.25em] text-accent font-semibold">
              OUR SANCTUARY
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-darktext font-normal">
              A Calm, Grounding Space for Healing
            </h2>
          </div>

          <p className="text-darktext/80 text-sm sm:text-base leading-relaxed font-light">
            Located at 123th Street 45 W, Santa Monica, CA 90301, my office is a quiet, private, and confidential environment designed with natural light and comfortable seating to help you step away from daily noise. Clients frequently share that the physical space itself helps them feel centered from the moment they arrive.
          </p>

          <p className="text-darktext/80 text-sm sm:text-base leading-relaxed font-light">
            Carefully structured for both in-person sessions in Santa Monica and secure virtual telehealth across California, it offers a welcoming, grounded atmosphere tailored entirely to support your healing journey.
          </p>

          <div className="pt-2">
            <span className="inline-block text-[12px] tracking-[0.2em] uppercase font-medium text-accent border-b border-accent/40 pb-1">
              SANTA MONICA, CA • 123TH STREET 45 W
            </span>
          </div>

        </div>

        {/* Right Side: Two Office Pictures Side-by-Side with Padding */}
        <div className="w-full lg:w-[55%] p-6 sm:p-8 lg:p-12 flex flex-col sm:flex-row items-center gap-6">
          
          {/* First Office Image */}
          <div className="w-full sm:w-1/2 h-[280px] sm:h-[380px] lg:h-[420px] relative rounded-5xl overflow-hidden shadow-sm border border-secondary/20">
            <Image
              src="/office1.jpeg"
              alt="Santa Monica Therapy Office Seating Area"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 25vw"
              priority
            />
          </div>

          {/* Second Office Image */}
          <div className="w-full sm:w-1/2 h-[280px] sm:h-[380px] lg:h-[420px] relative rounded-5xl overflow-hidden shadow-sm border border-secondary/20">
            <Image
              src="/office2.jpeg"
              alt="Santa Monica Therapy Office Natural Light Space"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}