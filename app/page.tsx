import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SystemsSection from "@/components/sections/SystemsSection";
import ProofSection from "@/components/sections/ProofSection";
import TeachingSection from "@/components/sections/TeachingSection";
import StackSection from "@/components/sections/StackSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="main"
        className="min-h-screen overflow-x-clip"
      >
        <HeroSection />
        <ProofSection />
        <SystemsSection />
        <TeachingSection />
        <StackSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  );
}
