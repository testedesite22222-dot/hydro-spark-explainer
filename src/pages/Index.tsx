import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import ComponentsSection from "@/components/ComponentsSection";
import ConversionSection from "@/components/ConversionSection";
import TransmissionSection from "@/components/TransmissionSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import InteractiveDiagrams from "@/components/InteractiveDiagrams";
import ConclusionSection from "@/components/ConclusionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <IntroductionSection />
        <ComponentsSection />
        <ConversionSection />
        <TransmissionSection />
        <AdvantagesSection />
        <InteractiveDiagrams />
        <ConclusionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
