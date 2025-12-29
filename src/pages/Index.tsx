import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PackagesSection from "@/components/PackagesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>WebCraft - Creazione Siti Web per PMI | Web Agency Professionale</title>
        <meta
          name="description"
          content="WebCraft crea siti web professionali per piccole e medie imprese. Design moderno, SEO ottimizzato e soluzioni su misura. Richiedi un preventivo gratuito."
        />
        <meta name="keywords" content="creazione siti web, web agency, siti web PMI, web design, SEO" />
      </Helmet>
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
    </>
  );
};

export default Index;
