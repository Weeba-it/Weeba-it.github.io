import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Ristorante La Terrazza",
    category: "Ristorazione",
    description: "Sito web elegante con menu digitale e sistema di prenotazioni online.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Studio Legale Rossi",
    category: "Servizi Professionali",
    description: "Portale professionale con area clienti e gestione documenti.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "FitLife Palestra",
    category: "Fitness & Wellness",
    description: "Sito dinamico con calendario corsi e iscrizione online.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Boutique Eleganza",
    category: "E-commerce",
    description: "Negozio online completo con gestione inventario e pagamenti.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Agenzia Immobiliare Casa Nuova",
    category: "Immobiliare",
    description: "Piattaforma immobiliare con ricerca avanzata e tour virtuali.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Clinica Veterinaria Amici",
    category: "Salute",
    description: "Sito con prenotazione appuntamenti e schede pazienti.",
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&auto=format&fit=crop&q=60",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Il nostro Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Alcuni dei progetti che abbiamo realizzato per i nostri clienti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-background flex items-center justify-center">
                    <ExternalLink className="h-6 w-6 text-foreground" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
