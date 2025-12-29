import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Iniziamo insieme
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Hai un progetto in mente? Contattaci per una consulenza gratuita.
              Trasformeremo la tua visione in realtà.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Email</p>
                  <p className="text-primary-foreground font-medium">supporto@weeba.it</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground/60 text-sm">Telefono</p>
                  <p className="text-primary-foreground font-medium">Call John Pork</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Richiedi un preventivo
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Nome
                  </label>
                  <Input
                    type="text"
                    placeholder="Il tuo nome"
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="La tua email"
                    className="bg-card border-border"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Telefono
                </label>
                <Input
                  type="tel"
                  placeholder="Il tuo numero"
                  className="bg-card border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Messaggio
                </label>
                <Textarea
                  placeholder="Descrivi il tuo progetto..."
                  rows={4}
                  className="bg-card border-border resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-secondary"
              >
                Invia richiesta
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
