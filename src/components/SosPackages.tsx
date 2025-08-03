import { AlertTriangle, Clock, Phone, Mail, Zap, Users, Target, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SosPackages = () => {
  return (
    <section id="sos" className="py-20 bg-background">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cormorant font-bold text-foreground mb-6">
            SOS – Wenn es brennt
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Kein Aufwand. Keine langen Verträge.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nur Lösungen, wenn sie am meisten gebraucht werden.
          </p>
        </div>

        {/* Die 4 Change Krisen */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-12">
            Die 4 Change-Krisen
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent-gold" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Change Krise</h4>
              <p className="text-muted-foreground text-sm">
                Transformation stockt, Widerstand wächst, Projekte scheitern
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-gold" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Kultur Konflikt</h4>
              <p className="text-muted-foreground text-sm">
                Kulturelle Missverständnisse blockieren den Fortschritt
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-accent-gold" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Leadership Notfall</h4>
              <p className="text-muted-foreground text-sm">
                Führungskrisen gefährden die gesamte Organisation
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-accent-gold" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Projekt Rettung</h4>
              <p className="text-muted-foreground text-sm">
                Kritische Projekte brauchen sofortige Intervention
              </p>
            </div>
          </div>
        </div>

        {/* Notfall? Wir sind da */}
        <div className="text-center mb-16 p-8 rounded-2xl bg-gradient-to-br from-accent-gold/10 via-primary/5 to-transparent border border-accent-gold/20">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Notfall? Wir sind da
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wenn andere aufgeben, fangen wir an. Sofortige Hilfe für akute Transformationskrisen – 
            ohne bürokratische Hürden, ohne lange Vorlaufzeiten.
          </p>
        </div>

        {/* So funktioniert SOS */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-12">
            So funktioniert SOS
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                1
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Sofort-Analyse</h4>
              <p className="text-muted-foreground">
                Binnen 24h analysieren unsere Senior-Experten Ihre Situation und erstellen einen Rettungsplan.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Blitz-Intervention</h4>
              <p className="text-muted-foreground">
                Gezielte Maßnahmen stoppen den Schaden und stabilisieren die Situation – ohne Umwege.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent-gold rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                3
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Nachhaltige Lösung</h4>
              <p className="text-muted-foreground">
                Wir entwickeln langfristige Strategien, damit sich die Krise nicht wiederholt.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-primary/10 via-accent-gold/5 to-transparent p-12 rounded-3xl border border-primary/20">
          <h3 className="text-3xl font-cormorant font-bold text-foreground mb-6">
            Jede Minute zählt
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            In kritischen Situationen entscheiden Stunden über Erfolg oder Scheitern. 
            Kontaktieren Sie uns noch heute.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              SOS Hotline: +49 (0) 123 456 789
            </Button>
            
            <Button 
              variant="outline"
              className="border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              <Mail className="h-5 w-5 mr-2" />
              sos@globridge.com
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            24/7 verfügbar • Antwort binnen 2 Stunden garantiert
          </p>
        </div>
      </div>
    </section>
  );
};

export default SosPackages;