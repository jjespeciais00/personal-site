import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import HeroSection from "@/sections/HeroSection";
import ResultsSection from "@/sections/ResultsSection";
import ServicesSection from "@/sections/ServicesSection";
import MethodSection from "@/sections/MethodSection";
import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ResultsSection />
      <ServicesSection />
      <MethodSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
