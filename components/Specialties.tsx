import Link from "next/link";

export default function Specialties() {
  const specialtiesLeft = [
    { name: "TRAUMA & PTSD", href: "#contact" },
    { name: "ANXIETY & PANIC", href: "#contact" },
    { name: "PROFESSIONAL BURNOUT", href: "#contact" },
    { name: "PERFECTIONISM & STRESS", href: "#contact" },
    { name: "LIFE TRANSITIONS", href: "#contact" },
    { name: "SELF-ESTEEM & IDENTITY", href: "#contact" },
  ];

  const specialtiesRight = [
    { name: "DEPRESSION & MOOD", href: "#contact" },
    { name: "RELATIONSHIP PATTERNS", href: "#contact" },
    { name: "BOUNDARIES & COMMUNICATION", href: "#contact" },
    { name: "GRIEF & LOSS", href: "#contact" },
    { name: "MINDFULNESS & SOMATIC HEALING", href: "#contact" },
    { name: "...AND MORE.", href: "#contact" },
  ];

  return (
    <section id="specialties" className="py-18 bg-offwhite border-b border-secondary/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Title Column */}
          <div className="lg:col-span-4 space-y-1">
            <h2 className="text-xl sm:text-4xl lg:text-28xl font-serif text-darktext font-normal leading-tight">
              Our areas of
            </h2>
            <p className="font-cursive text-4xl sm:text-5xl lg:text-5xl text-primary italic font-light leading-none pt-1">
              expertise
            </p>
          </div>

          {/* Right 2-Column Text List */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
            
            {/* Left Column Items */}
            <div className="divide-y divide-secondary/20 border-b border-secondary/20 md:border-b-0">
              {specialtiesLeft.map((item, idx) => (
                <div key={idx} className="py-8">
                  <Link
                    href={item.href}
                    className="text-[15px] tracking-[0.25em] text-darktext/75 hover:text-accent transition-colors uppercase font-medium block"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Column Items */}
            <div className="divide-y divide-secondary/20">
              {specialtiesRight.map((item, idx) => (
                <div key={idx} className="py-8">
                  <Link
                    href={item.href}
                    className="text-[15px] tracking-[0.25em] text-darktext/75 hover:text-primary transition-colors uppercase font-medium block"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}