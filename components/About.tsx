import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 bg-warmbg/90 border-b border-secondary/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Profile Image Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md h-[450px] sm:h-[500px] rounded-l overflow-hidden">
              <Image
                src="/maya-reynolds.png" // Dr. Maya Reynolds headshot from public folder
                alt="Dr. Maya Reynolds, PsyD"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Bio Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="text-[12px] uppercase tracking-widest text-accent font-semibold">
                About Your Therapist
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif text-darktext">
                Meet Dr. Maya Reynolds, PsyD
              </h2>
              <p className="text-sm font-medium text-primary">
                Licensed Clinical Psychologist • Santa Monica, CA
              </p>
            </div>

            <p className="text-darktext/80 text-base leading-relaxed font-light">
              I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware, but internally feel exhausted, stuck in overthinking, or emotionally on edge.
            </p>

            <p className="text-darktext/80 text-base leading-relaxed font-light">
              I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I believe therapy works best when clients feel respected, understood, and actively involved in the process.
            </p>

            <p className="text-darktext/80 text-base leading-relaxed font-light">
              My goal is not just short-term symptom relief, but helping clients develop deep insight, resilience, and a stronger relationship with themselves over time.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <Link
              href="#contact"
              className="inline-block text-[12px] tracking-[0.25em] uppercase text-darktext/90 hover:text-accent border-b border-darktext/40 hover:border-accent transition-all pb-1 font-medium"
            >
              WORK WITH MAYA
            </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}