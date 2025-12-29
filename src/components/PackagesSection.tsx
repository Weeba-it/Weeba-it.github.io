import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const packages = [
  {
    name: "Starter",
    price: "50",
    description: "Perfetto per chi inizia",
    features: [
      "Sito web responsive base",
      "Design moderno e personalizzato",
      "Form di contatto",
      "Hosting e manutenzione sito web e mail",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "100",
    description: "Per aziende in crescita",
    features: [
      "Sito web responsive avanzato",
      "Design premium personalizzato",
      "Ottimizzazione SEO",
      "Google Analytics",
      "Hosting e manutenzione sito web e mail",
      "Supporto h24",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "125",
    description: "Soluzione completa",
    features: [
      "Sito web responsive avanzato",
      "Design premium personalizzato",
      "Ottimizzazione SEO",
      "Google Analytics",
      "Hosting e manutenzione sito web e mail",
      "Supporto h24",
      "Gestione social media",
      "Grafiche personalizzate per eventi",
    ],
    popular: false,
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            I nostri pacchetti
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluzioni su misura per ogni esigenza. Scegli il pacchetto che fa per te.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative bg-background border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                pkg.popular ? "border-2 border-primary shadow-md" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 text-sm font-medium">
                    Più popolare
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">
                  {pkg.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {pkg.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">€{pkg.price}</span>
                  <span className="text-muted-foreground">/mese</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:bg-secondary"
                      : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Scegli {pkg.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
