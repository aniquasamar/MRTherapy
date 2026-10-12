import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import TargetGrid from "@/components/TargetGrid";
import QuoteBanner from "@/components/QuoteBanner";
import Specialties from "@/components/Specialties";
import HonorSection from "@/components/HonorSection";
import Methods from "@/components/Methods";
import Office from "@/components/Office";
import About from "@/components/About";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Welcome />
      <TargetGrid />
      <QuoteBanner />
      <Specialties />
      <HonorSection />
      <Methods />
      <CTASection />
      <Office />
      <About />
      <Footer />
    </main>
  );
}