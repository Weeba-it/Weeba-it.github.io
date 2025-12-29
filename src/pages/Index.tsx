import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Weeba - Creazione Siti Web per PMI | Web Agency Professionale";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Weeba crea siti web professionali per piccole e medie imprese. Design moderno, SEO ottimizzato e soluzioni su misura. Richiedi un preventivo gratuito.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Weeba crea siti web professionali per piccole e medie imprese. Design moderno, SEO ottimizzato e soluzioni su misura. Richiedi un preventivo gratuito.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <PackagesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
