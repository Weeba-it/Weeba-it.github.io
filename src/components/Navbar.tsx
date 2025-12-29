import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/weeba-logo.jpeg" alt="Weeba Logo" className="h-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pacchetti
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-secondary"
            >
              Contattaci
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Pacchetti
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Portfolio
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-secondary w-fit"
            >
              Contattaci
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
