import Link from "next/link";

export default function Methods() {
  const methods = [
    {
      title: "EMDR Therapy",
      description:
        "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
    },
    {
      title: "Cognitive Behavioral Therapy",
      description:
        "Helps identify and reframe unhelpful thought patterns, perfectionism, and self-critical loops to foster practical coping strategies and emotional regulation in daily life.",
    },
    {
      title: "Somatic Practices",
      description:
        "Focuses on the body's physical response to stress and trauma, helping clients regulate their nervous system, release somatic tension, and create a deeper sense of physical grounding.",
    },
    {
      title: "Mindfulness-Based Therapy",
      description:
        "Integrates present-moment awareness techniques to reduce overthinking, manage burnout, and cultivate long-term emotional stability and resilience.",
    },
  ];

  return (
    <section id="methods" className="py-18 bg-offwhite border-b border-secondary/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Title Column */}
          <div className="lg:col-span-4 space-y-1">
            <h2 className="text-xl sm:text-4xl lg:text-28xl font-serif text-darktext font-normal leading-tight">
              Our{" "}
              <span className="font-cursive text-4xl sm:text-5xl lg:text-5xl text-primary italic font-light leading-none">
                specialities
              </span>
            </h2>
            <p className="text-xl sm:text-4xl lg:text-28xl font-serif text-darktext font-normal leading-tight">
              include...
            </p>
          </div>

          {/* Right 2x2 Minimal Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            {methods.map((method, idx) => (
              <div key={idx} className="space-y-10 flex flex-col justify-between">
                <div className="space-y-6">
                  <h3 className="text-[25px] font-serif text-darktext font-normal">
                    {method.title}
                  </h3>
                  <p className="text-darktext/80 text-xs sm:text-sm leading-relaxed font-light">
                    {method.description}
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href="#contact"
                    className="inline-block text-[12px] tracking-[0.25em] uppercase text-darktext/80 hover:text-accent border-b border-darktext/40 hover:border-accent transition-all pb-1 font-medium"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}