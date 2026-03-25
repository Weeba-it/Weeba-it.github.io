import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {/* {
    title: "Sigma Gooners (Never Goon)",
    category: "Servizi di prostituzione online",
    description: "Non ho parole per commentarlo",
    image: "https://media.tenor.com/0FHhIn30HlEAAAAe/never-goon-bozonga.png",
    url: "https://sigmagooners.it"
  }, */}
  {
    title: "Centro scommesse quartiere san paolo",
    category: "Servizi Professionali",
    description: "Portale professionale con area clienti e gestione documenti.",
    image: "https://procasino.it/wp-content/uploads/2022/12/888casino-online.jpg",
  },
  {
    title: "FitLife Palestra",
    category: "Fitness & Wellness",
    description: "Sito dinamico con calendario corsi e  personal trainer online.",
    image: "https://www.salvatorepumo.it/wp-content/uploads/2023/10/logo-burger-king-oggi.jpg",
  },
  {
    title: 'Boutique "Vietato Rubare"',
    category: "E-commerce",
    description: "Negozio online completo con gestione inventario e pagamenti.",
    image: "https://www.barinedita.it/public/foto_news_upload/bari%20san%20paolo%20cep%20quartiere.jpg",
  },
{
  title: (
    <>
      Agenzia Immobiliare Casa{" "}
      <span style={{ textDecoration: "line-through" }}>Nuova </span>
      Nostra
    </>
    
  ),
  category: "Immobiliare",
  description: "Piattaforma immobiliare con ricerca avanzata e tour virtuali.",
  image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60",
},

 {
    title: "Clinica Veterinaria Amici",
    category: "Salute",
    description: "Sito con prenotazione appuntamenti e schede pazienti.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3nZXvc12Hi1d3X-_bhQ2ZIUhWAxErh7tlUw&s",
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
        {projects.map((project, index) => {
  const Wrapper = project.url ? "a" : "div";

  return (
    <Wrapper
      key={index}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Card
        className="group overflow-hidden bg-card border-border hover:shadow-lg transition-all duration-300"
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
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
    </Wrapper>
  );
})}

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
