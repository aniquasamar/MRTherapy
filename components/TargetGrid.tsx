import Image from "next/image";
import Link from "next/link";

export default function TargetGrid() {
  const cards = [
    {
      title: "Creatives & Entrepreneurs",
      description:
        "For those navigating the fast-paced demands of modern careers. Break free from overthinking and chronic stress to build a sustainable, fulfilling way of living.",
      image: "/entrepreneur.jpg", // Temporary placeholder
    },
    {
      title: "Adults Navigating Trauma",
      description:
        "Paced, careful therapy for single-incident trauma or complex patterns from earlier life. Regain safety, emotional regulation, and a grounded sense of self.",
      image: "/adult.jpg", // Temporary placeholder
    },
    {
      title: "High-Achieving Professionals",
      description:
        "Feeling functional on the outside while quietly struggling with constant worry, internal pressure, or exhaustion? We help you slow down, dismantle perfectionism, and restore balance.",
      image: "/professional.jpg", // Temporary placeholder
    },
  ];

  return (
    <section className="py-18 bg-offwhite border-b border-secondary/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-[12px] uppercase tracking-widest text-accent font-semibold">
            Who We Help
          </p>
          <h2 className="text-2xl sm:text-4xl font-serif text-primary">
            Tailored Therapy for Your Unique Journey
          </h2>
          <p className="text-darktext/75 font-light text-base">
            Providing individual psychotherapy for adults seeking depth, clarity, and sustainable healing.
          </p>
        </div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-offwhite rounded-20xl overflow-hidden"
            >
              <div className="relative h-130 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-[25px] font-serif text-darktext font-medium">
                    {card.title}
                  </h3>
                  <p className="text-sm text-darktext/80 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}