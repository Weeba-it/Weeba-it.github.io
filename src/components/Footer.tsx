const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-background flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">W</span>
              </div>
              <span className="font-semibold text-xl text-background">Weeba</span>
            </div>
            <p className="text-background/60 text-sm">
              Creiamo esperienze digitali che fanno crescere il tuo business.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Servizi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                  SEO
                </a>
              </li>
              <li>
                <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                  Manutenzione
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Azienda</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                  Chi siamo
                </a>
              </li>
              <li>
                <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Legale</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/60 hover:text-background text-sm transition-colors">
                  Termini e Condizioni
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <p className="text-center text-background/40 text-sm">
            © {new Date().getFullYear()} Weeba. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
