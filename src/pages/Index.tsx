
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrustSection from "@/components/TrustSection";
import PricingSection from "@/components/PricingSection";
import DownloadSection from "@/components/DownloadSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <TrustSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="download">
        <DownloadSection />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
